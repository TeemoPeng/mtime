const x_PI = 3.14159265358979324 * 3000.0 / 180.0;
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;
let util = {
	/**
	 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
	 * 即 百度 转 谷歌、高德
	 * @param bd_lon
	 * @param bd_lat
	 * @returns {*[]}
	 */
	bd09togcj02(bd_lon, bd_lat) {
		var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
		var x = bd_lon - 0.0065;
		var y = bd_lat - 0.006;
		var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
		var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
		var gg_lng = z * Math.cos(theta);
		var gg_lat = z * Math.sin(theta);
		return [gg_lng, gg_lat]
	},

	/**
	 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
	 * 即谷歌、高德 转 百度
	 * @param lng
	 * @param lat
	 * @returns {*[]}
	 */
	gcj02tobd09(lng, lat) {
		var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
		var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
		var bd_lng = z * Math.cos(theta) + 0.0065;
		var bd_lat = z * Math.sin(theta) + 0.006;
		return [bd_lng, bd_lat]
	},

	/**
	 * WGS84转GCj02
	 * @param lng
	 * @param lat
	 * @returns {*[]}
	 */
	wgs84togcj02(lng, lat) {
		if (this.out_of_china(lng, lat)) {
			return [lng, lat]
		}
		else {
			var dlat = this.transformlat(lng - 105.0, lat - 35.0);
			var dlng = this.transformlng(lng - 105.0, lat - 35.0);
			var radlat = lat / 180.0 * PI;
			var magic = Math.sin(radlat);
			magic = 1 - ee * magic * magic;
			var sqrtmagic = Math.sqrt(magic);
			dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
			dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
			var mglat = lat + dlat;
			var mglng = lng + dlng;
			return [mglng, mglat]
		}
	},

	/**
	 * GCJ02 转换为 WGS84
	 * @param lng
	 * @param lat
	 * @returns {*[]}
	 */
	gcj02towgs84(lng, lat) {
		if (this.thout_of_china(lng, lat)) {
			return [lng, lat]
		}
		else {
			var dlat = this.transformlat(lng - 105.0, lat - 35.0);
			var dlng = this.transformlng(lng - 105.0, lat - 35.0);
			var radlat = lat / 180.0 * PI;
			var magic = Math.sin(radlat);
			magic = 1 - ee * magic * magic;
			var sqrtmagic = Math.sqrt(magic);
			dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
			dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
			mglat = lat + dlat;
			mglng = lng + dlng;
			return [lng * 2 - mglng, lat * 2 - mglat]
		}
	},

	transformlat(lng, lat) {
		var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
		ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
		ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
		return ret
	},

	transformlng(lng, lat) {
		var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
		ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
		ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
		return ret
	},

	/**
	 * 判断是否在国内，不在国内则不做偏移
	 * @param lng
	 * @param lat
	 * @returns {boolean}
	 */
	out_of_china(lng, lat) {
		return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
	},

	/**
	 * 根据经纬度获取城市信息 ，由百度web api 提供 ，坐标需为bd09（百度坐标）
	 * @param  {[type]} lng [经度]
	 * @param  {[type]} lat [纬度]
	 * @return {[type]}    
	 */
	getCityInfo(lng,lat){
	     return new Promise(function(resolve,rejected){
	     	//百度地图web API 逆地理解析
		     util.request({
		        	url:'http://api.map.baidu.com/geocoder/v2/?callback=?&location='+lat+','+lng+'&output=json&ak=s1fxz45Ttt9PsG8ZbwKfaymgoYWozpQW'
		     }).then(res=>{
		     	resolve(res);
		     }).catch(res=>{
		     	rejected(res);
		     });
	     });
	},
	request(option){
		return new Promise((resolve,rejected)=>{
			uni.request({
				url:option.url,
				method:option.method?option.method:'get',
				data:option.data,
				header:option.header,
				dataType:option.dataType,
				responseType:option.responseType,
				success(res){
					resolve(res.data);
				},
				fail(res){
					uni.showToast({
		        			title:'请求失败，请稍后重试',
		        			icon:'none',
		        			duration:2000
		        		})
		        		rejected(res);
				},
				complete:option.complete
			})
		})
	},
	fmoney:function(s, n){			
	    n = n >= 0 && n <= 20 ? n : 2;
	    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
	    t = "";
	    for (i = 0; i < l.length; i++) {
	        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	    }
	    if(n==0){
	    	return t.split("").reverse().join("");
	    }else{
	    	return t.split("").reverse().join("") + "." + r;	    	
	    }
	},
	/**
	 * @param  {[string]} format    格式：'Y-m-d H:i:s' 、'Y-m-d'
	 * @param  {[timestamp]} timestamp [时间戳]
	 * @return {[date]}           [2012-10-12 22:37:33]
	 * 时间格式化
	 */
	formatDate(format, timestamp){  
	     var a, jsdate=((timestamp) ? new Date(timestamp*1000) : new Date()); 
	     var pad = function(n, c){ 
	        if((n = n + "").length < c){ 
	            return new Array(++c - n.length).join("0") + n; 
	        } else { 
	            return n; 
	        } 
	     }; 
	     var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	     var txt_ordin = {1:"st", 2:"nd", 3:"rd", 21:"st", 22:"nd", 23:"rd", 31:"st"}; 
	     var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  

	     var f = { 
	        // Day 
	        d: function(){return pad(f.j(), 2)}, 
	        D: function(){return f.l().substr(0,3)}, 
	        j: function(){return jsdate.getDate()}, 
	        l: function(){return txt_weekdays[f.w()]}, 
	        N: function(){return f.w() + 1}, 
	        S: function(){return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'}, 
	        w: function(){return jsdate.getDay()}, 
	        z: function(){return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0}, 
	        
	        // Week 
	        W: function(){ 
	            var a = f.z(), b = 364 + f.L() - a; 
	            var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1; 
	            if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){ 
	                return 1; 
	            } else{ 
	                if(a <= 2 && nd >= 4 && a >= (6 - nd)){ 
	                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31"); 
	                    return date("W", Math.round(nd2.getTime()/1000)); 
	                } else{ 
	                    return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0); 
	                } 
	            } 
	        }, 
	        
	        // Month 
	        F: function(){return txt_months[f.n()]}, 
	        m: function(){return pad(f.n(), 2)}, 
	        M: function(){return f.F().substr(0,3)}, 
	        n: function(){return jsdate.getMonth() + 1}, 
	        t: function(){ 
	            var n; 
	            if( (n = jsdate.getMonth() + 1) == 2 ){ 
	                return 28 + f.L(); 
	            } else{ 
	                if( n & 1 && n < 8 || !(n & 1) && n > 7 ){ 
	                    return 31; 
	                } else{ 
	                    return 30; 
	                } 
	            } 
	        }, 
	        
	        // Year 
	        L: function(){var y = f.Y();return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0}, 
	        //o not supported yet 
	        Y: function(){return jsdate.getFullYear()}, 
	        y: function(){return (jsdate.getFullYear() + "").slice(2)}, 
	        
	        // Time 
	        a: function(){return jsdate.getHours() > 11 ? "pm" : "am"}, 
	        A: function(){return f.a().toUpperCase()}, 
	        B: function(){ 
	            // peter paul koch: 
	            var off = (jsdate.getTimezoneOffset() + 60)*60; 
	            var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off; 
	            var beat = Math.floor(theSeconds/86.4); 
	            if (beat > 1000) beat -= 1000; 
	            if (beat < 0) beat += 1000; 
	            if ((String(beat)).length == 1) beat = "00"+beat; 
	            if ((String(beat)).length == 2) beat = "0"+beat; 
	            return beat; 
	        }, 
	        g: function(){return jsdate.getHours() % 12 || 12}, 
	        G: function(){return jsdate.getHours()}, 
	        h: function(){return pad(f.g(), 2)}, 
	        H: function(){return pad(jsdate.getHours(), 2)}, 
	        i: function(){return pad(jsdate.getMinutes(), 2)}, 
	        s: function(){return pad(jsdate.getSeconds(), 2)}, 
	        //u not supported yet 
	        
	        // Timezone 
	        //e not supported yet 
	        //I not supported yet 
	        O: function(){ 
	            var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4); 
	            if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t; 
	            return t; 
	        }, 
	        P: function(){var O = f.O();return (O.substr(0, 3) + ":" + O.substr(3, 2))}, 
	        //T not supported yet 
	        //Z not supported yet 
	        
	        // Full Date/Time 
	        c: function(){return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()}, 
	        //r not supported yet 
	        U: function(){return Math.round(jsdate.getTime()/1000)} 
	     }; 
	        
	    	return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){ 
	    		let ret ='';
	        	if( t!=s ){ 
	            	// escaped 
	            	ret = s; 
	        	} else if( f[s] ){ 
	            	// a date function exists 
	            	ret = f[s](); 
	        	} else{ 
	            	// nothing special 
	            	ret = s; 
	        	} 
	        	return ret; 
	     }); 
	}
}
export default util;