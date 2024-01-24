import React from "react";
import GameCards from "../GameCards";
import GameStatus from "../GameStatus"



const DashBoard = (props) => {
    const {
        nombre
    } = props
 return(
    <>
        <header className="  text-white mx-1 mt-10 relative h-12 ">
            <h1 className="pt-2 xs:pt-1 text-center text-4xl md:text-5xl font-Lobster ">
                <span className="capitalize ">{nombre} </span>
                comenzamos a jugar
            </h1>
        </header>
        <GameStatus />
        <GameCards nombre={nombre}/>
        
        
    </>
 );
}

export default DashBoard;