(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movies/movie-detail"],{"1bda":function(t,e,i){"use strict";i.r(e);var a=i("d241"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"1eec":function(t,e,i){"use strict";i.r(e);var a=i("2ee9"),s=i("1bda");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("6314");var c=i("2877"),n=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n.options.__file="movie-detail.vue",e["default"]=n.exports},"2ee9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("navigate",{attrs:{titleText:t.titleText,showStar:t.showStar,showShare:t.showShare,mpcomid:"3fa056aa-0"}}),i("view",{staticClass:"main"},[i("view",{staticClass:"main-content"},[t.movieDetail.basic?i("view",{staticClass:"detail-bg"},[i("image",{staticClass:"detail-bg-img",attrs:{src:t.movieDetail.basic.img,mode:"scaleToFill"}})]):t._e(),t.movieDetail.basic?i("view",{staticClass:"movie-wrap"},[i("view",{staticClass:"movie-wrap-inner"},[i("view",{staticClass:"movie-items info"},[i("view",{staticClass:"movie-post"},[i("image",{staticClass:"movie-post-img",attrs:{src:t.movieDetail.basic.img,mode:"aspectFill"}})]),i("view",{staticClass:"movie-info"},[i("text",{},[t._v(t._s(t.movieDetail.basic.name))]),i("text",{staticClass:"namEn"},[t._v(t._s(t.movieDetail.basic.nameEn))]),i("view",{staticClass:"movie-brief"},[i("text",{},[t._v(t._s(t.movieDetail.basic.mins))]),i("text",{},[t._v(t._s(t.movieDetail.basic.type.join("/")))]),i("text",{},[t._v(t._s(t.releaseDate)+"中国上映")])])])]),i("view",{staticClass:"movie-items story"},[i("text",{class:t.showAllStory},[t._v("剧情："+t._s(t.movieDetail.basic.story))]),i("text",{class:t.arrowDirection+" iconfont icon-down",attrs:{eventid:"3fa056aa-0"},on:{tap:t.showMore}})]),i("view",{staticClass:"movie-items item-gap"}),i("view",{staticClass:"movie-items"},[i("view",{staticClass:"movie-workers"},[i("view",{staticClass:"movie-director actors-item"},[i("text",{staticClass:"actors-title"},[t._v("导演")]),i("view",{staticClass:"actor-img"},[i("image",{staticClass:"actor-img-wrap",attrs:{src:t.movieDetail.basic.director.img,mode:"aspectFill"}})]),i("text",{staticClass:"actor-name-cn actor-name"},[t._v(t._s(t.movieDetail.basic.director.name))]),i("text",{staticClass:"actor-name-en actor-name"},[t._v(t._s(t.movieDetail.basic.director.nameEn))])]),i("view",{staticClass:"movie-actors actors-item"},[i("text",{staticClass:"actors-title"},[t._v("主要演员")]),i("view",{staticClass:"actors-wrap-inner"},t._l(t.movieDetail.basic.actors,function(e,a){return a<=4?i("view",{key:a,staticClass:"actors-list"},[i("view",{staticClass:"actor-img"},[i("image",{staticClass:"actor-img-wrap",attrs:{src:e.img,mode:"aspectFill"}})]),i("text",{staticClass:"actor-name-cn actor-name"},[t._v(t._s(e.name))]),i("text",{staticClass:"actor-name-en actor-name"},[t._v(t._s(e.nameEn))]),i("text",{staticClass:"actor-name-en actor-name"},[t._v("饰："+t._s(e.roleName))])]):t._e()}))])]),t._m(0)]),i("view",{staticClass:"movie-items item-gap"}),i("view",{staticClass:"movie-items movie-video-img"},[i("view",{staticClass:"movie-video-wrap"},[i("view",{staticClass:"item-title"},[t._m(1),i("view",[i("text",{},[t._v(t._s(t.movieDetail.basic.video.count))]),i("text",{staticClass:"iconfont icon-arrow-right"})])]),i("view",{staticClass:"item-content",attrs:{eventid:"3fa056aa-1"},on:{tap:t.goVideoList}},[i("image",{staticClass:"video-wrap",attrs:{src:t.movieDetail.basic.video.img}}),i("text",{staticClass:"iconfont icon-play"})])]),i("view",{staticClass:"movie-img-wrap"},[i("view",{staticClass:"item-title"},[t._m(2),i("view",[i("text",{},[t._v(t._s(t.movieDetail.basic.stageImg.count))]),i("text",{staticClass:"iconfont icon-arrow-right"})])]),i("view",{staticClass:"item-content",attrs:{eventid:"3fa056aa-2"},on:{tap:t.goImgList}},[i("image",{staticClass:"img-wrap",attrs:{src:t.movieDetail.basic.stageImg.list[0].imgUrl,mode:"aspectFill"}})])])]),t.movieDetail.boxOffice.todayBox>0?i("view",{staticClass:"movie-items item-gap"}):t._e(),t.movieDetail.boxOffice.todayBox>0?i("view",{staticClass:"movie-items"},[i("view",{staticClass:"office-item"},[i("text",[t._v(t._s(t.movieDetail.boxOffice.ranking))]),t._m(3)]),i("view",{staticClass:"office-item"},[i("text",[t._v(t._s(t.movieDetail.boxOffice.todayBoxDes))]),t._m(4)]),i("view",{staticClass:"office-item"},[i("text",[t._v(t._s(t.movieDetail.boxOffice.totalBoxDes))]),t._m(5)])]):t._e(),t.comment.mini.list.length>0?i("view",{staticClass:"movie-items item-gap"}):t._e(),t.comment.mini.list.length>0?i("view",{staticClass:"movie-items movie-short-comment"},[t._m(6),i("view",{staticClass:"comment-content"},[t._l(t.comment.mini.list,function(e,a){return t.comment?i("view",{key:a,staticClass:"comment-list"},[i("view",{staticClass:"user-img"},[i("image",{staticClass:"user-head-img",attrs:{src:e.headImg}})]),i("view",{staticClass:"comment-info"},[i("view",{staticClass:"info-list"},[i("text",{staticClass:"color-gray"},[t._v(t._s(e.nickname))]),e.rating>0?i("text",{staticClass:"color-green"},[t._v("评 "+t._s(e.rating%1==0?e.rating+".0":e.rating))]):t._e()]),i("view",{staticClass:"info-list"},[t._v(t._s(e.content))]),i("view",{staticClass:"info-list"},[i("view",{staticClass:"color-gray comment-time"},[t._v(t._s(e.commentDate))]),i("view",{staticClass:"color-gray comment-opt"},[i("view",{},[i("text",{staticClass:"iconfont icon-comment"}),i("text",{},[t._v(t._s(e.replyCount>0?e.replyCount:""))])]),i("view",{},[i("text",{staticClass:"iconfont icon-zan"}),i("text",{},[t._v(t._s(e.praiseCount>0?e.praiseCount:""))])])])])])]):t._e()}),t.comment.mini.total>0?i("view",{staticClass:"more-comment"},[i("text",{staticClass:"color-green",attrs:{eventid:"3fa056aa-3"},on:{tap:t.goMiniCommentList}},[t._v("查看更多"+t._s(t.comment.mini.total)+"条评论")])]):t._e()],2)]):t._e(),i("view",{staticClass:"movie-items item-gap"}),t.comment.plus.total>0?i("view",{staticClass:"movie-items movie-long-comment"},[t._m(7),i("view",{staticClass:"item-long-comment"},[i("view",{staticClass:"long-content"},[i("text",{},[t._v(t._s(t.comment.plus.list[0].title))])]),i("view",{staticClass:"flex-flow-row long-list color-gray"},[i("view",{},[i("image",{staticClass:"user-head-img user-head-img2",attrs:{src:t.comment.plus.list[0].headImg}})]),i("text",{},[t._v(t._s(t.comment.plus.list[0].nickname))]),i("text",{},[t._v(t._s(t.comment.plus.list[0].replyCount)+"评论")])])])]):t._e()])]):t._e()]),i("view",{staticClass:"main-footer"},[t._m(8),t._m(9),i("view",{staticClass:"foot-buy"},[i("text",{staticClass:"buy-btn"},[t._v(t._s(t.buyBtnText))])])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"movie-number all-actors"},[t._v("全部"),i("text",{staticClass:"iconfont icon-arrow-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("text",{},[t._v("视频")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("text",{},[t._v("图片")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("text",[t._v("票房排名 "),i("text",{staticClass:"iconfont icon-arrow-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("text",[t._v("今日实时（万） "),i("text",{staticClass:"iconfont icon-arrow-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("text",[t._v("累计票房（万） "),i("text",{staticClass:"iconfont icon-arrow-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item-title"},[i("view",[i("text",{},[t._v("短评")])]),i("view",[i("text",{},[t._v("全部")]),i("text",{staticClass:"iconfont icon-arrow-right"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item-title"},[i("view",[i("text",{},[t._v("影评")])]),i("view",[i("text",{},[t._v("全部")]),i("text",{staticClass:"iconfont icon-arrow-right"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"foot-like foot-txt"},[i("text",{staticClass:"iconfont icon-like"}),i("text",{},[t._v("想看")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"foot-comment foot-txt"},[i("text",{staticClass:"iconfont icon-edit"}),i("text",{},[t._v("评论/评分")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},3178:function(t,e,i){},6314:function(t,e,i){"use strict";var a=i("3178"),s=i.n(a);s.a},d241:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("9c87")),s=(o(i("95f7")),o(i("299c")));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{isShowBack:!0,movieId:"",cityCode:"",titleText:"",showStar:!0,showShare:!0,movieDetail:"",releaseDate:{},showAllStory:"story-txt",arrowDirection:"",buyBtnText:"",comment:{mini:{list:[]},plus:{total:0}},pageIndex:1}},onLoad:function(t){var e=this;e.movieId=t.movieId,e.cityCode=t.cityCode},onReady:function(){var t=this;a.default.request({url:"https://ticket-api-m.mtime.cn/movie/detail.api?locationId="+t.cityCode+"&movieId="+t.movieId}).then(function(e){t.titleText=e.data.basic.name,t.movieDetail=e.data;var i=t.movieDetail.basic.releaseDate.substring(0,4),s=t.movieDetail.basic.releaseDate.substring(4,6),o=t.movieDetail.basic.releaseDate.substring(6,8);t.releaseDate=i+"年"+s+"月"+o+"日";var c=(new Date).getTime(),n=new Date(i+"-"+s+"-"+o).getTime();c>=n?(console.log("在线选座"),t.buyBtnText="在线选座"):(console.log("预售"),t.buyBtnText="预售"),a.default.request({url:"https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId="+t.movieDetail.basic.movieId}).then(function(e){t.comment=e.data,t.comment.mini.list.forEach(function(t,e){t.commentDate=a.default.formatDate("Y-m-d H:i:s",t.commentDate)})})})},methods:{showMore:function(){var t=this;""==t.showAllStory?(t.showAllStory="story-txt",t.arrowDirection=""):(t.showAllStory="",t.arrowDirection="arrow-up")},getMoreMiniComments:function(t){var e=this;a.default.request({url:"https://api-m.mtime.cn/Showtime/HotMovieComments.api?movieId="+e.movieDetail.basic.movieId+"&pageIndex="+e.pageIndex}).then(function(t){1==e.pageIndex&&(console.log("list:",t.data.cts),e.comment.mini.list=t.data.cts),e.pageIndex++})},goMiniCommentList:function(){},goVideoList:function(){var e=this;t.navigateTo({url:"/pages/movies/video-list?movieName="+e.movieDetail.basic.name+"&movieId="+e.movieDetail.basic.movieId})},goImgList:function(){var e=this;t.navigateTo({url:"/pages/movies/img-list?movieName="+e.movieDetail.basic.name+"&movieId="+e.movieDetail.basic.movieId})}},components:{navigate:s.default}};e.default=c}).call(this,i("649d")["default"])},fa08:function(t,e,i){"use strict";i("6af2");var a=o(i("b0ce")),s=o(i("1eec"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))}},[["fa08","common/runtime","common/vendor"]]]);