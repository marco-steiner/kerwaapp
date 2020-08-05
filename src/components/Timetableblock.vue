<template>
  <div>
    <div class="timeTableBlockHeadline" v-html="timetableblock.title"></div>
    <p v-html="timetableblock.content" />
  </div>
</template>

<script>
export default {
  props: {
    timetableblock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.timeTableBlockHeadline {
  background: $primaryColor;
  display: inline-block;
  border-radius: 30px;
  padding: 5px 15px;
}
table tr td:first-of-type {
  width: 1% !important;
  min-width: 110px;
  padding-left: 5px;
  font-weight: bold;
}
table tr td {
  vertical-align: top;
}
</style>