from ai.agents.ui_enhancer.agent import UIEnhancerAgent
from ai.agents.ui_updater.agent import UIUpdaterAgent
from ai.agents.title_generator.agent import TitleGeneratorAgent
from dotenv import load_dotenv
from ai.agents.intent_classifier.agent import IntentClassifierAgent
load_dotenv()


# test_prompts = [
#     "Build me a personal blogging website that shows my portfolio"
#     "Develop an eCommerece store that sells shoes",
#     "Create me a website to sell t-shirts",
#     "Develop a website for a restaurant that allows customers to order food online",
#     "Build me a website for a gym that allows customers to book appointments with trainers",
#     "Develop a website for a real estate agency that allows customers to search for properties",
#     "Create me a website for a travel agency that allows customers to book flights and hotels",
# ]


# for prompt in test_prompts:
#     agent = TitleGeneratorAgent(prompt,{}, {'user_id':'user-1', 'project_id': 'proj-11', 'session_id': 'session-111'})
#     output = agent.run()
#     print(output)





test_prompts = [
    "Build me a personal blogging website that shows my portfolio",
    "Great job on the website! I want to add a new feature to it",
    "Nice work",
    "Goto previous version",
    "Develop an eCommerece store that sells shoes",
    "Create me a website to sell t-shirts",
    "What is the current version of the code?",
    "When was the last time the code was updated?",
    "What is the capital of France?",
    "I love the website",
    "Nice work",
    "I hate this website",
    "Develop a website for a restaurant that allows customers to order food online",
    "Build me a website for a gym that allows customers to book appointments with trainers",
    "Develop a website for a real estate agency that allows customers to search for properties",
    "Create me a website for a travel agency that allows customers to book flights and hotels",
]


for prompt in test_prompts:
    agent = IntentClassifierAgent(prompt,{}, {'user_id':'user-1', 'project_id': 'proj-11', 'session_id': 'session-111'})
    output = agent.run()
    print(f"{prompt}: {output}")


# current_code = """
# import Link from "next/link"
# import { Button } from "@/components/ui/button"

