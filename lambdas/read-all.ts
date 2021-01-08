const TABLE_NAME = process.env.TABLE_NAME || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ ALL */
export const handler = async () => {
    const parameters = {
        TableName: TABLE_NAME,
    };
    try {
        return { statusCode: 200, body: JSON.stringify(await db.scan(parameters).Items) };
    } catch (dbError) {
        return { statusCode: 500, body: JSON.stringify(dbError) };
    }
}