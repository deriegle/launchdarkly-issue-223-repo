const LaunchDarkly = require('launchdarkly-node-server-sdk');

require('@google-cloud/trace-agent').start({});

const main = async (apiKey) => {
  await LaunchDarkly.init(apiKey);
};

main("<INSERT API KEY>");