# export default function Component() {
#   return (
#     <div className="flex flex-col min-h-[100dvh]">
#       <header className="px-4 lg:px-6 h-14 flex items-center">
#         <Link href="#" className="flex items-center justify-center" prefetch={false}>
#           <MountainIcon className="h-6 w-6" />
#           <span className="sr-only">Acme Layer 2</span>
#         </Link>
#         <nav className="ml-auto flex gap-4 sm:gap-6">
#           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
#             Features
#           </Link>
#           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
#             Docs
#           </Link>
#           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
#             Wallet
#           </Link>
#           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
#             Explore
#           </Link>
#         </nav>
#       </header>
#       <main className="flex-1">
#         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
#           <div className="container px-4 md:px-6">
#             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
#               <div className="flex flex-col justify-center space-y-4">
#                 <div className="space-y-2">
#                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
#                     Acme Layer 2: The Fastest and Most Interoperable Blockchain
#                   </h1>
#                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
#                     Acme Layer 2 is a cutting-edge Ethereum-compatible blockchain that delivers lightning-fast
#                     transactions and seamless interoperability. Experience the future of decentralized applications
#                     with unparalleled speed and scalability.
#                   </p>
#                 </div>
#                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
#                   <Link
#                     href="#"
#                     className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
#                     prefetch={false}
#                   >
#                     Get Started
#                   </Link>
#                   <Link
#                     href="#"
#                     className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
#                     prefetch={false}
#                   >
#                     Learn More
#                   </Link>
#                 </div>
#               </div>
#               <img
#                 src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-028bd1i8Cj0fxVLEml9R7llc.png?st=2024-09-29T11%3A02%3A09Z&se=2024-09-29T13%3A02%3A09Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T00%3A35%3A29Z&ske=2024-09-30T00%3A35%3A29Z&sks=b&skv=2024-08-04&sig=KWfxXPncBz0jE8EO35A5zqme5tLKJ44/bWtwrv5YO84%3D"
#                 width="550"
#                 height="550"
#                 alt="A visually striking hero image representing a blockchain concept, showcasing abstract lines and shapes that suggest speed and connectivity, with a modern and digital aesthetic."
#                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
#                id="0b5f0cf1-8fca-4edd-a3cf-3808eb3d3078"/>
#             </div>
#           </div>
#         </section>
#         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
#           <div className="container px-4 md:px-6">
#             <div className="flex flex-col items-center justify-center space-y-4 text-center">
#               <div className="space-y-2">
#                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
#                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
#                   Lightning-Fast Transactions & Seamless Interoperability
#                 </h2>
#                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
#                   Acme Layer 2 is designed for the next generation of decentralized applications, with cutting-edge
#                   technology that delivers unparalleled speed and scalability. Our platform is fully compatible with
#                   Ethereum, enabling seamless integration with the broader blockchain ecosystem.
#                 </p>
#               </div>
#             </div>
#             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
#               <img
#                 src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-zGxwwQyzDvQbn29tAZXnTttr.png?st=2024-09-29T11%3A02%3A29Z&se=2024-09-29T13%3A02%3A29Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T01%3A10%3A34Z&ske=2024-09-30T01%3A10%3A34Z&sks=b&skv=2024-08-04&sig=PTP4wt%2Bj3x6h9KrHHJo09LX5FDmMG5H6QDqz%2BGFMdM8%3D"
#                 width="550"
#                 height="310"
#                 alt="A feature image illustrating blazing-fast transaction speeds, with dynamic lines and motion effects emphasizing speed and efficiency in a digital landscape."
#                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
#                id="b6bc2344-a36b-4178-b20b-1bbee79a6247"/>
#               <div className="flex flex-col justify-center space-y-4">
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">Blazing-Fast Transactions</h3>
#                   <p className="text-muted-foreground">
#                     Acme Layer 2 leverages advanced scaling solutions to deliver lightning-fast transaction speeds,
#                     ensuring a seamless user experience for your decentralized applications.
#                   </p>
#                 </div>
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">Seamless Interoperability</h3>
#                   <p className="text-muted-foreground">
#                     Our platform is fully compatible with Ethereum, enabling seamless integration with the broader
#                     blockchain ecosystem. Connect your dApps and assets with ease.
#                   </p>
#                 </div>
#               </div>
#             </div>
#           </div>
#         </section>
#         <section className="w-full py-12 md:py-24 lg:py-32">
#           <div className="container px-4 md:px-6">
#             <div className="flex flex-col items-center justify-center space-y-4 text-center">
#               <div className="space-y-2">
#                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
#                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable and Transparent Fees</h2>
#                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
#                   Acme Layer 2 offers a simple and transparent pricing model, ensuring that you can scale your
#                   decentralized applications without breaking the bank. Enjoy competitive fees and predictable costs
#                   as you grow your business on our platform.
#                 </p>
#               </div>
#             </div>
#             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
#               <img
#                 src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-f8noC5ZJ2mmmZ3rx4ejf7V9c.png?st=2024-09-29T11%3A02%3A47Z&se=2024-09-29T13%3A02%3A47Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T08%3A57%3A26Z&ske=2024-09-30T08%3A57%3A26Z&sks=b&skv=2024-08-04&sig=X2wzFvhIT236XDWeNCmhspJYXsCNuXkB1JGaKoMJkH8%3D"
#                 width="550"
#                 height="310"
#                 alt="An image depicting affordable pricing, represented through graphical elements like coins or currency symbols, combined with a clean and transparent design aesthetic."
#                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
#                id="612b35c0-2b26-44b1-a141-376441184542"/>
#               <div className="flex flex-col justify-center space-y-4">
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">Transaction Fees</h3>
#                   <p className="text-muted-foreground">
#                     Enjoy competitive transaction fees that scale with your usage. Our pricing model ensures that you
#                     can grow your dApps without worrying about exorbitant costs.
#                   </p>
#                 </div>
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">Storage Fees</h3>
#                   <p className="text-muted-foreground">
#                     Pay only for the storage you need, with transparent pricing that makes it easy to predict your
#                     costs. Scale your dApps with confidence, knowing that our storage fees won't break the bank.
#                   </p>
#                 </div>
#               </div>
#             </div>
#           </div>
#         </section>
#         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
#           <div className="container px-4 md:px-6">
#             <div className="flex flex-col items-center justify-center space-y-4 text-center">
#               <div className="space-y-2">
#                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
#                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
#                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
#                   Hear from the developers and businesses that have built on Acme Layer 2. Discover how our platform
#                   has transformed their decentralized applications and fueled their growth.
#                 </p>
#               </div>
#             </div>
#             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
#               <img
#                 src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-F5GX4Ze49y5DJhHiDRSCaoAS/user-wqcRcXSVClGRwPJLS7CUAQZd/img-ak67twpVdw0fA3EKo10ckMEn.png?st=2024-09-29T11%3A03%3A19Z&se=2024-09-29T13%3A03%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-29T00%3A57%3A22Z&ske=2024-09-30T00%3A57%3A22Z&sks=b&skv=2024-08-04&sig=RJEeby86zFQBA/SxDzQ80BG7Ys9EUKws7kEBd4db6bw%3D"
#                 width="550"
#                 height="310"
#                 alt="A testimonial image featuring positive feedback on Acme Layer 2, illustrated with quotes and user-centered design elements showcasing satisfaction and success."
#                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
#                id="47ebbc76-1728-43d7-8b32-5145699a3f0d"/>
#               <div className="flex flex-col justify-center space-y-4">
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">John Doe, CEO of Acme Inc.</h3>
#                   <p className="text-muted-foreground">
#                     "Acme Layer 2 has been a game-changer for our decentralized application. The lightning-fast
#                     transaction speeds and seamless interoperability have allowed us to scale our business without
#                     worrying about fees or performance. We're excited to continue growing on this incredible platform."
#                   </p>
#                 </div>
#                 <div className="grid gap-1">
#                   <h3 className="text-2xl font-bold">Jane Smith, Lead Developer at Decentralized App</h3>
#                   <p className="text-muted-foreground">
#                     "As a developer, I've been thoroughly impressed with the ease of integrating our dApp with Acme
#                     Layer 2. The documentation and support have been top-notch, and the platform's performance has
#                     exceeded our expectations. I highly recommend Acme Layer 2 to any blockchain developer."
#                   </p>
#                 </div>
#               </div>
#             </div>
#           </div>
#         </section>
#       </main>
#       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
#         <p className="text-xs text-muted-foreground">&copy; 2024 Acme Layer 2. All rights reserved.</p>
#         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
#           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
#             Terms of Service
#           </Link>
#           <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
#             Privacy Policy
#           </Link>
#         </nav>
#       </footer>
#     </div>
#   )
# }

