const AMap = window.AMap;

let map = {};

AMap.plugin('AMap.Weather', () => {
    map.weather = new AMap.Weather();
});

// 实时天气查询
// addr：城市名称、区域编码
function getLive(addr) {
    return new Promise((resolve, reject) => {
        map.weather.getLive(addr, (err, data) => {
            resolve(data);
        })
    })
}

// 天气预报查询
// addr：城市名称、区域编码
function getForecast(addr) {
    return new Promise((resolve, reject) => {
        map.weather.getForecast(addr, (err, data) => {
            resolve(data);
        })
    })
}

export {
    getLive,
    getForecast
}