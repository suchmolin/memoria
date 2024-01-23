import React from "react";
import GameCards from "../GameCards";
import GameStatus from "../GameStatus"


const DashBoard = (props) => {
    const {
        nombre
    } = props
 return(
    <>
        <header className="  text-white mx-12 mt-10 relative h-32 ">
            <h1 className="pt-9 xs:pt-2 text-center text-4xl md:text-5xl font-Lobster ">
                <span className="capitalize ">Hola {nombre} </span>
                comenzamos a jugar
            </h1>
        </header>
        <GameStatus />
        <GameCards nombre={nombre}/>
    </>
 );
}

export default DashBoard;