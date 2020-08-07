var React = require('react');
import Alert from 'react-bootstrap/Alert'

class Print extends React.Component{
    constructor(props){
        super(props);
    }
    
     
    render(){
        var sillon = this.props.sillon? "Sí":"No";
        var pabellon = this.props.pabellon? "Sí":"No";
        var recuperacion = this.props.recuperacion? "Sí":"No";
        var equipo = this.props.equipo ? "Sí":"No";
        var equipamiento = this.props.equipamiento ? "Sí":"No";
        var ingresado = this.props.ingresado ? "Paciente ingresado satisfactoriamente con" : "Ingresando paciente con";
        return(
            
      
            <div classname = "centro" > 
                    {ingresado}<br />
                    Nombre: {this.props.nombre} <br />
                    Rut: {this.props.rut} <br />
                    Sillón: {sillon}<br />
                    Pabellón: {pabellon}<br />

                    Sala de recuperación: {recuperacion}<br />
                    Equipo: {equipo}<br />
                    Equipamiento: {equipamiento}<br />
                    <p hidden = {(this.props.equipo)? "":"hidden"}>Tipo de equipo: {this.props.tipoequipo}</p><br />
                   aa {this.props.equipamiento}
                    <p hidden = {(this.props.equipamiento)? "":"hidden"}>Tipo de equipamiento: {this.props.tipoequipamiento}</p><br />
                 </div>

                        );
    }
};

export default Print;