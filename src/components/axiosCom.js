import axios from 'axios';

function axiosCom(props) {
    axios.get('/imjad/cloudmusic', {
        params: {
            type: 'song',
            id: '28012031',
        }
    }).then(res => {
        console.log(res);
    })
    return (
        <div>
            请求测试
        </div>
    )
}

export default axiosCom