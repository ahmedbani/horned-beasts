import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './components/hornedBeasts.json';
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      info:data,
      selected :{} ,
      show : false
      
    };
  }

  closeModal = () => {
    this.setState({show:false});
  }

  select = (imagUrl) => {
    let SelectedBeast = this.state.info.find(item => {
      if (item.image_url === imagUrl){
        return item;
      }
    });
    this.setState({
      selected : SelectedBeast,
      show: true,
    });
  };
  
  render(){
    return (
      <>
      <Header />
      <Main data = {this.state.info} click = {this.select}/>
      <Footer />
      <SelectedBeast beastToShow = {this.state.selected} closeModal = {this.closeModal} display={this.state.show}/>

      </>
    );
  }
}

export default App;
