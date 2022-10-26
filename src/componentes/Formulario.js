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
    }

    cambio(e){
        console.log(e.target.value,e.target.name)
    }
    render(){
        return(
            <div className="card w-50 m-auto">
                <h1 className="m-auto">Nueva tarjeta</h1>
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
                        <select name="prioridad" className="form-control mt-3">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-2 mx-auto mt-3">
                        <button className="btn btn-primary ">Guardar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;