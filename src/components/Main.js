import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './hornedBeasts.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    constructor(props){
        super(props);
    }
    
    
    
    render(){
        return(
            
            <>
            <Row xs={1} md={3} className="g-4">
            {this.props.data.map(item => {
                return <HornedBeasts 
                title = {item.title} 
                imageUrl = {item.image_url}
                description = {item.description}
                click = {this.props.click}
                /> ;
            })}
            </Row>
            </>
            
        );
    }
}

export default Main;
