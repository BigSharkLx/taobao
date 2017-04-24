import React from 'react';
export default class Bodytop extends React.Component{
  componentDidMount(){
    this.inputFocus();
    this.click();
  }
inputFocus(){
  var miss=document.querySelector(".input");
  var appear=document.querySelector(".pre");
  miss.onfocus=function(){
    appear.style.display="none";
  };
  miss.onblur=function(){
    appear.style.display="block";
  };
}
click(){
  var baobei=document.querySelector(".baobei").querySelectorAll("li");
  for(var i of baobei){
    i.onclick=function(){
  for(var m of baobei){
    m.style.backgroundColor="#fff";
  }
        this.style.backgroundColor="#ff6a05";
    };
  }
}




  render(){
    return(
      <div>
      <div class="top_wrap">
      <div class="logo">
      <a><img src="./src/images/logo.jpg"/></a>
      </div>
      <div class="baobei">
      <li class="baobei_1"><a>宝贝</a></li>
      <li ><a>天猫</a></li>
      <li ><a>店铺</a></li>
      </div>
      <div class="form">
      <form>
      <label class="pre"><i class="iconfont icon_input">&#xe606;</i>踏青帐篷</label>
      <label class="next"><i class="iconfont cameral">&#xe66d;</i></label>
      <input type="text" class="input"></input>
      <button type="submit" class="button_submit">
      搜索
      </button>
      <span class="gaoji"><a>高级搜索</a></span>
      </form>
      <div class="saoma">
      <a><img src="./src/images/saoma.png" /></a>
      </div>
      <div class="top_guanggao">
      <ul>
      <li><a>新款连衣裙</a></li>
      <li><a>四件套</a></li>
      <li><a>潮流T恤</a></li>
      <li><a>时尚女鞋</a></li>
      <li><a>短裤</a></li>
      <li><a>半身裙</a></li>
      <li><a>男士外套</a></li>
      <li><a>墙纸</a></li>
      <li><a>行车记录仪</a></li>
      <li><a>新款男鞋</a></li>
      <li><a>耳机</a></li>
      <li class="more"><a>更多 <i class="iconfont icon_more">&#xe6da;</i></a></li>
      </ul>
      </div>
      <div class="top_menu">
      <a>主题市场<i class="iconfont icon_menu">&#xe601;</i></a>
      </div>
      <div class="bottom_guanggao">
      <ul>
      <div class="active_guanggao">
      <li><a>天猫</a></li>
      <li><a>聚划算</a></li>
      <li><a>天猫超市</a></li>
      </div>
      <div class="hr_col_b"></div>
      <li><a>淘抢购</a></li>
      <li><a>电器城</a></li>
      <li><a>司法拍卖</a></li>
      <li><a>中国质造</a></li>
      <li><a>特色中国</a></li>
      <div class="hr_col_b"></div>
      <li><a>飞猪旅行</a></li>
      <li><a>智能生活</a></li>
      <li><a>苏宁易购</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
