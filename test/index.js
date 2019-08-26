'use strict';

const Things = require('..');


const { describe, it } = exports.lab = require('@hapi/lab').script();
const { expect } = require('@hapi/code');

describe('allow-scripts', () => {

    describe('things()', () => {

        it('returns things', () => {

            expect(Things.things()).to.equal('things');
        });
    });

});
