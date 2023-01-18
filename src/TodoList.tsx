import react from 'react'
import TodoItem from './TodoItem'

function TodoList(props: ListProps){
    return(
        <ul>
            {props.tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </ul>
    )
}

type ListProps = {
    tasks: string[]
}

export default TodoList