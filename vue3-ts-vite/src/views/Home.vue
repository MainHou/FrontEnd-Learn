<template>
  <div class="todo-list">
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button @click="clear">清空数据</button>
    <ul v-if="todos.length">
      <li
        v-for="(todo, index) in todos"
        :key="todo.title + index"
        :class="{done: todo.done}"
      >
        <input type="checkbox" v-model="todo.done" />
        <span> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
  </div>
  <div class="option">
    全选<input type="checkbox" v-model="allDone" />
    <span class="statisitics">{{ active }}/{{ all }}</span>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from 'vue';

interface Todo {
  title: string;
  done: boolean;
}

export default defineComponent({
  name: 'Home',
  setup() {
    // 数据
    const data = reactive({
      title: '',
      todos: [
        {title: '吃饭', done: true},
        {title: '睡觉', done: false},
      ] as Todo[],
    });

    // 任务总数
    const all = computed(() => data.todos.length);
    // 当前任务
    const active = computed(
      () => data.todos.filter((todo) => !todo.done).length
    );
    // 已完成的任务
    const allDone = computed({
      get: function () {
        return active.value === 0;
      },
      set: function (val: boolean) {
        data.todos.forEach((todo) => {
          todo.done = val;
        });
      },
    });

    /**
     * 添加任务
     */
    const addTodo = () => {
      data.todos.push({title: data.title, done: false});
      data.title = '';
    };

    /**
     * 清空任务列表
     */
    const clear = () => {
      data.todos.length = 0;
    };

    return {
      ...toRefs(data),
      all,
      active,
      allDone,
      addTodo,
      clear,
    };
  },
});
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
