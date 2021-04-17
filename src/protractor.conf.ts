import {Config} from "protractor";

export const config: Config = {
    directConnect: true,
    specs: [
        "features/*.feature"
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        require: ['step_definitions/*.js']
    },
    allScriptsTimeout: 60000,
    SELENIUM_PROMISE_MANAGER: false
}
