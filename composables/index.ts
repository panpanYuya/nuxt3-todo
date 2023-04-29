import { Ref } from 'vue';

export const useTaskState = () => {
  const taskList = useState<string[]>('taskList', () => ['task1','task2','task3'])
  const taskName = useState<string>('taskName', () => '')

  const addTask = (taskList: Ref<string[]>, taskName: Ref<string>) => () => {
    if (taskName.value === '') {
      return
    }
    taskList.value.push(taskName.value);
    console.log(taskList.value[0])
    taskName.value =''
  }

  const completeTask = (taskList: Ref<string[]>) => (completedTaskName: string) => {
    taskList.value = taskList.value.filter((taskName) => completedTaskName !== taskName);
  }
  return {
    taskName: taskName,
    taskList: readonly(taskList),
    addTask: addTask(taskList, taskName),
    completeTask: completeTask(taskList)
  }
}