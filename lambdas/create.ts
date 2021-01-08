const uuidv4 = require('uuid/v4');
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const TABLE_NAME = process.env.TABLE_NAME || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* CREATE */
export const handler = async (event: any = {}) => {
    const item = typeof event.body == 'object' ? event.body : JSON.parse(event.body);
    item[PRIMARY_KEY] = uuidv4();
    const parameters = {
        TableName: TABLE_NAME,
        Item: item
    };
    try {
        await db.put(parameters);
        return { statusCode: 201, body: 'success: item added' };
    } catch (dbError) {
        return { statusCode: 500, body: JSON.stringify(dbError) };
    }
}

