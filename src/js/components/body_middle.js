import React from 'react';
export default class BodyMiddle extends React.Component{
componentDidMount(){
  this.menuOnmouse();
  this.runphoto_1();
  this.runphoto_2();
}
  menuOnmouse(){
    const SubMenu=document.getElementById("SubMenu");
    const SubMenuitems=SubMenu.getElementsByClassName("innerbox");
    const mainMenu=document.getElementsByClassName("cate_menu_item");
    const len=mainMenu.length;
    for(var j=0;j<len;j++){
      // 自定义属性作为当前主菜单的序列号
      mainMenu[j].setAttribute("data-index", j);
      mainMenu[j].onmouseover=function(){
        // 先将主菜单的样式变化
        for(var m of mainMenu){
          m.style.backgroundColor="#ff6a05";
        };
        this.style.backgroundColor="#f94a14";
        // 让子菜单显示
        SubMenu.style.display="block";
        // 取得当前滑入的主菜单的序列号
        var index=this.getAttribute("data-index");
        // 初始化将子菜单关闭
        for(var h of SubMenuitems){
          h.style.display="none";
        }
        // 根据序列号选择对应的子菜单显示
        SubMenuitems[index].style.display="block";
      };
      // 主菜单滑出关闭子菜单
      mainMenu[j].onmouseout=function(){
        this.style.backgroundColor="#ff6a05";
        SubMenu.style.display="none";
      };
      // 主菜单开启的前提下进入子菜单不隐藏
      SubMenu.onmouseover=function(){
        SubMenu.style.display="block";
      };
      // 滑出子菜单隐藏
      SubMenu.onmouseout=function(){
        SubMenu.style.display="none";
      };
    }

  }
  runphoto_1(){
    var timer=null;
    var indexNum=0;
    var photo=document.getElementsByClassName("photo");
    var len =photo.length;
    var arr=document.getElementById("arrow");
    var arrow=document.getElementById("arrow").getElementsByTagName("a");
    var dots=document.getElementById("dots").getElementsByTagName("span");
    // 遍历所有图片
    for(var everyphoto of photo){
      everyphoto.onmouseover=function(){
        // 鼠标滑入停止轮播
        clearInterval(timer);

        // 鼠标滑入显示前后导航图标
        arr.style.display="block";


      };

      everyphoto.onmouseout=function(){
        // 鼠标离开隐藏前后导航图标

        arr.style.display="none";

        // 鼠标离开自动轮播
        timer = setInterval(function(){
          indexNum++;
          if(indexNum==len){
            indexNum=0;
          }
          changePhoto();
        },3000);

      };
      //  点击上一张
      arrow[0].onclick=function(){
        indexNum--;
        if(indexNum<0){
          indexNum=len-1;
        }
        changePhoto();
      };
      //  点击下一张
      arrow[1].onclick=function(){
        indexNum++;
        if(indexNum==len){
          indexNum=0;
        }
        changePhoto();
      };
      //  下方导航按钮


      function dotsOnmouseOver(i,lib){
        lib[i].onmouseover=function(){
            clearInterval(timer);
          indexNum=i;
          changePhoto();
        };
      }
    for(var m=0;m<len;m++){
    dotsOnmouseOver(m,dots);
    }
    }
    // 手动添加鼠标滑过离开事件
    everyphoto.onmouseout();

    // 前后导航滑过显示
    arr.onmouseover=function(){
      arr.style.display="block";
    };
    // 图片切换函数
    function changePhoto(){
      for(var all of photo){
        all.style.display="none";
        photo[indexNum].style.display="block";
      }
      for(var d of dots){
        d.style.backgroundColor="#fff";
        dots[indexNum].style.backgroundColor="red";
      }
    }
  }
  runphoto_2(){
    var timer=null;
    var indexNum=0;
    var photo=document.getElementsByClassName("photo_2");
    var len =photo.length;
    var arr=document.getElementById("arrow_2");
    var arrow=document.getElementById("arrow_2").getElementsByTagName("a");
    var dots=document.getElementById("dots_2").getElementsByTagName("span");
    // 遍历所有图片
    for(var everyphoto of photo){
      everyphoto.onmouseover=function(){
        // 鼠标滑入停止轮播
        clearInterval(timer);

        // 鼠标滑入显示前后导航图标
        arr.style.display="block";


      };

      everyphoto.onmouseout=function(){
        // 鼠标离开隐藏前后导航图标

        arr.style.display="none";

        // 鼠标离开自动轮播
        timer = setInterval(function(){
          indexNum++;
          if(indexNum==len){
            indexNum=0;
          }
          changePhoto();
        },3000);

      };
      //  点击上一张
      arrow[0].onclick=function(){
        indexNum--;
        if(indexNum<0){
          indexNum=len-1;
        }
        changePhoto();
      };
      //  点击下一张
      arrow[1].onclick=function(){
        indexNum++;
        if(indexNum==len){
          indexNum=0;
        }
        changePhoto();
      };
      //  下方导航按钮


      function dotsOnmouseOver(i,lib){
        lib[i].onmouseover=function(){
            clearInterval(timer);
          indexNum=i;
          changePhoto();
        };
      }
    for(var m=0;m<len;m++){
    dotsOnmouseOver(m,dots);
    }
    }
    // 手动添加鼠标滑过离开事件
    everyphoto.onmouseout();

    // 前后导航滑过显示
    arr.onmouseover=function(){
      arr.style.display="block";
    };
    // 图片切换函数
    function changePhoto(){
      for(var all of photo){
        all.style.display="none";
        photo[indexNum].style.display="block";
      }
      for(var d of dots){
        d.style.backgroundColor="#fff";
        dots[indexNum].style.backgroundColor="red";
      }
    }
  }
  render(){
    return(
      <div class="middle_body">
      <div class="middle_wrap">
      <div class="menu">
<ul className="JS_navCtn cate_menu">
      <li className="cate_menu_item">
      <a target="_blank"className="cate_menu_lk" href="//jiadian.jd.com">家用电器</a>
      </li>
      <li className="cate_menu_item">
      <a target="_blank" className="cate_menu_lk" href="//shouji.jd.com/">手机</a> /
      <a target="_blank" className="cate_menu_lk" href="//wt.jd.com">运营商</a>/
      <a target="_blank" className="cate_menu_lk" href="//shuma.jd.com/">数码</a>
      </li>
      <li className="cate_menu_item">
      <a target="_blank" className="cate_menu_lk" href="//diannao.jd.com/">电脑</a>/
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/670-716.html">办公</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/home.html">家居</a>/
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/furniture.html">家具</a>/
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/decoration.html">家装</a>/
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/kitchenware.html">厨具</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/1315-1342.html">男装</a>/
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/1315-1343.html">女装</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/children.html">童装</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/1315-1345.html">内衣</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/beauty.html">美妆个护</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/pet.html">宠物</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/shoes.html">鞋靴</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/bag.html">箱包</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/jewellery.html">珠宝</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/1672-2615.html">奢侈品</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/yundongcheng.html">运动</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/outdoor.html">户外</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/watch.html">钟表</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="http://car.jd.com/">汽车</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//che.jd.com/">汽车用品</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//baby.jd.com">母婴</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//toy.jd.com/">玩具乐器</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/food.html">食品</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//jiu.jd.com">酒类</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//fresh.jd.com">生鲜</a>
      <span className="cate_menu_line"></span>
      <a target="_blank" className="cate_menu_lk" href="//china.jd.com">特产</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//health.jd.com">医药保健</a>
      <span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//channel.jd.com/9192-9196.html">计生情趣</a>
      </li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//book.jd.com/">图书</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//mvd.jd.com/">音像</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//e.jd.com/ebook.html">电子书</a></li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//jipiao.jd.com/">机票</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//hotel.jd.com/">酒店</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//trip.jd.com/">旅游</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//ish.jd.com/">生活</a></li>
      <li className="cate_menu_item" >
      <a target="_blank" className="cate_menu_lk" href="//licai.jd.com/">理财</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//z.jd.com/">众筹</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//baitiao.jd.com">白条</a><span className="cate_menu_line">/</span>
      <a target="_blank" className="cate_menu_lk" href="//bao.jd.com/">保险</a>
      </li>
</ul>
      </div>
<div class="submenu" id="SubMenu">
<div class="innerbox a">
      <div class="innerbox_header">
      <a target="_blank">家电馆</a>
      <a target="_blank">品牌日</a>
      <a target="_blank">智能生活馆</a>
      <a target="_blank">京东净化馆</a>
      <a target="_blank">城镇体验馆</a>
      <a target="_blank">家电众筹馆</a>
      </div>
      <div class="innerbox_bottom">
      <dl>
      <dt>空调</dt>
      <div class="main_sub">
      <dd><a target="_blank" href="">壁挂式空调</a></dd>
      <dd><a target="_blank" href="">柜式空调</a></dd>
      <dd><a target="_blank" href="">中央空调</a></dd>
      <dd><a target="_blank" href="">空调配件</a></dd>
      </div>
      </dl>
      </div>
  </div>
  </div>

  <div class="p_container">
  <ul class="ul_photo">
  <li><a class="photo image_1"><img src="./src/images/photo_1.jpg"/></a></li>
  <li><a class="photo image_2"><img src="./src/images/photo_2.jpg"/></a></li>
  <li><a class="photo image_3"><img src="./src/images/photo_3.jpg"/></a></li>
  <li><a class="photo image_4"><img src="./src/images/photo_4.jpg"/></a></li>
  <li><a class="photo image_5"><img src="./src/images/photo_5.jpg"/></a></li>
  <li><a class="photo image_6"><img src="./src/images/photo_6.jpg"/></a></li>
  <li><a class="photo image_7"><img src="./src/images/photo_7.jpg"/></a></li>
  <li><a class="photo image_8"><img src="./src/images/photo_8.jpg"/></a></li>
  </ul>
  <div class="arrow" id="arrow">
  <a class="prev"></a>
  <a class="next"></a>
  </div>
  <div class="dots" id="dots">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  </div>
  </div>
<div class="right_photo">
<a><img src="./src/images/1.jpg"/></a>
<a><img class="right_photo_2" src="./src/images/2.jpg"/></a>
</div>


<div class="p_container_2">
<ul class="ul_photo_2">
<li>
<a class="photo_2 bottom_image_1">
<img src="./src/images/li1.jpg"/>
<img  src="./src/images/li2.jpg"/>
</a>
</li>
<li><a class="photo_2 "><img src="./src/images/li3.jpg"/></a></li>
<li><a class="photo_2 "><img src="./src/images/li4.jpg"/></a></li>
<li><a class="photo_2 "><img src="./src/images/li5.jpg"/></a></li>
<li><a class="photo_2 "><img src="./src/images/li6.jpg"/></a></li>
</ul>
<div class="arrow_2" id="arrow_2">
<a class="prev_2"></a>
<a class="next_2"></a>
</div>
<div class="dots_2" id="dots_2">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
</div>
<div class="wanju">
<img src="./src/images/wanju.jpg"/>
</div>

<div class="tunhuo">
<div class="eat">
<a><img src="./src/images/eat.jpg"/>
<dl>
<dt>
囤货一族
</dt>
<dd>会屯会生活</dd>
<dd><span>人气12345</span></dd>
</dl>
</a>
</div>
<div class="clear">
<a><img src="./src/images/clear.jpg"/>
<dl>
<dt>
摩登主妇
</dt>
<dd>拒做黄脸婆</dd>
<dd><span>人气12345</span></dd>
</dl>
</a>
</div>
<div class="game">
<a><img src="./src/images/game.jpg"/>
<dl>
<dt>
游戏党
</dt>
<dd>pk刷怪靠它</dd>
<dd><span>人气12345</span></dd>
</dl>
</a>
</div>
<div class="car">
<a><img src="./src/images/car.jpg"/>
<dl>
<dt>
有车一族
</dt>
<dd>定义车生活</dd>
<dd><span>人气12345</span></dd>
</dl>
</a>
</div>
<div class="health">
<a><img src="./src/images/health.jpg"/>
<dl>
<dt>
养生达人
</dt>
<dd>打开长寿按钮</dd>
<dd><span>人气12345</span></dd>
</dl>
</a>
</div>
</div>

<div class="rightest">
<div class="rightest_top">
<a><img src="./src/images/login.jpg"/></a>
<p>Hi! 你好</p>
<p><a class="red">领取金币抵钱</a>或去<a class="red">会员俱乐部</a></p>
<div><a class="login">登录</a>
<a class="login">注册</a>
<a class="login">开店</a></div>
</div>
<div class="rightest_middle">
<ul>
<li class="active_gonggao"><a>公告</a></li>
<li><a>规则</a></li>
<li><a>论坛</a></li>
<li><a>安全</a></li>
<li><a>公益</a></li>
</ul>
<div>
<p><a>马云IT领袖峰会主题演讲不谈AI：未来都使MI</a></p>
<p><a>马云力挺为小企业减税 马云：应谨防“网络病夫”</a></p>
</div>
</div>

<div class="rightest_huafei">
<ul>
<li><a>
<span class="icon_1"></span>
<p>充话费</p>
</a></li>
<li><a>
<span class="icon_2"></span>
<p>游戏</p>
</a></li>
<li><a>
<span class="icon_3"></span>
<p>旅行</p>
</a></li>
<li><a>
<span class="icon_4"></span>
<p>车险</p>
</a></li>
<li><a>
<span class="icon_5"></span>
<p>彩票</p>
</a></li>
<li><a>
<span class="icon_6"></span>
<p>电影</p>
</a></li>
<li><a>
<span class="icon_7"></span>
<p>酒店</p>
</a></li>
<li><a>
<span class="icon_8"></span>
<p>理财</p>
</a></li>
<li><a>
<span class="icon_9"></span>
<p>找服务</p>
</a></li>
<li><a>
<span class="icon_10"></span>
<p>音乐</p>
</a></li>
<li><a>
<span class="icon_11"></span>
<p>水电焊</p>
</a></li>
<li><a>
<span class="icon_12"></span>
<p>火车票</p>
</a></li>
</ul>
</div>
<div class="rightest_bottom">
<div class="ali">
<p>阿里APP <span>更多<i class="iconfont icon_more">&#xe6da;</i></span> </p>
</div>
<ul>
<li><a><img src="data:image/webp;base64,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"/></a>
</li>
<li><a><img src="data:image/webp;base64,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"/></a></li>
<li><a><img src="data:image/webp;base64,UklGRrwEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSNcAAAANz8GgbSRH57nv/Z8/2F8WEZHNnyHi88wGgzcm43aqSZ3baJLXYDA/PlFDAJYk2aatWte2bdt7/hO7fu/t/n8R0f/kFUwXM4mQ4cddtsvJ6spHshvGo4USmcKpseGtXMV7IN8YjHhW8ihi/dmQe7KKxvqDTbCHKtqqpyLI8scSOitmEWbjCOMhhCFDaPyr4gydu4TQXXZxdLtFFt1iXDRUbrI+5lHNgtd6K4rm0Oa+GfQNhavxHM76Mfzva7yNBs1cAL+3eYePTf1cyCRChh932S6nQV4AAABWUDggvgMAANASAJ0BKjwAPAA+kUCXSKWkIiEoG/6osBIJbADJvGRO1sz5zEOP0G2g8wH2gcIB/VeoA9ADyy/2S+Cv9wv2q9pa5tdFgiT/H+Vl1d+h4S9I7My8ZWoZ0jvQdPQ6ECxXJzL6ihzp9BH1kimsWNbKtACjfrnqF8xbeucoStbwnvSwLTlZDQxs+XsN/DebZ/v+mTOyZbwCgJRKkSB1jDAYAAD+/pCtcriOsduNFTdTp+eV5s5r8aGSf9yz/u5zP7gJBNRmRb5H8e9ifcS2//7DrXl3RbzOv3Gf94z/OfdW/466IRRgAypADHgNsa+3fw6fJ4mk579qCP0FcSd92iDkKmcWoH/8B3HBguo/ZkWU5ReePNc2a8aKsCQBBwkXYShT7mgwnEDlgbmV/yCunZrzf8pDnSgHtiI8GKWW38/FTwNx9otkRUuJ9imbYOn+1/JNa/LzjMuUn+tLY+f/A6dbYctmc40NEdWqsUg4CcKZiGhDk1oewtY5RHQD3t4tFDrwB0j5mfenAmEXkVka5Uj+PEqGb4pz3JKwKI77zjNOWSas4/C56VRZ8POP0XL8JrmPKUdxlgKEEvKEv33HtmmCf02BgOrINpAkM+Pq0d82Vs2qz9+8KB8GpnmPDBVNaIzze2jDuRKvzfdSkOyTgkABVUm9oWTqEsrKwfV5d4wGrTGIaTtD7RFaftj72KOERAUXsJlF80OPQRBbfa1vUZa+TkixZ2BSYnFYDYpMke3M/adcvsallRByw3yKFJrwT/Pb+krn+CdoGYSHbnyMxvV8/Po0z6MP+Wg11g2pOpymYCaG+/G9fdwYUzHjMDGEHn65q6pprlE0ZEogU8/aNTMJdDxZZ+KsicW40dxzEGB7vcUfH/L7Nk9nZ+DQEubfNMaXIOcaczO/RYaSaeeS6Wl14mo40Fe2Zfgr2CnH+iJYc5RV1tmgiA3qHb8t7/3N0m03pRJ+w+G5oHJc0gdhFqPu9UejjMi9zd/o/Zmf5YO8NzmfHJtkZKZp9P28W3Qk7qoaEuaxOFG6I5x97XyoO1Khf76jHV+suKpkiJ+hy6tJS5TsL7kT3Lqmy1BHL58d102Q6Mv2xQWx8Tl0+PKuTsQDZ8+/cEt81WPc9nOk+e6o8s9aNe7ZHmbbWBZQ31QqNCGUl3APHpzVW5wCFaDh7I4yGmeJkVnqxK0Q+sWJEXZA1HuuG1PuspuVGuYfSrrLqhf+n5EE73V12Dog5GuNUI0F2MC/oVQQ0EV0yWf0CKS7uMadC1sVJj//nxVGCxgAAAA="/></a></li>
<li><a><img src="data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSHwAAAABT6AmAJA2yoZrtiCCaYyIACzbn+8CTmvbjqq3UgMLnS7QODpgIXH4+fu5gAyn2+By/RcR/U8r/Z6p+o2N3f5N9eKsrAid+YTwcDNS+0QaAtKUkB4Z6cdfXUb6JaRHQJqeSMOM1PqE8HC2InRW/Jvqxdnd75mq39hYAQAAVlA4IF4DAACwEwCdASo8ADwAPok0l0elIqIhMBgO+KARCWwAyB3A2X4bfO/xa/GPrq9sHzTwNuv1AflX/gdMd+gHuA/aD1Afxz+y/tF7yPoW/xnpGdQB6AHSl/u96U7wAcIKpmpY+TN7h+qqM4ubmG0ibBoLmlceXOfIo1GB/JWlEudV+hsr7TReEdtF0wwDPiYyc+UbAImXs8SWeQZwifHtnxT/I9qz9KyhuRpgAP78Dxd8z1Vb9U2kwkidDgtf7DFdtwP4K0aa3/+e9SHl/j0Sg/7fSBX/9kENOfG2BdkMHdb9gsAzQuvoY/QPaf82UlHGNsmN+D5d6ek42ZH9CPwLH2rz7+rC8ZV9CgNcfWUipMaFt6E3ibUUc9EEs2+IvRDf+Jh9fgpQIvw+4KU26J84baTcd1Sxff6CXuuZ3jrGAL7kG4we1j9pNJd1HTUzuon8cCeH24QYKsFiHQMceVDAcM2ncC2PKGFAnmRyrP7gz9VbqLO1U4tR2Nrseb97L8ZlZbMI6/rtCYycK7HzliXWoFKZtQ0Q1lf04Z8xwfkgVJhRD7amTUS3k39GoKRZK7HseimRPn6IdciQ4Mayeb7NV7divHxrqBIeWuYoSx5Jl2JB7Legtf6lnz66P9prafB+Egk+CkPgMf/9mQEqrf12NYigDLeLumA606lzar3axkXDx3yVW0GUJMoIeHmKiDF9VUBXFAWDolXLOA4YFN6Ha5XyYYXejO2M5t4DRXVmt5jd14dLKgyuJny4sSriJxnWN12nBissK9y0f8yD0bRMy60iACxIen9YeRUw0RhKYoJQLc5EsyKhcnFus2LItQTQxL5laAHB1MCbyIe68FRH26JPslw3zvytP42IxDUn0HG9rr79c6YCACTppy/6zbVaOvHcN3NKeu46PX9I3n0kiYr8xK/Uh1m/WWvDB9zr15i3jMz3Sndcug57tORpKnFudPUMaBsl1fFqdu4CYxP2u9mQZqyderFI3v6inLvqbM+50mRzreYHnttgLcf/JY3d73OtUTLoPabMPDtk9n71p2Ne+dtPaiSQFQ3+Jd97McsJKIx4zpruD08IggE2KNnK+nU3yIRlu/i3TUVedAAnfpZoK/KeDelXSxzVB+LTqsT4XZaeUvjl4U6yqNXKw7VsWSAA"/></a></li>
<li><a><img src="data:image/webp;base64,UklGRm4FAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSO0CAAABd8agbSNJl8zxx9zZ945BROTDJ5nSBhkyZZFIXiISGbKXJZGWFGthkaKLiCyySaRltdkl0oYh/yHttm0zlnaSZ5tt27Zt27Zt27Zt213O/k1Vndzk5lbrY0T/E38NrU7NDMRN23p/XfMExKut33y9qV4K4pO6j7EXcyoiLtqA74wFLvfJ1xGHurdphU+NaJwK5aVnafc/ODijcWaiBpXFZ+j4btfYthUSoaz2LbqYr8+u6VkANfpoP93N0NctfSslwHuVO5QMnJ1ZCR6NhqcpH3wyo7IGLx1umPQSOdctBdLJAx/Ro/l+XhYkjVEf6D2ytgKkEge/oYrA7mzIDHlLRWsL4F7nCVV9n5gIt2oXqc7XDi7GsiAVPN7/g9axfDh3DFLS9zZM8WHj9OGf+evHGANOxccp+WlO59U/KazWkHuA1pliOOjDvlNyWzoy11Poi1h/WqHOcMg5TdleiNV8TntjxAp9tDbAoWWQstURS1tu0jaudlF2+nVa93IgLqV0VR2x3p9pN1/ubbqL1rtWEDIvUfritglt8uvfp+CbW7CS1vchEJo8padD5Rdp/zxFN1bQCk2D0OsjvVxtoB2j7du0DCRspmXOhzAqQA8X6mrYQ9uTGogm36JtAYTJJuUftERUP0Hbj+Ea6odomfMgTKX8t6E6oiXXaL/Sou5h2kLTIUwyKR1ZmIxoxzcUHj6I0OYbBWGkn/If26eWbo/Q/VMXCL0+0cOLZfsjlHhVC0KzZ1R+MwVC3jUqXwJR20jVZmc4dDKp+GIpHIrvUW1odhIcEqYFqfROLTjWvk2lszU4GmMiVGdeKYNLxkmqe91Nh4vW+g5VBaekwFXr+pFqfKuSIGGM/0IV4XUlkErs/4zePy1KgKTR4y69vh+eBWmt0rpP9PJ5Rx0dXjIHnqF06PygHHjU8/odfROme+jJke55OhSkdZh18oNJp/CTHVMapUBVYlH1HtM3nrz2IHrj/M7Fw5tXzjHwXwAAAABWUDggWgIAAHAPAJ0BKjwAPAA+hTSVR6UjIiE59OqooBCJbADG8Yf+5dYJrDwHDa7Sd995JsvtgPMB0APNr6kPn2vZUwDBig3wNIFMw8Rz3j0AP1VZ9EAsqy7/Na13sOtWGDKvg3z927BHUeklR7VFdIMkgYZryg+mda0huVbKUxeLeWezrWp/wyxWAAD++94SxGdmbXHzjQOlteL+xhPMfwU40n5Fr9kln1JgqxKXhro6NDAyu4wMfsQiIAIKravDThY0fPBaTpZ3G0+4/uDESTEW5r4MTbwqQycJcbV+NHRBc9/PYTOVY2B+h94YIbVngkwjWprpsNPmjnofE/60bRWezaaIecnYcjC7ERzHyvjPsq+1WPqd0Bq029xVJu5bT2xX/wfwHtyO/vfIOXKOrTb9mWPAM/lDgnQNDUXuAvNACY9fwOdR65beAaH19VObGzY8e1CSjIUPTrtwNsyfFQjhffqvVenLwjn+6zccovFEhl1EaayRbSVQiCIOANuaRF2aXvA5rSIKOFkp4k74KxwHyvWyf4wO8oMZgOavvDqhrE/j8nTN6gTPkQ+cYacyjhtsZIp4qepIOfcyVjtDkRQyZ4NFg/L20gGl5+qC9fGcRoo7tT9939AlqCuaEQ3jSlI1IJHmXRx+6ywxQYMZEWTOIU+2Cd+0WgvpWLPBSKJe1JUbEQzMI9iLEeeAO7k31oFrLGPC9FTO0L9zYJklv3FLa2PbQ/V0xiiJoHz4Kj37Dik25kNzvrmBA5vSksCCnraEEAPukIdn8kEHmYiB9haMHsmxDR63JVeRmR7/AAAA"/></a></li>
<li><a><img src="data:image/webp;base64,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"/></a></li>
<li><a><img src="data:image/webp;base64,UklGRs4DAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSJ8AAAAJ38GojSRHW92bw+t0/Kk2jIjIgojciDz5mdwjp5lUVNN35dU2EZeM/tGvLIcIjiTJNq1+tvVtm4/739f909fzHxH9Twg9GMaGhF671+14++CnLg+ZKaFfyct3KxfC3o4dMMzi4GKQKuDI/sKca2DJSWiBZyZgRmC6YEr4J9qB+a1BvAjw3pv1A6x2f79Nn+DUp1nZnUfXBoRyNakAAAAAVlA4IAgDAADwEgCdASo8ADwAPpFCmkolo6IhphVc6LASCWwAqSc9vt+5+YnS/6j+KeQpQn1xzrfBg6pfmA87L0R/qf7AH+g6jD0AOlP/cHCVWMpSdtL+SFvgH6gNF/+XlB7tP6ug8Jx8tR72NZHiK4KfKGlP/d73G4P2mcfJOG2mzHLk4+vrmkgTG5DE1OwPSxkJo+uoh+lO2iyqzNptj3e/D/EaDN8AAP7KT3b1tH/xipIohNCi5zi6py53P8akvpkQavXMg78uev8um1NAqeKBFSTX29FhR7KHkaeCBSXMsr8R1u/MUz6kstw+8GKAh5aMs/1Unb+wrSkVQhU4rwqM2NgUaqeoaup/x+xfMj8N1k+YcNXnNwvlbWGZKqPSmv/O7bo++0ilfFpiHGI2lRB38WqcrfPAIRKSaJHI0Y0GVc00+3j2HflPkNkV1kpLZpbV9POcqMzYvr5+J7nQ1ZKVkRegwgSp69HD6DEh3vYGkuTl/5msyWlHe7wyt8wWrAVbvjg+UKiUf3MYld8St8CDALMac/rrFl3GwrFb3zAwzZzcFOZ/SjZDMHgWUyEYn1Wc4OpB3P7qiwNMHNqIamejUjMQygiqnMzasOHGFgCMyP8AqjorJQGrGAGOwXKyBa9qxVjeD+TbIwd5KQ5/G+N2H9FrZ9DFj26Ilolf1NNqx+qPBg7bZlxNNuC3AefyKhaZIepNslgy5aTqGbAwQ78eLvd4niTuEU9Ruv8vSL//MQcN0AkmCNr3vVYqhxj4Z9/X+CCFq/Q4ivZGtntpc9OkRj7xaUVG8RaXjgKCIv9XAlY9BThk7PO9wRvV/ymMc0gfHEaFgPzDba47ka4NfSMJXKQsXwDAwdovb4j19sy5z8zbICSR9u/8ibL27/yC0EcGrIVGIAodW+cu9XHsZAZ9qNNi/04IY6AVwEnxPOuL5L0G0qXJI5+ud9w8yfcFmcEkcAm+DD8F/+QOOoiptA2J298NhgqkF19Rkfa6nKw84N9/Fw0/8YrIOjuHbXKoccO7eqXeIkQ90nyaaFgAAA=="/></a></li>
<li><a><img src="data:image/webp;base64,UklGRvQEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSCQBAAANn8Igkq023NEhxVr8q+nREBEZ+N0QJ3In5G1OvOpR5cpkOeWUxO0i7vwBtiTJpq1eOLbNax/b9ll77///l2useb4REf1PfHL7M9lE0MPwd2u7HPf66x2+stBt1oAm5gkm0p5eZWHhkz11e4ZWEb13VYYnvNsvCwq6bVfZTv2EV5YuGNAvE+XOwELoRoFCxHOVhfsGRPJOVn1FkD220wpkYW8JdDIbB2EiAMKAB4QeDkJuMdBZ+BfKQMhMDjpz6wHddhUA3WoSB924lZOgUr2BJwKq+XbdeQTVk2tfFXcSFOrFwOuiko8J6DemXYZXa9i6iEvoVuOmA+/HRjt3LaFX1Xp2fDoNK86HqIA+Y/Z8YPhiLSo9TzoZ8ELHZjUabN34BAAAVlA4IKoDAACwEwCdASo8ADwAPok4lkelI6IhNfXZmKARCWwAyUlofuX4za3d6D8cuY71Q7yZOPAA2zPmA+1Xsjbw36F/6q9an5RV4FfcbIb9yP0PCvtQ/3jfChzcaPoH59Xpb0UN8a/Y5YJ/tWkecsdYjcA6FbmjA+L/13IjKYHOUT6525rSStMKKZZGRlSAJ/1AOPlQ/xa46ub+2DTQldjJlCt+qon+EiSFzOuQAP79KY8cj8UI2nrdTYd5lL+rw7o//NzJaTIFl0ewCeTTVrliCncWZdTgxug+f/M1c/GHhP/V95+GW/hlu6m1MfBxqaXbdgC5kMONqS/fN4nwMV4gN8Q9RkkKc7pxvhKpuFzC3OBUV6lpDCiCGYXuWnaXYHN2vECEehjr7LVL3RFNpqFIWcLZXUTGS7zR4uC4VRvX4Utb3+NrjOTtelPgeo0cYBPW56AX67zWqG8RNgst54clQqdN5UYaqA6STLsm4gvlCuTjAY5Ee/FQr2+mYwpdwOnOcgAxeMSBkTeNffButiV3LkjH/BQ6smvPgsDa+QhA2Q/yTr+4HnrcvqzqOYt1+Wd7h7OgDf3wwn1228jlyLER7AStGuMRzsSXyxRI3moxTO0wXd5H3Yadwk2vq/GUIwn0mynXa/cRZhvP2yofqt6aA5U/uP68lX/bC9vnoyijXPS8jAq+KoUY19wdf9Lixmq2LsJH4TGOp/chO293lKBIeLg8z+4iVAVce7X7EsWmERGVjfZ8Le4/GN+PGWVJfGyx3zJjz16goLpZrwWeNYQH/GtSRnfmr4RxEjNk5xzXA93JcZafSNdHPHfDzVBQS+iOZLtiylhZbr2Yo5LXzrNLw5TUTLxgbHFzkrQ1Dkdsz10TXyRQLpdJvP3s299J4a0td9OjTEQ8CBewhYBfmTN38/mzRJVqvtbPrX+G9q/CAMJdyhMxADfN+2kyTd3jn/Hq6KGPwhGe6ohDI7tqxIW7fKNVXTf0A6Jrag3QCzjrnr8I9jsSQ6SN004fv3WnYTT0SmZgnmOfeTRiBBpGzbJU1dkVeLPsGVg2vF8KVgGRbKyeTysIbGHrPkRhBSq9Lw1qWDy6DCDQKdV4C/EyGVYZRf+Fbvo5fo+82yQBmWeor5bnONJ1LHPKGxmhAd3oyx9XaH8pQUXD0U/aYKPEL/l0r37/Z2qeIM01TTSc9khcSZHm8+4wfPmB5RRMP1u5KkqXYEHjCQKTzh6EzJA4GINRH+ajHNzLvJsFT6pS5xwwAA=="/></a></li>
<li><a><img src="data:image/webp;base64,UklGRvgDAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSDUBAAANr8MgkiQnzOyRveBf3gdAQ0TkQpeXvEVaRMI7tBQ97LRdxGJuz51KIWmshL+N1yEir9CLCWi3bZtudmzbtmrFdWMnteJa/99653PHiOh/4hNLqAuE7G45/n59eNxsnd++4DtfPPoEZiROe1BZK3Yf8UUSnwWTLOuiqVgY4ZM0aQXT7tVBvo930ZoAzGvnePkJ3hJWUMiWh9sP8CVAo8iUGsIwqMyeom4GZCtlP+g0jigIY24QOlwg1EtByH1mg+4F/0LZIGTdikH3cOQA3eDABbqTahh05ZbGBKqr3kUhBap1+V3FaAfNoMJ66RTTalDcZoV4fdoZLMnA/M0GH+/TPG9BBaZvNkf41M+PkzYwe5bj4Mtwt+ydN4C54VZNhG/u23s9S8RmEODv95en9X05G58AAAAAVlA4IJwCAABwDwCdASo8ADwAPn00kkekoyGhO/ScAJAPiWwAvzW0/t3ToPO6x+PX46dTNvlF2e9tn+oDbAeYv9gP2A95H0J7xj6EHlt+yiRJvkf74B+kB6HQAGSzIE2j6qRBgcrzGNlxZLDjsppG8OfdCy8htFfjWVXhdScQwC3crM70VG19oPTMzAAA/v5fdRTkSBvP5S6Gv7qev4L/+9H/BzvQHucs4ElXPfAWeWxNOfZFp8Sjw/3K6WzpnSrPn6z/+dq+wriKxr7zxGAUK4s3MkPz6ffewK7wfGzEl6XIJE+CzOY9eoghiABsqqa8DBh3w+ORis+VCrB40yM5iwn53dsL4H5nKb04/3Dn4fok9BOgJjl+1miHdurOFFGLOGBfsXpjz5jvySuGX//g3fyblEQUxGR3fT8jRAK/kfe0ivtrbzUR8kPw/BHzTd0oev7rUr2PBeHLkr4SjFsxNkh0DR93omBEScJLzHQvAS/9sycf4j0+Yin2WqHve8ggOT+Nx3I/5b782+jCOGPKGbck2exBZ8hqifI48/8kh7pQO2iyORtcRxRZYGMP5/4fzhOKojjX2movzEAWZ0Ml2yafWH31e8lezJuR0WVRRyUl1wbKiYVk6E/8R6aXgT4Ek6+Oco73rxxLNo4fI+KgCNEb4wzebWIBWxaVMq3ydedmk9qC0NSiFvhCxWdzL/iqEN13fDwdlj1/Bj33hSM3OJCI5IHlLL83s8bz7hGTd/Slz4B/ivYdgkPP0AXcUbhVS8EYZ9+WTP8rZ5AZV2kVWbpI+mszyz/nUbWBfyuXdutpqPRUPUDpc/6WcTyw/Q26670NaS+YrYbNcPcgi68IKIx25s/ARZT+RDhALKqpnSt7BEHv7MVp6nW5fVI7UdR+m5ToAA=="/></a></li>
<li><a><img src="data:image/webp;base64,UklGRqQDAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSPUAAAANP8IwkiQlNO5O/qm+kUNEZOU3y2ej0cijtFv12k/4Wv0epElqtM2pFma1BFeSbZvOfn6xbdu6cZ7nP6MY9/ynIvqfeCiRfCkd0sHHOK4m872FF18z7oKfHkoXAtv+BQ8p0bbBWYxVUl3m4JZoeeAv52o9hqu/7YFCSNa7Z6Vhg0bIpgaRBKjkKsu7IIsGy6ATiykQpsIgDGsg1PBXxdRAZx7CoDusU6Bbj4siqNzpPBgF1e60Z1UZNPZItQaprAAKb7HC9dytJwXw9zZD3FmvnpXB214MJdwd1slUoiJ4urvREi+XPgsWMiENfMzjcnZS8QAAAABWUDggiAIAALAOAJ0BKjwAPAA+kTqZSKWjIqEqFm3IsBIJbAC/cex4AdjF0ntn4jfkB05XAOIDwz0AbZrzAebX6AN4U3j7+9sEDSBTQPH0+IFspyuO/2ZK4XPUzO6+339kMZIaBJUS5UgmlcUTBuV6UwzSj/w5LCaKd+mbcGZNd6VLdCt7IAD+/HZeMGsdWiNDdKJN0b/BtAHTNRITSE631R03AH/XQiwkylEIoEP+rn1doZJLPLeH+GHgh84VRfZxbdZiDAVr01Vd7nMtYUbu+7H3mcDMZkPvQ0+rqaYJ84/Z7XSGrYuxscTlhehX5Bz9Z+z+HrwzHmbgmdYw4KvURAh0nwfqTArl2/xEqQ/tdybFE8YLmMJpM81z4paFU9q5BiTFPNNhFhQ89joA4E9417j3KJv7R/CBw26TCBwwV9vKno5mW83nd8fT1jtulm2h116lSCXj89/ydD8/jRdaeH//eLA3waFSgUhwLz1bCzzwdYWMY4nwO5NoWREdQen5KIYOuexulT2mHgFKWGOnM9O/0nkWg2beGv8wW3T0hYIMh58y0gj8wI3bo1IdpgvBdzOCFrLxzS+TUjrOm890AOo8i7sZVOt7xQk3iEenBp0PbHWKn57OmALerOwD3Am5pn2L9K2KZH6qlD2/2voadVV7gr1Kq4FFSomulzZAVdp+VqtgLqB2HYbdcSoiCVSCI8J6Niequyk0mXyquvW96CyFOvdW4Cj0WEO32+0Ym73apRFsN9/I/F19f8hHpAdTBejxwoPXzKPav/1l1Ct0UXYgpQ0/gbohhREZb3/ak0EPpRKpTPIAjJNt0otORYk06G72M4eJ5/HGOJgXQexc98ZI40Q+iABnip/BlAAAAA=="/></a></li>
</ul>
</div>











</div>





  </div>
  </div>
    );
  }
}
