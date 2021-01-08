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
        let element = (
            <>
                <div>未来{data.length}天预报</div>
            </>
        );
        return element
    }
    return <></>
}

class WeaterInputCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addr: '',
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