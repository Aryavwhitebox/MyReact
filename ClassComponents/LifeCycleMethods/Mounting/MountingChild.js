import React,{ Component } from "react";

class MountingChild extends Component{
constructor(props){
  super(props)
  this.state={
    name:'aryav'
  }
  console.log('Mounting Child  constructor')
}
static getDerivedStateFromProps(props,state){
  console.log('mounting Child getDerivedStateFromProps')
return null
}
render(){
  console.log('Mounting Child render')
  return(
    <div>
    <h1>Mounting Child</h1>
    </div>
  )
}
}

export default MountingChild
