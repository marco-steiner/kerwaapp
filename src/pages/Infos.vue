<template>
  <div class="content">
    <h1 class="container">Infos</h1>
    <div class="catSlider">
      <div class="catSliderItem" :class="{ active: i === activeItem }" v-for="({ node }, i) in $page.allWordPressKnowhow.edges" :key="node.id" @click="selectItem(i)">
        <div class="catSliderItemIcon" :class="node.id">
          <svg v-if="node.id == 53" width="31.5" height="21" viewBox="0 0 31.5 21"><path d="M21,15H3v3H21Zm0-6H3v3H21ZM3,24H15V21H3Zm29.25-6.75L34.5,19.5,24.015,30,17.25,23.25,19.5,21l4.515,4.5Z" transform="translate(-3 -9)"></path></svg>
          <svg v-if="node.id == 50" width="25" height="25" viewBox="0 0 25 25"><path d="M20.536,5.821H17.857V3.589A1.339,1.339,0,0,0,16.518,2.25H1.339A1.339,1.339,0,0,0,0,3.589V25.911A1.339,1.339,0,0,0,1.339,27.25H16.518a1.339,1.339,0,0,0,1.339-1.339v-2.35l4.5-2.008A4.469,4.469,0,0,0,25,17.477V10.286A4.469,4.469,0,0,0,20.536,5.821Zm.893,11.655a.894.894,0,0,1-.529.815L17.857,19.65V9.393h2.679a.894.894,0,0,1,.893.893Zm-9.821,4.416A.893.893,0,0,1,10.714,21V8.5a.893.893,0,1,1,1.786,0V21A.893.893,0,0,1,11.607,21.893Zm-5.357,0A.893.893,0,0,1,5.357,21V8.5a.893.893,0,1,1,1.786,0V21A.893.893,0,0,1,6.25,21.893Z" transform="translate(0 -2.25)"></path></svg>
          <svg v-if="node.id == 49" width="27.25" height="27.25" viewBox="0 0 27.25 27.25"><path d="M17,3.375A13.625,13.625,0,1,0,30.625,17,13.623,13.623,0,0,0,17,3.375Zm8.339,5.286a11.7,11.7,0,0,1,1.48,1.8.24.24,0,0,1,.026.229L25.9,13.4a.26.26,0,0,1-.138.151L22,15.264a.264.264,0,0,1-.275-.039l-3.708-3.118a.269.269,0,0,1-.092-.2V7.77a.262.262,0,0,1,.118-.216l2.515-1.71a.258.258,0,0,1,.229-.033A11.938,11.938,0,0,1,25.339,8.661ZM20.5,28.155a.242.242,0,0,1-.17.157A11.774,11.774,0,0,1,17,28.784a11.979,11.979,0,0,1-3.328-.472.271.271,0,0,1-.17-.157l-1.074-2.817a.275.275,0,0,1,.013-.216L13.9,22.352a.265.265,0,0,1,.229-.138h5.732a.257.257,0,0,1,.229.138l1.461,2.771a.275.275,0,0,1,.013.216ZM16.083,7.783v4.133a.269.269,0,0,1-.092.2l-3.714,3.111a.264.264,0,0,1-.275.039L8.235,13.554A.258.258,0,0,1,8.1,13.4l-.943-2.7a.257.257,0,0,1,.026-.229,11.876,11.876,0,0,1,6.04-4.638.258.258,0,0,1,.229.033l2.515,1.71A.217.217,0,0,1,16.083,7.783ZM5.32,17.531l2.365-2.044a.262.262,0,0,1,.282-.039L11.4,17.007a.262.262,0,0,1,.144.177l.956,3.753a.313.313,0,0,1-.02.19L10.96,24a.255.255,0,0,1-.236.138L7.711,24.1A.273.273,0,0,1,7.5,24a11.707,11.707,0,0,1-2.273-6.249A.287.287,0,0,1,5.32,17.531ZM23.033,24,21.52,21.127a.24.24,0,0,1-.02-.19l.956-3.753a.262.262,0,0,1,.144-.177l3.432-1.559a.275.275,0,0,1,.282.039l2.365,2.044a.265.265,0,0,1,.092.216A11.673,11.673,0,0,1,26.5,24a.255.255,0,0,1-.21.1l-3.02.039A.287.287,0,0,1,23.033,24Z" transform="translate(-3.375 -3.375)"></path></svg>
          <svg v-if="node.id == 48" width="33.394" height="31.803" viewBox="0 0 33.394 31.803"><g transform="translate(-338.065 -195.171)"><path d="M-577.524-611.019c-2.415-.515-.7,6.638,1.912,9.544,1.368,1.754,10.97,12.3,12.983,11.4,1.711.335,20.43-22.442,13.184-20.945S-575.109-610.5-577.524-611.019Z" transform="translate(918 815.781)" fill="none" stroke="#000" stroke-width="2.5"></path><path d="M-578.04-611.383c3.969-4.986,27.916-1.677,30.226,0" transform="translate(917.861 816.412)" fill="none" stroke="#000" stroke-width="2.5"></path><path d="M1414.311,198.34s8.8-.9,11.442-4.8-11.31,3.109-12.434,4.3" transform="translate(-1058.307 4.051)" fill="none" stroke="#000" stroke-width="2.5"></path><path d="M1425.094,198.34s-8.8-.9-11.442-4.8,11.31,3.109,12.434,4.3" transform="translate(-1070.862 4.051)" fill="none" stroke="#000" stroke-width="2.5"></path></g></svg>
          <svg v-if="node.id == 47" width="21.7" height="26.5" viewBox="0 0 21.7 26.5"><g transform="translate(-4.75 -1.75)"><path d="M18,3H8.4A2.4,2.4,0,0,0,6,5.4V24.6A2.4,2.4,0,0,0,8.4,27H22.8a2.4,2.4,0,0,0,2.4-2.4V10.2Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><path d="M21,3v7.2h7.2" transform="translate(-3)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path><path d="M13.5,22.5h7.2" transform="translate(-1.5 -3.9)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></g></svg>
          <svg v-if="node.id == 46" width="28" height="24" viewBox="0 0 28 24"><g transform="translate(-2.25 -4.5)"><path d="M29.25,4.5h-17a1.03,1.03,0,0,0-1,1.031V7.5H4.875A2.633,2.633,0,0,0,2.25,10.125V23.094A5.418,5.418,0,0,0,7.625,28.5H25.106a5.156,5.156,0,0,0,5.144-5.125V5.5A1,1,0,0,0,29.25,4.5Zm-18,5v12H8.625V10.7a3.052,3.052,0,0,0-.206-1.2ZM10.188,25.463A3.691,3.691,0,0,1,7.656,26.5,3.414,3.414,0,0,1,4.25,23.094V10.7a1.188,1.188,0,1,1,2.375,0V22.5a1,1,0,0,0,1,1h3.594A3.288,3.288,0,0,1,10.188,25.463ZM28.25,23.375A3.158,3.158,0,0,1,25.106,26.5H11.956a5.225,5.225,0,0,0,1.294-3.406V6.563h15Z" transform="translate(0 0)"></path><path d="M17.438,9.563h11.25V13.5H17.438Z" transform="translate(-2.939 -0.659)"></path><path d="M17.438,15.75h11.25V18H17.438Z" transform="translate(-2.939 -1.364)"></path><path d="M17.438,20.25h11.25V22.5H17.438Z" transform="translate(-2.939 -1.909)"></path><path d="M28.688,24.75H17.438s0,2.25-.562,2.25H27.33C28.688,27,28.688,25.523,28.688,24.75Z" transform="translate(-2.277 -2.455)"></path></g></svg>
          <svg v-if="node.id == 45" width="30.917" height="15.94" viewBox="0 0 30.917 15.94"><path d="M28.962,15.727H26.308c-1.952,0-4.937.018-5.081.018l-22.268-.018A26.935,26.935,0,0,0-.593,22.21a3.283,3.283,0,0,0,1.74,2.03,4.274,4.274,0,0,0-1.15,3,4.423,4.423,0,1,0,8.846,0A4.468,4.468,0,0,0,8.6,25.851a42.736,42.736,0,0,0,7.563,0,4.313,4.313,0,0,0-.243,1.393,4.423,4.423,0,1,0,5.512-4.274c2.062-1.9,2.881-3.015,3.334-4.341h0l4.2-.038a.887.887,0,0,0,.885-.885v-1.1A.887.887,0,0,0,28.962,15.727ZM4.42,29.014a1.769,1.769,0,1,1,1.769-1.769A1.774,1.774,0,0,1,4.42,29.014Zm17.691-1.769a1.769,1.769,0,1,1-1.769-1.769A1.774,1.774,0,0,1,22.111,27.245Z" transform="translate(1.071 -15.727)"></path></svg>
          <svg v-if="node.id == 39" width="25" height="25" viewBox="0 0 25 25"><g transform="translate(-3 -3)"><path d="M13.5,22.833V6.944L28.167,4.5V20.389" transform="translate(-1.667)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path d="M11.833,26.167A3.667,3.667,0,1,1,8.167,22.5,3.667,3.667,0,0,1,11.833,26.167Z" transform="translate(0 -3.333)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path d="M29.833,23.167A3.667,3.667,0,1,1,26.167,19.5,3.667,3.667,0,0,1,29.833,23.167Z" transform="translate(-3.333 -2.778)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></g></svg>
        </div>
        <div class="catSliderItemTxt">{{node.title}}</div>
      </div>
    </div>
    <div class="post-list container">
      <div class="infoContent" v-for="({ node }, i) in $page.allWordPressKnowhow.edges" :key="node.id" :class="{ active: i === activeItem}">
        <Info :info="node" />
      </div>
    </div>
  </div>
