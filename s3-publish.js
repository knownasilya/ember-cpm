#!/usr/bin/env node

// To invoke this from the commandline you need the following to env vars to exist:
//
// S3_BUCKET_NAME
// TRAVIS_BRANCH
// TRAVIS_TAG
// TRAVIS_COMMIT
// S3_SECRET_ACCESS_KEY
// S3_ACCESS_KEY_ID
//
var S3Publisher = require('ember-publisher');
var configPath = require('path').join(__dirname, './s3-config.js');

publisher = new S3Publisher({projectConfigPath: configPath});
publisher.publish();
