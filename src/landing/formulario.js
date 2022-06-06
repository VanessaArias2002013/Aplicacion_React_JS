import React from "react";
import Menu from "../landing/Menu";
class formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            comentarios: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit(event) {
        alert('Se enviaron los datos de : ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return <><div className="formulario">
            <Menu></Menu>
            <h2>Formulario de contacto</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Apellidos:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Número Telefónico:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" placeholder="ejemplo@gmail.com" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Comentarios:
                    <textarea value={this.state.value} />
                </label>
            </form>
            <form onSubmit="console.log('You clicked submit.'); return false">
                <button type="submit">Submit</button>
            </form>
        </div></>
    };
}

export default formulario;