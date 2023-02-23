import React,{ Component } from "react";
import MountingChild from './MountingChild'
class Mounting1 extends Component{
constructor(props){
  super(props)
  this.state={
    name:'aryav'
  }
  console.log('Mounting1 A constructor')
}
static getDerivedStateFromProps(props,state){
  console.log('mounting 1 getDerivedStateFromProps')
return null
}
render(){
  console.log('mounting1 render')
  return(
    <div>
    <h1>Mounting1</h1>
    <MountingChild/>
    </div>
  )
}
}

export default Mounting1
