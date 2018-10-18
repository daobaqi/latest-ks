import React, { Component } from 'react';
import { TabBar  } from 'antd-mobile';
import {Route,Switch,NavLink,withRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'; 
// import './App.css';
import './assets/css/common.css'
// 引入页面组件
import Home from './components/Home';
import Tips from './components/Tips';
import Today from './components/Today';
import Search from './components/Search';
import Bill from './components/Bill';

import octicons from 'octicons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tabs: [
        {
          id: 1,
          name: 'Today',
          path: './today',
          text: '今日',
          icon: 'home'
        },
        {
          id: 2,
          name: 'Tips',
          path: './tips',
          text: '小贴士',
          icon: 'light-bulb'
        },
        {
          id: 3,
          name: 'Search',
          path: './search',
          text: '查找',
          icon: 'search'
        },
        {
          id: 4,
          name: 'Bill',
          path: './bill',
          text: '购物单',
          icon: 'file'
        },
        {
          id: 5,
          name: 'Home',
          path: './home',
          text: '我的主页',
          icon: 'smiley'
        }
      ],
      currentTab: 'Today'
    }
  }

  handleChangeCurrent(tab){
    this.setState({
      currentTab:tab.name
    });

    // 编程式导航
    // 获取history
    console.log(this.props.history);
    let {history} = this.props;

    history.push(tab.path);
  }

  render() {
    return (
      <div className="App">
        <TabBar tintColor="#2a972a"  barTintColor="rgb(244, 244, 244)">
          {
            this.state.tabs.map(tab=>{
              return <TabBar.Item 
              title={tab.text} 
              key={tab.name} 
              icon={<div dangerouslySetInnerHTML={{__html:octicons[tab.icon].toSVG()}}/>}
              selectedIcon={<div className="selected" dangerouslySetInnerHTML={{__html:octicons[tab.icon].toSVG()}}/>}
              selected={tab.name === this.state.currentTab}
              onPress={this.handleChangeCurrent.bind(this,tab)}
              // dot
              >
                <Switch>
                  <Route path="/today" component={Today}></Route>
                  <Route path="/tips" component={Tips}></Route>
                  <Route path="/search" component={Search}></Route>
                  <Route path="/bill" component={Bill}></Route>
                  <Route path="/home" component={Home}></Route>
                </Switch>
              </TabBar.Item>
            })
          }
        </TabBar>
      </div>
    );
  }
}

App = withRouter(App);

export default App;
