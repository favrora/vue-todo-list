import { LocalStorageService } from './LocalStorageService'

/* The key under which we are saving Todos in LS. */
export const STORAGE_KEY = 'todoItems'

export const ToDoService = {

  /* Stores all the provided todo items. */
  storeAll (items) {
    LocalStorageService.setItem(STORAGE_KEY, items)
  },

  /* Fetch all Todo items, even the deleted ones. */
  fetchAllWithDeleted () {
    return LocalStorageService.getItem(STORAGE_KEY, [])
  },

  /* Fetches all todo items. Does not return deleted items. */
  fetchAll () {
    return ToDoService.fetchAllWithDeleted().filter(item => !item.deletedAt)
  },

  /* Updates a todo item. */
  updateItem (itemId, payload) {
    const items = ToDoService.fetchAllWithDeleted()
    const index = items.findIndex(i => i.id === itemId)
    if (index === -1) return
    items.splice(index, 1, payload)
    ToDoService.storeAll(items)
  },

  /* Remove a todo item from the list. */
  removeItem (itemId) {
    const items = ToDoService.fetchAllWithDeleted()
    const index = items.findIndex(i => i.id === itemId)
    items.splice(index, 1)
    ToDoService.storeAll(items)
  }
}