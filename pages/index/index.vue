<template>
	<view class="content">
		<view class="title-contents">
	        <view class="top-view status" :style="{background:statusColor}"></view>	       
	        <view class="_top titles" :style="{background:statusColor}">
	            <view class="titleLeftButton" @click="backButton" v-if="showLeftButton"></view>
	            <view class="titleText" :class="titleClass"></view>
	            <view class="titleRightButton" @click="rightButton" v-if="showRightButton"></view>
	        </view>
	    </view>

		<view class='header'>
			<view class='nav'>
				<view class='nav-inner'>
					<view class='nav-list' v-for='(item,index) in navList' :key='index'  @tap='tabClick'>
						<text class=''>{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class='search'></view>
			<!-- #ifdef MP-WEIXIN-->
			<view class='weixin-holder'></view>
			<!-- #endif -->
		</view>
		<view class='main'>		
			<view class="page-section swiper">
				<!--banner 无详情-->
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular='circular' indicator-color='#f3f3f3' indicator-active-color='#568ad8'>
                        <swiper-item>
                            <view class="swiper-item banner banner_01"></view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item banner banner_02"></view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item banner banner_03"></view>
                        </swiper-item>
						<swiper-item>
						    <view class="swiper-item banner banner_04"></view>
						</swiper-item>
                    </swiper>
                </view>
            </view>
			
			<view class="tool-wrap">
				<view class='tool-item'>
					<view class='tool-txt'>
						<text class='title'>在线视频</text>
						<text class='sub-title'>在家看电影</text>
					</view>
				</view>
				<view class='tool-item'>
					<view class='tool-txt'>
						<text class='title'>猜电影</text>
						<text class='sub-title'>不服来战</text>
					</view>
				</view>
				<view class='tool-item'>
					<view class='tool-txt'>
						<text class='title'>今日推荐</text>
						<text class='sub-title'>非看不可</text>
					</view>
				</view>				
			</view>
			<view class="hot-ticket-wrap">
				<view class='hot-ticket'>
					<view class='ticket-bar'>
						<text class=''>热映购票</text>
						<text class='hot-city'>{{city}}</text>
					</view>
					<view v-if='hotTicket.totalHotMovie' class='movie-number'>{{hotTicket.totalHotMovie}}部 <text class="iconfont icon-arrow-right"></text></view>
				</view>
				<view class='hot-movie-list'>
					<view class="hot-movie-inner">
						<view class='hot-movie-item' v-for='(item,index) in hotTicket.movies' v-if='hotTicket.movies.length>0' :key='item.movieId'>
							<view class='img-wrap' @tap='movieDetail(item)'>
								<image class='hot-movie-img' :src='item.img' mode='aspectFill'></image>
								<view class='movie-rating' v-if='item.ratingFinal !=-1 && item.movieId'>{{item.ratingFinal}}</view>
							</view>
							<text class='movie-name'>{{item.titleCn}}</text>
							<view class='align-center' style='padding: 20upx 0;' v-if='item.movieId'>
								<text class='buy-btn'>购票</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class='all-network-hot'>
				<view class='hot-ticket'>
					<view class='ticket-bar'>
						<text class=''>即将上映</text>
					</view>
					<view class='movie-number'>全部 <text class="iconfont icon-arrow-right"></text></view>
				</view>
				<view class='hot-movie-list'>
					<view class="hot-movie-inner">
						<view class='hot-movie-item' v-for='(item,index) in commingMovies.attention' v-if='commingMovies.attention.length>0' :key='item.id'>
							<view class='img-wrap' @tap='movieDetail(item)'>
								<image class='hot-movie-img' :src='item.image' mode='aspectFill'></image>
								<!-- <view class='movie-rating' v-if='item.ratingFinal !=-1'>{{item.ratingFinal}}</view> -->
							</view>
							<text class='movie-name'>{{item.title}}</text>							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util'
	import cityList from '../../common/cityList'
	export default {
		data() {
			return {
				statusColor:'#1e2535',
				showLeftButton:true,
				showRightButton:true,
				titleClass:'',
				autoplay:true,
				interval:3000,
				indicatorDots:true,
				circular:true,
				duration:500,
				title: 'Hello',
				city:'深圳',
				cityList:[],
				cityCode:366,				
				navList:[
					{
						id:1,
						name:'推荐'
					},
					{
						id:2,
						name:'视频'
					},
					{
						id:3,
						name:'新闻'
					},
					{
						id:4,
						name:'预告片'
					},
					{
						id:5,
						name:'影评'
					},
					{
						id:6,
						name:'时光号'
					},
					{
						id:7,
						name:'票房'
					}
				],
				hotTicket:{
					movies:[
						{},
						{},
						{}
					]
				},
				commingMovies:{
					attention:[
						{},
						{},
						{}
					]
				}
				
			}
		},
		onLoad() {
			

		},
		onReady(){
			let self = this;
			self.init();
		},
		onPullDownRefresh(){
			let self = this;
			self.onPullDownRefresh();
		},
		methods: {
			tabClick(){
				console.log('click');
			},
			movieDetail(item){
				let movieId = item.id?item.id:item.movieId;
				let self = this;
				uni.navigateTo({
					url:'/pages/movies/movie-detail?movieId='+movieId+'&cityCode='+self.cityCode
				})
			},
			backButton(){

			},
			rightButton(){

			},
			onPullDownRefresh() {
				let self = this;
				self.init();
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 2000);
		    },
		    init(){
				const self = this;	
				self.cityList = cityList.data;	
				
				//定位
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				    	//坐标转换 wgs84 => bd09 
				    	var cjo2 = util.wgs84togcj02(res.longitude,res.latitude);
				    	var bd09 = util.gcj02tobd09(cjo2[0],cjo2[1]);

				    	//获取当前城市信息
				      	util.getCityInfo(bd09[0],bd09[1]).then(res=>{
				      		self.cityList.forEach(function(item,index){
								if(self.city.indexOf(item.name) != -1){
									self.city = item.name;
									self.cityCode == item.id;	
								}
							})
				      	});
				    }
				});

				//热映购票，包含未上映
				util.request({
					url:'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId='+self.cityCode
				}).then(res=>{
					self.hotTicket = res;
				});

				//即将上映
				//attention 首页
				//moviecomings 所有即将上映影片
				util.request({
					url:'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId='+self.cityCode
				}).then(res=>{
					self.commingMovies = res;
				})
		    }
		},
		components:{
		}
	}
