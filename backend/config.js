const AWS = require('aws-sdk');

// Ensure these environment variables are set in your .env file or in your environment
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION // 'us-east-1' or your AWS region
});

const route53 = new AWS.Route53();

module.exports = route53;
