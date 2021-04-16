<template>
  <div class="edit-page">
    <h4 class="text-center">Create new notes</h4><br>

    <div class="error" v-if="error">
      Please add content
    </div>
    <div class="add-notes">
     <div>
      <input
        v-model.trim="newTodoTitle"
        type="text"
        class="input-title border-rad-3"
        placeholder="Title..."
      ><br>
      <button class="create-notes border-rad-3" @click="saveTodo">Create</button>
     </div>
      <textarea
        v-model.trim="newTodoContent"
        type="text"
        class="textarea-content border-rad-3"
        placeholder="Content..."
      ></textarea>
    </div>

    <div>
      <draggable
        v-model="todoItems"
        @end="storeItems"
      >
        <edit-todo-item
          v-for="item in todoItems"
          :key="item.key"
          :item="item"
          @change="handleItemChange"
        />
      </draggable>
    </div>

  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import EditTodoItem from '@/components/EditTodoItem'
import { random } from '@/utils'
import { ToDoService } from '@/services/ToDoService'

export default {
  name: 'EditPage',
  components: { EditTodoItem, Draggable },
  data() {
    return {
      newTodoTitle: '',
      newTodoContent: '',
      todoItems: [],
      error: false
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

    /* Saves a new todo item. */
    saveTodo() {

      // show error if we have no content
      if (!this.newTodoContent || !this.newTodoTitle) {
        console.log("Test");
        this.error = true;
        return false;
      }

      // push a new item to the list
      this.todoItems.push({
        id: random(),
        title: this.newTodoTitle,
        content: this.newTodoContent,
        completedAt: null,
        deletedAt: null
      })

      // clear the form input
      this.newTodoContent = '';
      this.newTodoTitle = '';

      // store the items
      this.storeItems();

      // destroy error
      this.error = false;
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