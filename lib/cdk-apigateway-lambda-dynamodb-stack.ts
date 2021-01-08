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
      partitionKey: { 
        name: 'id', 
        type: dynamodb.AttributeType.STRING
      },
      tableName: 'items',
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // provision Lambda resource https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html
    /*
      const ddbLambda = new lambda.Function(this, 'DynamodbLambdaHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')), 
      code: lambda.Code.fromAsset('lambda-handler'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
      },
    });
    */

    // create
    const createLambda = new lambda.Function(this, 'createItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'create.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });

    // read
    const readLambda = new lambda.Function(this, 'readItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });

    // update
    const updateLambda = new lambda.Function(this, 'updateItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });

    // delete
    const deleteLambda = new lambda.Function(this, 'deleteItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });

    // read all
    const readAllLambda = new lambda.Function(this, 'readAllItems', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'function.handler',
      environment: {
        MYDDB_TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });

    // update permission policys
    table.grantReadData(readAllLambda);
    table.grantReadWriteData(createLambda);
    table.grantReadWriteData(readLambda);
    table.grantReadWriteData(updateLambda);
    table.grantReadWriteData(deleteLambda);

    // provision API Gateway
    const api = new apigw.RestApi(this, 'crud-api', {
      restApiName: 'CRUD API'
    });

    // add the roots to CRUD API
    /* api.root.resourceForPath(API_ROOT).addMethod('GET', new apigw.LambdaIntegration(ddbLambda)); */
    // create resource
    const multipleItems = api.root.addResource('items');
    const singleItem = multipleItems.addResource('{id}');
      // C
    const createLambdaIntegration = new apigw.LambdaIntegration(createLambda);
    multipleItems.addMethod('POST', createLambdaIntegration);
      // R
    const readLambdaIntegration = new apigw.LambdaIntegration(readLambda);
    singleItem.addMethod('GET', readLambdaIntegration);
      // U
    const updateLambdaIntegration = new apigw.LambdaIntegration(updateLambda);
    singleItem.addMethod('PATCH', updateLambdaIntegration);
      // D
    const deleteLambdaIntegration = new apigw.LambdaIntegration(deleteLambda);
    singleItem.addMethod('DELETE', deleteLambdaIntegration);

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
