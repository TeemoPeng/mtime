(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0df5":function(t,i,e){"use strict";var a=e("65de"),s=e.n(a);s.a},"65de":function(t,i,e){},7034:function(t,i,e){"use strict";e("6af2");var a=n(e("b0ce")),s=n(e("fd08"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"772f":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("9c87")),s=n(e("95f7"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{statusColor:"#1e2535",showLeftButton:!0,showRightButton:!0,titleClass:"",autoplay:!0,interval:3e3,indicatorDots:!0,circular:!0,duration:500,title:"Hello",city:"深圳",cityList:[],cityCode:366,navList:[{id:1,name:"推荐"},{id:2,name:"视频"},{id:3,name:"新闻"},{id:4,name:"预告片"},{id:5,name:"影评"},{id:6,name:"时光号"},{id:7,name:"票房"}],hotTicket:{movies:[{},{},{},{}]},commingMovies:{attention:[{},{},{},{}]}}},onLoad:function(){},onReady:function(){var t=this;t.init()},onPullDownRefresh:function(){var t=this;t.onPullDownRefresh()},methods:{tabClick:function(){console.log("click")},movieDetail:function(i){var e=i.id?i.id:i.movieId,a=this;t.navigateTo({url:"/pages/movies/movie-detail?movieId="+e+"&cityCode="+a.cityCode})},backButton:function(){},rightButton:function(){},onPullDownRefresh:function(){var i=this;i.init().then(function(){t.stopPullDownRefresh()})},init:function(){var i=this;return new Promise(function(e,n){i.cityList=s.default.data,t.getLocation({type:"wgs84",success:function(e){var s=a.default.wgs84togcj02(e.longitude,e.latitude),n=a.default.gcj02tobd09(s[0],s[1]);i.api.getCityInfo({lat:n[1],lng:n[0]}).then(function(e){t.showToast({title:e,duration:1e4}),i.cityList.forEach(function(t,e){-1!=i.city.indexOf(t.name)&&(i.city=t.name,i.cityCode,t.id)})})}}),i.api.getHotPlayMovies({data:{locationIdtionId:i.cityCode}}).then(function(t){i.hotTicket=t}).then(function(){i.api.getMovieComingNew({data:{locationId:i.cityCode}}).then(function(t){i.commingMovies=t,e()}).catch(function(t){n()})})})}},components:{}};i.default=o}).call(this,e("649d")["default"])},"8ad4":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[e("view",{staticClass:"title-contents"},[e("view",{staticClass:"top-view status",style:{background:t.statusColor}}),e("view",{staticClass:"_top titles",style:{background:t.statusColor}},[t.showLeftButton?e("view",{staticClass:"titleLeftButton",attrs:{eventid:"42f26a26-0"},on:{click:t.backButton}}):t._e(),e("view",{staticClass:"titleText",class:t.titleClass}),t.showRightButton?e("view",{staticClass:"titleRightButton",attrs:{eventid:"42f26a26-1"},on:{click:t.rightButton}}):t._e()])]),e("view",{staticClass:"header"},[e("view",{staticClass:"nav"},[e("view",{staticClass:"nav-inner"},t._l(t.navList,function(i,a){return e("view",{key:a,staticClass:"nav-list",attrs:{eventid:"42f26a26-2-"+a},on:{tap:t.tabClick}},[e("text",{},[t._v(t._s(i.name))])])}))]),e("view",{staticClass:"search"})]),e("view",{staticClass:"main"},[e("view",{staticClass:"page-section swiper"},[e("view",{staticClass:"page-section-spacing"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:t.circular,"indicator-color":"#f3f3f3","indicator-active-color":"#568ad8"}},[e("swiper-item",{attrs:{mpcomid:"42f26a26-0"}},[e("view",{staticClass:"swiper-item banner banner_01"})]),e("swiper-item",{attrs:{mpcomid:"42f26a26-1"}},[e("view",{staticClass:"swiper-item banner banner_02"})]),e("swiper-item",{attrs:{mpcomid:"42f26a26-2"}},[e("view",{staticClass:"swiper-item banner banner_03"})]),e("swiper-item",{attrs:{mpcomid:"42f26a26-3"}},[e("view",{staticClass:"swiper-item banner banner_04"})])],1)],1)]),t._m(0),e("view",{staticClass:"hot-ticket-wrap"},[e("view",{staticClass:"hot-ticket"},[e("view",{staticClass:"ticket-bar"},[e("text",{},[t._v("热映购票")]),e("text",{staticClass:"hot-city"},[t._v(t._s(t.city))])])]),e("view",{staticClass:"hot-movie-list"},[e("view",{staticClass:"hot-movie-inner"},t._l(t.hotTicket.movies,function(i,a){return t.hotTicket.movies.length>0?e("view",{key:i.movieId,staticClass:"hot-movie-item"},[e("view",{staticClass:"img-wrap",attrs:{eventid:"42f26a26-3-"+a},on:{tap:function(e){t.movieDetail(i)}}},[e("image",{staticClass:"hot-movie-img",attrs:{src:i.img,mode:"aspectFill"}}),-1!=i.ratingFinal&&i.movieId?e("view",{staticClass:"movie-rating"},[t._v(t._s(i.ratingFinal))]):t._e()]),e("text",{staticClass:"movie-name"},[t._v(t._s(i.titleCn))]),i.movieId?e("view",{staticClass:"align-center",staticStyle:{padding:"20rpx 0"}},[e("text",{staticClass:"buy-btn"},[t._v("购票")])]):t._e()]):t._e()}))])]),e("view",{staticClass:"all-network-hot"},[t._m(1),e("view",{staticClass:"hot-movie-list"},[e("view",{staticClass:"hot-movie-inner"},t._l(t.commingMovies.attention,function(i,a){return t.commingMovies.attention.length>0?e("view",{key:i.id,staticClass:"hot-movie-item"},[e("view",{staticClass:"img-wrap",attrs:{eventid:"42f26a26-4-"+a},on:{tap:function(e){t.movieDetail(i)}}},[e("image",{staticClass:"hot-movie-img",attrs:{src:i.image,mode:"aspectFill"}})]),e("text",{staticClass:"movie-name"},[t._v(t._s(i.title))])]):t._e()}))])])])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"tool-wrap"},[e("view",{staticClass:"tool-item"},[e("view",{staticClass:"tool-txt"},[e("text",{staticClass:"title"},[t._v("在线视频")]),e("text",{staticClass:"sub-title"},[t._v("在家看电影")])])]),e("view",{staticClass:"tool-item"},[e("view",{staticClass:"tool-txt"},[e("text",{staticClass:"title"},[t._v("猜电影")]),e("text",{staticClass:"sub-title"},[t._v("不服来战")])])]),e("view",{staticClass:"tool-item"},[e("view",{staticClass:"tool-txt"},[e("text",{staticClass:"title"},[t._v("今日推荐")]),e("text",{staticClass:"sub-title"},[t._v("非看不可")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"hot-ticket"},[e("view",{staticClass:"ticket-bar"},[e("text",{},[t._v("即将上映")])])])}];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},a6d0:function(t,i,e){"use strict";e.r(i);var a=e("772f"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},fd08:function(t,i,e){"use strict";e.r(i);var a=e("8ad4"),s=e("a6d0");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("0df5");var o=e("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);c.options.__file="index.vue",i["default"]=c.exports}},[["7034","common/runtime","common/vendor"]]]);