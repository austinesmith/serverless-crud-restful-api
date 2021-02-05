import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as r53 from '@aws-cdk/aws-route53';
import * as acm from '@aws-cdk/aws-certificatemanager';

// account specific variables
const CUSTOM_DOMAIN_NAME = 'crud.austinesmith.com';
const PROD_HOSTED_ZONE_ID = 'Z0782095OAXYIN3YIA1L';
const ZONE_NAME = 'austinesmith.com';
const ACM_CERTIFICATE_ARN = 'arn:aws:acm:us-east-1:055016422806:certificate/4ad6cc2d-2ae0-455a-8780-0898ab441528';

export class ServerlessCrudApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /* * * * * * * * *
    / D Y N A M O D B
    * * * * * * * * */

      // provision Dynamodb table
    const table = new dynamodb.Table(this, "MyDDB", {
      partitionKey: { 
        name: 'id', 
        type: dynamodb.AttributeType.STRING
      },
      tableName: 'items',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });


    /* * * * * * * 
    / L A M B D A 
    * * * * * * */

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
      // Read: GET <URL>/items/{id}
    const readLambda = new lambda.Function(this, 'readItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'read.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Update: PATCH <URL>/items/{id}
    const updateLambda = new lambda.Function(this, 'updateItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'update.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Delete: DELETE <URL>/items/{id}
    const deleteLambda = new lambda.Function(this, 'deleteItem', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'delete.handler',
      environment: {
        TABLE_NAME: table.tableName,
        PRIMARY_KEY: 'id'
      },
    });
      // Read All: GET <URL>/items
    const readAllLambda = new lambda.Function(this, 'readAllItems', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambdas'),
      handler: 'read-all.handler',
      environment: {
        TABLE_NAME: table.tableName
      },
    });
      // roles for lambda to access dynamodb table
    table.grantReadWriteData(createLambda);
    table.grantReadWriteData(readLambda);
    table.grantReadWriteData(updateLambda);
    table.grantReadWriteData(deleteLambda);
    table.grantReadWriteData(readAllLambda);

    
    /* * * * * * * * * * * *
    / A P I   G A T E W A Y
    * * * * * * * * * * * */
   
      // provision API Gateway
    const api = new apigw.RestApi(this, 'crud-api', {
      restApiName: 'CRUD API',
      description: 'RESTful CRUD API',
      deployOptions: {
        // add throttling limits for security
        stageName: 'dev',
        throttlingRateLimit: 10,
        throttlingBurstLimit: 2,
      }
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
    everyItem.addMethod('GET', readAllLambdaIntegration);

    
    /* * * * * * * *
    / R O U T E 5 3
    * * * * * * * */
   
      // custom domain for api
    const customDomain = new apigw.DomainName(this, 'customDomain', {
      domainName: CUSTOM_DOMAIN_NAME,
      certificate: acm.Certificate.fromCertificateArn(this, 'ACM_Certificate', ACM_CERTIFICATE_ARN),
      endpointType: apigw.EndpointType.EDGE
    });
      // map api to custom domain created above
    new apigw.BasePathMapping(this, 'CustomBasePathMapping', {
      domainName: customDomain,
      restApi: api
    });
      // Get reference to existed hosted zone
    const hostedZone = r53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: PROD_HOSTED_ZONE_ID,
      zoneName: ZONE_NAME
    });
      // add CName record in the hosted zone with value of new custom domain created above
    new r53.CnameRecord(this, 'ApiGatewayRecordSet', {
      zone: hostedZone,
      recordName: 'api',
      domainName: customDomain.domainNameAliasDomainName
    });
  };
}
