const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const docClient = new aws.DynamoDB.DocumentClient();

/* UPDATE */
export const handler = async (event: any = {}): Promise <any> => {

    // check for event request body
    if (!event.body) {
        return { statusCode: 400, body: 'error: missing parameter body' };
    }

    // get primary key of item to be updated
    const updateItemId = event.pathParameters.id;

    // check that parameter id exists in event URL path
    if (!updateItemId) {
        return { statusCode: 400, body: 'error: missing path parameter id' };
    }

    // create object from event request body
    const Items: any = typeof event.body == 'object' ? event.body : JSON.parse(event.body);

    // get array of keys from event request body object expression attributes
    let attributes = Object.keys(Items);

    // check that event request body contains at least one key/value pair
    if (!Items || attributes.length < 1) {
        return { statusCode: 400, body: 'error: missing request body' };
    }

    // initilize update expression
    const params: any = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: updateItemId
        },
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        UpdateExpression: "",
        ReturnValues: "UPDATED_NEW"
    };

    // create expression dynamically
    let prefix = "set ";
    for (let i=0; i<attributes.length; i++) {
        let attribute = attributes[i];
        if (attribute != updateItemId) {
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = Items[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }

    // update dynamodb table with new or updated attributes
    try {
        await docClient.update(params).promise();
        return { statusCode: 204, body: 'success: item updated' };
    } catch ( dbError ) {
        return { statusCode: 500, body: 'Ddb error on update, code:' + dbError.code };
    }
}