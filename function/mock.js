import { MockoonServerless } from '@mockoon/serverless';
// Test

// Load the Mockoon Environment object
const mockEnv = require('./data.json');

const mockoonServerless = new MockoonServerless(mockEnv);

module.exports.handler = mockoonServerless.awsHandler();
