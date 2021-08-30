import React from 'react';
import { Card, Button } from 'react-bootstrap';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' , height:'34rem', display: 'inline-grid', margin: ' 10px' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increment} style={{height: '18rem'} }/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            👍🏼 : {this.state.counter} <br /> <br />
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
               
            </>
        );
    }
}

export default HornedBeasts;
