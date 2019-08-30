"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const eslint = require("eslint");
const tsconfig_1 = require("./tsconfig");
async function getOptions() {
    return {
        // cmd, homepage, bugs all pulled from package.json
        cmd: 'ts-standard',
        version: require('../package.json').version,
        homepage: require('../package.json').homepage,
        bugs: require('../package.json').bugs.url,
        tagline: 'Standard for Typescript!',
        eslint,
        eslintConfig: {
            configFile: path_1.join(__dirname, '../eslintrc.json'),
            parserOptions: {
                project: await tsconfig_1.getTSConfigFile()
            }
        }
    };
}
exports.getOptions = getOptions;
