const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const {"v4": uuidv4} = require('uuid');
const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';

const RESERVED_RESPONSE = `Error: AWS reserved keywords`;
const DYNAMODB_EXECUTION_ERROR = `Error: Execution error of dynamodb`;

export const handler = async (event: any = {}) : Promise <any> => {

  if (!event.body) {
    return { statusCode: 400, body: 'invalid request, missing parameter body' };
  }

  const item = typeof event.body == 'object' ? event.body : JSON.parse(event.body);

  item[PRIMARY_KEY] = uuidv4();
  const parameters = {
    TableName: TABLE_NAME,
    Item: item
  };

  try {

    // 201
    await db.put(parameters).promise();
    return { statusCode: 201, body: "request was successful and as a result, a resource has been created" };

  } catch ( dbError ) {

    const errorResponse = dbError.code === 'ValidationException' && dbError.message.includes('reserved keyword') ?
    DYNAMODB_EXECUTION_ERROR : RESERVED_RESPONSE;
    return { statusCode: 500, body: errorResponse };
    
  }
};