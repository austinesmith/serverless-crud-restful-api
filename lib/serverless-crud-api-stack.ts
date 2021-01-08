import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigw from '@aws-cdk/aws-apigateway';

export class ServerlessCrudApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DYNAMODB 
      // provision Dynamodb table https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
    const table = new dynamodb.Table(this, "MyDDB", {
      partitionKey: { 
        name: 'id', 
        type: dynamodb.AttributeType.STRING
      },
      tableName: 'items',
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // LAMBDA
      // create: POST <URL>/items
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

    // PERMISSIONS
      // update IAM roles/policys
    table.grantReadData(readAllLambda);
    table.grantReadWriteData(createLambda);
    table.grantReadWriteData(readLambda);
    table.grantReadWriteData(updateLambda);
    table.grantReadWriteData(deleteLambda);

    // API GATEWAY
      // provision API Gateway
    const api = new apigw.RestApi(this, 'crud-api', {
      restApiName: 'CRUD API'
    });
      // add resources to API Gateway
    const multipleItems = api.root.addResource('items');
    const singleItem = multipleItems.addResource('{id}');
      // add methods to API Gateway
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
  };
}
