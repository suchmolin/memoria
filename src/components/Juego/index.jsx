import React from "react";
import Bienvenida from "../Bienvenida/";
import DashBoard from "../DashBoard/";



const Juego = () => {
    const [nombre , setNombre] =  React.useState('');
    const [iniciarJuego , setIniciarJuego] =  React.useState(false);
    

    return (
        <>
            {!iniciarJuego &&
                <Bienvenida 
                    nombre={nombre}
                    setNombre={setNombre}
                    setIniciarJuego={setIniciarJuego}
                />
            }
            {iniciarJuego &&
                <DashBoard
                    nombre={nombre}
                />
            }
            
        </>

    )
}

export default Juego;