</template>

<page-query>
query Home ($page: Int) {
    allWordPressKnowhow (page: $page, perPage: 10) {
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
import Info from '~/components/Info.vue'

export default {
  data () {
    return {
      activeItem: 0,
    }
  },
  components: {
    Info
  },
  metaInfo: {
    title: 'Infos'
  },
  mounted() {
    this.checkListNumbering()
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
    checkListNumbering () {
      const checkList = this.$el.querySelectorAll('.checkList li');
      for (let i = 0; i < checkList.length; i++) {
        checkList[i].id='checkItem'+i;
      }
    }
  }
}
</script>

<style lang="scss">
.catSlider {
  display: flex;
  overflow-x: auto;
}
.catSliderItem {
  margin-right: 5px;
  min-width: 100px;
}
.catSliderItem:first-of-type {
  margin-left: 5px;
}
.catSliderItemIcon {
  width: 65px;
  height: 80px;
  background: #F5F5F5;
  margin: auto;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.catSliderItem.active .catSliderItemIcon {
  background: $primaryColor;
}
.catSliderItem.active .catSliderItemTxt {
  color: #000000;
}
.catSliderItemTxt {
  text-align: center;
  margin-top: 10px;
  color: #4C4C4C;
}
.infoContent {
  display: none;
  margin-top: 30px;
}
.infoContent.active {
  display: block;
}
</style>