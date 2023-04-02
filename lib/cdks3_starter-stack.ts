import * as cdk from 'aws-cdk-lib';
import { CfnOutput, CfnParameter, Duration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Cdks3StarterStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
        // Create a L1 s3 bucket
        new CfnBucket(this, 'MyL1Bucket', {
            lifecycleConfiguration: {
                rules: [{
                    expirationInDays: 1,
                    status: 'Enabled'
                }]
            }
        })

        // Create a L2 S3 bucket
        const duration = new CfnParameter(this, 'duration', {
            default: 6,
            minValue: 1,
            maxValue: 10,
            type: 'Number'
        });

        const myL2Bucket = new Bucket(this, 'MyL2Bucket', {
            lifecycleRules: [{
                expiration: Duration.days(duration.valueAsNumber)
            }]
        })
        new CfnOutput(this, 'MyL2BucketName', {
            value: myL2Bucket.bucketName
        })

        // Create a L3 Bucket
        new L3Bucket(this, 'MyL3Bucket', 3);
    }
}

class L3Bucket extends Construct {
    constructor(scope: Construct, id: string, expiration: number) {
        super(scope, id);

        new Bucket(this, 'MyL3Bucket', {
            lifecycleRules: [{
                expiration: Duration.days(expiration)
            }]
        });
    }
}
