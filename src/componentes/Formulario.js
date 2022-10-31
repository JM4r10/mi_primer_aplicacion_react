import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            titulo:"",
            descripcion:"",
            responsable:"",
            numero:0,
            prioridad:"Alta",
            imagen:""
        }
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        // console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        alert('Guardando...');
    }


    render(){
        return(
            <div className="card w-50 m-auto bg-black">
                <h1 className="m-auto text-white">Nueva tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Titulo Tarjeta" name="titulo" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripcion Tarjeta" name="descripcion" className="form-control mt-3"></input>
                        {/* NOTA: name: identifica el elemento dentro del target del evento e 
                                    id: identifica el elemento dentro de js*/}
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Tiempo en minutos" name="numero" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Responsable Tarjeta" name="numero" onChange={this.cambio} className="form-control mt-3"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Tarjeta" name="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-white mt-2 ms-2">Prioridad</h5>
                    <div className="form-group">
                        <select name="prioridad" className="form-control mt-3">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-2 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;