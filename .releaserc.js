module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        './lib/poc-npm-set-otp.js',
        '@semantic-release/npm',
        '@semantic-release/github'
    ]
};
