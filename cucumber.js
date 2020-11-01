module.exports = {
    default: `--require 'step_definitions/**/*.js'
              --require 'support/**/*.js'
              --format-options '{"snippetInterface": "synchronous"}'
              --publish-quiet
              --format 'json:reports/cucumber_report.json'`,
}