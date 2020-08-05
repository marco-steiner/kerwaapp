<template>
  <div class="content">
    <div class="container scrollContent" :class="{'fixedContent' : fixedDiv }">
      <h1>Kerwalieder</h1>
      <input type="text" class="search" v-model="searchVal" placeholder='Suchen...'>
      <!--<div class="searchCats active">
        <div class="searchCat">alle</div>
        <div class="searchCat">allgemein</div>
        <div class="searchCat">gegen andere</div>
      </div>-->
    </div>

    <ClientOnly>
      <VuePullRefresh :on-refresh="onRefresh" :config="config" :class="{'fixedPullContainer' : fixedDiv }">
        <!-- custom refresh spinner, use default `spinner` & viewBox 0,0,64,64 class -->
        <svg class="spinner" style="stroke: #4b8bf4;" slot="refresh-spinner" viewBox="0 0 64 64">
        <g stroke-width="7" stroke-linecap="round"><line x1="10" x2="10" y1="27.3836" y2="36.4931"><animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate></line><line x1="24" x2="24" y1="18.6164" y2="45.3836"><animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate></line><line x1="38" x2="38" y1="16.1233" y2="47.8767"><animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate></line><line x1="52" x2="52" y1="16" y2="48"><animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate></line></g></svg>

        <p class="no-results" v-if="noResults">Kein Kerwalied gefunden...</p>

        <swipe-list
          ref="list"
          class="card"
          :disabled="!enabled"
          :items="filteredData"
          item-key="id"
          @rightRevealed="closeOthers('rightRevealed', $event)"
        >
          <template v-slot="{ item }">
            <div class="card-content">
              {{ item.node.content }}
            </div>
          </template>
          <template v-slot:right="{ item, close, index }">
            <div class="swipeout-action" @click="close">
              close
            </div>
            <div class="swipeout-action">
              <div v-if="!isPlaying" @click="play(item,index)">play</div>
              <div v-if="isPlaying" @click="pause(item,index)">pause</div>
            </div>
          </template>
        </swipe-list>
      </VuePullRefresh>
    </ClientOnly>

  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressTextblock (page: $page, perPage: 500) {
    edges {
      node {
        id
        content
      }
    }
  }
}
</page-query>

<script>
import VuePullRefresh from '~/components/VuePullRefresh.vue' /* https://github.com/lakb248/vue-pull-refresh */
import { SwipeList, SwipeOut } from 'vue-swipe-actions' /* https://github.com/eCollect/vue-swipe-actions */

