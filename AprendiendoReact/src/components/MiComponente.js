import React, { Component } from 'react';

class MiComponente extends Component {

    // El metodo render se encarga de mostrar informacion por pantalla (Mostrar la vista de ese componente)
    render() {
        // El return puede devolver solo 1 etiquete
        // <React.Fragment> salta la anterior restriccion
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso',
                'Jamon cocido'],
            calorias: 400
        }
        return (
            <React.Fragment>
                <h1>{receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>


                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr />
                {this.props.saludo &&
                    <React.Fragment>
                        <h1>DESDE UNA PROP</h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }
            </React.Fragment>

        );
    }

}

export default MiComponente;