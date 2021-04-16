export const LocalStorageService = {

  /* Get an item from LocalStorage. */
  getItem(key, fallback) {
    try {
      let item = window.localStorage.getItem(key)
      return item ? window.JSON.parse(item) : fallback
    } catch (err) {
      return fallback
    }
  },

  /* Sets an item by its key. */
  setItem(key, value = {}) {
    window.localStorage.setItem(key, window.JSON.stringify(value))
  },

  /* Remove item by its key. */
  removeItem(key) {
    window.localStorage.removeItem(key)
  },

  /* Removes all items from storage. */
  clearAllItems() {
    window.localStorage.clear()
  }

}