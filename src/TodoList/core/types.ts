export type Todo = {
  id: number
  text: string
  isComplete: boolean
}

export type FilterOptions = 'Show All' | 'Show Completed' | 'Show Uncompleted'
export type StatsState = {
  totalNum: number
  totalCompletedNum: number
  totalUncompletedNum: number
  percentCompleted: number
}
