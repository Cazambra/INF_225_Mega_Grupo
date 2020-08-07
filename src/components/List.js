import ListItem from "./ListItem.js"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import solicitudService from './services/solicitudService';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Editar from './Editar.js'
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
var React = require('react');

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {reload:false,res:this.props.res}
    
    this.handleDel = this.handleDel.bind(this)
    }
  
handleDel(id){
    solicitudService.del(parseInt(id))
    window.location.reload(false);

}
handleAprobar(data,sym){
  solicitudService.updt(parseInt(data.id),{ paciente:{rut:data.rut}, 
    sillon: data.sillon,
    pabellon:data.pabellon,
    equipo:data.equipo,
    equipamiento:data.equipamiento,
    hora:data.hora,
    fecha:data.fecha,
    reserva:parseInt(sym)})
    window.location.reload(false);

}


render(){
    var res = this.state.res;
    


    const lista = this.props.ItemList;
    if (parseInt(res) === 0){
    var todoItems = lista.map((obj) =>

  <tr key={obj.id}>
    <td>{obj.fecha}</td>
    <td> {obj.hora}</td>
   <td> {obj.equipo? "Sí":"No"}</td>
    <td>{obj.equipamiento? "Sí":"No"}</td>
    <td> {obj.sillon?"Sí":"No"}</td>  
    <td> {obj.paciente.rut} </td>
    <td><Button  onClick = {() => {this.handleAprobar(obj,1)}} variant="primary">Aprobar</Button> {''}
  
    <Button href = {"/editar/"+obj.id} variant = "primary ">Editar </Button>{" "}
    <Button onClick = {()=>{this.handleDel(obj.id)}} variant="danger">Rechazar Solicitud</Button></td>
  </tr>);
    }
    else if (parseInt(res) === 1){
        var todoItems = lista.map((obj) =>

  <tr key={obj.id}>
    <td>{obj.fecha}</td>
    <td> {obj.hora}</td>
   <td> {obj.equipo? "Sí":"No"}</td>
    <td>{obj.equipamiento? "Sí":"No"}</td>
    <td> {obj.sillon?"Sí":"No"}</td>    
    <td> {obj.paciente.rut} </td>
    <td><Button  onClick = {()=>{this.handleDel(obj.id)}}  variant="primary">Terminar Procedimiento</Button> {''}
    <Button onClick = {() => {this.handleAprobar(obj,0)}} variant="danger">Cancelar Reserva</Button></td>
  </tr>);
    }
    return (
      <Container>
        <Table striped bordered hover>
        <thead>
    <tr>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Equipo</th>
      <th>Equipamiento</th>
      <th>Sillón</th>
      <th>Rut</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
  {todoItems}
</tbody>
</Table>
</Container>
      );
    


}
}
export default List