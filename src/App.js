import React, { Component } from 'react';
import { List, InputItem, WhiteSpace ,Icon,NavBar,Flex,Tabs} from 'antd-mobile';
import { Link,BrowserRouter,Route } from 'react-router-dom'
import { createForm } from 'rc-form';
import HistoricalOdds from '../src/component/historicalOdds'
import CompensateO from '../src/component/compensateO'
import CompensateY from '../src/component/compensateY'
import Competing from '../src/component/competing'

class App extends Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.customFocusInst.focus();
    }
    render() {
     
          const tabs = [
            { title: '历史' },
            { title: '欧赔' },
            { title: '亚赔' },
            { title: '大小球' },
          ];
        return (
            <div>
                <List>
                <Flex className="zcfx_topblack">
                    <Flex.Item style={{textAlign:'center',paddingLeft:20}}>
                        <div>
                        <img src="https://data.fox008.com/images/teamPic/645.jpg" alt="" style={{width:50,paddingBottom:5}}/><br/>
                        </div>
                        <div>比利时</div>
                        <div  style={{color:'#929292'}}>[1]</div>
                    </Flex.Item>
                    <Flex.Item style={{textAlign:'center'}}>
                      <div>2:1</div>
                      <div>3:1</div>
                      <div>03/22 03:45</div>
                      <div>已完赛</div>
                    </Flex.Item>
                    <Flex.Item style={{textAlign:'center',paddingRight:20}}>
                        <div>
                        <img src="https://data.fox008.com/images/teamPic/746.jpg" alt="" style={{width:50,paddingBottom:5}}/><br/>
                        </div>
                        <div>意大利</div>
                        <div style={{color:'#929292'}}>[5]</div>
                    </Flex.Item>
                </Flex>
                </List>
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                <BrowserRouter>
                   <Link to="/historicalOdds">
                      <HistoricalOdds />
                   </Link>
                   <Link to="/compensateO">
                      <CompensateO />
                   </Link>
                   <Link to="/compensateY">
                      <CompensateY />
                   </Link>
                   <Link to="/competing">
                      <Competing />
                   </Link>
                   <div>
                        <Route path="historicalOdds" component={HistoricalOdds} />
                        <Route path="compensateO" component={CompensateO} />
                        <Route path="compensateY" component={CompensateY} />
                        <Route path="competing" component={Competing} />
                   </div>
                   </BrowserRouter>
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    </div> */}
                </Tabs>

            </div>
        );
    }
}

const shenzhou = createForm()(App);
export default shenzhou;
