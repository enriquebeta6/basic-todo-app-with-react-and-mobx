//Dependencies
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import listaData from './ListaData';

//Styled
import 'bootstrap/dist/css/bootstrap.css';

//Bootstrap Components
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Lista extends Component {

  handleKeyPress = e => {
    let key = e.which || e.keyCode;
    
    if (key === 13) {
      listaData.addTarea(e.target.value);
      e.target.value = '';
      e.target.focus();
    }
  }

  handleRemoveTarea = e => {
    listaData.removeTarea(e.target.id);
  }

  render() {

    const list = listaData.tareas.map((item, index) => {
      return (
        <ListGroupItem 
          key={index}
          onClick={(this.handleRemoveTarea)}
          id={index}
        >
          {item}
        </ListGroupItem>
      )
    });

    return (
      <Grid>
         <PageHeader>Todo APP</PageHeader>
         
         <input type="text" onKeyPress={this.handleKeyPress}/>
         
         <Row>
           <Col xs={12}>
             <ListGroup>
              {list}           
             </ListGroup>
           </Col>
         </Row>
       </Grid> 
    );
  }
}

export default observer(Lista);