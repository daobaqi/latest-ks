import React,{Component} from 'react';
import swiper from 'swiper';
import '../sass/today.scss';
import '../assets/font-awesome/font-awesome.css';

import axios from 'axios'
import { Carousel} from 'antd-mobile';
const oldToken = 'AS_MALL_ACCESS_TOKEN';
class Today extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            // data:[],
            imgs: ['./img/9.JPEG', './img/9.JPEG', './img/9.JPEG', './img/9.JPEG', './img/9.JPEG', './img/9.JPEG'],
            imgHeight: 176,
            
        }
    }
    componentWillMount(){
        console.log(this.props);
            axios.get("http://localhost:8083/getImg",{
                header:{
                    "Authorization":"Bearer " + oldToken
                },
            }).then(res=>{
                this.setState({
                    data:res.data,
                    isLoading: !this.state.isLoading
                })
            })
        
    }
    render(){
        console.log(this.state.data)
        return (
        <div className="today" >
            
            <div className="top">
                <h4>今日</h4>
            </div>
            {!this.state.isLoading ?
            <main>
                <div className="todayStory">
                    
                    {this.state.data.map(idx => {
                        let type = idx.type;
                        // console.log(typeof(type))
                        if(type === "今日故事"){
                        return (<div key={idx.id}><h3 className="first">今日故事</h3>
                        <img src={idx.img} alt="" />
                        <i className="fa fa-heart-o fa-1.5x" ><span className="num">{idx.like}</span></i>
                        <h5>{idx.name}</h5>
                        <span className="quickly">{idx.explain}</span></div>)}
                    })}
                   
                </div>
                <div className="latestRecipe">
                    <h3 className="first">新食谱</h3>
                    <div className="scroll">
                        <div className="allImgs">
                            {this.state.data.map(idx => {
                                let types = idx.type;
                                // console.log(typeof(type))
                                if(types === "新食谱"){
                                    return (<div className="son" key={idx.id}>
                                        <i className="fa fa-play-circle play fa-2x" ></i>
                                        <i className="fa fa-heart-o fa-1.5x" ><span className="num">555</span></i>
                                        <span className="cookTime"><i className="time">{idx.time}</i>分钟</span>
                                        <img src={idx.img} alt=""/>
                                        <h5>{idx.name}</h5>
                                    </div>
                                )}
                            })}
                        </div>
                    </div>
                    
                </div>
                <div className="highly">
                    <h3 className="first">尽享高效料理</h3>
                        {/* <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        bottom="-10px"
                        > */}
                        {this.state.data.map(idx => {
                            // console.log(idx.type === "本周晚餐")
                            if(idx.type === "本周晚餐"){
                                console.log(idx)
                                return (
                                    <h1 key={idx.id}>{idx.name}</h1>
                                // <a
                                // key={idx.id}
                                // href="#"
                                // style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, position: 'relative' }}
                                // >
                                // <i className="fa fa-heart-o fa-1.5x" ><span className="num">{idx.like}</span></i>
                                // <span className="cookTime"><i className="time">{idx.time}</i>分钟</span>
                                // <img 
                                //     src={idx.img} 
                                //     alt=""
                                //     style={{ width: '100%', verticalAlign: 'top', borderRadius: '5%'}}
                                //     onLoad={() => {
                                //     // fire window resize event to change height
                                //     window.dispatchEvent(new Event('resize'))
                                //     this.setState({ imgHeight: 'auto' })
                                //     }}
                                // />
                                // <h5>蜜蜂焦糖和盐渍花生曲奇</h5>
                                // </a>
                                )
                            }
                            
                        })}
                        {/* // </Carousel> */}

                    
                </div>
            </main> :''}
            
        </div>
        )
    }
}

export default Today;