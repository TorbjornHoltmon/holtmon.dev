---
title: How to set up AWS SNS on multiple environments with the serverless
  framework and node.js.
poster_image: /images/1990288_d373.jpg
seo_title: How to set up AWS SNS on multiple environments with the serverless
  framework and node.js.
seo_desc: How to get quickly started with AWS SNS on multiple environments with
  the serverless framework and node.js.
date: 2020-08-30T14:15:38.655Z
description: How to get quickly started with AWS SNS on multiple environments
  with the serverless framework and node.js.
---

In this short article I will not be explaining what the [Serverless Framework](https://www.serverless.com/framework/docs/) is, if you don't know what it is I recommend checking it out! It makes working with AWS a breeze.

I have had to work with SNS in multiple environments once before and I had to makes sure all feature branches got their own SNS resource. The [Serverless documentation](https://www.serverless.com/framework/docs/providers/aws/events/sns/) gives some hints as to how to do this, but does not state it explicitly.

First off, you want to create your SNS Topics and give them names corresponding to their current "stage" which will be your feature branch or production branch.

```yaml{}[serverless.yml]
resources:
  Resources:
    publisherOne:
      Type: AWS::SNS::Topic
      Properties:
        DisplayName: ${opt:stage, self:provider.stage}-publisher-one
        TopicName: ${opt:stage, self:provider.stage}-publisher-one
```

In order to publish a SNS message to a topic you have to know what their topic arn is which will look something like this: `arn:aws:sns:us-east-2:123456789012:MyTopic`. You want to save the Topic arn of the Topics you just created in a environment variable that you can use later in the code.

You do do that by adding a reference to the topic resources in your list of environment variables:

```yaml{}[serverless.yml]
provider:
  name: aws
  runtime: nodejs12.x
  region: eu-west-1
  environment:
    SNS_PUBLISHER_ONE:
      Ref: publisherOne
```

The last part you need to add to your yml file now is the subscribers handler.

```yaml{}[serverless.yml]
subscriberOne:
  handler: src/subscriberOne.handler
  events:
    - sns:
        arn: ${self:provider.environment.SNS_PUBLISHER_ONE}
        topicName: ${opt:stage, self:provider.stage}-publisher-one
```

And you are pretty much done. You can now use the enviroment variable to publish and subscribe with AWS SNS on your branches own SNS resources.

Here is a quick example:

```javascript{}[src/publisherOne.js]
export default async function publishMessage() {
  // Create publish parameters
  const pubSubParams = {
    Message: { content: "Hello World!" },
    TopicArn: process.env.SNS_PUBLISHER_ONE,
  };

  // Create promise and SNS service object
  const publishTextPromise = await getAWSSNS().publish(pubSubParams).promise();

  if (publishTextPromise.$response.data) {
    console.log("Message sent!");
  }
  console.log("Message not sent! 😭");
  console.error(publishTextPromise.$response.error);
}
```

```javascript{}[src/subscriberOne.js]
exports.handler = async (event, _context, callback) => {
  const message = JSON.parse(event.Records[0].Sns.Message);
  // Hello World!
  console.log(message.content);
  callback(null, "Success");
};
```
