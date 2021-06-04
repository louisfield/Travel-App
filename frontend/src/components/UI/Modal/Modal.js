import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";
import classes from './Modal.css';
import Auxillary from '../../../HOC/Auxillary'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

//import Backdrop from '../Backdrop/Backdrop';
const myModal = (props) => {


    return (
       <Auxillary>
        <Modal isOpen={true} toggle={props.closeModal}>
          <ModalHeader toggle={props.closeModal}>Test</ModalHeader>
        </Modal>
        </Auxillary>
      );
}

export default myModal;