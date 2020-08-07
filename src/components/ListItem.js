var React = require('react');

class ListItem extends React.Component{


render(){
return(

    <td>{this.props.value}</td>

)
}

}

export default ListItem