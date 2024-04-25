export type TUserTask = {
  id: number
  title: string
  description: string
  completed: boolean
  deleted: boolean
}

export enum TaskStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Deleted = 'DELETED',
}
