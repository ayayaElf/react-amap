import {getCurrentPosition, getLive, getForecast} from '../../model/AMap';
import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Spin from '../SpinCom/SpinCom';
import public_fun from '../../Common/public_fun';
import WeatherForecastCom from './WeatherForecastCom';
import WeatherLiveCom from './WeatherLiveCom';
import './weaterCom.scss';
import './weaterTypeImg.scss';

class WeaterInputCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            weatherType: '',
            addr: '',
            weatherLiveInfo: {},
            weatherForecastInfo: {},
        }
    }

    getWeatherLiveInfo = async (addr) => {
        let data = await getLive(addr || this.state.addr);
        let weatherType = public_fun.changeWeaterType(data.weather);
        this.setState({
            weatherLiveInfo: data,
            spinning: false,
            weatherType,
        })
    }

    getWeatherForecastInfo = async (addr) => {
        let data = await getForecast(addr || this.state.addr);
        this.setState({
            weatherForecastInfo: data,
            spinning: false,
        })
    }

    handleChange = (event) => {
        this.setState({
            addr: event.target.value,
        })
    }

    handleSearch = () => {
        this.setState({
            spinning: true,
        })
        this.getWeatherLiveInfo();
        this.getWeatherForecastInfo();
    }

    handlePressEnter = (event) => {
        this.setState({
            spinning: true,
        })
        this.getWeatherLiveInfo();
        this.getWeatherForecastInfo();
    }

    componentDidMount() {
        this.setState({
            spinning: true,
            addr: '普宁',
        })
        setTimeout(async() => {
            // try {
            //     let addr = await getCurrentPosition(this.state.addr);
            //     this.getWeatherLiveInfo(addr);
            //     this.getWeatherForecastInfo(addr);
            //     this.setState({
            //         addr,
            //     })
            // } catch {
            //     this.getWeatherLiveInfo();
            //     this.getWeatherForecastInfo();
            // }
            this.getWeatherLiveInfo();
            this.getWeatherForecastInfo();
        }, 1000);
    }

    render() {
        return (
            <div className={`weaterBox`}>
                <Spin spinning={this.state.spinning} tip="加载中"/>
                <img className="backgroundImage" src={this.state.weatherType.src}  alt=""/>
                <div className="searchBox">
                    <Input.Search 
                        size="large" 
                        placeholder="请输入要查询的城市" 
                        value={this.state.addr} 
                        onChange={this.handleChange} 
                        onSearch={this.handleSearch} 
                        onPressEnter={this.handlePressEnter}
                        />
                </div>
                <WeatherLiveCom weatherInfo={this.state.weatherLiveInfo}/>
                <WeatherForecastCom weatherInfo={this.state.weatherForecastInfo}/>
            </div>
        )
    }
}

export default WeaterInputCom;