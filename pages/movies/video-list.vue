<template>
    <view class="content">
        <navigate :titleText='titleText' :showStar='showStar' :showShare='showShare'></navigate>
        <view class='main'>
            <view class="video-wrap flex-flow-column">
                <view class='video-item' v-for='(item,index) in videoList' :key='index'>
                    <view class='video-main'>
                        <video :src='item.hightUrl' controls :poster='item.image' objectFit='cover' direction='90' @ended='videoEnd' @play='videoPlay'></video>
                    </view>
                    <view class='video-title flex-flow-row'>
                        <text class=''>{{item.title}}</text>
                        <view class='video-opt'>
                            <text class='iconfont icon-comment'></text>
                            <text class='iconfont icon-zan'></text>
                        </view>
                    </view>
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
                pageIndex:1,
                videoList:[]
            }
        },
        onLoad(option) {
            let self = this;
            self.titleText = option.movieName;
            self.movieId = option.movieId;
        },
        onReady(){
            let self = this;
            util.request({
                url:'https://api-m.mtime.cn/Movie/Video.api?pageIndex='+self.pageIndex+'&movieId='+self.movieId
            }).then(res=>{
                self.videoList = res.videoList;
            })
        },
        components:{
            navigate
        },
        methods:{
            videoEnd(){
                let self = this;

            },
            videoPlay(){
                let self = this;

            }
        }
    }
</script>
<style lang='scss'>
    .video-main video{width: 100%;}
    .video-title{padding: 0 20upx;justify-content: space-between;}
    .video-item{margin:0 0 30upx 0;}
    .video-opt{display: flex;flex-flow: row;margin:10upx;text-align: right;align-items: flex-end;justify-content: flex-end;}
    .video-opt>text{padding: 0 30upx;font-size: 44upx;color: #999;}
</style>