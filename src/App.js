import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import { Component } from 'react';
class App extends Component {
  constructor(props){
      super(props);
      this.state={
        color:'red',
        fontSize:12
      }
      this.onSetColor=this.onSetColor.bind(this)
      this.onChangeSize=this.onChangeSize.bind(this)
      this.onReset=this.onReset.bind(this)
  }
  onSetColor(param){
    this.setState({
      color:param
    })
  }
  onChangeSize(value){
    if(this.state.fontSize-2>=8 && value===-2){
        this.setState({
          fontSize:this.state.fontSize+value
        })
    }
    if(this.state.fontSize+2<=36 && value===2){
        this.setState({
          fontSize:this.state.fontSize+value
        })
    }
    
  }
  onReset(){
    this.setState({
      color:'red',
      fontSize:12
    })
  }
  render(){
  return (
    <div className='container mt-50'>
        
        <div className='row'>
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            ></ColorPicker>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <SizeSetting
                  fontSize={this.state.fontSize}
                  onChangeSize={this.onChangeSize}
                  ></SizeSetting>
                  <Reset
                   onReset={this.onReset}
                  ></Reset>
              </div>
        </div>
    <Result
      color={this.state.color}
      fontSize={this.state.fontSize}
    ></Result>
    </div>
  )
}
}

export default App;
