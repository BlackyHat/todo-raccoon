export type TUserTask = {
  id: Date
  name: string
  description: string
  completed: boolean
  deleted: boolean
}

export enum TaskStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Deleted = 'DELETED',
}
