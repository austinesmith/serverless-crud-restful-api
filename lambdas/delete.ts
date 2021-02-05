const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ */
export const handler = async (event: any = {}): Promise <any> => {
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

        await db.delete(parameters).promise();
        return { statusCode: 200, body: 'request was successful and as a result, a resource has been deleted' };

    } catch (dbError) {

        return { statusCode: 500, body: JSON.stringify( dbError ) };
        
    }
}