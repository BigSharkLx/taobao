import React from 'react';
export default class Header extends React.Component{
  componentDidMount(){
    this.onMouse();
  }
onMouse(){
var nav=document.querySelector(".right_nav").querySelectorAll(".right_nav_item");
var len=nav.length;
var submenu=document.querySelectorAll(".nav_hidden");
var hiddenNav=document.querySelectorAll(".nav_hidden_item");

nav[0].onmouseover=function(){
  this.style.backgroundColor="#fff";
  submenu[0].style.display="block";
};
nav[0].onmouseout=function(){
  this.style.backgroundColor="#f5f5f5";
  submenu[0].style.display="none";
};
nav[2].onmouseover=function(){
  this.style.backgroundColor="#fff";
  submenu[1].style.display="block";
};
nav[2].onmouseout=function(){
  this.style.backgroundColor="#f5f5f5";
  submenu[1].style.display="none";
};
nav[4].onmouseover=function(){
  this.style.backgroundColor="#fff";
  submenu[2].style.display="block";
};
nav[4].onmouseout=function(){
  this.style.backgroundColor="#f5f5f5";
  submenu[2].style.display="none";
};
nav[5].onmouseover=function(){
  this.style.backgroundColor="#fff";
  submenu[3].style.display="block";
};
nav[5].onmouseout=function(){
  this.style.backgroundColor="#f5f5f5";
  submenu[3].style.display="none";
};
nav[6].onmouseover=function(){
  this.style.backgroundColor="#fff";
  submenu[4].style.display="block";
};
nav[6].onmouseout=function(){
  this.style.backgroundColor="#f5f5f5";
  submenu[4].style.display="none";
};


}






// nav[0].onmouseover=function(){
//      submenu[0].style.display="block";
//      hiddenNav[0].style.display="block";
//     this.style.backgroundColor="#fff";
// };
// nav[0].onmouseout=function(){
//  submenu.style.display="none";
//   hiddenNav[0].style.display="none";
//     this.style.backgroundColor="#f5f5f5";
// };
// nav[2].onmouseover=function(){
//    submenu.style.display="block";
//   hiddenNav[1].style.display="block";
//     this.style.backgroundColor="#fff";
// };
// nav[2].onmouseout=function(){
//  submenu.style.display="none";
//     this.style.backgroundColor="#f5f5f5";
// };




















  render(){
    return(
      <div>
<header class="header">
<div class="header_wrap">
<div class="left_nav">
<ul>
<li>
<a class="red">亲，请登录</a>
</li>
<li>
<a>免费注册</a>
</li>
<li>
<a>手机逛淘宝</a>
</li>
</ul>
</div>
<div class="right_nav">
<ul>
<li class="right_nav_item">
<a>我的淘宝</a>
<i class="iconfont">&#xe615;</i>
<div class="nav_hidden">
<div class="position taobao">
<a>已买到的宝贝</a>
<a>我的足迹</a>
</div>
</div>
</li>
<li class="right_nav_item">
<i class="iconfont red">&#xe600;</i>
<a>购物车</a>
<i class="iconfont">&#xe615;</i>
</li>
<li class="right_nav_item">
<i class="iconfont">&#xe60c;</i>
<a>收藏夹</a>
<i class="iconfont">&#xe615;</i>
<div class="nav_hidden">
<div class="position shoucang">
<a>收藏的宝贝</a>
<a>收藏的店铺</a>
</div>
</div>
</li>
<li class="right_nav_item">
<a>商品分类</a>
</li>
<div class="hr_col"></div>
<li class="right_nav_item">
<a>卖家中心</a>
<i class="iconfont">&#xe615;</i>
<div class="nav_hidden">
<div class="position maijia">
<a>免费开店</a>
<a>已卖出的宝贝</a>
<a>出售中的宝贝</a>
<a>卖家服务市场</a>
<a>卖家培训中心</a>
<a>体检中心</a>
</div>
</div>
</li>
<li class="right_nav_item">
<a>联系客服</a>
<i class="iconfont">&#xe615;</i>
<div class="nav_hidden ">
<div class="position kefu">
<a>消费者客服</a>
<a>卖家客服</a>
</div>
</div>
</li>
<li class="right_nav_item">
<i class="iconfont red">&#xe602;</i>
<a>网站导航</a>
<i class="iconfont">&#xe615;</i>
<div class="nav_hidden">
<div class="position daohang">
<div class="zhuti">
<dl>
<dt>主题市场</dt>
<div class="main_zhuti">
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
</div>
</dl>
</div>
<div class="zhuti">
<dl>
<dt>主题市场</dt>
<div class="main_zhuti">
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
</div>
</dl>
</div>
<div class="zhuti">
<dl>
<dt>主题市场</dt>
<div class="main_zhuti">
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
</div>
</dl>
</div>
<div class="zhuti">
<dl>
<dt>主题市场</dt>
<div class="main_zhuti">
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
<dd><a>女装</a></dd>
</div>
</dl>
</div>
</div>
</div>
</li>
</ul>
</div>
</div>
</header>








</div>
    );
  }
}
