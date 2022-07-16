import { atom } from 'recoil'
import { selector } from 'recoil'
import { FilterOptions, StatsState, Todo } from './types'

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: []
})

export const todoListFilterState = atom<FilterOptions>({
  key: 'todoListFilterState',
  default: 'Show All'
})

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  }
})

export const todoListStatsState = selector<StatsState>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    }
  }
})
