from shared import config as shared_config
PROJECTS_TABLE_NAME = 'Tars-Explorer-Projects'
VARIANTS_TABLE_NAME = 'Tars-Explorer-Variants'
REGION_NAME = shared_config.REGION_NAME  # Replace with your AWS region
BACKEND_URL = 'https://staging-generatorapi.akira.io/'
GENERATE_VARIANT_LAMBDA = 'akira-generate-variant'
UPDATE_VARIANT_LAMBDA =  'akira-update-variant'
