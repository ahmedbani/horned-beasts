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
      show : false ,
      horns : 'All'
      
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

  filter = numberOfHorns => {
    if(numberOfHorns === 'All'){
      this.setState({
        info : data ,
        horns : 'All'
      });
    }else if (numberOfHorns === '1'){
      this.setState({
        info : data.filter(item => {
          if(item.horns=== 1){
            return true ;
          }
        }),
        horns : 1
      });
    }else if( numberOfHorns === '2'){
      this.setState({
        info : data.filter(item => {
          if(item.horns=== 2){
            return true ;
          }
        }),
        horns : 2
      });
    }else if( numberOfHorns === '3'){
      this.setState({
        info : data.filter(item => {
          if(item.horns=== 3){
            return true ;
          }
        }),
        horns : 3
      });
    }else {
      this.setState({
        info : data.filter(item => {
          if(item.horns=== 100){
            return true ;
          }
        }),
        horns : 100
      });
    }
  }
  
  render(){
    return (
      <>
      <Header />
      <Main data = {this.state.info} click = {this.select} filter = {this.filter}/>
      <Footer />
      <SelectedBeast beastToShow = {this.state.selected} closeModal = {this.closeModal} display={this.state.show}/>

      </>
    );
  }
}

export default App;
