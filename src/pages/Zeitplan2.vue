<template>
    <div class="content container">
        <h1>Zeitplan</h1>
        <div class="post-list">
            <div v-for="post in posts" :key="post.id">
                <div>
                    <div class="timeTableBlockHeadline">{{ post.title.rendered }}</div>
                    <div class="timeTableBlockContent" v-html="post.content.rendered"></div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    const axios = require('axios');

    export default {
        mounted() {
        },
        data() {
            return {
                postsUrl: 'https://app.kerwacrew.de/wp-json/wp/v2/timetableblock?order=asc',
                posts: [],
                postsData: {
                    per_page: 50,
                    page: 1
                },
            }
        },
        created() {
            this.getPosts();
        },
        methods: {
            getPosts() {
                axios.get(this.postsUrl, {params: this.postsData})
                .then((response) => {
                    this.posts = response.data;
                })
                .catch( (error) => {
                    this.posts = [{'title': {'rendered':'Du bist offline'}}];
                    console.log(error);
                });
            },
        },
        components: {
        },
        metaInfo: {
            title: 'Zeitplan2'
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
.timeTableBlockContent {
    padding: 7px 0 22px 5px;
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