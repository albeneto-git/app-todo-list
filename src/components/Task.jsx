
const Task = ({task, onDelete, onToggleDone}) => {
    return <li>
        <span onClick={onToggleDone}>{task.text}</span>
        <button onClick={onDelete}>Remover</button>
    </li>
};

export default Task;
