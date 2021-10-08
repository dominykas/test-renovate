'use strict';

const matrix = {
    'node-versions': [16, 14, 12]
};

console.log(`::set-output name=matrix::${JSON.stringify(matrix)}`);
