<template>
  <div class="content container">
    <h1>Zeitplan</h1>
    <div class="post-list">
      <div v-for="{ node } in $page.allWordPressTimetableblock.edges" :key="node.id">
        <Timetableblock :timetableblock="node" />
      </div>
    </div>
  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressTimetableblock (page: $page, perPage: 10, order: ASC) {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
import Timetableblock from '~/components/Timetableblock.vue'

export default {
  components: {
    Timetableblock
  },
  metaInfo: {
    title: 'Zeitplan'
  }
}
</script>
