<template>
  <div :class="{'completed': item.completedAt}">

    <div>
      <slot name="checkbox">
        <input
          type="checkbox"
          disabled
          :checked="!!item.completedAt"
        >
      </slot>
    </div>

    <div>
      <slot name="title">
        {{ item.title }}
      </slot>
    </div>

    <div>
      <slot name="content">
        {{ item.content }}
      </slot>
    </div>

    <div class="text-right">
      <slot name="actions" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'EditLayout',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>