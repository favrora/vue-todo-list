<template>
  <draggable
    v-model="todoItems"
    @end="storeItems"
    class="todo-list"
  >
    <div class="description">
      <h4>Title</h4>
      <h4>Content</h4>
      <h4>Delete</h4>
    </div>

    <main-todo-item
      v-for="item in todoItems"
      :key="item.key"
      :item="item"
      @change="handleItemChange"
    />
  </draggable>
</template>

<script>
import MainTodoItem from '@/components/MainTodoItem'
import Draggable from 'vuedraggable'
import { random } from '@/utils'
import { ToDoService } from '@/services/ToDoService'

export default {
  name: 'MainPage',
  components: { MainTodoItem, Draggable },
  data() {
    return {
      todoItems: []
    }
  },

  mounted() {
    this.fetchToDos()
  },

  methods: {
    /* Fetches all the todo items. */
    fetchToDos() {
      this.todoItems = ToDoService.fetchAll()
    },

    /* Saves the todo item, on each change. */
    handleItemChange(item) {
      ToDoService.updateItem(item.id, item)
      this.fetchToDos()
    },

    /* Persists the list of todo items. */
    storeItems() {
      ToDoService.storeAll(this.todoItems)
    }
  }
}
</script>