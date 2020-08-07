import './Solicitud.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import solicitudService from './services/solicitudService';
import pacienteService from './services/pacientesService';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'



import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
var React = require('react');

class Editar extends React.Component{
    constructor(props){
        super(props);
        this.state = {ingresado:false , id :this.props.match.params.id, fecha :"",hora :"", equipamiento : "",
        sillon : "", rut : ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.Encontrar_sol = this.Encontrar_sol.bind(this)

    
    }



   Encontrar_sol(){
       var lista = this.props.solicitudes
       var pac;
       for (var i in lista){
           var obj = lista[i]
           if (parseInt(obj.id) == parseInt(this.state.id)){
                pac = obj
                this.setState({fecha :pac.fecha,hora:pac.hora, equipamiento : pac.equipamiento,
                    sillon : pac.sillon, rut : pac.paciente.rut})
               
                
           }
           
       }
      
       
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

        else if (event.target.name ==="hora"){
            this.setState({hora:event.target.value})
        }
        else if (event.target.name ==="fecha"){
          this.setState({fecha:event.target.value})}
      /*  else if (event.target.name ==="recuperacion"){
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
   
}
else if (event.target.name ==="duracion"){
  this.setState({duracion:event.target.value})
}
        else if (event.target.name ==="tipoequipamiento"){
            this.setState({tipoequipamiento:event.target.value})
        }*/


    }

    handleClick(event){
      this.setState({ingresado:false})
    }
    handleSubmit(event){

    console.log("aaa")

    event.preventDefault();

   if(!this.props.pacientes.includes(parseInt(this.state.rut))){
      alert("Rut no existente en la lista de pacientes")
      this.setState({rut:""});
      event.preventdefault();
    }
    else if (this.props.ruts.includes(parseInt(this.state.rut))){
      alert("ya existe ese rut, intente denuevo");
      this.setState({rut:""})
      event.preventDefault();
   
    }

     else if(this.state.rut === ""){
       alert("Ingrese Rut")
       event.preventDefault();
     }
  
     else if (this.state.fecha === ""){
       alert("Ingrese fecha")
       event.preventDefault();
     }
     else if (this.state.hora === ""){
       alert("Ingrese Hora")
       event.preventDefault();
     } 
     else{
         console.log("aaaa")
       this.setState({ingresado:true})
      
       solicitudService.updt(this.state.id,{ paciente:{rut:this.state.rut}, 
         sillon: this.state.sillon,
         pabellon:this.state.pabellon,
         equipo:this.state.equipo,
         equipamiento:this.state.equipamiento,
         hora:this.state.hora,
         fecha:this.state.fecha,
   /*tipoEquipamiento:this.state.tipoequipamiento, 
   tipoEquipo:this.state.tipoequipo,
   recuperacion:this.state.recuperacion, 
   tipoSillon:this.state.tiposillon,
   tipoPabellon:this.state.tipopabellon,
   dia:this.state.dia,
   duracion:this.state.duracion,*/
   reserva:false
    
    }).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(function (error) {
        console.log(error.response.data.message)})

       
    }
    event.preventDefault();

};

  
  
     
    render(){
        if (this.state.rut === ""){
        this.Encontrar_sol()
        return (  <Spinner animation="border" variant="success" />)
        }

        return(

  <section>
        
  <Container >

    <Row>
         <div className = "head">
             <h1> Editando Solicitud del paciente Rut {this.state.rut}</h1>
           </div>
                    
    </Row>

   
    <Row>
                  
         <Col>
            <Alert  show= {this.state.ingresado} variant="success">
                <Alert.Heading>Ingreso satisfactorio</Alert.Heading>
                      <p>
                        Ingresado con éxito!
                      </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={this.handleClick} variant="outline-success">
                      Cerrar
                    </Button>
                </div>
        </Alert>
      <div className = "formulario">
      <Form  onSubmit = {this.handleSubmit}>
     
              <Form.Group  controlId="formRut">
                <Form.Label><h6>Rut</h6></Form.Label>
                <Form.Control  name ="rut"  onChange={this.handleChange} type="text" placeholder={this.state.rut} />
              </Form.Group>
         
              <Form.Group   controlId="formfecha">
                  <Form.Label><h6>Fecha</h6></Form.Label>
                  <Form.Control  name ="fecha"  onChange={this.handleChange} type="date" placeholder = {this.state.fecha}/>
              </Form.Group>
              <Form.Group   controlId="formHora">
                    <Form.Label><h6>Hora</h6></Form.Label>
                    <Form.Control  name ="hora" onChange={this.handleChange} type="time" placeholder = {this.state.hora} />
              </Form.Group>
       
       
              <Form.Group   controlId="formsillon">
                <Form.Label><h6>Sillón</h6></Form.Label>
                <Form.Control  name ="sillon"  onChange={this.handleChange} type="checkbox" />
              </Form.Group>
          


          <Form.Group controlId="formEquipo">
                <Form.Label><h6>Equipo</h6></Form.Label> 
                <Form.Control name = "equipo" type="checkbox" label="Equipo"  onChange={this.handleChange}  />
          </Form.Group>


          <Form.Group controlId="formEquipamiento">
               <Form.Label><h6>Equipamiento</h6></Form.Label>
               <Form.Control name = "equipamiento" type="checkbox" label="Equipamiento"  onChange={this.handleChange}/>
          </Form.Group>

          <Button    variant="primary" type="submit">
            Guardar
          </Button>{' '}

          <Button  href = "/dashboard"  variant="light" type="submit">
            Volver
          </Button>

         </Form>
       </div>
     </Col>
      
   </Row>
 </Container>
 </section>
            

       
        );
    }
};

export default Editar