import public_fun from '../../Common/public_fun';

function WeatherLiveCom(props) {
    let element = (
        <div className="live">
            <div className="cityInfo">
                <h1>{props.weatherInfo.city}</h1>
                <div className="date">(时间：{props.weatherInfo.reportTime})</div>
            </div>
            <div>{props.weatherInfo.weather}</div>
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