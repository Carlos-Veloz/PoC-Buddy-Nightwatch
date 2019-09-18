var options = {
    slack_message: function(results, options) { // function or message string
      return {
        text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
        username: 'Nightwatch',
        icon_emoji: ':ghost:'
      } // Message payload or string
    },
    slack_webhook_url: 'https://hooks.slack.com/services/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',
    // This can be specified with SLACK_WEBHOOK_URL environment variable
}

  module.exports = {
    reporter: (require('nightwatch-slack-reporter')(options))
}