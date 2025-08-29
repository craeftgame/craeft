import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
    verbose: true,

    preset: "ts-jest",
    testEnvironment: "jsdom",
    rootDir: "./src",

    transformIgnorePatterns: [
        "/node_modules/(?!@craeft/serializer|@craeft/map-generator|@craeft/engine)",
    ],

    extensionsToTreatAsEsm: [".ts", ".tsx"],

    transform: {
        "^.+\\.[tj]sx?$": [
            "ts-jest",
            {
                tsconfig: {
                    allowJs: true,
                },
            },
        ],
    },

    moduleNameMapper: {
        "^@craeft/serializer$": "<rootDir>/__mocks__/serializerMock.ts",
    },

    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

export default createJestConfig(customJestConfig);
