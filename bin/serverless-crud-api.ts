#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ServerlessCrudApiStack } from '../lib/serverless-crud-api-stack';

const app = new cdk.App();
new ServerlessCrudApiStack(app, 'ServerlessCrudApiStack');
