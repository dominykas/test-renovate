'use strict';

const Wreck = require('@hapi/wreck');

module.exports.verifyConditions = async (pluginConfig, { env }) => {

    if (!env.NPM_OTP_URL) {
        throw new Error('Missing an NPM_OTP_URL env var');
    }
};

module.exports.publish = async (pluginConfig, { env }) => {

    const { payload } = await Wreck.get(env.NPM_OTP_URL);

    env.NPM_CONFIG_OTP = payload.toString();
};
