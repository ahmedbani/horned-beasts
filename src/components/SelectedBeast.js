import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  close() {
    this.props.handleClose();
  }
  render() {
      console.log(this.props);
    return (
      <>
        <Modal show={this.props.display}>
          
          <Modal.Header closeButton onClick={this.props.closeModal}>
            <Modal.Title>{this.props.beastToShow.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img src = {this.props.beastToShow.image_url} alt= {this.props.beastToShow.title}></Card.Img>
          </Modal.Body>
          <Modal.Footer>{this.props.beastToShow.description}</Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
