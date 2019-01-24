<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
    @import "static/font/iconfont.css";
    @import "static/css/base.scss";

	uni-page-body{height: 100%;} 
	.content{height: 100%;display: flex;flex-flow: column;}	
	view{font-size: 28upx;box-sizing: border-box;}	   
    .align-center{text-align: center;}
    ::-webkit-scrollbar {
        width: 0;     
        height: 0;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        
        background: none;
    }
    ::-webkit-scrollbar-track {
        
        border-radius: 0;
        background: none;
    }
    view{-webkit-overflow-scrolling:touch}

    
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
    .flex-flow-row{display: flex;flex-flow: row;align-items: center;}
    .main{flex: 1;overflow: auto;margin-top: var(--status-bar-height);padding-top: $navigator-height;box-sizing: border-box;}
    /*uni-image{width: 100%;}*/
</style>
