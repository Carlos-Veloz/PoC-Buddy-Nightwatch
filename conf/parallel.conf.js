nightwatch_config = {
    src_folders: ["tests"],
    output_folder : "reports",
    page_objects_path : "pages",
    globals_path : "../globalsModule.js",
    
    selenium: {
      start_process: false,
      host: "hub-cloud.browserstack.com",
      port: 80
    },
  
    common_capabilities: {
      build: "nightwatch-browserstack",
      "browserstack.user":
        process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
      "browserstack.key":
        process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
      "browserstack.debug": true
    },
  
    test_settings: {
      default: {launch_url: "http://todomvc.com/examples/angularjs/#/"},
      chrome: {
        desiredCapabilities: {
          os: 'Windows',
          os_version: '10',
          browser: 'chrome',
        },
      },
      edge: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'edge',
      },
    },
    safari: {
      desiredCapabilities: {
        os: 'OS X',
        os_version: 'Mojave',
        browser: 'safari',
      },
    },
    firefox: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'firefox',
      },
    }
  }
};
  
  // Code to support common capabilites
  for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config["selenium_host"] = nightwatch_config.selenium.host;
    config["selenium_port"] = nightwatch_config.selenium.port;
    config["desiredCapabilities"] = config["desiredCapabilities"] || {};
    for (var j in nightwatch_config.common_capabilities) {
      config["desiredCapabilities"][j] =
        config["desiredCapabilities"][j] ||
        nightwatch_config.common_capabilities[j];
    }
  }
  
  module.exports = nightwatch_config;