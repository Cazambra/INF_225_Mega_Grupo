import React from 'react';
import './App.css';
import utfsm from './utfsm.png'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Solicitud from './components/Solicitud.js'
import Reserva from './components/Reserva.js'
import Index from "./components/Index.js"
import Navbar from 'react-bootstrap/Navbar'
import solicitudService from './components/services/solicitudService';
import Editar from './components/Editar.js'
import Nav from 'react-bootstrap/Nav'
import pacienteService from './components/services/pacientesService';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {solicitudes:"",reservas:"",pacientes:"",carga:"",ruts:"",reload:false};
    this.get_solicitudes = this.get_solicitudes.bind(this)
    this.reload = this.reload.bind(this)
  }

  reload(){
    this.setState({reload:!this.state.reload})
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
  obtener_lista(){
    solicitudService.getAll()
    .then(res=>{this.res = res.data;
      var lista = res.data;
      this.setState({carga:lista})
    })
  }


   crear_lista(){
    const lista = []
          for (const i in this.state.carga){
            var obj = this.state.carga[i]
            lista.push(obj.paciente.rut)
          }
    this.setState({ruts:lista})

  }
  obtener_lista_pacientes(){
    var lista = []
    pacienteService.getAll().then
    (res=>{var pac=res.data;
          for (var i in pac){
          var obj = pac[i].rut
            lista.push(obj)
           
        }
        this.setState({pacientes:lista })
      }
    )
  }



  
  render(){
    if (this.state.carga === "" || this.state.pacientes === ""){

      while (this.state.solicitudes === "" || this.state.solicitudes === [] || this.state.carga === "" || this.state.carga === [] || this.state.pacientes === "" || this.state.pacientes ===[]){
        this.obtener_lista()
        this.obtener_lista_pacientes()
        this.get_solicitudes()
        return( <Spinner animation="border" variant="success" />)
      }
    }
  
  
    if (this.state.carga[0] === undefined && this.state.carga.length !== 0){
      return (  <Spinner animation="border" variant="success" />)
    }
  return (

<Container style = {{padding:"0",margin:"0"}} fluid>
  <Row>
    <Col style = {{width:'100%'}}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/index">
                  <a href = "/index">
                      <img 
                        width="60"
                          height="50"
                          src ={utfsm} alt= 'icon' />
                  </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/Solicitud">Solicitudes</Nav.Link>
                  <Nav.Link href="/reserva">Reservas</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/paciente">Inscribir Paciente</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
        </Col>
        </Row>

        
<Row>
  <Col>
      <Router>
          <Switch>
                <Route path = "/dashboard">
                   <Index reload = {this.reload} solicitudes = {this.state.solicitudes} reservas = {this.state.reservas}/>
                </Route>
                <Route path="/solicitud">
                    <Solicitud pacientes = {this.state.pacientes} carga = {this.state.carga}/>
                </Route>
                <Route path = "/editar/:id" 
                render = {(props) => {
                return <Editar   {...props} ruts = {this.state.ruts} pacientes = {this.state.pacientes} carga = {this.state.carga} solicitudes = {this.state.solicitudes} />}}>
            
                </Route>
                


                <Route path="/reserva">
                   <Reserva />
                </Route>
                <Redirect from =  "/" to="/dashboard" />
          </Switch>
     </Router>

    </Col>
    
  </Row>
 </Container>  

  )
  }}
export default App;
