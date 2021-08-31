import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0 ,
            show : false
        };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 , show: this.state.true });
        this.props.click(this.props.imageUrl);
    }

    render() {
        return (
            <>
             <Col>
                <Card style={{ width: '18rem' , height:'34rem'}}>
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
            </Col>
            </>
        );
    }
}

export default HornedBeasts;
