import public_fun from '../../Common/public_fun';
import IconFont from '../IconFont/IconFont';

function WeatherLiveCom(props) {
    const hour = new Date().getHours(),
        weatherType = public_fun.changeWeaterType(props.weatherInfo.weather, hour >= 18 && hour <= 6 ? true : false),
        city = props.weatherInfo.city;
    let dateStyle = {left: !!city ? `calc(${city.length * 2}rem)` : ''};
    let element = (
        <div className="live textShadow">
            <div className="cityInfo">
                <h1>{city}</h1>
                <div className="date" style={{...dateStyle}}>(时间：{props.weatherInfo.reportTime})</div>
            </div>
            <div>
                <IconFont className="largeIconFont" type={!!weatherType.icon ? weatherType.icon : ' '}/>
                {props.weatherInfo.weather}
            </div>
            <h1>气温：{props.weatherInfo.temperature}℃</h1>
            <div>风向：{props.weatherInfo.windDirection}</div>
            <div>风力：{props.weatherInfo.windPower} 级</div>
            <div>空气湿度：{props.weatherInfo.humidity}</div>
        </div>
    )
    if (public_fun.isEmptyObject(props.weatherInfo)) return <div>请输入要查询的城市</div>
    return element
}

export default WeatherLiveCom;