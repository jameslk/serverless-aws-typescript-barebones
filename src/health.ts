import {Handler} from 'aws-lambda';

export const handler: Handler = async function (event, context, callback) {
    return {
        statusCode: 200,
        body: 'online',
    };
};
