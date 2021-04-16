<template>
  <edit-layout class="todo-item border-rad-3" :item="item">

    <template #checkbox>
      <input
        v-model="completedLocal"
        type="checkbox"
        class="checkbox"
      >
    </template>

    <template #title>
      <div v-if="!isEditing">
        {{ item.title }}
      </div>
      <input
        v-if="isEditing"
        ref="editInputTitle"
        class="input-title"
        v-model="titleLocal"
        type="text"
      >
    </template>

    <template #content>
      <div v-if="!isEditing">
        {{ item.content }}
      </div>
      <textarea
        v-if="isEditing"
        ref="editInput"
        class="edit-content"
        v-model="contentLocal"
        type="text"
      ></textarea>
    </template>

    <template #actions>
      <font-awesome-icon 
      :icon="['fas', 'trash-alt']"
      class="delete-item" 
      @click="showModal"
      />

      <div class="modal" v-if="modal">
        <div class="modal-box text-center border-rad-3">
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

      <span class="edit" v-if="!isEditing" @click="enableEdit">Edit</span>
      <span class="edit" v-if="isEditing" @click="saveEdit">Save</span><br>
      <span class="edit" v-if="isEditing" @click="showModalForEdit">Close</span>

      <div class="modal" v-if="modalForEdit">
        <div class="modal-box text-center border-rad-3">
          <span class="close" @click="hideModalForEdit">&times;</span>

          <div class="modal-content">
            <span>Do you want to discard the changes ?</span>
            <div class="modal-options">
              <button @click="saveEdit">No, save</button>
              <button @click.prevent="stopEdit">Yes, cancel</button>
            </div>
          </div>

        </div>
      </div>
    </template>

  </edit-layout>
</template>

<script>
import EditLayout from './layout/EditLayout'

export default {
  name: 'EditTodoItem',
  components: { EditLayout },
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      contentLocal: '',
      titleLocal: '',
      isEditing: false,
      modal: false,
      modalForEdit: false
    }
  },

  computed: {
    completedLocal: {
      get() {
        return !!this.item.completedAt
      },

      /**
       * Converts the completedAt boolean to a timestamp
       * Emits the entire changed item
       */
      set(value) {
        this.emitChange({
          completedAt: value ? Date.now() : null
        })
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

    /**
     * Starts the editing of a todo item.
     * Focuses the input item immediately
     */
    async enableEdit() {
      this.contentLocal = this.item.content
      this.titleLocal = this.item.title
      this.isEditing = true
      await this.$nextTick()
      this.$refs.editInputTitle.focus()
    },

    /* Saves the editing changes. */
    saveEdit() {
      this.emitChange({
        title: this.titleLocal,
        content: this.contentLocal
      })
      
      this.isEditing = false;
      this.contentLocal, this.titleLocal = '';
      this.modalForEdit = false;
    },

    stopEdit() {
      this.isEditing = false;
      this.contentLocal = '';
      this.titleLocal = '';
      this.modalForEdit = false;
    },

    showModal() { this.modal = true  },
    hideModal() { this.modal = false },

    showModalForEdit() {
      this.modalForEdit = true;
    },

    hideModalForEdit() {
      this.modalForEdit = false;
    }

  }
}
</script>