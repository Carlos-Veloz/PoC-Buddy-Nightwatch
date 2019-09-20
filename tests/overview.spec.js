const inputData = require('../test_data/inputData');
let galen;

module.exports = {

    beforeEach : function(browser) {
      galen = browser.page.todoPage();
      galen.navigate();
    },

    afterEach : function() {
      galen.end();
    },

    'There are not task in the list': function () {
        galen.waitForElementVisible('@header')
        .assert.elementNotPresent('@list');
    },

    'Add a new task to the list': function (){
      galen.addTask(inputData.task).validates('@counter', inputData.oneItem);
    },

    'Remove completed tasks': function () {
      galen.addTask(inputData.task).addTask(inputData.task).toggleFirstElement()
      .validates('@counter', inputData.oneItem)
      .click('@completed').validates('@counter', inputData.oneItem);
    },

    'After I add a task and toggle it there should not be items left': function () {
      galen.addTask(inputData.task).toggleFirstElement()
      .validates('@counter', inputData.zeroItems)
      .validates('@completed', inputData.clearCompleted);
    }
    
};