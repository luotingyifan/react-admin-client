import React, {Component} from "react";
import { Button, message } from 'antd';
import './App.css'

/**
 * 应用根组件
 */
class App extends Component {

    messageClick = () => {
        message.success('click success.')
    };

    render() {
        return <div className={'App'}>
            <Button type="primary" onClick={ this.messageClick }>Button</Button>
        </div>
    }
}

export default App;
