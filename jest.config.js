module.exports = {
    verbose: false,
    testURL: 'http://localhost',
    collectCoverage: true,
    collectCoverageFrom: ['src/**'],
    coveragePathIgnorePatterns: ['/__snapshots__/'],
    transform: {
        '^.+\\.[j|t]sx?$': 'babel-jest',
    },
    testEnvironmentOptions: {
        // 设置为 iOS 的环境
        userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1`,
    },
    transformIgnorePatterns: [],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '@docs/(.*)$': '<rootDir>/docs/$1',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    snapshotSerializers: [],
}
