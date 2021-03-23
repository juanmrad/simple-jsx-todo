let todos = [
    {
        id: 1,
        name: 'Code Epic JSX',
        completed: false
    },
    {
        id: 2,
        name: 'Learn Epic JSX',
        completed: false
    },
    {
        id: 3,
        name: 'Learn Props',
        completed: true
    }
];

let TodoItem = (props) => {
    return (<li>{props.todo.name} completed: {props.todo.completed ? 'Yes' : 'No'}</li>)
}

let TodoList = (props) => {
    return (<ul>
        {props.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />
        })}
    </ul>)
}

let TodoAddTodo = (props) => {
    function handleClick(e) {
        e.preventDefault();
        props.updateTodo({
            name: e.target.newTodo.value,
            completed: false
        });
        e.target.newTodo.value = '';
    }

    return (<span><form onSubmit={handleClick}><input type="text" name="newTodo"></input><button type="submit">Add new todo</button></form></span>)
}

let TodoListApp = (props) => {

    const [todos, setTodo] = React.useState(props.todos);

    function updateTodoState(newTodo) {
        let newTodos = [...todos, {
            id: todos.length + 1,
            ...newTodo
        }];
        setTodo(newTodos);
    };

    return (
    <div>
        <TodoList todos={todos} />
        <TodoAddTodo updateTodo={updateTodoState}/>
    </div>
    );
}


ReactDOM.render(<TodoListApp todos={todos} />, document.getElementById('root'));
