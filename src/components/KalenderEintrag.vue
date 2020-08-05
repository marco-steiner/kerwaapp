<template>
    <keep-alive>
        <div class="post-list">
            <div v-for="post in posts" :key="post.id">
                <div class="timeTableEntry">
                    <div class="calendar">
                        <div class="calendarHead">{{ post.customdate[1] }}</div>
                        <div class="calendarContent">{{ post.customdate[0] }}</div>
                    </div>
                    <div class="timeTableItemList">
                        <div class="timeTableItem">
                            <div class="timeTableItemHeadline">{{ post.title.rendered }}</div>
                            {{ post.customdate[2] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </keep-alive>
</template>

<script>
    const axios = require('axios');

    export default {
        mounted() {
        },
        data() {
            return {
                postsUrl: 'https://app.kerwacrew.de/wp-json/wp/v2/event',
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
            title: 'Kerwakalender'
        }
    }
</script>

<style lang="scss">
  .timeTableEntry {
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 13px;
    -webkit-box-shadow: 0 2px 8px 0 #d8d8d8;
    box-shadow: 0 2px 8px 0 #d8d8d8;
  }
  .calendar {
    width: 62px;
    height: 62px;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: absolute;
    .calendarHead {
      width: 62px;
      height: 23px;
      position: absolute;
      background-color: $primaryColor;
      border-radius: 10px 10px 0 0;
      font-size: 16px;
      letter-spacing: 1px;
      padding: 2px 0 0 3px;
      color: #fff;
      text-align: center;
    }
    .calendarContent {
      width: 62px;
      position: absolute;
      top: 25px;
      font-size: 28px;
      letter-spacing: -1px;
      padding-right: 2px;
      color: #4c566b;
      text-align: center;
    }
  }
  .timeTableItemList {
    margin-left: 80px;
    min-height: 62px;
    display: table;
    .timeTableItem {
        display: table-cell;
        vertical-align: middle;
    }
    .timeTableItemHeadline {
        margin-bottom: 5px;
        font-weight: bold;
    }
  }
</style>