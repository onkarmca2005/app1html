import React from 'react';
import Popup from './Popup';


class Mainfile extends React.Component{

constructor(props){
super(props);
this.state={ showPopup: false };
this.textInput = React.createRef();
}

togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  


      

   shoot=()=>{
     
          
     
          alert(this.textInput.current.value);
     }

     render(){

return(

<div>
<h1> Simple Popup Example In React Application </h1> 
<input type='text' ref={this.textInput} />
<button onClick={this.shoot}>Take the shot!</button>


<button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
<button onClick={()=>{alert('testing')}}>click</button>


{this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  </div>
);
 }
}

export default Mainfile;