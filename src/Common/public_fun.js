import sunDay from '../static/img/sunDay.jpg';
import partlyCloudy from '../static/img/partlyCloudy.jpg';
import cloudy from '../static/img/cloudy.jpg';
import overcast from '../static/img/overcast.jpg';
import breeze from '../static/img/breeze.jpg';
import strongBreeze from '../static/img/strongBreeze.jpg';
import storm from '../static/img/storm.jpg';
import tropicalStorm from '../static/img/tropicalStorm.jpg';
import haze from '../static/img/haze.jpg';
import lightRain from '../static/img/lightRain.jpg';
import rain from '../static/img/rain.jpg';
import heavyRain from '../static/img/heavyRain.jpg';
import thunderShower from '../static/img/thunderShower.jpg';
import freezingRain from '../static/img/freezingRain.jpg';
import snow from '../static/img/snow.jpg';
import heavySnow from '../static/img/heavySnow.jpg';
import floatingDust from '../static/img/floatingDust.jpg';
import sandStorm from '../static/img/sandStorm.jpg';
import tornado from '../static/img/tornado.jpg';
import fog from '../static/img/fog.jpg';
import hot from '../static/img/hot.jpg';
import cold from '../static/img/cold.jpg';
import none from '../static/img/none.jpg';

const public_fun = {
    isEmptyObject(obj) {
        for (var key in obj) {
            //返回false，不为空对象
            return false;
        }
        return true; //返回true，为空对象
    },

    changeWeaterType(weaterType, isNight = false) {
        if (!weaterType) return '';
        let type = {};
        if (weaterType === '晴' || weaterType === '平静') {
            type.class = 'sunDay';
            type.src = sunDay;
        } else if (weaterType === '少云' || weaterType === '晴间少云') {
            type.class = 'partlyCloudy';
            type.src = partlyCloudy;
        } else if (weaterType === '多云') {
            type.class = 'cloudy';
            type.src = cloudy;
        } else if (weaterType === '阴') {
            type.class = 'overcast';
            type.src = overcast;
        } else if (weaterType === '有风' || weaterType === '微风' || weaterType === '和风' || weaterType === '清风') {
            type.class = 'breeze';
            type.src = breeze;
        } else if (weaterType === '强风' || weaterType === '劲风' || weaterType === '疾风' || weaterType === '大风' || weaterType === '烈风') {
            type.class = 'strongBreeze';
            type.src = strongBreeze;
        } else if (weaterType === '风暴' || weaterType === '狂爆风') {
            type.class = 'storm';
            type.src = storm;
        } else if (weaterType === '热带风暴') {
            type.class = 'tropicalStorm';
            type.src = tropicalStorm;
        } else if (weaterType === '霾' || weaterType === '中度霾' || weaterType === '重度霾' || weaterType === '严重霾') {
            type.class = 'haze';
            type.src = haze;
        } else if (weaterType === '阵雨' || weaterType === '小雨' || weaterType === '中雨' || weaterType === '毛毛雨/细雨' || weaterType === '雨' || weaterType === '小雨-中雨') {
            type.class = 'lightRain';
            type.src = lightRain;
        } else if (weaterType === '大雨' || weaterType === '暴雨' || weaterType === '强阵雨' || weaterType === '中雨-大雨' || weaterType === '大雨-暴雨') {
            type.class = 'rain';
            type.src = rain;
        } else if (weaterType === '大暴雨' || weaterType === '特大暴雨' || weaterType === '极端降雨' || weaterType === '暴雨-大暴雨' || weaterType === '大暴雨-特大暴雨') {
            type.class = 'heavyRain';
            type.src = heavyRain;
        } else if (weaterType === '雷阵雨' || weaterType === '强雷阵雨' || weaterType === '雷阵雨并伴有冰雹') {
            type.class = 'thunderShower';
            type.src = thunderShower;
        } else if (weaterType === '冻雨') {
            type.class = 'freezingRain';
            type.src = freezingRain;
        } else if (weaterType === '雪' || weaterType === '阵雪' || weaterType === '小雪' || weaterType === '中雪' || weaterType === '小雪-中雪' || weaterType === '雨雪天气' || weaterType === '雨夹雪' || weaterType === '阵雨夹雪') {
            type.class = 'snow';
            type.src = snow;
        } else if (weaterType === '大雪' || weaterType === '暴雪' || weaterType === '中雪-大雪' || weaterType === '大雪-暴雪') {
            type.class = 'heavySnow';
            type.src = heavySnow;
        } else if (weaterType === '浮尘' || weaterType === '扬沙') {
            type.class = 'floatingDust';
            type.src = floatingDust;
        } else if (weaterType === '沙尘暴' || weaterType === '强沙尘暴') {
            type.class = 'sandStorm';
            type.src = sandStorm;
        } else if (weaterType === '龙卷风') {
            type.class = 'tornado';
            type.src = tornado;
        } else if (weaterType === '雾' || weaterType === '轻雾' || weaterType === '浓雾' || weaterType === '强浓雾' || weaterType === '大雾' || weaterType === '特强浓雾') {
            type.class = 'fog';
            type.src = fog;
        } else if (weaterType === '热') {
            type.class = 'hot';
            type.src = hot;
        } else if (weaterType === '冷') {
            type.class = 'cold';
            type.src = cold;
        } else {
            type.class = 'none';
            type.src = none;
        }
        if (weaterType === '晴' || weaterType === '平静' || weaterType === '热') type.icon = isNight ? 'iconyejianqing' : 'iconsunny';
        else if (weaterType === '少云' || weaterType === '晴间少云') type.icon = isNight ? 'iconyejianduoyun' : 'iconduoyunzhuanqing';
        else if (weaterType === '多云') type.icon = 'iconduoyun';
        else if (weaterType === '阴') type.icon = isNight ? 'iconyejianyin' : 'iconyinzhuanqing';
        else if (weaterType === '有风' || weaterType === '微风' || weaterType === '和风' || weaterType === '清风') type.icon = isNight ? 'iconyejiandafeng' : 'iconqingzhuandafeng';
        else if (weaterType === '强风' || weaterType === '劲风' || weaterType === '疾风' || weaterType === '大风' || weaterType === '烈风') type.icon = 'iconwind';
        else if (weaterType === '风暴' || weaterType === '狂爆风' || weaterType === '热带风暴' || weaterType === '龙卷风') type.icon = 'iconlongjuanfeng';
        else if (weaterType === '霾' || weaterType === '中度霾' || weaterType === '重度霾' || weaterType === '严重霾') type.icon = 'iconmai';
        else if (weaterType === '阵雨') type.icon = isNight ? 'iconyejianyu' : 'iconyuzhuanqing';
        else if (weaterType === '小雨' || weaterType === '毛毛雨/细雨' || weaterType === '雨') type.icon = 'iconxiaoyu';
        else if (weaterType === '中雨' || weaterType === '小雨-中雨') type.icon = 'iconrain';
        else if (weaterType === '大雨' || weaterType === '强阵雨' || weaterType === '中雨-大雨') type.icon = 'icondayu';
        else if (weaterType === '暴雨' || weaterType === '大雨-暴雨') type.icon = 'iconbaoyu';
        else if (weaterType === '大暴雨' || weaterType === '暴雨-大暴雨') type.icon = 'icondabaoyu';
        else if (weaterType === '特大暴雨' || weaterType === '极端降雨' || weaterType === '大暴雨-特大暴雨') type.icon = 'icontedabaoyu';
        else if (weaterType === '雷阵雨' || weaterType === '强雷阵雨') type.icon = 'iconlighting';
        else if (weaterType === '雷阵雨并伴有冰雹') type.icon = 'iconleizhenyubanyoubingbao';
        else if (weaterType === '冻雨') type.icon = 'icondongyu';
        else if (weaterType === '雨夹雪' || weaterType === '阵雨夹雪' || weaterType === '雨雪天气') type.icon = isNight ? 'iconyejianyujiaxue' : 'iconyujiaxuezhuanqing';
        else if (weaterType === '阵雪') type.icon = isNight ? 'iconyejianxue' : 'iconxuezhuanqing'
        else if (weaterType === '小雪') type.icon = 'iconxiaoxue';
        else if (weaterType === '雪' || weaterType === '中雪' || weaterType === '小雪-中雪') type.icon = 'iconsnow';
        else if (weaterType === '大雪' || weaterType === '中雪-大雪') type.icon = 'icondaxue';
        else if (weaterType === '暴雪' || weaterType === '大雪-暴雪' || weaterType === '冷') type.icon = 'icontedabaoxue';
        else if (weaterType === '浮尘' || weaterType === '扬沙') type.icon = 'iconfuchenyangsha';
        else if (weaterType === '沙尘暴') type.icon = 'iconshachenbao';
        else if (weaterType === '强沙尘暴') type.icon = 'iconshachenbao1';
        else if (weaterType === '雾' || weaterType === '轻雾' || weaterType === '浓雾' || weaterType === '强浓雾' || weaterType === '大雾' || weaterType === '特强浓雾') type.icon = 'iconwu';
        else type.icon = ' ';
        return type;
    }
}

export default public_fun;