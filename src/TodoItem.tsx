import react from 'react'

function TodoTask(props: TaskProps){
    return(
        <li>{props.task}</li>
    )
}

type TaskProps = {
    task: string
}

export default TodoTask