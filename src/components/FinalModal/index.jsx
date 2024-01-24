import React from "react";
import { useEffect } from "react";

const FinalModal = (props) => {
    const {
        nombre,
        min,
        seconds,
        errores,
        isGameOver,
        posiciones
     } = props

     const reiniciar = (event) => {
        event.preventDefault()
        location.href ='./index.html';
     }
     
    const sortPosiciones = 
        posiciones.sort(function (a, b) {
            const totala = (a.min*60)+ a.sec
            const totalb = (b.min*60)+ b.sec
            if( totala !== totalb){
                if (totala > totalb) {
                  return 1;
                }
                if (totala < totalb) {
                  return -1;
                }
            }else{
                if (a.error > b.error) {
                    return 1;
                  }
                  if (a.error < b.error) {
                    return -1;
                  }  
            } 
            // a must be equal to b
            return 0;
          });
    


    return(
        <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-b from-current to-transparent w-full h-full z-50">
            <div className="px-5 py-5 font-sans bg-white rounded-xl w-2/5 text-center text-xl">
                <h3>Felicidades {nombre}</h3>
                <p>Tu resultado ha sido: <span className="text-red-400">{min}min {seconds}seg</span> y has cometido <span className="text-red-400">{errores} errores</span></p>

                <section className="tablaFinalModal w-full mt-5">
                    <table className="table-auto w-full">
                        <thead className="text-center">
                            <tr>
                                <th colSpan="4">TOP 10 Jugadores</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Nombre</th>
                                <th>Tiempo</th>
                                <th>Errores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortPosiciones.map((jugador,i)=>{
                                    if (i > 9) return
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{jugador.name}</td>
                                            <td>{jugador.min}min {jugador.sec}seg</td>
                                            <td className="text-red-400">{jugador.error}</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>


                <div className="botonesFinalModal">
                    <button onClick={reiniciar} className="text-gray-700 font-sans text-md bg-red-400 p-3 mt-7 rounded-xl hover:bg-red-500">Volver al Inicio</button>
                </div>
            </div>
        </div>
    );
}


export default FinalModal;