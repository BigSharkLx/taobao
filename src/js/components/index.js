import React from 'react';
import Header from './header.js';
import Bodytop from './body_top.js';
import BodyMiddle from './body_middle.js';
export default class Index extends React.Component{
  render(){
    return(
      <div>
      <Header/>
      <Bodytop/>
      <BodyMiddle/>
      </div>
    );
  }
}
