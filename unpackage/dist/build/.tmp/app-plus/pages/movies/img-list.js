(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movies/img-list"],{"19e3":function(t,e,i){"use strict";i.r(e);var a=i("9168"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},3232:function(t,e,i){"use strict";i("6af2");var a=s(i("b0ce")),n=s(i("9f9a"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},9168:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("9c87"));var a=n(i("299c"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{titleText:"",showStar:!0,showShare:!0,imgList:[]}},onLoad:function(t){var e=this;e.titleText=t.movieName,e.movieId=t.movieId},onReady:function(){var t=this;t.api.getImages({data:{movieId:t.movieId}}).then(function(e){t.imgList=e.images})},components:{navigate:a.default},methods:{}};e.default=s},"9f9a":function(t,e,i){"use strict";i.r(e);var a=i("c98f"),n=i("19e3");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("f5ce");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);c.options.__file="img-list.vue",e["default"]=c.exports},c130:function(t,e,i){},c98f:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("navigate",{attrs:{titleText:t.titleText,showStar:t.showStar,showShare:t.showShare,mpcomid:"db7a8bf6-0"}}),i("view",{staticClass:"main"},[i("view",{staticClass:"img-wrap"},[t._l(t.imgList,function(t,e){return i("view",{key:e,staticClass:"img-item"},[i("image",{staticClass:"movie-img",attrs:{src:t.image,mode:"aspectFill"}})])}),i("view",{staticClass:"img-item item-empty"}),i("view",{staticClass:"img-item item-empty"}),i("view",{staticClass:"img-item item-empty"}),i("view",{staticClass:"img-item item-empty"})],2)])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f5ce:function(t,e,i){"use strict";var a=i("c130"),n=i.n(a);n.a}},[["3232","common/runtime","common/vendor"]]]);