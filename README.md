# Serverless AWS TypeScript Barebones

This is a barebones project I ripped out of an existing project to use as a template for future Serverless
projects. My notes on how I set this up are below.

* Quick start tutorial
    * https://stackify.com/aws-lambda-with-node-js-a-complete-getting-started-guide/
* Serverless framework tutorial with TypeScript
    * https://medium.com/linkit-intecs/typescript-project-using-serverless-framework-c3bfc16c2a7c
* TypeScript definitions for Lambda functions
    * https://dev.to/chiubaca/typescript-and-netlify-functions-37b8
* Serverless Framework
    * CLI
        * https://www.serverless.com/framework/docs/providers/aws/cli-reference/
        * Deploy to server
            * yarn sls deploy
        * Find API endpoints
            * yarn sls info
    * Serverless configuration file (serverless.yml)
        * https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/
    * Viewing error output
        * yarn sls invoke -f <function>
    * Debugging locally
        * https://medium.com/hackernoon/running-and-debugging-aws-lambda-functions-locally-with-the-serverless-framework-and-vs-code-a254e2011010
        * Run
            * yarn debug <function>
* Lambda Runtimes
    * https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
    * https://blog.thundra.io/aws-lambda-limits-to-keep-in-mind-when-developing-a-serverless-application
* Technical limitations
https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html