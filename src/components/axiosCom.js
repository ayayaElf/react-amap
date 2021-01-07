import axios from '../model/axios';

function axiosCom(props) {
    axios.get('/cloudmusic/?type=song&id=28012031').then(res => {
        console.log(res.data);
    })
    return (
        <div>
            axios请求测试
        </div>
    )
}

export default axiosCom