const express = require('express')
const app = express()
const port =3000

app.listen(3000, ()=>{
    console.log(`!! Expresss Server Running on port: ${port}`)
})
console.log("Hello World")

class TaskList{
    constructor(taskList){
        this.taskList=[];
    }

    addTask = (task)=>{
        this.taskList.push(task)
    }
}

class Task {
    constructor(title, dueDate, projectName){
        this.title =title,
        this.dueDate= dueDate,
        this.projectName=projectName,
        this.subTaskList=[];
    }

    addSubTask = (subtask)=>{
        this.subTaskList.push(subtask)
    }
}

class SubTask{
    constructor(subtitle, dueDate){
        this.subtitle = subtitle,task2Label
        this.dueDate = dueDate;
    }
}

const task1 = new Task("Study Anki", "5/15/21", "Web Dev")
const subtask1 = new SubTask ( 'create flexbox anki', "5/15/21")
const subtask2 = new SubTask ('review js anki', '5/21/21')  //<--- set these up to inherit dates!

console.log(task1, subtask1, subtask2)

task1.addSubTask(subtask1)
task1.addSubTask(subtask2) // <<-- need to be able to add multiple OPTION 

console.log(task1) // <<-- OnLoad, pass back to DOM -document.querySelector('#task1').value = task1



// SETUP ROUTES
//1. Read - Get rout
app.get('/', (request, response)=>{
    response.send(console.log('get route called'))
})

//2. Read - Show route  :id (to show params)
app.get('/projects/:id', (request, response)=>{
    // let requestedProject =request.params
    // req.body.json() <<-- requires body parser..
    // response.json(TaskList[requestedProject]) <<-- need to instantiat new tasklist
    response.send(console.log(`show route called, ${request.params}`))
})

//3. Create - Post route
app.post('/projects/form', (request, response)=>{
    console.log(`Post route accessed, ${request.params}`)
    // response.send(...)
} )

//3. Create - Post route id leve

app.post('/projects/ :id', (request, response)=>{
    console.log(`Post route accessed, `)
    // console.log(`Post route accessed, ${request.params}`)
    // response.send(...)
} )

//4. Create - Updatae Put/Post route
app.put('/projects/:id', (request, response)=>{
    console.log(`Put route called, ${request.params}`)
})

//5. Delete - Delete Route
app.delete('/projects/:id', (request, response)=>{

})