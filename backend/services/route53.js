const route53 = require('./config/aws-config');

// Example function to list Hosted Zones
function listHostedZones() {
    return route53.listHostedZones().promise();
}

// Export your function
module.exports = { listHostedZones };
