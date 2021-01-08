#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkApigatewayLambdaDynamodbStack } from '../lib/cdk-apigateway-lambda-dynamodb-stack';

const app = new cdk.App();
new CdkApigatewayLambdaDynamodbStack(app, 'CdkApigatewayLambdaDynamodbStack');
