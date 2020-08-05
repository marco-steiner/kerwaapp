<template>
  <div class="content container">
    <h1>Kerwakalender</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressEvent.edges" :key="node.id">
        <Event :event="node" />
      </li>
    </ul>
  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressEvent (page: $page, perPage: 10) {
    edges {
      node {
        id
        title
        content
        customdate
      }
    }
  }
}
</page-query>

<script>
import Event from '~/components/Event.vue'

export default {
  components: {
    Event
  },
  metaInfo: {
    title: 'Kerwakalender'
  }
}
</script>
