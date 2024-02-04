# aws-ml

aws machine learninng project using aws sagemaker

## IAC

- `cdk init sample-app --language=typescript` - This creates the basic cdk infrastructure. One time setup
- `cdk bootstrap` - One time setup to create S3 bucket to store cloud formation templates
- `npm run watch` - Watch for changes and compile
- `iac-stack.ts` file has all the infra definitions
- `cdk diff` - shows what is being planned to change (optional but recommended)
- `cdk synth` - generates cloud formation template (optional)
- `cdk deploy` - deploys the changes to AWS account using cloud formation template that gets generated in the background
