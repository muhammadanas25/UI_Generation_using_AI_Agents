from ai.agents.structure_generator.output import section, Page, Structure
from ai.agents.theme_generator.output import Theme



test = Structure(Structure=[
    Page(
        name='Home', 
        layout='default', 
        description='Home page', 
        sections=[
            section(name='Header', description='Header section'), 
            section(name='Footer', description='Footer section')
        ]
    ), 
    Page(
        name='About', 
        layout='default', 
        description='About page', 
        sections=[
            section(name='Header', description='Header section'), 
            section(name='Footer', description='Footer section')
        ]
    )
])
ans = test.model_dump()
sample = {"structure":[{"name":"Home","layout":"default","description":"Home page","sections":[{"name":"Header","description":"Header section"},{"name":"Footer","description":"Footer section"}]},{"name":"About","layout":"default","description":"About page","sections":[{"name":"Header","description":"Header section"},{"name":"Footer","description":"Footer section"}]}]}
test2 = Structure(**sample)
print(test2.model_dump())


# test = Theme(theme="""
#         /* Define Color Scheme */
#         @layer components {
#             .bg-primary {
#                 background-color: #2b6cb0; /* Primary color */
#             }

#             .bg-secondary {
#                 background-color: #4a5568; /* Secondary color */
#             }

#             .bg-accent {
#                 background-color: #fbd38d; /* Accent color */
#             }

#             .text-primary {
#                 color: #2b6cb0; /* Primary color */
#             }

#             .text-secondary {
#                 color: #4a5568; /* Secondary color */
#             }

#             .text-accent {
#                 color: #fbd38d; /* Accent color */
#             }
#         }
        
#         /* Define Typography */
#         @layer utilities {
#             .font-sans {
#                 font-family: 'Roboto', sans-serif; /* Primary font */
#             }

#             .font-serif {
#                 font-family: 'Merriweather', serif; /* Secondary font */
#             }

#             .text-lg {
#                 font-size: 1.125rem; /* Large font size */
#             }

#             .text-xl {
#                 font-size: 1.25rem; /* Extra large font size */
#             }

#             .leading-relaxed {
#                 line-height: 1.625; /* Relaxed line height */
#             }

#             .font-semibold {
#                 font-weight: 600; /* Semi-bold font weight */
#             }
#         }
        
#         /* Define Spacing */
#         @layer utilities {
#             .my-8 {
#                 margin-top: 2rem;
#                 margin-bottom: 2rem;
#             }

#             .px-4 {
#                 padding-left: 1rem;
#                 padding-right: 1rem;
#             }

#             .space-y-4 > :not([hidden]) ~ :not([hidden]) {
#                 --tw-space-y-reverse: 0;
#                 margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
#                 margin-bottom: calc(1rem * var(--tw-space-y-reverse));
#             }
#         }
        
#         /* Define Animations */
#         @layer utilities {
#             .transition-all {
#                 transition-property: all;
#                 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
#                 transition-duration: 150ms;
#             }

#             .transform-gpu {
#                 will-change: transform;
#             }

#             .hover:scale-105:hover {
#                 transform: scale(1.05);
#             }
#         }
        
#         /* Define Interactions */
#         @layer utilities {
#             .hover:text-primary:hover {
#                 color: #2b6cb0; /* Change text color on hover to primary color */
#             }

#             .hover:bg-accent:hover {
#                 background-color: #fbd38d; /* Change background color on hover to accent color */
#             }
#         }
        
#         /* Define Responsive Design */
#         @layer components {
#             @screen sm {
#                 .container {
#                     max-width: 640px; /* Small screen container width */
#                 }
#             }

#             @screen md {
#                 .container {
#                     max-width: 768px; /* Medium screen container width */
#                 }
#             }

#             @screen lg {
#                 .container {
#                     max-width: 1024px; /* Large screen container width */
#                 }
#             }
#         }
#     """)


test = {
    "theme": """hahahahah"""
}