</script>

<style lang="scss">
	@import "static/css/base.scss";
	
	.header{height: $navigator-height;
		display: flex;flex-flow: row;background: #1e2535;color: #fff;position: fixed;left: 0;top:var(--status-bar-height);width: 100%;z-index: 999999;}

	.nav{display: flex;flex-flow: row;align-items: center;overflow-x: auto;}
	.search{min-width: 80upx;background-size: 65% auto;position: relative;}
	.nav-list{text-align: center;padding:0 30upx;}
	.nav-inner{white-space: nowrap;display: flex;flex-flow: row;}
	.weixin-holder{min-width: 180upx;}
	.banner{height: 100%;background-size: cover;background-repeat: no-repeat;}
	.uni-swiper-dots-horizontal{right: 0 !important;}

	.tool-wrap{display: flex;flex-flow: row;align-items: center;padding: 30upx 20upx;}
	.tool-item{flex: 1;display: flex;flex-flow: row;align-items: center;border:1px solid #efe3e3;border-radius: 6upx;margin-right:10upx;padding: 20upx 15upx;position: relative;}
	.tool-txt{flex: 1;display: flex;flex-flow: column;white-space: nowrap;}
	.sub-title{font-size: 12px;color: #787878;margin-top: 6upx;}
	.title{font-weight: bold;color: #333;}
	.tool-item:last-child{margin-right: 0;}
	.tool-item:after{display: block;content: '';position: absolute;width: 60upx;height: 60upx;right: 10upx;top:50%;transform:translateY(-50%);background-size: 100% auto;}
	.banner_01{background: url('http://plith9441.bkt.clouddn.com/banner_01.jpg')}
	.banner_02{background: url('http://plith9441.bkt.clouddn.com/banner_02.jpg')}
	.banner_03{background: url('http://plith9441.bkt.clouddn.com/banner_03.jpg')}
	.banner_04{background: url('http://plith9441.bkt.clouddn.com/banner_04.jpg')}
	.banner{background-size: cover;}
	.tool-item:nth-child(1):after{background: url('http://plith9441.bkt.clouddn.com/movie.png');background-size: 100% auto;}
	.tool-item:nth-child(2):after{background: url('http://plith9441.bkt.clouddn.com/paihang.png');background-size: 100% auto;}
	.tool-item:nth-child(3):after{background: url('http://plith9441.bkt.clouddn.com/movie2.png');background-size: 100% auto;}
	.hot-ticket{display: flex;flex-flow: row;align-items: center;padding: 0 20upx;justify-content: space-between;margin-top: 10upx;}
	.search:before{display: inline-block;content: '';position: absolute;left: 0;top:50%;width: 1px;height: 40%;transform:translateY(-50%);background: #5f5151}
	.hot-city,.movie-number{color:#a2a2a2;display: inline-block;margin-left: 30upx;position: relative;}
	.hot-city:before{content: '';display: inline-block;position: absolute;left: -15upx;top:50%;transform:translateY(-50%);width: 4upx;height: 4upx;border-radius: 100%;background: #a2a2a2;}

	.hot-movie-list{padding: 20upx;}
	.hot-movie-inner{overflow-x: auto;flex-flow: row;display: flex;}
	.img-wrap{position: relative;overflow: hidden;background: #e4dddd;border-radius: 8upx;height: 320upx;border:1px solid #f5ecec;}
	.hot-movie-img{width: 222upx;height: 320upx;border-radius: 8upx;}
	.hot-movie-item{margin:0 15upx 0 0;}

	.movie-rating{position: absolute;right: 0;bottom: 0;border-radius: 8upx;background: #679f08;color: #fff;width: 60upx;height: 60upx;text-align: center;line-height: 60upx;}
	.movie-name{text-align: center;display: inline-block;width: 100%;color: #3e3e3e;font-size:28upx;margin: 16upx 0 10upx 0;}
	.buy-btn{padding: 12upx 32upx;color:#fff;background: linear-gradient(left,#e1ab6b,#ff6e3b);border-radius: 40upx;box-shadow: 2upx 2upx 4upx #fd9f45;font-size: 28upx;}
	.all-network-hot{margin-top: 30upx;}

</style>
