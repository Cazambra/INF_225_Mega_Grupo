
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pacientesService from './services/pacientesService';
import Alert from 'react-bootstrap/Alert';
import {
  
    NavLink
  } from "react-router-dom";
  

import 'bootstrap/dist/css/bootstrap.min.css';
var React = require('react');

class Reserva extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){

      
        if (event.target.name === "rut"){
            this.setState({rut:event.target.value})
        }
        else if (event.target.name ==="equipo"){
            this.setState({equipo:!this.state.equipo})
        }
        else if (event.target.name ==="sillon"){
            this.setState({sillon:!this.state.sillon})
        }
        else if (event.target.name ==="pabellon"){
            this.setState({pabellon:!this.state.pabellon})
        }
        else if (event.target.name ==="equipamiento"){
            this.setState({equipamiento:!this.state.equipamiento})
        }
        else if (event.target.name ==="recuperacion"){
            this.setState({recuperacion:!this.state.recuperacion})
        }
        
        else if (event.target.name ==="tipoequipo"){
            this.setState({tipoequipo:event.target.value})
        }
        else if (event.target.name ==="tiposillon"){
          this.setState({tiposillon:event.target.value})
      }
      else if (event.target.name ==="tipopabellon"){
        this.setState({tipopabellon:event.target.value})
    }
        else if (event.target.name ==="tipoequipamiento"){
            this.setState({tipoequipamiento:event.target.value})
        }


    }

    handleClick(event){
      this.setState({ingresado:false})
    }
    handleSubmit(event){
     
      event.preventDefault();
       this.setState({ingresado:true})
      
       pacientesService.create({rut:this.state.rut,
       nombre:this.state.nombre ,
       nacionalidad:this.state.tipoequipamiento ,
       sexo:this.state.pabellon ,
      fecha_na:this.state.equipo ,
     domicilio:this.state.nombre ,
     diagnostico:this.state.tipoequipamiento ,
     telefono:this.state.tipoequipo ,
     gravedad:this.state.recuperacion
    }).then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({rut: '', TipoPaciente: '',sillon: false, pabellon:false,equipo:false,equipamiento:false,
      tipoequipamiento:'',tipoequipo:'',recuperacion:false})
       

};


  /*  
         rut:this.state.rut, 
         TipoPaciente:this.state.TipoPaciente,
         sillon: this.state.sillon,
          pabellon:this.state.pabellon,
          equipo:this.state.equipo,
          equipamiento:this.state.equipamiento,
    tipoequipamiento:this.state.tipoequipamiento, 
    tipoequipo:this.state.tipoequipo,
    recuperacion:this.state.tiporecuperacion 
       }*/

     
    render(){
        return(
            <Container >


            <Row>
           
            <Col>


            <Form  onSubmit = {this.handleSubmit}>

  <Form.Group as = {Col} md = "4" controlId="formRut">
    <Form.Label>Rut</Form.Label>
    <Form.Control  name ="rut" onChange={this.handleChange} type="text" placeholder="Rut" />
  </Form.Group>


  <Button  onClick = {this.handleClick}  variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>

      
            </Row>
            </Container>
            

       
        );
    }
};

export default Reserva