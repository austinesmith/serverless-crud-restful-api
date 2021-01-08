import { Aws } from "@aws-cdk/core";

const uuidv4 = require('uuid/v4');
const PRIMARY_KEY = process.env.PRIMARY_KEY || '';
const TABLE_NAME = process.env.TABLE_NAME || '';
const aws = require('aws-cdk');
const db = new aws.DynamoDB.DocumentClient();

export const handler = async (event: any = {}) => {
    const item = typeof event.body == 'object' ? event.body : JSON.parse(event.body);
    item[PRIMARY_KEY] = uuidv4();
    const parameters = {
        TableName: TABLE_NAME,
        Item: item
    };
    try {
        await db.put(parameters);
        return { statusCode: 201, body: 'item added' };
    } catch (dbError) {
        return { statusCode: 500, body: dbError.code };
    }
}

/*
exports.handler = async function (event: any = {}) {
    console.log('request:', JSON.stringify(event));



    return sendRes(200, "added one item");
};

const sendRes = (status, body) => {
    var response = {
        statusCode: status,
        headers: {
            'Content-Type': 'text/html',
        },
        body: body,
    };
    return response
};
*/

