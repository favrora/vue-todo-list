<template>
  <main-layout class="todo-item border-rad-3" :item="item">

    <template #title>
      {{ item.title }}
    </template>

    <template #content>
      {{ item.content }}
    </template>

    <template #actions>
      <font-awesome-icon 
      :icon="['fas', 'trash-alt']"
      class="delete-item" 
      @click="showModal"
      />

      <div class="modal" v-if="modal">
        <div class="modal-box text-center border-rad-3" v-if="modal">
          <span class="close" @click="hideModal">&times;</span>

          <div class="modal-content">
            <span>Do you want to delete this note?</span>
            <div class="modal-options">
              <button @click="hideModal">No, don't delete</button>
              <button @click.prevent="deleteItem">Yes, delete</button>
            </div>
          </div>

        </div>
      </div>
    </template>

  </main-layout>
</template>

<script>
import MainLayout from './layout/MainLayout'

export default {
  name: 'MainTodoItem',
  components: { MainLayout },
  data() {
    return {
      modal: false
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    completedLocal: {
      get() {
        return !!this.item.completedAt
      }
    }
  },

  methods: {

    /* Deletes a todo item. */
    deleteItem() {
      this.emitChange({
        deletedAt: Date.now()
      })
      this.hideModal();
    },

    /* Emits the changes to the TODO item up to the parent. */
    emitChange(updatedItem) {
      this.$emit('change', {
        ...this.item,
        ...updatedItem
      })
    },

    showModal() {
      this.modal = true;
    },

    hideModal() {
      this.modal = false;
    }
  }

}
</script>