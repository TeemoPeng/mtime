<template>
    <view class="content">
        <navigate :titleText='titleText' :showStar='showStar' :showShare='showShare'></navigate>
        <view class='main'>
            <view class="img-wrap">
                <view class="img-item" v-for='(item,index) in imgList' :key='index'>
                    <image class='movie-img' :src='item.image' mode='aspectFill'></image>
                </view>
                <view class="img-item item-empty"></view>
                <view class="img-item item-empty"></view>
                <view class="img-item item-empty"></view>
                <view class="img-item item-empty"></view>
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
               titleText:'',
               showStar:true,
               showShare:true,
               imgList:[]
            }
        },
        onLoad(option) {
            let self = this;
            self.titleText = option.movieName;
            self.movieId = option.movieId;
        },
        onReady(){
            let self = this;
            self.api.getImages({
                data:{
                    movieId:self.movieId
                }
            }).then(res=>{
                self.imgList = res.images;
            })
        },
        components:{
            navigate
        },
        methods:{
        }
    }
</script>
<style lang='scss'>
    .img-wrap{background: #000;padding:20upx 0 0 0;min-height: 100%;}
    .img-item{width: 173upx;height: 173upx;margin-bottom: 20upx;}
    .movie-img{width: 100%;height: 100%;}
    .img-wrap{display: flex;flex-flow: row;flex-wrap: wrap;align-items: center;justify-content: space-between;}
    .item-empty{background: transparent;height: 0;}
</style>