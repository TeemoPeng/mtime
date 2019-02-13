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
                        <view class="movie-items item-gap"></view>

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

                        <view class="movie-items item-gap"></view>

                        <view class="movie-items movie-video-img">
                            <!--视频、图片-->
                            <view class="movie-video-wrap">
                                <view class="item-title">
                                    <view><text class=''>视频</text></view>
                                    <view><text class=''>{{movieDetail.basic.video.count}}</text> <text class="iconfont icon-arrow-right"></text></view>
                                </view>
                                <view class="item-content" @tap='goVideoList'>
                                    <image class='video-wrap' :src='movieDetail.basic.video.img'></image>
                                    <text class="iconfont icon-play"></text>
                                </view>
                            </view>
                            <view class="movie-img-wrap">
                                <view class="item-title">
                                    <view><text class=''>图片</text></view>
                                    <view><text class=''>{{movieDetail.basic.stageImg.count}}</text> <text class="iconfont icon-arrow-right"></text></view>
                                </view>
                                <view class="item-content" @tap='goImgList'>
                                    <image class='img-wrap' :src='movieDetail.basic.stageImg.list[0].imgUrl' mode='aspectFill'></image>
                                </view>
                            </view>
                        </view>
                        <view class="movie-items item-gap" v-if='movieDetail.boxOffice.todayBox>0'></view>
                        <view class="movie-items" v-if='movieDetail.boxOffice.todayBox>0'>
                            <!--票房-->
                            <view class='office-item'>
                                <text>{{movieDetail.boxOffice.ranking}}</text>
                                <text>票房排名 <text class="iconfont icon-arrow-right"></text></text>
                            </view>
                            <view class='office-item'>
                                <text>{{movieDetail.boxOffice.todayBoxDes}}</text>
                                <text>{{movieDetail.boxOffice.todayBoxDesUnit}}<text class="iconfont icon-arrow-right"></text></text>
                            </view>
                            <view class='office-item'>
                                <text>{{movieDetail.boxOffice.totalBoxDes}}</text>
                                <text>{{movieDetail.boxOffice.totalBoxUnit}} <text class="iconfont icon-arrow-right"></text></text>
                            </view>
                        </view>      

                        <view class="movie-items item-gap" v-if='comment.mini.list.length > 0'></view>  
                        <view class="movie-items movie-short-comment" v-if='comment.mini.list.length > 0'>
                            <!--短评-->
                            <view class="item-title">
                                <view><text class=''>短评</text></view>
                                <view><text class=''  @tap='goMiniCommentList'>全部</text> <text class="iconfont icon-arrow-right"></text></view>
                            </view>
                            <view class='comment-content'>
                                <view class="comment-list" v-for='(item,index) in comment.mini.list' v-if='comment' :key='index'>
                                    <view class='user-img'>
                                        <image class='user-head-img' :src='item.headImg'></image>
                                    </view>
                                    <view class='comment-info'>
                                        <view class='info-list'>
                                            <text class='color-gray'>{{item.nickname}}</text>
                                            <text class='color-green' v-if='item.rating > 0'>评 {{item.rating%1==0?item.rating+'.0':item.rating}}</text>
                                        </view>
                                        <view class="info-list">{{item.content}}</view>
                                        <view class="info-list">
                                            <view class='color-gray comment-time'>{{item.commentDate}}</view>
                                            <view class='color-gray comment-opt'>
                                                <view class=''>
                                                    <text class='iconfont icon-comment'> </text>
                                                    <text class=''>{{item.replyCount>0?item.replyCount:''}}</text>
                                                </view>
                                                <view class=''>
                                                    <text class='iconfont icon-zan'></text>
                                                    <text class=''>{{item.praiseCount>0?item.praiseCount:''}}</text>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                </view>

                                <view class='more-comment' v-if='comment.mini.total > 0'>
                                    <text class='color-green' @tap='goMiniCommentList'>查看更多{{comment.mini.total}}条评论 </text>
                                </view>
                            </view>
                        </view>  

                        <view class="movie-items item-gap"></view>  

                        <view class="movie-items movie-long-comment" v-if='comment.plus.total>0'>
                            <!--精选影评-->
                            <view class="item-title">
                                <view><text class=''>影评</text></view>
                                <view><text class=''>全部</text> <text class="iconfont icon-arrow-right"></text></view>
                            </view>
                            <view class="item-long-comment">
                                <view class='long-content'>
                                    <text class=''>{{comment.plus.list[0].title}}</text>
                                </view>
                                <view class='flex-flow-row long-list color-gray'>
                                    <view class=''>
                                        <image class='user-head-img user-head-img2' :src='comment.plus.list[0].headImg'></image>
                                    </view>
                                    <text class=''>{{comment.plus.list[0].nickname}}</text>
                                    <text class=''>{{comment.plus.list[0].replyCount}}评论</text>
                                </view>
                            </view>
                        </view>                
                    </view>
                </view>
            </view>
            <view class="main-footer">
                <!--底部-->
                <view class='foot-like foot-txt' @tap=''>
                    <text class='iconfont icon-like'></text>
                    <text class=''>想看</text>
                </view>
                <view class='foot-comment foot-txt' @tap=''>
                    <text class='iconfont icon-edit'></text>
                    <text class=''>评论/评分</text>
                </view>
                <view class='foot-buy'>
                    <text class='buy-btn' @tap='buyTicket'>{{buyBtnText}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import util from '@/common/util'
    import cityList from '@/common/cityList'
    import navigate from '@/components/navigator'
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
                buyBtnText:'',
                comment:{
                    mini:{
                        list:[]
                    },
                    plus:{
                        total:0
                    }
                },
                pageIndex:1
            }
        },
        onLoad(option) {
            let self = this;
            self.movieId = option.movieId;
            self.cityCode = option.cityCode;

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
            init(){
                let self = this;
                return new Promise((resolve,rejected)=>{
                    self.api.getMovieDetail({
                        data:{
                            locationId:self.cityCode,
                            movieId:self.movieId                            
                        }
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
                            self.buyBtnText = '在线选座';
                        }else{
                            self.buyBtnText = '预售';
                        }
                    }).then(()=>{
                        self.api.getMovieComment({
                            host:self.host.ticket,
                            data:{
                                movieId:self.movieId                                
                            }
                        }).then(res=>{
                            console.log('comment:',res);
                            self.comment = res.data;                    
                            self.comment.mini.list.forEach((item,index)=>{
                                item.commentDate= util.formatDate('Y-m-d H:i:s',item.commentDate);
                            })
                            resolve();
                        }).catch(rej=>{
                            rejected();
                        })
                    })

                    // util.request({
                    //     url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId='+self.cityCode+'&movieId='+self.movieId
                    // }).then(res=>{
                    //     self.titleText = res.data.basic.name;
                    //     self.movieDetail = res.data;
                    //     let year = self.movieDetail.basic.releaseDate.substring(0,4),
                    //         month = self.movieDetail.basic.releaseDate.substring(4,6),
                    //         day = self.movieDetail.basic.releaseDate.substring(6,8);
                    //     self.releaseDate = year+'年'+month+'月'+day+'日';

                    //     let currentDate = new Date().getTime();
                    //     let releaseDate = (new Date(year+'-'+month+'-'+day)).getTime();

                    //     if(currentDate >= releaseDate){
                    //         self.buyBtnText = '在线选座';
                    //     }else{
                    //         self.buyBtnText = '预售';
                    //     }

                    //     //获取评论                
                    //     util.request({
                    //         url:'https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId='+self.movieDetail.basic.movieId
                    //     }).then(res=>{
                    //         self.comment = res.data;                    
                    //         self.comment.mini.list.forEach((item,index)=>{
                    //             item.commentDate= util.formatDate('Y-m-d H:i:s',item.commentDate);
                    //         })
                    //         resolve();
                    //     }).catch(rej=>{
                    //         rejected();
                    //     })
                    // })                    
                })
            },
            buyTicket(){
                let self = this;
                // uni.showToast({
                //     title:'该功能尚未开发',
                //     icon:'none'
                // })
                uni.navigateTo({
                    url:'cinemas?movieName='+self.movieDetail.basic.name
                })
            },
            onPullDownRefresh() {
                let self = this;
                self.init().then(res=>{
                    uni.stopPullDownRefresh();                    
                });
            },
            showMore(){
                let self = this;
                if(self.showAllStory == ''){
                    self.showAllStory = 'story-txt';
                    self.arrowDirection = '';
                }else{
                    self.showAllStory = '';
                    self.arrowDirection = 'arrow-up';
                }
            },
            getMoreMiniComments(pageIndex){
                //获取更多短评
                let self = this;
                util.request({
                    url:'https://api-m.mtime.cn/Showtime/HotMovieComments.api?movieId='+self.movieDetail.basic.movieId+'&pageIndex='+self.pageIndex
                }).then(res=>{
                    if(self.pageIndex == 1){
                        console.log('list:',res.data.cts)
                        self.comment.mini.list = res.data.cts;
                    }
                self.pageIndex++;
                })
            },
            goMiniCommentList(){
                //所有短评
                let self = this;
                uni.navigateTo({
                    url:'/pages/movies/mini-comment?movieId='+self.movieDetail.basic.movieId
                })
            },
            goVideoList(){
                //视频、预告片列表
                let self = this;
                uni.navigateTo({
                    url:'/pages/movies/video-list?movieName='+self.movieDetail.basic.name+'&movieId='+self.movieDetail.basic.movieId
                })
            },
            goImgList(){
                //图片列表
                let self = this;
                uni.navigateTo({
                    url:'/pages/movies/img-list?movieName='+self.movieDetail.basic.name+'&movieId='+self.movieDetail.basic.movieId
                })
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
    .movie-wrap-inner{margin-top: -110upx;}
    .movie-items{display: flex;flex-flow: row;padding: 20upx;position: relative;}
    .movie-post{width: 222upx;height: 320upx;margin-right: 20upx;}
    .movie-post-img{width: 222upx;height: 320upx;padding: 4upx;background: #fff;}
    .movie-info{display: flex;flex-flow: column;color: #fff;font-size: 30upx;flex: 1;margin-left: 8upx;}
    .namEn{font-size: 24upx;margin-top: 10upx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 90%;}
    .movie-brief{margin-top: 26upx;color: #212121;font-size: 28upx;display: flex;flex-flow: column;}
    .movie-brief text{margin: 10upx 0;}
    .story{padding: 40upx 20upx;line-height: 1.6;font-size: 28upx;display: flex;flex-flow: column;}
    .story .icon-down{color: #999;text-align: center;margin-top: 10upx;font-size: 38upx;}
    .story-txt{word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

    .item-gap{height: 30upx;background: #f1f1f1;border:1px solid #f5eaea;border-left:none;border-right: none;}
    .arrow-up{transform:rotate(180deg);}
    .detail-bg-img{width: 100%;height: 200upx;}

    .actors-title{margin: 0 0 20upx 0;width: 100%;font-size: 30upx;}
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

    .movie-video-wrap{flex: 4;padding-right:30upx;}
    .movie-img-wrap{flex: 3;padding-left:30upx;}
    .movie-video-img{padding: 20upx;}
    .item-title{display: flex;flex-flow: row;align-items: center;justify-content: space-between;flex: 1;}
    .item-title view:nth-child(2){color: #a2a2a2;}
    .item-content{position: relative;margin: 20upx 0;}
    .video-wrap{width: 380upx;height: 260upx;border:1px solid #f5eaea;position: relative;overflow: visible;}
    .item-content .icon-play{position: absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index: 9999;color: #fff;font-size: 90upx;width: 90upx;height: 90upx;border-radius: 100%;background: rgba(0,0,0,.7)}
    .img-wrap{width: 260upx;height: 260upx;border:1px solid #f5eaea;background: #000;}
    .video-wrap:after{position: absolute;right: -30upx;;top:0;width: 1px;height: 100%;content: '';background: #f5eaea;}
    .office-item{flex: 1;display: flex;flex-flow: column;align-items: center;justify-content: center;}
    .office-item>text:nth-child(2){font-size: 24upx;color:#777;display: flex;flex-flow: row;align-items: center;}
    .office-item>text:nth-child(1){font-size: 36upx;color:#ff8601;margin-bottom: 10upx;}
    .office-item>text:nth-child(2) .icon-arrow-right{font-size: 20upx;}
    .movie-short-comment{padding: 20upx;display: flex;flex-flow: column;}
    .user-head-img{width: 100upx;height: 100upx;border-radius: 100%;border:1px solid #f5eaea;}
    /*.comment-content{padding: 20upx 0;}*/
    .comment-info{margin-left: 16upx;flex: 1;padding-right: 20upx;}
    .info-list{display: flex;flex-flow: row;align-items: center;justify-content: space-between;margin: 0 0 20upx 0;}
    .comment-list{display: flex;flex-flow: row;padding: 30upx 0 20upx 0;border-bottom: 1px solid #f5eaea;}
    .color-gray{color: #999;}
    .color-green{color:#71a618;}
    .comment-time{flex: 2;font-size: 26upx}
    .comment-opt{flex: 1;display: flex;flex-flow: row;align-items: center;justify-content: space-between;}
    .comment-opt .iconfont{font-size: 44upx;margin-right: 4upx;}
    .comment-opt>view{display: flex;flex-flow: row;align-items: center;}
    .more-comment{padding: 40upx 0 20upx 0;text-align: center;}
    .movie-long-comment{display: flex;flex-flow: column;padding: 20upx;}
    .long-content{padding: 20upx 0;}
    .user-head-img2{width: 60upx;height: 60upx;}
    .long-list>view{margin-right: 10upx;}
    .long-list>text{padding: 0 20upx;}
    .long-list>text:nth-child(2){border-right: 1px solid #999;}
    .item-content .icon-play:before{display: block;margin-top: -4upx;}
</style>


