const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ */
export const handler = async (event: any = {}): Promise <any> => {

    // get primary key of item to be deleted
    const deleteItemId = event.pathParameters.id;

    // check that parameter id exists in event URL path
    if (!deleteItemId) {
        return { statusCode: 400, body: 'error: missing parameter id' };
    }

    // create expression for item to be deleted
    const parameters = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: deleteItemId
        }
    };

    // delete item from the dynamodb table
    try {
        await db.delete(parameters).promise();
        return { statusCode: 204, body: '' };
    } catch ( dbError ) {
        return { statusCode: 500, body: JSON.stringify( dbError ) };
    }
}