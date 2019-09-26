module.exports =  {
    commands: [{
        addTask(taskString){
            return this.waitForElementVisible('@toDoTextField')
                .setValue('@toDoTextField', taskString)
                .sendKeys('@toDoTextField',this.api.Keys.ENTER)
                .waitForElementVisible('@counter');
        },
        toggleFirstElement(){
            return this.waitForElementVisible('@list')
            .click('@firstElementToggle');
        },
        validates(element, items){
            return this.assert.containsText(element, items)
        }
    }],
    url(){
        return this.api.launchUrl;
    },
    elements: {
        toDoTextField: {
            selector: '.new-todo'
        },
        toDoForm: {
            selector: '.todo-form'
        },
        header: {
            selector: '.header h1'
        },
        list: {
            selector: '.todo-list li'
        },
        firstElementToggle: {
            selector: '.todo-list li:first-child .toggle'
        },
        completed: {
            selector: '.clear-completed'
        },
        counter: {
            selector: '.todo-count'
        }
    }
};