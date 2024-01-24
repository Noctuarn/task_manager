interface Task {
    _id?: number,
    id: number,
    title: string,
    description: string,
    tags: Tag[],
    isComplete: boolean,
    subtasks: Subtask[]
} 

interface Subtask {
    id: number,
    title: string,
    isComplete: boolean
}

interface Tag {
    id: number,
    value: string,
    color: string
}