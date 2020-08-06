<template>
  <div class="content container">
    <h1>Kerwakalender</h1>
    <div class="post-list">
      <div v-for="{ node } in $page.allWordPressEvent.edges" :key="node.id">
        <Event :event="node" />
      </div>
    </div>
  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressEvent (page: $page, perPage: 100, order:ASC) {
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
