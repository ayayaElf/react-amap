import { Spin } from 'antd';
import 'antd/dist/antd.css';
import './SpinCom.scss';

function SpinCom(props) {
    let element = (
        <div className={`mask ${!props.spinning ? 'hide' : ''}`}>
            <Spin spinning={props.spinning} tip={props.tip} className="spin"/>
        </div>
    )
    return element;
}

export default SpinCom;