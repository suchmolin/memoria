import React from "react";
import './index.css';


const Bienvenida =  (props) => {
    const {
        nombre,
        setNombre,
        setIniciarJuego
    } = props
    
    

    const iniciar = (e) => {
        e.preventDefault()
        const nombre = document.getElementById("nombreJugador").value
        setNombre(nombre)
        if (nombre === '') return;
        setIniciarJuego(true)
    }

    return (
        <>
            <header className=" mx-12 mt-10 relative h-32 text-white opacity-4">
                <h1 className="pt-9 xs:pt-2 text-center text-4xl md:text-5xl font-Lobster">Bienvenidos a Memoria by JoseS</h1>
            </header>
            <section className="h-3/6 flex items-center flex-col">
                <img width="500px" className="" src="../../../public/Juego-de-memoria_01.png" alt="" />
                <div className="flex w-full text-white">
                    <form action="" className="flex flex-row justify-center gap-6 w-full">
                        <label htmlFor="nombreJugador" className="block text-sm font-medium leading-6font-Lobster">Nombre</label>
                        <input id="nombreJugador"type="text" required className="block w-30 rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"/>
                        <button onClick={iniciar} type="submit" className="rounded-md bg-sky-300 px-3 py-1.5 text-sm font-Lobster shadow-sm hover:bg-sky-500 focus-visible:outline ">Comenzar</button>
                    </form>
                </div>
            </section>

        </>

    )
}

export default Bienvenida;