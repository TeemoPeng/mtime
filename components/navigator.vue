<template>
    <!--自定义导航栏-->
    <view class="title-contents">
        <view class="top-view status" :style="{background:statusColor}"></view>
        <view class="_top titles">
            <view class="title-left" v-if="showLeftButton" @tap='goBack'>
                <text class='iconfont icon-back'></text>
            </view>
            <view class="title-center">{{titleText}}</view>
            <view class="title-right" v-if="showRightButton">
            <!-- #ifndef MP-WEIXIN -->
                <text v-if='showStar' :class='starActived +" iconfont"' @tap='likeMovie'></text>
                <text class='iconfont icon-ic-share-o' v-if='showShare' @tap='share'></text>
                <text class='iconfont icon-search' v-if='showSearchIcon' @tap='search'></text>
            <!-- #endif -->
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
               showLeftButton:true,
               showRightButton:true,
               statusColor:'#1e2535',
               titleClass:'',
               starActived:'icon-star'
            }
        },
        props:{
            titleText:{
                type:String,
                default:'导航栏标题'
            },
            showStar:{
                type:Boolean,
                default:false
            },
            showShare:{
                type:Boolean,
                default:false
            },
            showSearchIcon:{
                type:Boolean,
                default:false
            }

        },
        onLoad(option) {
            
        },
        onReady(){
            
        },
        methods: {
            goBack(){
                uni.navigateBack();
            },
            likeMovie(){
                let self = this;
                if(self.starActived == 'icon-star-actived'){
                    self.starActived = 'icon-star';
                    uni.showToast({
                        title:'已取消收藏',
                        icon:'none'
                    })
                }else{
                    self.starActived = 'icon-star-actived';
                    uni.showToast({
                        title:'已收藏',
                        icon:'none'
                    })
                }
            },
            share(){
                let self = this;
            },
            search(){
                let self = this;
            }
        },
        components:{
        }
    }
</script>

<style lang='scss'>
    @import "static/css/base.scss";
    /**自定义导航栏样式*/
    .status-contents{
        height: var(--status-bar-height);
    }
    .top-view{
        width: 100%;
        position: fixed;
        z-index: 99999;
        top: 0;
    }
    .status{
        height:var(--status-bar-height);
    }
    .titles{background: $navigator-background;color:$navigator-color;height: $navigator-height;display: flex;flex-flow: row;background: #1e2535;color: #f8ffff;position: fixed;left: 0;top:var(--status-bar-height);width: 100%;z-index: 999999;align-items: center;padding: 0 20upx;justify-content: space-between;}
    .title-center{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 32upx;}
    .title-left,.title-right{min-width: 120upx;}
    .title-right{text-align: right;display: flex;flex-flow: row;align-items: center;justify-content: flex-end;}
    .title-right .iconfont{margin:0 40upx;font-size: 40upx;}
    .title-left{padding: 20upx 0;}
    .title-left .iconfont{font-size: 40upx;}
    .title-right .iconfont:last-child{margin:0;}
    .icon-star-actived{color: #84d00a}
    .title-right .icon-search{font-size: 48upx;}
</style>
