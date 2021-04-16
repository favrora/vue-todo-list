<template>
  <div :class="{'completed': item.completedAt}">

    <div class="todo-title">
      <slot name="title">
        {{item.title}}
      </slot>
    </div>

    <div class="todo-content">
      <slot name="content">
        {{item.content}}
      </slot>
    </div>

    <div>
      <slot name="actions" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>