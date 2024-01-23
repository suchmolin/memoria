import React, { useState, useEffect } from "react";

const Cronometro = (props) => {
    const {
        min,
        setMin,
        seconds,
        setSeconds,
        errores,
        isGameOver
 } = props
 

  useEffect(() => {
    let interval = null;
    if (!isGameOver) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (isGameOver && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameOver]);
  
  if(seconds >= 60){
    setMin(min+1)
    setSeconds(0)
  }
  
  return (
    <div className="flex justify-between items-center w-full font-Lobster text-2xl ">
      <p>Errores: {errores}</p>
      <p className="crono min-w-32 text-center">
        {min < 10 ? `0${min}` : min} : {seconds < 10 ? `0${seconds}` : seconds}{" "}
      </p>
    </div>
  );
};

export default Cronometro;
