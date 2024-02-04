import { Duration, Stack, StackProps, aws_s3 as s3 } from "aws-cdk-lib";
import { Construct } from "constructs";

export class IacStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, "MyFirstTestBucket-CDK");
  }
}
