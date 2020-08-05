<template>
  <div>
    <p v-html="info.content" />
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>