const TABLE_NAME = process.env.TABLE_NAME || '';
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const aws = require('aws-sdk');
const docClient = new aws.DynamoDB.DocumentClient();

/* UPDATE */
export const handler = async (event: any = {}): Promise <any> => {

    /*if (!event.body) {
        return { statusCode: 400, body: 'error: missing parameter body' };
    }*/

    const updateItemId = event.pathParameters.id;

    /*if (!updateItemId) {
        return { statusCode: 400, body: 'error: missing path parameter id' };
    }*/

    const Items: any = typeof event.body == 'object' ? event.body : JSON.parse(event.body);

    
    /*const updateItemProps = Object.keys(updateItem);
    if (!updateItem || updateItemProps.length < 1) {
        return { statusCode: 400, body: 'error: missing args' };
    }

    const firstProp = updateItemProps.splice(0,1);
    console.log( firstProp );
    const parameters: any = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: updateItemId
        },
        UpdateExpression: 'set #${firstProp} = :${firstProp}',
        ExpressionAttributeValues: {},
        ReturnValues: 'UPDATED_NEW'
    }*/

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

    /*parameters.ExpressionAttributeValues[':${firstProp}'] = updateItem['${firstProp}'];
    updateItemProps.forEach(property => {
        parameters.UpdateExpression += ', ${property} = :${property}';
        parameters.ExpressionAttributeValues[':${property}'] = updateItem[property];
    });
    console.log(parameters);*/

    let prefix = "set ";
    let attributes = Object.keys(Items);
    for (let i=0; i<attributes.length; i++) {
        let attribute = attributes[i];
        if (attribute != updateItemId) {
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = Items[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }


    try {
        await docClient.update(params).promise();
        return { statusCode: 204, body: 'success: item updated' };
    } catch ( dbError ) {
        return { statusCode: 500, body: 'Ddb error on update, code:' + dbError.code };
    }
}