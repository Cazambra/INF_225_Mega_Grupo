import "./Index.css"
import solicitudService from './services/solicitudService';
import pacienteService from './services/pacientesService';
import Grid from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'
import List from "./List.js"
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Editar from './Editar.js'


var React = require('react');


class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {solicitudes:this.props.solicitudes,reservas:this.props.reservas};
    this.get_solicitudes = this.get_solicitudes.bind(this)

  }
 
  get_solicitudes(){
    var listasol = []
    var listares = []
    solicitudService.getAll().then
      (res=>{var pac=res.data;
            for (var i in pac){
            var obj = pac[i].reserva
            if (obj === true){ 
              listares.push(pac[i])
            }
            else{
              listasol.push(pac[i])
            }
          }
          this.setState({solicitudes:listasol,reservas:listares})

  })
  }



  
  
     
    render(){
      if (this.state.reservas === "" || this.state.solicitudes === ""){

        while (this.state.reservas === "" || this.state.reserva === [] || this.state.solicitudes === "" || this.state.solicitudes ===[]){
          this.get_solicitudes()
          return( <Spinner animation="border" variant="success" />)
        }
      }
      var listres = this.state.reservas
      var listsol = this.state.solicitudes
      var reload = this.state.reload
      return(
        <Container  style = {{padding:"0",margin:"0"}} fluid>
        
          <Row>
            <Col style = {{textAlign: "right"}}  >
            <Button  href = "/solicitud" variant="primary">Agregar una Solicitud</Button>
            </Col>
          </Row>
          <Row>
          <Col md = {10 }>
              <h3 style = {{marginLeft:"40px"}}>Solicitudes</h3>
              <List reload = {this.props.reload} ItemList = {listsol} res = "0" />
              </Col>
          </Row>
          <Row>
          <Col md = {10}>
            <h3 style = {{marginLeft:"40px"}}>Reservas</h3>
              <List reload = {this.props.reload} ItemList = {listres} res = "1"/>
            </Col>
         </Row>
     </Container>
   
      )}};

export default Index;