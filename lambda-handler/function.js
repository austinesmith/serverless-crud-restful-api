exports.handler = async function (event) {
    console.log('request:', JSON.stringify(event));

    return sendRes(200, "Austin's serverless API Response");
};

const sendRes = (status, body) => {
    var response = {
        statusCode: status,
        headers: {
            'Content-Type': 'text/html',
        },
        body: body,
    };
    return response;
}