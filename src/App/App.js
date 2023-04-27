import { useEffect, useState, useRef } from "react";

import {
    Dialog,
    DialogActions,

    DialogTitle
  } from "@material-ui/core";

import Button from 'react-bootstrap/Button';
import Card from "../card/card";

import bb from "../images/battleborn.png";
import hf from "../images/hotfuss.png";
import dya from "../images/dya.jpg";
import st from "../images/samstown.png";
import s from "../images/sawdust.png";
import ww from "../images/ww.jpg";
import dh from "../images/dh.jpg";
import dwyw from "../images/dwyw.jpg";

import "./app.css";

const Array = [
    {
      type: "bb",
      image: bb
    },
    {
      type: "dya",
      image: dya
    },
    {
      type: "hf",
      image: hf
    },
    {
      type: "st",
      image: st
    },
    {
      type: "s",
      image: s
    },
    {
      type: "ww",
      image: ww
    },
    {
        type: "dh",
        image: dh
    },
    {
        type: "dwyw",
        image: dwyw
    }
];

function mezclar(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
}

export default function App(){
    const Array2 = Array;
    const Array3 = Array.concat(Array2);
    const [cartas, crearCartas] = useState(mezclar.bind(null, Array3));
    
    const [voltear, setVoltear] =useState([]);
    const [correctas, setCorrectas] = useState({});

    const [voltearTodas, setvoltearTodas] = useState(false);

    const [movimientos, setMovimientos] = useState(0);

    const [completo, setCompleto] = useState(0);

    const timeout = useRef(null);

    // let isCorrect = []


    const regresar = () => {
        setvoltearTodas(true);
    };
    const cara = () => {
        setvoltearTodas(false);
    };

    const check = () => {
        if (Object.keys(correctas).length === Array.length) {
          setCompleto(true);
        }
        //for i 
    };

    const evaluar = () => {
        const [first, second] = voltear;
        cara();
        console.log("ww");
        if (cartas[first].type === cartas[second].type) {
          setCorrectas((prev) => ({ ...prev, [cartas[first].type]: true }));
          console.log(correctas)
          setVoltear([]);
          return;
        }
        // This is to flip the cards back after 500ms duration
        timeout.current = setTimeout(() => {
          setVoltear([]);
        }, 500);
    };

    const handleCardClick = (index) => {
        if (voltear.length === 1) {
          setVoltear((prev) => [...prev, index]);
          setMovimientos((moves) => moves + 1);
          regresar();
        } else {
          clearTimeout(timeout.current);
          setVoltear([index]);
        }
    };

    useEffect(() => {
        console.log("voltear")
        let timeout = null;
        if (voltear.length === 1) {
            timeout = setTimeout(() => {
                setVoltear([]);
              }, 6000);
        }
        if (voltear.length === 2) {
          timeout = setTimeout(evaluar, 300);
        }
        return () => {
          clearTimeout(timeout);
        };
    }, [voltear]);

    useEffect(() => {
        console.log("hola")
        check();
    }, [correctas]);
    
    const checkIsFlipped = (index) => {
        return voltear.includes(index);
    };

    const checkIsInactive = (cartas) => {
        return Boolean(correctas[cartas.type]);
    };

    const Restart = () => {
        setCorrectas({});
        setVoltear([]);
        setCompleto(false);
        setMovimientos(0);
        setvoltearTodas(false);
        crearCartas(mezclar(Array.concat(Array)));
    };

    // console.log(typeof(isCorrect))
    // console.log(isCorrect)
    return(
        <div className="App">
            <header>
            <h3>
                Juega Memoria a The Killers 
            </h3></header>
            <div className="container">
                {cartas.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            index={index}
                            isDisabled={voltearTodas}
                            isInactive={checkIsInactive(cartas)}
                            isFlipped={checkIsFlipped(index)}
                            onClick={handleCardClick}
                            isCorrect={correctas}
                        />
                    );
                })}
            </div>
            <footer>
                <div className="moves">
                    <span className="bold">Movimientos: </span>{movimientos}
                </div>
            </footer>
            
            <div className="restart">
                <Button onClick={Restart} variant="primary">
                    Restart
                </Button>
            </div> 
            <Dialog
            open={completo}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                Juego ganado
                </DialogTitle>
                <DialogActions>
                <Button onClick={Restart} color="primary">
                    Restart
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}