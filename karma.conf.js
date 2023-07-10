// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-mocha-reporter"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-sonarqube-unit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser,
      jasmine: {
        verboseDeprecations: true,
      },
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/front"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 50,
        lines: 40,
        branches: 0,
        functions: 20,
      },
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: "LATEST",
      outputFile: "reports/ut_report.xml",
      overrideTestDescription: true,
      testPaths: ["./src"],
      testFilePattern: ".spec.ts",
      useBrowserName: false,
    },
    reporters: ["mocha", "kjhtml", "sonarqubeUnit", "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadlessNoSandbox"],
    singleRun: true,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};