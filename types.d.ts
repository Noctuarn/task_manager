interface Task {
    _id: number,
    title: string,
    description: string,
    tags: string,
    isComplete: boolean,
    subtasks: Subtask[]
}

interface Subtask {
    _id: number,
    title: string,
    isComplete: boolean
}