const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cucumber-json-report",
  reportPath: "./html-report",
  metadata: {
    browser: {
      name: "Chrome",
      version: "102",
    },
    device: "Windows",
    platform: {
      name: "Windows",
      version: "10 Pro",
    },
  },
  customData: {
    title: "Run info",
    data: [{ label: "Project", value: "Cucumber Practice" }],
  },
});
