import React, {Component} from 'react';
import public_fun from '../../Common/public_fun';
import {getLive, getForecast} from '../../model/AMap';
import './weaterCom.scss';

function WeatherLiveCom(props) {
    let element = (
        <>
            <div>天气：{props.weatherInfo.weather}</div>
            <div>气温：{props.weatherInfo.temperature} ℃</div>
            <div>风向：{props.weatherInfo.windDirection}</div>
            <div>风力：{props.weatherInfo.windPower} 级</div>
            <div>空气湿度：{props.weatherInfo.humidity}</div>
        </>
    )
    if (public_fun.isEmptyObject(props.weatherInfo)) return <div>请输入要查询的城市</div>
    return element
}

function WeatherForecastCom(props) {
    if (!public_fun.isEmptyObject(props.weatherInfo)) {
        const data = props.weatherInfo.forecasts;
        console.log(data);
        const Forecast = data.map(info => 
            <div key={info.date}>
                <div>{info.date}</div>
                <div className="forecastItemBox">
                    <div>白天</div>
                    <div>
                        <div>天气：{info.dayWeather}</div>
                        <div>气温：{info.dayTemp} ℃</div>
                        <div>风向：{info.dayWindDir}</div>
                        <div>风力：{info.dayWindPower} 级</div>
                    </div>
                </div>
                <div className="forecastItemBox">
                    <div>
                        晚上
                    </div>
                    <div>
                        <div>天气：{info.nightWeather}</div>
                        <div>气温：{info.nightTemp} ℃</div>
                        <div>风向：{info.nightWindDir}</div>
                        <div>风力：{info.nightWindPower} 级</div>
                    </div>
                </div>
            </div>
        );
        let element = (
            <div className="forecastBox">
                <div>未来{data.length}天预报</div>
                <div className="forecastItem">{Forecast}</div>
            </div>
        );
        return element
    }
    return <></>
}

class WeaterInputCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addr: '普宁市',
            weatherLiveInfo: {},
            weatherForecastInfo: {},
        }
    }

    getWeatherLiveInfo = async () => {
        let data = await getLive(this.state.addr);
        this.setState({
            weatherLiveInfo: data,
        })
    }

    getWeatherForecastInfo = async () => {
        let data = await getForecast(this.state.addr);
        this.setState({
            weatherForecastInfo: data,
        })
    }

    handleChange = (event) => {
        this.setState({
            addr: event.target.value,
        })
    }

    hanldeClick = () => {
        this.getWeatherLiveInfo();
        this.getWeatherForecastInfo();
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.getWeatherLiveInfo();
            this.getWeatherForecastInfo();
        }
    }

    componentDidMount() {
        this.getWeatherLiveInfo();
        this.getWeatherForecastInfo();
    }

    render() {
        return (
            <div className="weaterBox">
                <div className="searchBox">
                    <input placeholder="请输入要查询的城市" value={this.state.addr} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                    <input type="submit" value="查询" onClick={this.hanldeClick}/>
                </div>
                <WeatherLiveCom weatherInfo={this.state.weatherLiveInfo}/>
                <WeatherForecastCom weatherInfo={this.state.weatherForecastInfo}/>
            </div>
        )
    }
}

export default WeaterInputCom;