const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const {"v4": uuidv4} = require('uuid');
const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';

/* CREATE */
export const handler = async (event: any = {}) : Promise <any> => {

  // check for event request body
  if (!event.body) {
    return { statusCode: 400, body: 'invalid request, missing parameter body' };
  }

  // create object from event request body
  const item = typeof event.body == 'object' ? event.body : JSON.parse(event.body);

  // assign universally unique identifier to object
  item[PRIMARY_KEY] = uuidv4();

  // create expression with object
  const parameters = {
    TableName: TABLE_NAME,
    Item: item
  };

  // add new item to dynamodb table
  try {
    await db.put(parameters).promise();
    return { statusCode: 204, body: '' };
  } catch ( dbError ) {
    return { statusCode: 500, body: JSON.stringify(dbError) };
  }
};