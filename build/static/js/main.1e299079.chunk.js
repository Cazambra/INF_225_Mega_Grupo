(this.webpackJsonpinterfaz=this.webpackJsonpinterfaz||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),o=a.n(r);a(23),a(17),a(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);var l=a(7),c=a(8),s=a(10),u=a(9),d=a(11),h=a(6),m=a(2),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:n.props.name,description:n.props.description,selected_categoria:n.props.categoria,estado:200,categorias_data:[{index:0,nombre:"Cargando categorias",descripcion:null,id:null}]},n}return Object(c.a)(a,[{key:"changeName",value:function(e){this.setState({name:e})}},{key:"changeDescription",value:function(e){this.setState({description:e})}},{key:"changeCategoria",value:function(e){this.setState({selected_categoria:this.state.categorias_data[e]})}},{key:"changeEstado",value:function(e){this.setState({estado:e})}},{key:"save",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText)})),e.open("PUT","/equipamientos"),e.setRequestHeader("Content-Type","application/json");var t=JSON.stringify({idequipamiento:this.props.id,idcategoria:this.state.selected_categoria.id,nombre:this.state.name,descripcion:this.state.description,estado:parseInt(this.state.estado)});console.log(t),e.send(t)}},{key:"get_categorias",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(t.responseText);var a=t.responseText,n=JSON.parse(a);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];90!=o.estado&&i.push(o)}for(r=0;r<i.length;r++)i[r].index=r;console.log(i),e.setState({categorias_data:i})})),t.open("GET","/categorias"),t.setRequestHeader("Content-Type","application/json"),t.send()}},{key:"componentDidMount",value:function(){this.get_categorias(),this.props.hide_button()}},{key:"select",value:function(e){return e==this.props.categoria.nombre?"selected":""}},{key:"render",value:function(){var e=this,t={width:"70vw",backgroundColor:"#F5F5F5"};return i.a.createElement("div",null,i.a.createElement("h1",null,"Modificar un Equipamiento"),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Categoria"),i.a.createElement(m.a.Control,{style:t,as:"select",onChange:function(t){return e.changeCategoria(t.target.value)}},this.state.categorias_data.map((function(t){return i.a.createElement("option",{selected:e.select(t.nombre),value:t.index},t.nombre)})))),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Nombre"),i.a.createElement(m.a.Control,{style:t,value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Descripcion"),i.a.createElement(m.a.Control,{as:"textarea",rows:"10",style:t,value:this.state.description,onChange:function(t){return e.changeDescription(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Estado"),i.a.createElement(m.a.Control,{style:t,as:"select",onChange:function(t){return e.changeEstado(t.target.value)}},i.a.createElement("option",{selected:"selected",value:200},"Disponible"),i.a.createElement("option",{value:400},"En uso"),i.a.createElement("option",{value:500},"Fuera de Servicio"))))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={equipamiento_data:null,selector:0,exito_guardar:!1,edit_equipamiento_id:null,edit_equipamiento_name:null,edit_equipamiento_description:null,edit_equipamiento_categoria:null,categorias_data:[{index:0,nombre:"Cargando categorias",descripcion:null,id:null}]},n.changeEdit=i.a.createRef(),n}return Object(c.a)(a,[{key:"get_equipamiento",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(t.responseText);var a=t.responseText,n=JSON.parse(a);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];900!=o.estado&&i.push(o)}console.log(i),e.setState({equipamiento_data:i})})),t.open("GET","/equipamientos"),t.setRequestHeader("Content-Type","application/json"),t.send()}},{key:"get_equipamiento_categoria",value:function(e){var t=this,a=new XMLHttpRequest;a.addEventListener("load",(function(){console.log(a.responseText);var e=a.responseText,n=JSON.parse(e);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];900!=o.estado&&i.push(o)}console.log(i),t.setState({equipamiento_data:i})})),a.open("GET","/equipamientos/categoria/"+e),a.setRequestHeader("Content-Type","application/json"),a.send()}},{key:"nuke_equipamiento",value:function(e){var t=this,a=new XMLHttpRequest;a.addEventListener("load",(function(){t.get_equipamiento()})),a.open("DELETE","/equipamientos/delete/"+e),a.setRequestHeader("Content-Type","application/json"),a.send()}},{key:"get_categorias",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(t.responseText);var a=t.responseText,n=JSON.parse(a);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];90!=o.estado&&i.push(o)}for(r=0;r<i.length;r++)i[r].index=r;console.log(i),e.setState({categorias_data:i})})),t.open("GET","/categorias"),t.setRequestHeader("Content-Type","application/json"),t.send()}},{key:"componentDidMount",value:function(){this.get_equipamiento(),this.get_categorias()}},{key:"volver",value:function(){this.props.unhide_button(),this.get_equipamiento(),this.setState({selector:0,exito_guardar:!1})}},{key:"go",value:function(e,t,a,n,i){this.setState({selector:e,edit_equipamiento_id:t,edit_equipamiento_name:a,edit_equipamiento_description:n,edit_equipamiento_categoria:i})}},{key:"guardar_categoria",value:function(){this.changeEdit.current.save(),this.setState({exito_guardar:!0})}},{key:"convert_estado",value:function(e){var t;return 100==e||200==e||800==e?t="Disponible":400==e?t="En uso":500==e&&(t="Fuera de Servicio"),t}},{key:"changeCategoria",value:function(e){if(-1==e)this.get_equipamiento();else{var t=this.state.categorias_data[e];this.get_equipamiento_categoria(t.id),this.setState({selected_categoria:t})}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,null==this.state.equipamiento_data?i.a.createElement("div",null,"Cargando..."):i.a.createElement("div",null,0==this.state.selector?i.a.createElement("div",null,i.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Nombre"),i.a.createElement("th",null,"Categoria",i.a.createElement(m.a.Control,{style:{backgroundColor:"#F5F5F5"},as:"select",onChange:function(t){return e.changeCategoria(t.target.value)}},i.a.createElement("option",{selected:"selected",value:-1},"Todas"),this.state.categorias_data.map((function(e){return i.a.createElement("option",{value:e.index},e.nombre)})))),i.a.createElement("th",null,"Descripcion"),i.a.createElement("th",null,"Acciones"),i.a.createElement("th",null,"Estado actual"))),i.a.createElement("tbody",null,this.state.equipamiento_data.map((function(t){return i.a.createElement("tr",null,i.a.createElement("td",null,t.name),i.a.createElement("td",null,t.categoria.nombre),i.a.createElement("td",null,t.descripsion),i.a.createElement("td",null,e.convert_estado(t.estado)),i.a.createElement("td",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.go(1,t.id,t.name,t.descripsion,t.categoria)}},"Editar"),"  "," ",i.a.createElement(h.a,{variant:"danger",onClick:function(){e.nuke_equipamiento(t.id)}},"Eliminar")))}))))):null,1==this.state.selector?i.a.createElement("div",null,i.a.createElement(p,{id:this.state.edit_equipamiento_id,name:this.state.edit_equipamiento_name,description:this.state.edit_equipamiento_description,categoria:this.state.edit_equipamiento_categoria,hide_button:this.props.hide_button.bind(this),ref:this.changeEdit}),i.a.createElement(h.a,{variant:"primary",onClick:function(){e.guardar_categoria()}},"Guardar")," "," ",i.a.createElement(h.a,{variant:"light",onClick:function(){e.volver()}},"Volver"),this.state.exito_guardar?i.a.createElement("div",null,i.a.createElement("h2",null,"Accion realizada con exito")):null):null))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:null,description:null,selected_categoria:null,estado:"200",categorias_data:[{index:0,nombre:"Cargando categorias",descripcion:null,id:null}]},n}return Object(c.a)(a,[{key:"changeName",value:function(e){this.setState({name:e})}},{key:"changeDescription",value:function(e){this.setState({description:e})}},{key:"changeCategoria",value:function(e){this.setState({selected_categoria:this.state.categorias_data[e]})}},{key:"changeEstado",value:function(e){this.setState({estado:e})}},{key:"save",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText)})),e.open("POST","/equipamientos"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify({idcategoria:this.state.selected_categoria.id,nombre:this.state.name,descripcion:this.state.description,estado:parseInt(this.state.estado)}))}},{key:"get_categorias",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(t.responseText);var a=t.responseText,n=JSON.parse(a);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];90!=o.estado&&i.push(o)}for(r=0;r<i.length;r++)i[r].index=r;console.log(i),e.setState({categorias_data:i,selected_categoria:i[0]})})),t.open("GET","/categorias"),t.setRequestHeader("Content-Type","application/json"),t.send()}},{key:"componentDidMount",value:function(){this.get_categorias()}},{key:"render",value:function(){var e=this,t={width:"70vw",backgroundColor:"#F5F5F5"};return i.a.createElement("div",null,i.a.createElement("h1",null,"Agregar un Nuevo Equipamiento"),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Categoria"),i.a.createElement(m.a.Control,{style:t,as:"select",onChange:function(t){return e.changeCategoria(t.target.value)}},this.state.categorias_data.map((function(e){return i.a.createElement("option",{value:e.index},e.nombre)})))),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Nombre"),i.a.createElement(m.a.Control,{style:t,value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Descripcion"),i.a.createElement(m.a.Control,{as:"textarea",rows:"10",style:t,value:this.state.description,onChange:function(t){return e.changeDescription(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Estado"),i.a.createElement(m.a.Control,{style:t,as:"select",onChange:function(t){return e.changeEstado(t.target.value)}},i.a.createElement("option",{value:200},"Disponible"),i.a.createElement("option",{value:400},"En uso"),i.a.createElement("option",{value:500},"Fuera de Servicio"))))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:null,description:null},n}return Object(c.a)(a,[{key:"changeName",value:function(e){this.setState({name:e})}},{key:"changeDescription",value:function(e){this.setState({description:e})}},{key:"save",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText)})),e.open("POST","/categorias"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify({nombre:this.state.name,descripcion:this.state.description,estado:10}))}},{key:"render",value:function(){var e=this,t={width:"70vw",backgroundColor:"#F5F5F5"};return i.a.createElement("div",null,i.a.createElement("h1",null,"Agregar una Nueva Categoria"),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Nombre"),i.a.createElement(m.a.Control,{style:t,value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Descripcion"),i.a.createElement(m.a.Control,{as:"textarea",rows:"10",style:t,value:this.state.description,onChange:function(t){return e.changeDescription(t.target.value)}})))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:n.props.name,description:n.props.description},n}return Object(c.a)(a,[{key:"changeName",value:function(e){this.setState({name:e})}},{key:"changeDescription",value:function(e){this.setState({description:e})}},{key:"save",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText)})),e.open("PUT","/categorias"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify({idcategoria:this.props.id,nombre:this.state.name,descripcion:this.state.description,estado:80}))}},{key:"componentDidMount",value:function(){this.props.hide_button()}},{key:"render",value:function(){var e=this,t={width:"70vw",backgroundColor:"#F5F5F5"};return i.a.createElement("div",null,i.a.createElement("h1",null,"Editar una Categoria"),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Nombre"),i.a.createElement(m.a.Control,{style:t,value:this.state.name,onChange:function(t){return e.changeName(t.target.value)}})),i.a.createElement(m.a.Group,null,i.a.createElement(m.a.Label,null,"Descripcion"),i.a.createElement(m.a.Control,{as:"textarea",rows:"10",style:t,value:this.state.description,onChange:function(t){return e.changeDescription(t.target.value)}})))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:null,selector:0,exito_guardar:!1,edit_categoria_id:null,edit_categoria_name:null,edit_categoria_description:null},n.changeEdit=i.a.createRef(),n}return Object(c.a)(a,[{key:"get_categorias",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(t.responseText);var a=t.responseText,n=JSON.parse(a);console.log(n);for(var i=[],r=0;r<n.length;r++){var o=n[r];90!=o.estado&&i.push(o)}console.log(i),e.setState({data:i})})),t.open("GET","/categorias"),t.setRequestHeader("Content-Type","application/json"),t.send()}},{key:"nuke_categoria",value:function(e){var t=this,a=new XMLHttpRequest;a.addEventListener("load",(function(){t.get_categorias()})),a.open("DELETE","/categorias/"+e),a.setRequestHeader("Content-Type","application/json"),a.send()}},{key:"componentDidMount",value:function(){this.get_categorias()}},{key:"volver",value:function(){this.props.unhide_button(),this.get_categorias(),this.setState({selector:0,exito_guardar:!1})}},{key:"go",value:function(e,t,a,n){this.setState({selector:e,edit_categoria_id:t,edit_categoria_name:a,edit_categoria_description:n})}},{key:"guardar_categoria",value:function(){this.changeEdit.current.save(),this.setState({exito_guardar:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,null==this.state.data?i.a.createElement("div",null,"Cargando..."):i.a.createElement("div",null,0==this.state.selector?i.a.createElement("div",null,i.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Nombre"),i.a.createElement("th",null,"Descripcion"),i.a.createElement("th",null,"Acciones"))),i.a.createElement("tbody",null,this.state.data.map((function(t){return i.a.createElement("tr",null,i.a.createElement("td",null,t.nombre),i.a.createElement("td",null,t.descripcion),i.a.createElement("td",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.go(1,t.id,t.nombre,t.descripcion)}},"Editar"),"  "," ",i.a.createElement(h.a,{variant:"danger",onClick:function(){e.nuke_categoria(t.id)}},"Eliminar")))}))))):null,1==this.state.selector?i.a.createElement("div",null,i.a.createElement(_,{id:this.state.edit_categoria_id,name:this.state.edit_categoria_name,description:this.state.edit_categoria_description,hide_button:this.props.hide_button.bind(this),ref:this.changeEdit}),i.a.createElement(h.a,{variant:"primary",onClick:function(){e.guardar_categoria()}},"Guardar")," "," ",i.a.createElement(h.a,{variant:"light",onClick:function(){e.volver()}},"Volver"),this.state.exito_guardar?i.a.createElement("div",null,i.a.createElement("h2",null,"Accion realizada con exito")):null):null))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selector:0,exito_guardar:!1,hide_create:!1},n.changeCategoria=i.a.createRef(),n}return Object(c.a)(a,[{key:"volver",value:function(){this.setState({selector:0,exito_guardar:!1})}},{key:"go",value:function(e){this.setState({selector:e})}},{key:"guardar_categoria",value:function(){this.changeCategoria.current.save(),this.setState({exito_guardar:!0})}},{key:"hide_create_cat",value:function(){this.setState({hide_create:!0})}},{key:"unhide_create_cat",value:function(){this.setState({hide_create:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,0==this.state.selector?i.a.createElement("div",null,this.state.hide_create?null:i.a.createElement("h1",null,"Categorias"),i.a.createElement("div",null,i.a.createElement(f,{hide_button:this.hide_create_cat.bind(this),unhide_button:this.unhide_create_cat.bind(this)})),this.state.hide_create?null:i.a.createElement("div",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.go(1)}},"Agregar categoria")," "," ",i.a.createElement(h.a,{variant:"light",onClick:function(){e.props.volver_equipamiento()}},"Volver"))):null,1==this.state.selector?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(E,{ref:this.changeCategoria})),i.a.createElement("div",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.guardar_categoria()}},"Guardar")," "," ",i.a.createElement(h.a,{variant:"light",onClick:function(){e.volver()}},"Volver")),this.state.exito_guardar?i.a.createElement("div",null,i.a.createElement("h2",null,"Accion realizada con exito")):null):null)}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selector:0,exito_guardar:!1,hide_create:!1},n.addEquipamiento=i.a.createRef(),n}return Object(c.a)(a,[{key:"volver",value:function(){this.setState({selector:0,exito_guardar:!1})}},{key:"go",value:function(e){this.setState({selector:e})}},{key:"guardar_equipamiento",value:function(){this.addEquipamiento.current.save(),this.setState({exito_guardar:!0})}},{key:"hide_create_equipamiento",value:function(){this.setState({hide_create:!0})}},{key:"unhide_create_equipamiento",value:function(){this.setState({hide_create:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,0==this.state.selector?i.a.createElement("div",null,this.state.hide_create?null:i.a.createElement("h1",null,"Equipamiento"),i.a.createElement("div",null,i.a.createElement(g,{hide_button:this.hide_create_equipamiento.bind(this),unhide_button:this.unhide_create_equipamiento.bind(this)})),this.state.hide_create?null:i.a.createElement("div",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.go(1)}},"Agregar equipamiento")," "," ",i.a.createElement(h.a,{variant:"primary",onClick:function(){e.go(2)}},"Administrar Categorias"))):null,1==this.state.selector?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(v,{ref:this.addEquipamiento})),i.a.createElement("div",null,i.a.createElement(h.a,{variant:"primary",onClick:function(){e.guardar_equipamiento()}},"Guardar")," "," ",i.a.createElement(h.a,{variant:"light",onClick:function(){e.volver()}},"Volver")),this.state.exito_guardar?i.a.createElement("div",null,i.a.createElement("h2",null,"Accion realizada con exito")):null):null,2==this.state.selector?i.a.createElement("div",null,i.a.createElement(b,{volver_equipamiento:this.volver.bind(this)})):null)}}]),a}(n.Component);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1e299079.chunk.js.map