# function MountainIcon(props) {
#   return (
#     <svg
#       {...props}
#       xmlns="http://www.w3.org/2000/svg"
#       width="24"
#       height="24"
#       viewBox="0 0 24 24"
#       fill="none"
#       stroke="currentColor"
#       strokeWidth="2"
#       strokeLinecap="round"
#       strokeLinejoin="round"
#     >
#       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
#     </svg>
#   )
# }
# """

# user_query = "Add another column at the end of the page before footer must give the prices we charge for our services and should also have an image inside of it representing a digital currency. Also make sure to get rid of all the images in the code apart from the image you are gonna generate just right now"
# updated_code = UIUpdaterAgent(user_query, current_code, {'user_id':'user-1', 'project_id': 'proj-11', 'session_id': 'session-111'}).run()

# print("\nCode Updated Successfuly", updated_code)
# agent = UIEnhancerAgent()


# output = agent.enhance_ui(query)
# print(output)


# query = "Build me a website for an IT services company."

# agent = ThemeGeneratorAgent(
#         query,
#         {},
#         {
#         'user_id':"user-1",
#         'project_id':"proj-11",
#         'session_id':"session-111",
#         }, blackboard)


# output = agent.run()
# print(output.theme)

# with open("theme.css", 'w') as file:
#         file.write(output.theme)