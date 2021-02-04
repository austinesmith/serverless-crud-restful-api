const TABLE_NAME = process.env.TABLE_NAME || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ ALL */
export const handler = async () : Promise <any> => {
    const parameters = {
        TableName: TABLE_NAME,
    };
    try {
        const response = await db.scan(parameters).promise();
        return { statusCode: 200, body: JSON.stringify( response.Items ) };
    } catch ( dbError ) {
        return { statusCode: 500, body: 'dbError' + JSON.stringify( dbError ) };
    }
}