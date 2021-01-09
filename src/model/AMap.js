import public_fun from '../Common/public_fun';
const AMap = window.AMap;

let map = {};

AMap.plugin(['AMap.Geolocation', 'AMap.Geocoder', 'AMap.Weather'], () => {
    map.geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
    })
    map.geocoder = new AMap.Geocoder({
        city: '全国'
    })
    map.weather = new AMap.Weather();
});

// 通过经纬度获取地址信息
// lnglat(arr)：数组1为经度值，数组2为纬度值
function getAddress(lnglat) {
    return new Promise((resolve, reject) => {
        map.geocoder.getAddress(lnglat, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                // result为对应的地理位置详细信息
                const regeocode = result.regeocode;
                if (!public_fun.isEmptyObject(regeocode)) {
                    resolve(regeocode);    
                } else {
                    reject();
                }
            } else {
                reject();
            }
        })
    })
}

// 获取当前定位
// addr(String)：当获取定位失败时使用的默认值
function getCurrentPosition(addr) {
    return new Promise((resolve, reject) => {
        map.geolocation.getCurrentPosition(async (status,result) => {
            if(status === 'complete'){
                try {
                    const position = result.position,
                        regeocode = await getAddress([position.lng, position.lat]);
                    const addressComponent = regeocode.addressComponent;
                    if (!public_fun.isEmptyObject(addressComponent) && !!addressComponent.district) {
                        resolve(addressComponent.district);
                    } else {
                        reject();
                    }
                } catch {
                    reject();
                }
            }else{
                reject();
            }
        });
    })
}

// 实时天气查询
// addr(String)：城市名称、区域编码
function getLive(addr) {
    return new Promise((resolve, reject) => {
        map.weather.getLive(addr, (err, data) => {
            resolve(data || {});
        })
    })
}

// 天气预报查询
// addr(String)：城市名称、区域编码
function getForecast(addr) {
    return new Promise((resolve, reject) => {
        map.weather.getForecast(addr, (err, data) => {
            resolve(data || {});
        })
    })
}

export {
    getCurrentPosition,
    getAddress,
    getLive,
    getForecast
}