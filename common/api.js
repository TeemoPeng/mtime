import util from 'common/util'
import host from 'common/host'

const API = {
    getMinComents(option){
        //获取短评
        return new Promise((resolve,rejected)=>{
            util.request({
                url:'Showtime/HotMovieComments.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getMovieDetail(option){
        //影片详情
        return new Promise((resolve,rejected)=>{
            util.request({
                host:host.ticket,
                url:'movie/detail.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getMovieComment(option){
        //影片评论
        return new Promise((resolve,rejected)=>{
            util.request({
                host:host.ticket,
                url:'movie/hotComment.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getHotPlayMovies(option){
        //热映影片
        return new Promise((resolve,rejected)=>{
            util.request({
                url:'PageSubArea/HotPlayMovies.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getMovieComingNew(option){
        //即将上映
        return new Promise((resolve,rejected)=>{
            util.request({
                url:'Movie/MovieComingNew.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getVideoList(option){
        //视频列表
        return new Promise((resolve,rejected)=>{
            util.request({
                url:'Movie/Video.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },
    getImages(option){
        //剧照、图片
        return new Promise((resolve,rejected)=>{
            util.request({
                url:'/Movie/ImageAll.api',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(rej=>{
                rejected(rej);
            })
        })
    },

    /**
     * 根据经纬度获取城市信息 ，由百度web api 提供 ，坐标需为bd09（百度坐标）
     * @param  {[type]} lng [经度]
     * @param  {[type]} lat [纬度]
     * @return {[type]}    
     */
    getCityInfo(option){
        return new Promise(function(resolve,rejected){
            //百度地图web API 逆地理解析
            util.request({
                host:host.baiduMap,
                url:'?callback=?&location='+option.lat+','+option.lng+'&output=json&ak=s1fxz45Ttt9PsG8ZbwKfaymgoYWozpQW'
            }).then(res=>{
                resolve(res);
            }).catch(res=>{
                rejected(res);
            });
        });
    },

    //猫眼 过滤影院
    filterCinemas(option){
        return new Promise(function(resolve,rejected){
            //百度地图web API 逆地理解析
            util.request({
                host:host.mMaoyan,
                url:'ajax/filterCinemas',
                data:option.data
            }).then(res=>{
                resolve(res);
            }).catch(res=>{
                rejected(res);
            });
        });
    },
}
export default API;