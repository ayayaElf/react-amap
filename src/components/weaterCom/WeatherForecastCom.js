import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import public_fun from '../../Common/public_fun';

function WeatherForecastCom(props) {
    if (!public_fun.isEmptyObject(props.weatherInfo)) {
        const data = props.weatherInfo.forecasts;
        const Forecast = data.map(info => 
            <Col span={20 / data.length} key={info.date}>
                <Card title={info.date} hoverable={true}>
                    <div className="forecastItemBox">
                        <h3>白天</h3>
                        <div>
                            <div>天气：{info.dayWeather}</div>
                            <div>气温：{info.dayTemp} ℃</div>
                            <div>风向：{info.dayWindDir}</div>
                            <div>风力：{info.dayWindPower} 级</div>
                        </div>
                    </div>
                    <div className="forecastItemBox">
                        <h3>
                            晚上
                        </h3>
                        <div>
                            <div>天气：{info.nightWeather}</div>
                            <div>气温：{info.nightTemp} ℃</div>
                            <div>风向：{info.nightWindDir}</div>
                            <div>风力：{info.nightWindPower} 级</div>
                        </div>
                    </div>
                </Card>
            </Col>
        );
        let element = (
            <div className="forecastBox">
                <h1>未来{data.length}天预报</h1>
                <Row className="forecastItem">{Forecast}</Row>
            </div>
        );
        return element
    }
    return <></>
}

export default WeatherForecastCom;