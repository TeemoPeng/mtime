<template>
    <view class="content">
        <navigate :titleText='titleText' :showStar='showStar' :showShare='showShare' :showSearchIcon='showSearchIcon'></navigate>
        <view class='filter-wrap'>
            <navscroll></navscroll>
        </view>
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
    import util from '@/common/util'
    import navigate from '@/components/navigator'
    import cities from '@/common/maoyan-cities'
    import navscroll from '@/components/nav-scroll'

    export default {
        data() {
            return {
                isShowBack:true,
                movieId:'',
                titleText:'',
                showStar:false,
                showShare:false,     
                showSearchIcon:true,          
                pageIndex:1,
                totalCount:0,
                loadingText:'',
                commentList:[],
                loadAll:false,
                totalPage:0,
                cId:''
            }
        },
        onLoad(option) {
            let self = this;
            self.titleText = option.movieName;
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
                //获取短评
                let self = this;

                //定位
                uni.getLocation({
                    type: 'wgs84',
                    success: function (res) {
                        //坐标转换 wgs84 => bd09 
                        var cjo2 = util.wgs84togcj02(res.longitude,res.latitude);
                        var bd09 = util.gcj02tobd09(cjo2[0],cjo2[1]);

                        //获取当前城市信息
                        self.api.getCityInfo({
                            lat:bd09[1],
                            lng:bd09[0]
                        }).then(res=>{
                            cities.data.forEach(function(item,index){
                                if(res.result.addressComponent.city.indexOf(item.name) != -1){
                                    self.cId = item.id; 
                                }
                            })
                        }).then(()=>{
                            //过滤影院
                            self.api.filterCinemas({
                                data:{
                                    cid:self.cId
                                }
                            }).then(res=>{
                                console.log('cinemas:',res);
                            })                            
                        });
                    }
                });               
            },
            loadMore(){
                //加载更多
                let self = this;
                self.api.getMinComents({
                    data:{
                        pageIndex:self.pageIndex,
                        movieId:self.movieId                        
                    }
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
                    rejected();
                })   
            },
            onPullDownRefresh(){
                this.init().then(()=>{
                    uni.stopPullDownRefresh();
                })
            }
        },
        components:{
            navigate,
            navscroll
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
    .no-scroll-view{margin-top: var(--status-bar-height);padding-top: $navigator-height+$filter-height;box-sizing: border-box;background: #ff0;}

    .main-footer{height: $footer-height;border-top: 1px solid #bbbbbb;background: #fff;position: fixed;bottom: 0;left:0;right: 0;z-index: 9999999;display: flex;flex-flow: row;}
    .foot-like,.foot-comment{flex: 1;}
    .foot-buy{flex: 3;}
    .buy-btn{color: #fff;background: #669d0e;flex: 1;height: 100%;width: 100%;display: flex;line-height: $footer-height;justify-content: center;font-size: 36upx;letter-spacing: 6upx;}
    .foot-txt{color: #6b6b6b;display: flex;flex-flow: column;align-items: center;justify-content: center;}
    .foot-txt text:nth-child(2){font-size: 24upx;}
    .foot-txt text:nth-child(1){font-size: 40upx;margin-bottom: 6upx;}

    .filter-wrap{position: fixed;left: 0;right: 0;top:  $navigator-height;height: $filter-height;background: #ccc;}
</style>