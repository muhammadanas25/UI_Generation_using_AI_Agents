from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import List
from ai.agents.section_generator.agent import SectionGeneratorAgent
from ai.agents.section_generator.output import Section
from ai.agents.structure_generator.output import Header, Section, Footer, Structure
from ai.memory.blackboard.Blackboard import BlackBoard
from ai.agents.footer_generator.agent import FooterGeneratorAgent
from ai.agents.footer_generator.output import Footer
from ai.agents.header_generator.agent import HeaderGeneratorAgent
from ai.agents.header_generator.output import Header
from ai.agents.page_generator.agent import PageGeneratorAgent
from ai.agents.page_generator.output import PageGeneratorOutput
from ai.agents.page_criticizer.agent import PageCriticizerAgent
from ai.agents.page_criticizer.output import PageCriticizerOutput


def compose_page(structure: Structure, user_data, blackboard: BlackBoard):

    # Generate Header if exists
    if structure.header:
        generate_header(structure.header, user_data, blackboard)

    # Generate content sections
    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(generate_section, section, user_data, blackboard) for section in structure.content]
        for future in as_completed(futures):
            future.result()


    # Generate Footer if exists
    if structure.footer:
        generate_footer(structure.footer, user_data, blackboard)

    # Now that all sections in the page have been generated, generate the page
    generate_page(user_data, blackboard)
    criticize_page(user_data, blackboard)


def generate_page(user_data, blackboard: BlackBoard):

    page_code: PageGeneratorOutput = PageGeneratorAgent(
        "", {}, user_data, blackboard
        ).run()
    blackboard.set_page(page_code.tsx)


def criticize_page(user_data, blackboard: BlackBoard):

    page_code: PageCriticizerOutput = PageCriticizerAgent(
        "", {}, user_data, blackboard
        ).run()
    blackboard.set_page(page_code.tsx)


def generate_header(header: Header, user_data, blackboard: BlackBoard):
    header_code: Header = HeaderGeneratorAgent(
        header.description, {"header": header.model_dump()}, user_data, blackboard
        ).run()
    # TODO: Find a better way to update the header
    updated_header = header.model_copy(update={"tsx": header_code.tsx})
    blackboard.update_header(updated_header)

    

def generate_section(section: Section, user_data, blackboard: BlackBoard):

    section_code: Section = SectionGeneratorAgent(
        section.description, {"section": section.model_dump()}, user_data, blackboard
        ).run()
    # TODO: Find a better way to update the section
    updated_section = section.model_copy(update={"tsx": section_code.tsx})
    blackboard.update_section(updated_section)


def generate_footer(footer: Footer, user_data, blackboard: BlackBoard):
    footer_code: Footer = FooterGeneratorAgent(
        footer.description, {"footer": footer.model_dump()}, user_data, blackboard
        ).run()
    # TODO: Find a better way to update the footer
    updated_footer = footer.model_copy(update={"tsx": footer_code.tsx})
    blackboard.update_footer(updated_footer)
