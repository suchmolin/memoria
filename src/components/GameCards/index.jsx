import React from "react";
import "./index.css";
import Cronometro from "../Cronometro";
const participantes = [
  "wukong",
  "tristana",
  "ww",
  "trundle",
  "jax",
  "yi",
  "briar",
  "akali",
  "wukong",
  "tristana",
  "ww",
  "trundle",
  "jax",
  "yi",
  "briar",
  "akali",
];
participantes.sort(() => Math.random() - 0.5);

const GameCards = (props) => {
  const rutaIcon = "/memoria/src/assets/iconos/";
  const [first, setFirst] = React.useState(false);
  const [checking, setCheking] = React.useState(false);
  const [oneSelected, setOneSelected] = React.useState([]);
  const [aciertos, setAciertos] = React.useState(0);
  const [errores, setErrores] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [min, setMin] = React.useState(0);

  const selected = (e) => {
    if (!first) setFirst(true);
    if (!checking) {
      e.target.classList.remove("oculto");
      if (!oneSelected.length) {
        setOneSelected([e.target.src, e.target.id]);
      } else {
        if (e.target.src !== oneSelected[0]) {
          setCheking(true);
          setTimeout(() => {
            e.target.classList.add("oculto");
            document.getElementById(oneSelected[1]).classList.add("oculto");
            setCheking(false);
            setErrores(errores + 1);
          }, 1000);
        } else {
          if (aciertos + 1 === 8) {
            setIsGameOver(true);
            let array =
              JSON.parse(window.localStorage.getItem("listaParticipantes")) ?? [];

            array.push({
              name: props.nombre,
              min: min,
              sec: seconds,
              error: errores,
            });
            window.localStorage.setItem(
              "listaParticipantes",
              JSON.stringify(array)
            );
            alert(
              array.map(
                (item) =>
                  `${item.name} ${item.min}min ${item.sec}seg, con ${item.error} errores` +
                  "\n"
              )
            );
          }
          setAciertos(aciertos + 1);
        }
        setOneSelected([]);
      }
    }
  };

  return (
    <div className="boxCards flex flex-wrap gap-5 justify-center rounded-md">
      <Cronometro
        errores={errores}
        first={first}
        isGameOver={isGameOver}
        seconds={seconds}
        setSeconds={setSeconds}
        min={min}
        setMin={setMin}
      />
      {participantes.map((carta, i) => {
        return (
          <div className="card" key={i}>
            <img
              className="oculto"
              id={`img${i}`}
              onClick={selected}
              src={`${rutaIcon}${carta}.jpg`}
              alt=""
            />
          </div>
        );
      })}

      <div className="w-full font-Lobster text-2xl mt-3 text-center">
        <p>{aciertos} de 8</p>
      </div>
    </div>
  );
};

export default GameCards;
