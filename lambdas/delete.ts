const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ */
export const handler = async (event: any = {}) => {
    const deleteItemId = event.pathParameters.id;
    if (!deleteItemId) {
        return { statusCode: 400, body: 'error: missing parameter id' };
    }
    const parameters = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: deleteItemId
        }
    };
    try {
        return { statusCode: 200, body: JSON.stringify(await db.delete(parameters).Item) };
    } catch (dbError) {
        return { statusCode: 500, body: JSON.stringify(dbError) };
    }
}