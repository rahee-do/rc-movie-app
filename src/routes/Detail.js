import React from 'react';

class Detail extends React.Component  {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location.state);
        // url을 직접 입력해서 진입했을 때 route props로 전달하는 값이 undefined 되기 때문에 history로 redirect 처리
        if (location.state === undefined) {
            // go home! (redirect)
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        // 화면 진입 후, url 엔터를 치면 render 함수가 먼저 실행되기 때문에 location이 없다는 에러가 발생한다.
        // 위 현상으로 조건 추가
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }

    }
}

export default Detail;
