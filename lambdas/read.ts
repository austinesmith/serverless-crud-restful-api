const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient();

/* READ */
export const handler = async (event: any = {}): Promise <any> => {

    // get primary key of item to be read
    const requestItemId = event.pathParameters.id;
    
    // check that parameter id exists in event URL path
    if ( !requestItemId ) {
        return { statusCode: 400, body: 'error: missing path parameter id' };
    }

    // create read expression
    const parameters = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: requestItemId
        }
    };

    // pass expression and read one item from database
    try {
        const response = await db.get(parameters).promise();
        return { statusCode: 200, body: JSON.stringify( response.Item ) };
    } catch ( dbError ) {
        return { statusCode: 500, body: JSON.stringify( dbError ) };
    }
}