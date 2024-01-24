interface Task {
    _id: number,
    title: string,
    description: string,
    tags: Tag[],
    isComplete: boolean,
    subtasks: Subtask[]
}

interface Subtask {
    _id: number,
    title: string,
    isComplete: boolean
}

interface Tag {
    _id: number,
    value: string,
    color: string
}