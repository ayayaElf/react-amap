import React, {Component} from 'react';
import public_fun from '../../Common/public_fun';
import {getLive} from '../../model/AMap';

function WeaterCom(props) {
    if (public_fun.isEmptyObject(props.weaterInfo)) return <div></div>
    return <div>{props.weaterInfo.temperature}摄氏度</div>
}

class WeaterInputCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addr: '',
            weaterInfo: {},
        }
    }


    handleChange = (event) => {
        this.setState({
            addr: event.target.value,
        })
    }

    handleClick = () => {
        getLive(this.state.addr).then(data => {
            console.log(data);
            this.setState({
                weaterInfo: data,
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    请输入要查询的城市
                    <input value={this.state.addr} onChange={this.handleChange}/>
                    <input type="submit" value="查询" onClick={this.handleClick}/>
                </div>
                <WeaterCom weaterInfo={this.state.weaterInfo}/>
            </div>
        )
    }
}

export default WeaterInputCom;