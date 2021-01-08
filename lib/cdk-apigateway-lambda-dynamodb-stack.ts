/* 
import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
*/
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkApigatewayLambdaDynamodbStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // API ROOT NAME
    const API_ROOT = 'hello';

    // provision Dynamodb table https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
    const table = new dynamodb.Table(this, "MyDDB", {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    });

    // provision Lambda resource https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html
    const ddbLambda = new lambda.Function(this, 'DynamodbLambdaHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      /* code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')), */
      code: lambda.Code.fromAsset('lambda-handler'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
      },
    });

    // update policy to allow lambda to access dynamo
    table.grantReadWriteData(ddbLambda);

    // provision API Gateway
    const api = new apigw.RestApi(this, 'my-api');

    // add the root
    api.root.resourceForPath(API_ROOT).addMethod('GET', new apigw.LambdaIntegration(ddbLambda));

    // output
    new cdk.CfnOutput(this, 'API URL:', {
      value: api.url + API_ROOT ?? 'uh oh spaghettios',
    })

    /*
    const queue = new sqs.Queue(this, 'CdkApigatewayLambdaDynamodbQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'CdkApigatewayLambdaDynamodbTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
    */
  }
}
