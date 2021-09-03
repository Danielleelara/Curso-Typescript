type Todo = {
    title?: string,
    descrition?: string,
    completed?: boolean
};

//Readonly

const todo1: Readonly <Todo> = {
    title: "Assistir Dark de novo",
    descrition: "Relembrar os detalhes",
    completed: false
};

console.log(todo1);

function updateTodo (todo1: Todo, fieldsToUpdate: Todo) {
    return {...todo1, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo1, {completed: true})

console.log(todo2);

///Pick

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

console.log(todo3);

//omit 

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
