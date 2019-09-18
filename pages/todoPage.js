module.exports =  {
    commands: [{
        typeTask(taskString){
            return this.waitForElementVisible('@toDoTextField')
                .setValue('@toDoTextField', taskString);
        },
        submitTask(){
            return this.submitForm('@toDoForm');
        },
        addTask(taskString){
            return this.typeTask(taskString)
                .submitTask();
        },
        toggleFirstElement(){
            return this.click('@firstElement');
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
        firstElement: {
            selector: '.todo-list li:first-child .toggle'
        },
        completed: {
            selector: '.clear-completed'
        },
        counter: {
            selector: '.todo-count'
        },
        active: {
            selector: 'selected: status == \'active\''
        }
    }
};