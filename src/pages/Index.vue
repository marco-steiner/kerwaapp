<template>
  <div class="content">
    <vueper-slides
      class="no-shadow ex--show-multiple-slides-and-gap startSlide"
      prevent-y-scroll
      :visible-slides="1"
      :slide-ratio="1 / 4"
      :dragging-distance="70"
      :gap="-4"
      :infinite="false"
      :arrows="false"
      :bullets="false">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
    </vueper-slides>

<!--
    <div class="test" :class="{ testAni: animate }"></div>

    <transition name="fade-in-down" appear>
      <div class="test"></div>
    </transition>
    -->

    <!--<div v-for="eventPost in eventPosts" :key="eventPost.id">
      <div>{{ eventPost.title.rendered }}</div>
      <div>{{ eventPost.startdate }} - {{ eventPost.enddate }}</div>
    </div>-->
    <!--
    <ul class="post-list container">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
    -->
    <!--
    <div class="button-wrapper enter-2">
        <g-link class="nav__link" to="/kerwalieder/">Kerwalieder</g-link>
        <g-link class="button button-start" type="button" to="/kerwalieder/" @click="$emit('change-page', 'kerwalieder', 'slide-left')"> <span class="button-text">Start!</span></g-link>
    </div>
    -->
  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressEvent (page: $page, perPage: 1, order:ASC) {
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
const axios = require('axios')
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  mounted() {
      //this.getEventPosts();
      this.getRandomSong();
      this.turnOffAnimate();
  },
  created() {
    this.getKerwa();

  },
  data() {
      return {
          eventPostsUrl: 'https://app.kerwacrew.de/wp-json/wp/v2/event',
          eventPosts: [],
          eventPostsData: {
              per_page: 1,
              page: 1
          },
          randomSongUrl: 'https://app.kerwacrew.de/wp-json/wp/v2/textblock/?per_page=400',
          randomSongPost: [],
          slides: [
            {
              title: '', // kommt von getEventPosts()
              content: ''
            },
            {
              title: '',
              content: '' // kommt von getRandomSong()
            },
            {
              title: 'Gas am Glas',
              content: 'Lernt fleißig Kerwalieder'
            }
          ],
          activeItem: 0,
          animate: false
      }
  },
  computed: {
  },
  methods: {
    getKerwa() {
      this.slides[0].title = this.$page.allWordPressEvent.edges[0].node.title;
      this.slides[0].content = this.$page.allWordPressEvent.edges[0].node.customdate[2];
    },
    getEventPosts() {
    axios.get(this.eventPostsUrl, {params: this.eventPostsData})
        .then((response) => {
            this.eventPosts = response.data;
            this.slides[0].title = response.data[0].title.rendered;
            this.slides[0].content = response.data[0].customdate[2];
        })
        .catch( (error) => {
            this.slides[0].title = 'Stübacher Kerwa';
            //console.log(error);
        });
    },
    getRandomSong() {
    axios.get(this.randomSongUrl)
        .then((response) => {
            this.randomSongPost = response.data;
            this.slides[1].content = this.randomSongPost[Math.floor(Math.random() * this.randomSongPost.length)].content.rendered;
        })
        .catch( (error) => {
            this.slides[1].title = 'Die Kerwa is kumma, die Kerwa is do, die Alten die brumma, die Junga sin froh.';
            //console.log(error);
        });
    },
    setActiveItem() {
        this.activeItem = 1;
    },
    turnOffAnimate() {
      this.animate=true;
    },
  },
  components: {
    Pager,
    Post,
    VueperSlides,
    VueperSlide
  },
  metaInfo: {
    title: 'Kerwaapp'
  }
}
</script>

<style lang="scss">
// Show multiple slides.
// ===================================
.ex--show-multiple-slides-and-gap {
  margin: auto 0px 0 0px;

  .vueperslide {
    background-color: $primaryColor;
    border-radius: 20px;
  }
  .vueperslide:first-of-type {margin-left: 17px;}

  .vueperslides__track {
    width: 90%;
    overflow: visible;
  }

  &:not(.vueperslides--slide-multiple) {
    .vueperslide {
      transform: scale(0.85);
      transition: 0.3s ease-in-out;
    }

    .vueperslide--active {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  }

  &.ex2 {width: auto;}
}

.startSlide {
  .vueperslide__content-wrapper {
    padding: 12px;
  }
}

.test {
    white-space: nowrap;
    /*transform: scale(0.85);*/
    transition: 0.3s ease-in-out;
    height: 100px;
    width: 200px;
    display: flex;
    background: $primaryColor;
}
.testAni {
    /*transform: scale(1);*/
    animation-name: fadeIn;
    opacity: 0;
    animation-duration: .7s;
    animation-fill-mode: both;
    animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}


.fade-in-down-leave-to {
  opacity: 0;
  transition: opacity .3s;
}
.fade-in-down-enter {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}
.fade-in-down-enter-to {
  opacity: 0;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
