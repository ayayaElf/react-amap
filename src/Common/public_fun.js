const public_fun = {
    isEmptyObject(obj) {
        for (var key in obj) {
            //返回false，不为空对象
            return false;
        }
        return true; //返回true，为空对象
    },
    
    changeWeaterClass(weaterType, isNight = false) {
        if (!weaterType) return '';
        let type = {};
        if (weaterType === '晴' || weaterType === '平静') type.class = 'sunDay';
        else if (weaterType === '少云' || weaterType === '晴间少云') type.class = 'partlyCloudy';
        else if (weaterType === '多云') type.class = 'cloudy';
        else if (weaterType === '阴') type.class = 'overcast';
        else if (weaterType === '有风' || weaterType === '微风' || weaterType === '和风' || weaterType === '清风') type.class = 'breeze';
        else if (weaterType === '强风' || weaterType === '劲风' || weaterType === '疾风' || weaterType === '大风' || weaterType === '烈风') type.class = 'strongBreeze';
        else if (weaterType === '风暴' || weaterType === '狂爆风') type.class = 'storm';
        else if (weaterType === '热带风暴') type.class = 'tropicalStorm';
        else if (weaterType === '霾' || weaterType === '中度霾' || weaterType === '重度霾' || weaterType === '严重霾') type.class = 'haze';
        else if (weaterType === '阵雨' || weaterType === '小雨' || weaterType === '中雨' || weaterType === '毛毛雨/细雨' || weaterType === '雨' || weaterType === '小雨-中雨') type.class = 'lightRain';
        else if (weaterType === '大雨' || weaterType === '暴雨' || weaterType === '强阵雨' || weaterType === '中雨-大雨' || weaterType === '大雨-暴雨') type.class = 'rain';
        else if (weaterType === '大暴雨' || weaterType === '特大暴雨' || weaterType === '极端降雨' || weaterType === '暴雨-大暴雨' || weaterType === '大暴雨-特大暴雨') type.class = 'heavyRain';
        else if (weaterType === '雷阵雨' || weaterType === '强雷阵雨' || weaterType === '雷阵雨并伴有冰雹') type.class = 'thunderShower';
        else if (weaterType === '冻雨') type.class = 'freezingRain';
        else if (weaterType === '雪' || weaterType === '阵雪' || weaterType === '小雪' || weaterType === '中雪' || weaterType === '小雪-中雪' || weaterType === '雨雪天气' || weaterType === '雨夹雪' || weaterType === '阵雨夹雪') type.class = 'snow';
        else if (weaterType === '大雪' || weaterType === '暴雪' || weaterType === '中雪-大雪' || weaterType === '大雪-暴雪') type.class = 'heavySnow';
        else if (weaterType === '浮尘' || weaterType === '扬沙') type.class = 'floatingDust';
        else if (weaterType === '沙尘暴' || weaterType === '强沙尘暴') type.class = 'sandStorm';
        else if (weaterType === '龙卷风') type.class = 'tornado';
        else if (weaterType === '雾' || weaterType === '轻雾' || weaterType === '浓雾' || weaterType === '强浓雾' || weaterType === '大雾' || weaterType === '特强浓雾') type.class = 'fog';
        else if (weaterType === '热') type.class = 'hot';
        else if (weaterType === '冷') type.class = 'cold';
        else type.class = 'none';
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
        else if ( weaterType === '中雨' || weaterType === '小雨-中雨') type.icon = 'iconrain';
        else if (weaterType === '大雨' || weaterType === '强阵雨' || weaterType === '中雨-大雨') type.icon = 'icondayu';
        else if (weaterType === '暴雨' || weaterType === '大雨-暴雨') type.icon = 'iconbaoyu';
        else if (weaterType === '大暴雨' ||  weaterType === '暴雨-大暴雨') type.icon = 'icondabaoyu';
        else if (weaterType === '特大暴雨' || weaterType === '极端降雨'  || weaterType === '大暴雨-特大暴雨') type.icon = 'icontedabaoyu';
        else if (weaterType === '雷阵雨' || weaterType === '强雷阵雨') type.icon = 'iconlighting';
        else if (weaterType === '雷阵雨并伴有冰雹') type.icon = 'iconleizhenyubanyoubingbao';
        else if (weaterType === '冻雨') type.icon = 'icondongyu';
        else if (weaterType === '雨夹雪' || weaterType === '阵雨夹雪' || weaterType === '雨雪天气') type.icon = isNight ? 'iconyejianyujiaxue' : 'iconyujiaxuezhuanqing';
        else if (weaterType === '阵雪') type.icon = isNight ? 'iconyejianxue' : 'iconxuezhuanqing'
        else if (weaterType === '小雪')  type.icon = 'iconxiaoxue';
        else if (weaterType === '雪' || weaterType === '中雪' || weaterType === '小雪-中雪')  type.icon = 'iconsnow';
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