export default {
  components: {
    VuePullRefresh,
    SwipeOut,
    SwipeList
  },
  metaInfo: {
    title: 'Kerwalieder'
  },
  data() {
    return {
      searchVal: "",
      fixedDiv: true,
      lastScrollPosition: 0,
      config: {
        errorLabel: "Beim Laden der Lieder ist ein Fehler aufgetreten ...",
        startLabel: "Lieder nachladen",
        readyLabel: "Zum Nachladen loslassen",
        loadingLabel: "Lade Lieder ...",
        pullDownHeight: ""
      },
      enabled: true,
      //isLoading: true,
      isPlaying: false,
      //selectedVoice: 47 /*0*/,
      voiceList: []    
    }
  },
  mounted (){
    window.addEventListener('scroll', this.onScroll)

    this.synth = window.speechSynthesis
    this.speechText = new window.SpeechSynthesisUtterance()

    // wait for voices to load
    // I can't get FF to work without calling this first
    // Chrome works on the onvoiceschanged function
    this.voiceList = this.synth.getVoices()
    /*if (this.voiceList.length) {
      this.isLoading = false
    }*/
    /*
    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
      // give a bit of delay to show loading screen
      // just for the sake of it, I suppose. Not the best reason
      setTimeout(() => {
        this.isLoading = false
      }, 800)
    }*/
    this.listenForSpeechEvents()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    noResults() {
      return this.filteredData.length === 0;
    },
    filteredData () {
      return this.$page.allWordPressTextblock.edges.filter(edge => {
        return edge.node.content.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    onRefresh: function() {
      return new Promise(function (resolve, reject) {
          setTimeout(function () {
              resolve();
          }, 1000);
      });
    },
    onScroll: function(){
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition <= 0) {
        //document.getElementsByClassName('pull-down-container').style.top="50px";        
      }
      this.fixedDiv = currentScrollPosition <= 0
      this.lastScrollPosition = currentScrollPosition
    },
    revealFirstRight() {
      this.$refs.list.revealRight(0);
    },
    closeAll() {
      this.$refs.list.closeActions();
      this.synth.cancel();
      this.isPlaying = false
    },
    closeOthers(name, { item, index }) {
      this.filteredData.forEach((element, i) => {
        if (i !== index) this.$refs.list.closeActions(i)
      })
      this.synth.cancel();
      this.isPlaying = false
    },
    /**
     * React to speech events
     */
    listenForSpeechEvents () {
      this.speechText.onstart = () => {
        //this.isLoading = true
        this.isPlaying = true
      }
      this.speechText.onend = () => {
        this.isPlaying = false
      }
    },
    /**
     * Play SpeechText
     */
    play (item, index) {
      if (this.synth.speaking) {
        this.synth.cancel();
      }
      this.filteredData.forEach((element, i) => {
        if (i == index) {
          const speakItem = this.filteredData.filter(i => i == item)
          const speakText = speakItem[0].node.content
          /*console.log(speakText)*/
          this.speechText.text = speakText
        }
      })
      //this.speechText.voice = this.voiceList[this.selectedVoice]
        this.speechText.voice = speechSynthesis.getVoices().filter(function(voice) {
          //console.log(voice.name, '-', voice.lang);
          return voice.name == 'Google Deutsch - German';
        })[0];
      this.speechText.volume = 1
      this.speechText.rate = 1.1
      this.speechText.pitch = 1
      this.synth.speak(this.speechText)
    },
    pause () {
      this.synth.cancel();
    }
  }
}
</script>

<style lang="scss">
  .search {
      height: 3rem;
      margin: 30px auto 10px;
      width: 100%;
      display: block;
      border-radius: 10rem;
      border: 2px solid #ccc;
      font-size: 1.3rem;
      padding: 0 2rem;
      outline: none;
      box-shadow: none;
      transition: all .2s;
  }
  .search::-webkit-input-placeholder {
      color: lightgray;
  }
  .search:focus {
      background: white;
      color: black;
  }
  .search:focus::-webkit-input-placeholder {
      color: lightgray;
  }
.searchCats {
  display: none;
}  
.searchCats.active {
  display: block;
  margin-left: 15px;
}  
.searchCat {
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 4px 15px;
  background: #dddddd;
  border-radius: 30px;
  font-size: 15px;
}

.swipeout {
	position: relative;
	overflow: hidden;
	display: flex;
}

.swipeout .swipeout-left, .swipeout .swipeout-right {
	position: absolute;
	height: 100%;
	display: flex;
	z-index: 1;
}

.swipeout .swipeout-left {
	left: 0;
	transform: translateX(-100%);
}

.swipeout .swipeout-right {
	right: 0;
	transform: translateX(100%);
}

.swipeout .swipeout-content,
.swipeout .swipeout-action {
	transition: transform .2s;
	will-change: transform;
}

.swipeout.swipeout--no-transition .swipeout-content,
.swipeout.swipeout--no-transition .swipeout-action {
  transition: none !important;
}

.swipeout .swipeout-content {
	width: 100%;
}

.swipeout-non-selectable {
	user-select: none !important;
}

.swipeout-no-pointer-events {
	pointer-events: none !important;
}

/* SwipeList */

.swipeout-list {
	display: flex;
	flex-direction: column;
}

.swipeout-list-item {
  flex: 1;
  padding: 1em 15px;
  border-top: 1px solid #ccc;
}
</style>