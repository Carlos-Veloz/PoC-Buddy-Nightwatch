const inputData = require('../test_data/inputData');
var todo;

module.exports = {

    beforeEach : function(browser) {
      todo = browser.page.todoPage();
      todo.navigate();
    },

    afterEach : function() {
      todo.end();
    },

    'There are not task in the list': function () {
      todo.waitForElementVisible('@header')
        .assert.elementNotPresent('@list');
    },

    'Add a new task to the list': function (){
      todo.addTask(inputData.task)
      .validates('@counter', inputData.oneItem);
    },

    'Remove completed tasks': function () {
      todo.addTask(inputData.task).addTask(inputData.task).toggleFirstElement()
      .validates('@counter', inputData.oneItem);
      todo.click('@completed').validates('@counter', inputData.oneItem);
    },

    'After I add a task and toggle it there should not be items left': function () {
      todo.addTask(inputData.task).toggleFirstElement()
      .validates('@counter', inputData.zeroItems);
      todo.validates('@completed', inputData.clearCompleted);
    }
    
};