'use strict';

const core = require('@actions/core');

const matrix = [10, 12, 14];

try {
    console.log(`Min version: ${core.getInput('gte')}`)
    console.log(`Policy: ${core.getInput('policy')}`)
    console.log(`Matrix: ${matrix}`);

    core.setOutput("matrix", matrix);
} catch (error) {
    core.setFailed(error.message);
}
