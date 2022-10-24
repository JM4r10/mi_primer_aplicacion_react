import React, {Component} from "react";

class Tarjeta extends Component{
    render(){
        return(
            
                <div className="col-sm-6">
                {/* <div className="card tarjeta"> */}
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.titulo}</h5>
                            <p className="card-text">{this.props.descripcion}</p>
                            <button formTarget="formulario1" className="btn btn-primary border mx-auto">Editar</button>
                            <button className="btn btn-danger border mx-auto">Eliminar</button>
                        </div>
                    </div>
                </div>        
        );
    }
}

export default Tarjeta;