<template>
  <div>
      <h2>タスク追加</h2>
      <input v-model="taskName">
      <button @click="$event => taskState.addTask()">追加</button>
      <div v-for="taskName in taskState.taskList.value" :key="taskName">
        {{ taskName }}
        <button @click="taskState.completeTask(taskName)">完了</button> 
      </div>
  </div>
</template>
<script setup> 
  const taskState = useTaskState()
  const { taskName } = taskState
</script>
