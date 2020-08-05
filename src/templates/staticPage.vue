<template>
    <div class="content container">
        <h1 class="mb-5">{{$page.page.title}}</h1>
        <div class="page-content" v-html="$page.page.content"/>
    </div>
</template>

<page-query>
query($path: String) {
  page: wordPressPage(path: $path) {
    title
    content
  }
}
</page-query>

<script>
import Post from "~/components/Post.vue"

export default {
  metaInfo () {
    return {
      title: this.$page.page.title
    }
  }
}
</script>
