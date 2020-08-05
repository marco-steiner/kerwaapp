<template>
  <div>
      <div>Test:</div>
    <g-link class="nav__link" :to="menu.title">{{ menu.title }}</g-link>
  </div>
</template>

<script>
/* funzt nicht */
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>