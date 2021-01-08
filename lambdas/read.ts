const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ */
export const handler = async (event: any = {}) => {
    const requestItemId = event.pathParameters.id;
    if (!requestItemId) {
        return { statusCode: 400, body: 'error: missing item id' };
    }
    const parameters = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: requestItemId
        }
    };
    try {
        return { statusCode: 200, body: JSON.stringify(await db.get(parameters).Item) };
    } catch (dbError) {
        return { statusCode: 500, body: JSON.stringify(dbError) };
    }
}