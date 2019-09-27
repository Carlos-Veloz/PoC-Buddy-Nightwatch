var options = {
    slack_message: function(results, options) { // function or message string
      return {
        text: 'Test completed, Passed: ' + results.passed + ' ' + ':happypepe:' + '- Failed: ' + results.failed + ' ' + ':sadpepe:' ,
        username: 'Nightwatch',
        icon_emoji: ':doge:',
      } // Message payload or string
    },
    slack_webhook_url: 'https://hooks.slack.com/services/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',
    // This can be specified with SLACK_WEBHOOK_URL environment variable
}

  module.exports = {
    reporter: (require('nightwatch-slack-reporter')(options))
}