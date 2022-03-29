module.exports = {
    rootDir: __dirname,
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: 'jsdom',
    testMatch: ['**/test/**/*.ts'],
    transformIgnorePatterns: ['/node_modules/(?!(swagger-client|react-syntax-highlighter)/)'],
};
