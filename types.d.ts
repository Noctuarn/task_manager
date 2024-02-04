interface Task {
    id: string,
    title: string,
    description: string,
    tags?: Tag[],
    isComplete: boolean,
    subtasks: Subtask[]
} 

interface Subtask {
    id: string,
    title: string,
    isComplete: boolean,
}

interface Tag {
    id: string,
    value: string,
    color: string
}