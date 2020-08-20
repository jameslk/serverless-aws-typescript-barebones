import {
    APIGatewayProxyEvent,
    APIGatewayProxyCallback,
    APIGatewayProxyHandler,
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async function (
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) {
    return {
        statusCode: 200,
        body: 'online',
    };
};
