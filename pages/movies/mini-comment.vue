<template>
    <view class="content">
        <navigate :titleText='titleText+"（"+ totalCount +"）"' :showStar='showStar' :showShare='showShare'></navigate>
        <view class='no-scroll-view'>
            <view class="comment-wrap">
                <view class='comment-content'>
                    <view class="comment-list" v-for='(item,index) in commentList' v-if='commentList.length>0' :key='index'>
                        <view class='user-img'>
                            <image class='user-head-img' :src='item.caimg'></image>
                        </view>
                        <view class='comment-info'>
                            <view class='info-list'>
                                <text class='color-gray'>{{item.ca}}</text>
                                <text class='color-green' v-if='item.rating > 0'>评 {{item.rating%1==0?item.rating+'.0':item.rating}}</text>
                            </view>
                            <view class="info-list">{{item.ce}}</view>
                            <view class="info-list">
                                <view class='color-gray comment-time'>{{item.date}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="loading">{{loadingText}}</view>
                </view>
            </view>
            
        </view>
    </view>
</template>

<script>
    import util from '../../common/util'
    import navigate from '../../components/navigator'
    export default {
        data() {
            return {
                isShowBack:true,
                movieId:'',
                titleText:'短评',
                showStar:false,
                showShare:false,               
                pageIndex:1,
                totalCount:0,
                loadingText:'',
                commentList:[],
                loadAll:false,
                totalPage:0
            }
        },
        onLoad(option) {
            let self = this;
            self.movieId = option.movieId;
        },
        onReady(){
            let self = this;
            self.init();
        },
        onPullDownRefresh(){
            let self = this;
            self.onPullDownRefresh();
        },
        onReachBottom(){
            let self = this;
            self.pageIndex++;
            if(!self.loadAll){
                self.loadMore();
            }
        },
        methods: {
            init(){
                let self = this;
                self.loadAll = false;
                return new Promise((resolve,rejected)=>{
                    util.request({
                        url:self.api.getMinComents+'?pageIndex='+self.pageIndex+'&movieId='+self.movieId
                    }).then(res=>{                 
                        self.commentList = [];       
                        self.commentList = res.data.cts;
                        self.commentList.forEach((item,index)=>{
                            item.date = util.formatDate('Y-m-d H:i:s',item.cd);
                        })
                        self.totalCount = res.data.totalCount;
                        self.loadingText = '加载中...';
                        resolve();
                    }).catch(rej=>{
                        rejected();
                    })         
                })
            },
            loadMore(){
                //加载更多
                let self = this;
                util.request({
                    url:'https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex='+self.pageIndex+'&movieId='+self.movieId
                }).then(res=>{
                    if(res.data.cts.length <= 0){
                        self.loadAll = true;
                        self.pageIndex = 1;
                        self.loadingText = '已加载全部';
                    }else{
                        res.data.cts.forEach((item,index)=>{
                            item.date = util.formatDate('Y-m-d H:i:s',item.cd);
                        })
                        self.commentList = self.commentList.concat(res.data.cts);;
                        self.loadingText = '加载中...';                        
                    }
                }).catch(rej=>{
                })    
            },
            onPullDownRefresh(){
                this.init().then(()=>{
                    uni.stopPullDownRefresh();
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
    .comment-info{margin-left: 16upx;flex: 1;padding-right: 20upx;}
    .info-list{display: flex;flex-flow: row;align-items: center;justify-content: space-between;margin: 0 0 20upx 0;}
    .comment-list{display: flex;flex-flow: row;padding: 30upx 0 20upx 0;border-bottom: 1px solid #f5eaea;}
    .color-gray{color: #999;}
    .color-green{color:#71a618;}
    .comment-time{flex: 2;font-size: 26upx}
    .comment-opt{flex: 1;display: flex;flex-flow: row;align-items: center;justify-content: space-between;}
    .comment-opt .iconfont{font-size: 44upx;margin-right: 4upx;}
    .comment-opt>view{display: flex;flex-flow: row;align-items: center;}
    .user-head-img{width: 80upx;height: 80upx;border-radius: 100%;border: 1px solid #f5eaea;background: #ccc;}
    .comment-wrap{padding: 20upx;}
    .no-scroll-view{margin-top: var(--status-bar-height);padding-top: $navigator-height;box-sizing: border-box;}

    .main-footer{height: $footer-height;border-top: 1px solid #bbbbbb;background: #fff;position: fixed;bottom: 0;left:0;right: 0;z-index: 9999999;display: flex;flex-flow: row;}
    .foot-like,.foot-comment{flex: 1;}
    .foot-buy{flex: 3;}
    .buy-btn{color: #fff;background: #669d0e;flex: 1;height: 100%;width: 100%;display: flex;line-height: $footer-height;justify-content: center;font-size: 36upx;letter-spacing: 6upx;}
    .foot-txt{color: #6b6b6b;display: flex;flex-flow: column;align-items: center;justify-content: center;}
    .foot-txt text:nth-child(2){font-size: 24upx;}
    .foot-txt text:nth-child(1){font-size: 40upx;margin-bottom: 6upx;}
</style>