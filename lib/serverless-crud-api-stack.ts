import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigw from '@aws-cdk/aws-apigateway';

export class ServerlessCrudApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DYNAMODB 
      // provision Dynamodb table
    const table = new dynamodb.Table(this, "MyDDB", {
      partitionKey: { 
        name: 'id', 
        type: dynamodb.AttributeType.STRING
      },
      tableName: 'items',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // LAMBDA
      // Create: POST <URL>/items
    const createLambda = new lambda.Function(this, 'createItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'create.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Read
    const readLambda = new lambda.Function(this, 'readItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'read.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Update
    const updateLambda = new lambda.Function(this, 'updateItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'update.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Delete
    const deleteLambda = new lambda.Function(this, 'deleteItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'delete.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Read All: 
    const readAllLambda = new lambda.Function(this, 'readAllItems', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'read-all.handler',
      environment: {
        TABLE_NAME: table.tableName
      },
    });

    // PERMISSIONS
      // update IAM roles/policys
    table.grantWriteData(createLambda);
    table.grantReadData(readLambda);
    table.grantWriteData(updateLambda);
    table.grantWriteData(deleteLambda);
    table.grantReadData(readAllLambda);

    // API GATEWAY
      // provision API Gateway
    const api = new apigw.RestApi(this, 'crud-api', {
      restApiName: 'CRUD API'
    });
      // add resources to API Gateway
    const everyItem = api.root.addResource('items');
    const oneItem = everyItem.addResource('{id}');
      // add methods to API Gateway
        // C
    const createLambdaIntegration = new apigw.LambdaIntegration(createLambda);
    everyItem.addMethod('POST', createLambdaIntegration);
        // R
    const readLambdaIntegration = new apigw.LambdaIntegration(readLambda);
    oneItem.addMethod('GET', readLambdaIntegration);
        // U
    const updateLambdaIntegration = new apigw.LambdaIntegration(updateLambda);
    oneItem.addMethod('PATCH', updateLambdaIntegration);
        // D
    const deleteLambdaIntegration = new apigw.LambdaIntegration(deleteLambda);
    oneItem.addMethod('DELETE', deleteLambdaIntegration);
        // read all
    const readAllLambdaIntegration = new apigw.LambdaIntegration(readAllLambda);
    everyItem.addMethod('Get', readAllLambdaIntegration);
  };
}
