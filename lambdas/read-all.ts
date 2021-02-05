const TABLE_NAME = process.env.TABLE_NAME || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ ALL */
export const handler = async () : Promise <any> => {

    // create expression
    const parameters = {
        TableName: TABLE_NAME,
    };

    // scan dynamodb table and return all items from database
    try {
        const response = await db.scan(parameters).promise();
        return { statusCode: 200, body: JSON.stringify( response.Items ) };
    } catch ( dbError ) {
        return { statusCode: 500, body: JSON.stringify( dbError ) };
    }
}