import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import public_fun from '../../Common/public_fun';
import IconFont from '../IconFont/IconFont';

function WeatherForecastCom(props) {
    if (!public_fun.isEmptyObject(props.weatherInfo)) {
        const data = props.weatherInfo.forecasts;
        const Forecast = data.map(info => {
            const weatherType = public_fun.changeWeaterType(info.dayWeather),
                nightWeatherType = public_fun.changeWeaterType(info.nightWeather, true),
                cardHeadStyle = {
                    color: '#fff',
                    textShadow: "-2px 0px 4px #000, 0px 2px 4px #000, 2px 0px 4px #000, 0px 2px 4px #000"
                };
            return (
                <Col span={20 / data.length} key={info.date}>
                    <Card title={info.date} hoverable={true} className={weatherType.class} headStyle={{...cardHeadStyle}}>
                        <div className={`forecastItemBox`}>
                            <h3>白天</h3>
                            <div>
                                <div>
                                    天气：
                                    <IconFont className="iconFont" type={!!weatherType.icon ? weatherType.icon : ' '}/>
                                    {info.dayWeather}
                                </div>
                                <div>气温：{info.dayTemp} ℃</div>
                                <div>风向：{info.dayWindDir}</div>
                                <div>风力：{info.dayWindPower} 级</div>
                            </div>
                        </div>
                        <div className={`forecastItemBox`}>
                            <h3>
                                晚上
                            </h3>
                            <div>
                                <div>
                                    天气：
                                    <IconFont className="iconFont" type={!!nightWeatherType.icon ? nightWeatherType.icon : ' '}/>
                                    {info.nightWeather}
                                </div>
                                <div>气温：{info.nightTemp} ℃</div>
                                <div>风向：{info.nightWindDir}</div>
                                <div>风力：{info.nightWindPower} 级</div>
                            </div>
                        </div>
                    </Card>
                </Col>
            )
        });
        let element = (
            <div className="forecastBox textShadow">
                <h1>未来{data.length}天预报</h1>
                <Row className="forecastItem">{Forecast}</Row>
            </div>
        );
        return element
    }
    return <></>
}

export default WeatherForecastCom;