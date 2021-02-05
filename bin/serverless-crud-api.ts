#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ServerlessCrudApiStack } from '../lib/serverless-crud-api-stack';

// new cdk application initialized from cdk.json:app
const app = new cdk.App();

// new stack in cdk application
new ServerlessCrudApiStack(app, 'ServerlessCrudApiStack');
