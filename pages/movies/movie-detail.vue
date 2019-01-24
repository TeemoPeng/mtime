<template>
    <view class="content">
        <navigate :titleText='titleText' :showStar='showStar' :showShare='showShare'></navigate>
        <view class='main'>
            <view class="main-content">
                <view class='detail-bg' v-if='movieDetail.basic'>
                    <image class='detail-bg-img' :src='movieDetail.basic.img' mode='scaleToFill'></image>
                </view>
                <view class='movie-wrap' v-if='movieDetail.basic'>
                    <view class='movie-wrap-inner'>
                        <view class='movie-items info'>
                            <view class='movie-post'>
                                <image class='movie-post-img' :src='movieDetail.basic.img' mode='aspectFill'></image>
                            </view>
                            <view class="movie-info">
                                <text class=''>{{movieDetail.basic.name}}</text>
                                <text class='namEn'>{{movieDetail.basic.nameEn}}</text>
                                <view class='movie-brief'>
                                    <text class=''>{{movieDetail.basic.mins}}</text>
                                    <text class=''>{{movieDetail.basic.type.join('/')}}</text>
                                    <text class=''>{{releaseDate}}中国上映</text>
                                </view>
                            </view>
                        </view>
                        <view class="movie-items story">
                            <text :class='showAllStory'>剧情：{{movieDetail.basic.story}}</text>
                            <text :class='arrowDirection+" iconfont icon-down"' @tap='showMore'></text>
                        </view>
                        <view class="movie-items itme-gap"></view>

                        <view class='movie-items'>
                            <!--演职员表-->
                            <view class='movie-workers'>
                                <view class="movie-director actors-item">
                                    <text class='actors-title'>导演</text>
                                    <view class='actor-img'>
                                        <image class='actor-img-wrap' :src='movieDetail.basic.director.img' mode='aspectFill'></image>
                                    </view>
                                    <text class='actor-name-cn actor-name'>{{movieDetail.basic.director.name}}</text>
                                    <text class='actor-name-en actor-name'>{{movieDetail.basic.director.nameEn}}</text>
                                </view>                            
                                <view class="movie-actors actors-item">
                                    <text class='actors-title'>主要演员</text>
                                    <view class="actors-wrap-inner">
                                        <view class='actors-list' v-for='(item,index) in movieDetail.basic.actors' v-if='index<=4' :key='index'>
                                            <view class='actor-img'>
                                                <image class='actor-img-wrap' :src='item.img' mode='aspectFill'></image>
                                            </view>
                                            <text class='actor-name-cn actor-name'>{{item.name}}</text>
                                            <text class='actor-name-en actor-name'>{{item.nameEn}}</text>
                                            <text class='actor-name-en actor-name'>饰：{{item.roleName}}</text>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class='movie-number all-actors'>全部 <text class="iconfont icon-arrow-right"></text></view>
                        </view>

                        <view class="movie-items itme-gap"></view>

                        <view class="movie-video-img">
                            <!--视频、图片-->
                            
                        </view>
                    </view>
                </view>
            </view>
            <view class="main-footer">
                <view class='foot-like foot-txt'>
                    <text class='iconfont icon-like'></text>
                    <text class=''>想看</text>
                </view>
                <view class='foot-comment foot-txt'>
                    <text class='iconfont icon-edit'></text>
                    <text class=''>评论/评分</text>
                </view>
                <view class='foot-buy'>
                    <text class='buy-btn'>{{buyBtnText}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import util from '../../common/util'
    import cityList from '../../common/cityList'
    import navigate from '../../common/navigator'
    export default {
        data() {
            return {
                isShowBack:true,
                movieId:'',
                cityCode:'',
                titleText:'',
                showStar:true,
                showShare:true,
                movieDetail:'',
                releaseDate:{},
                showAllStory:'story-txt',
                arrowDirection:'',
                buyBtnText:'预售'
            }
        },
        onLoad(option) {
            let self = this;
            self.movieId = option.movieId;
            self.cityCode = option.cityCode;

        },
        onReady(){
            let self = this;
            util.request({
                url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId='+self.cityCode+'&movieId='+self.movieId
            }).then(res=>{
                self.titleText = res.data.basic.name;
                self.movieDetail = res.data;
                let year = self.movieDetail.basic.releaseDate.substring(0,4),
                    month = self.movieDetail.basic.releaseDate.substring(4,6),
                    day = self.movieDetail.basic.releaseDate.substring(6,8);
                self.releaseDate = year+'年'+month+'月'+day+'日';

                let currentDate = new Date().getTime();
                let releaseDate = (new Date(year+'-'+month+'-'+day)).getTime();

                if(currentDate >= releaseDate){
                    console.log('在线选座');
                    self.buyBtnText = '在线选座';
                }else{
                    console.log('预售');
                    self.buyBtnText = '预售';
                }
            })
        },
        methods: {
            showMore(){
                let self = this;
                if(self.showAllStory == ''){
                    self.showAllStory = 'story-txt';
                    self.arrowDirection = '';
                }else{
                    self.showAllStory = '';
                    self.arrowDirection = 'arrow-up';
                }
            }
        },
        components:{
            navigate
        }
    }
</script>

<style lang='scss'>
    @import "static/css/base.scss";
    .detail-bg{height: 200upx;width: 100%;overflow: hidden;filter: blur(20px);border-bottom: 1px solid #ddd;position: relative;}
    .movie-wrap{display: flex;flex-flow: column;position: relative;z-index: 999;background: #fff;}
    .movie-wrap-inner{margin-top: -100upx;}
    .movie-items{display: flex;flex-flow: row;padding: 0 20upx;position: relative;}
    .movie-post{width: 222upx;height: 320upx;margin-right: 20upx;}
    .movie-post-img{width: 222upx;height: 320upx;padding: 4upx;background: #fff;}
    .movie-info{display: flex;flex-flow: column;color: #fff;font-size: 30upx;flex: 1;margin-left: 8upx;}
    .namEn{font-size: 24upx;margin-top: 10upx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 90%;}
    .movie-brief{margin-top: 26upx;color: #212121;font-size: 28upx;display: flex;flex-flow: column;}
    .movie-brief text{margin: 10upx 0;}
    .story{padding: 40upx 20upx;line-height: 1.6;font-size: 28upx;display: flex;flex-flow: column;}
    .story .icon-down{color: #999;text-align: center;margin-top: 10upx;font-size: 38upx;}
    .story-txt{word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

    .itme-gap{height: 30upx;background: #f1f1f1;border:1px solid #f5eaea;border-left:none;border-right: none;}
    .arrow-up{transform:rotate(180deg);}
    .detail-bg-img{width: 100%;height: 200upx;}

    .actors-title{margin: 20upx 0;width: 100%;font-size: 30upx;}
    .actor-img-wrap{width: 200upx;height: 200upx;border:1px solid #e4dddd;position: relative;overflow: visible;}
    .actors-item{display: flex;flex-flow: column;align-items: center;font-size: 28upx;color: #333;}
    .actor-name{margin: 4upx 0;font-size: 24upx;text-align: center;}
    .actor-img{margin-bottom: 18upx;}
    .movie-workers{display: flex;flex-flow: row;overflow: auto;position: relative;padding-bottom: 30upx;}
    .movie-director{padding-right: 30upx;position: relative;}
    .movie-director .actor-img-wrap:after{position: absolute;right: -25upx;height: 100%;top:0;width: 1px;background: #f5eaea;content: '';display: inline-block;}
    .actors-item{margin-left: 20upx;}
    .actors-wrap-inner{display: flex;flex-flow: row;}
    .actors-list{margin-right: 24upx;display: flex;flex-flow: column;align-items: center;}
    .all-actors{position: absolute;right: 0;top: 20upx;color: #a2a2a2}
    .main-inner{display: flex;flex-flow: column;}
    .main-content{flex: 1;overflow: auto;padding-bottom: $footer-height;}
    .main-footer{height: $footer-height;border-top: 1px solid #bbbbbb;background: #fff;position: fixed;bottom: 0;left:0;right: 0;z-index: 9999999;display: flex;flex-flow: row;}
    .foot-like,.foot-comment{flex: 1;}
    .foot-buy{flex: 3;}
    .buy-btn{color: #fff;background: #669d0e;flex: 1;height: 100%;width: 100%;display: flex;line-height: $footer-height;justify-content: center;font-size: 36upx;letter-spacing: 6upx;}
    .foot-txt{color: #6b6b6b;display: flex;flex-flow: column;align-items: center;justify-content: center;}
    .foot-txt text:nth-child(2){font-size: 24upx;}
    .foot-txt text:nth-child(1){font-size: 40upx;margin-bottom: 6upx;}
</style>


