# Welcome to your CDK TypeScript project

This is a simple AWS S3 project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

1. Init cdk
```
cdk init --language=typescript
```
2. Make a starter environment for our CDK project.
```
cdk bootstrap
```
3. Compile
```
cdk synthesize [StackName]
```
4. Deploy
```
cdk deploy [StackName] --parameters duration=9
```
5. Destroy
```
cdk destroy [StackName]
```
6. Others
```
cdk list
cdk doctor
```