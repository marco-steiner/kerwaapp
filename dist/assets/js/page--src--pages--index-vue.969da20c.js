(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,n){"use strict";var s={props:{post:{type:Object,required:!0}}},i=n(21),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("g-link",{attrs:{to:this.post.path}},[this._v("\n    Read More\n  ")])],1)}),[],!1,null,null,null);e.a=a.exports},188:function(t,e,n){},189:function(t,e){},235:function(t,e,n){"use strict";var s=n(188);n.n(s).a},236:function(t,e,n){"use strict";var s=n(189),i=n.n(s);e.default=i.a},245:function(t,e,n){"use strict";n.r(e);var s=n(190),i=n(171),a=n(233),o=(n(234),n(175)),r={mounted:function(){this.getEventPosts(),this.getRandomSong(),this.turnOffAnimate()},created:function(){},data:function(){return{eventPostsUrl:"https://app.kerwacrew.de/wp-json/wp/v2/event",eventPosts:[],eventPostsData:{per_page:1,page:1},randomSongUrl:"https://app.kerwacrew.de/wp-json/wp/v2/textblock/?per_page=400",randomSongPost:[],slides:[{title:"",content:""},{title:"",content:""},{title:"Gas am Glas",content:"Lernt fleißig Kerwalieder"}],activeItem:0,animate:!1}},computed:{},methods:{getEventPosts:function(){var t=this;o.get(this.eventPostsUrl,{params:this.eventPostsData}).then((function(e){t.eventPosts=e.data,t.slides[0].title=e.data[0].title.rendered,t.slides[0].content=e.data[0].customdate[2]})).catch((function(e){t.slides[0].title="Stübacher Kerwa"}))},getRandomSong:function(){var t=this;o.get(this.randomSongUrl).then((function(e){t.randomSongPost=e.data,t.slides[1].content=t.randomSongPost[Math.floor(Math.random()*t.randomSongPost.length)].content.rendered})).catch((function(e){t.slides[1].title="Die Kerwa is kumma, die Kerwa is do, die Alten die brumma, die Junga sin froh."}))},setActiveItem:function(){this.activeItem=1},turnOffAnimate:function(){this.animate=!0}},components:{Pager:s.a,Post:i.a,VueperSlides:a.VueperSlides,VueperSlide:a.VueperSlide},metaInfo:{title:"Kerwaapp"}},l=(n(235),n(21)),c=n(236),d=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("vueper-slides",{staticClass:"no-shadow ex--show-multiple-slides-and-gap",attrs:{"prevent-y-scroll":"","visible-slides":1,"slide-ratio":1/4,"dragging-distance":70,gap:-4,infinite:!1,arrows:!1,bullets:!1}},this._l(this.slides,(function(t,n){return e("vueper-slide",{key:n,attrs:{title:t.title,content:t.content}})})),1)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(d);e.default=d.exports}}]);