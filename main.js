const puntuacion = document.getElementById("puntuacion");
const preguntaCaja = document.getElementById("pregunta-caja");

const verdadero = document.getElementById("verdadero");
const falso = document.getElementById("falso");

let n = 0;

decision = null;
respuesta = null;

random = null;



const frase = () => {
    if (preguntas.length == 0) {
        preguntaCaja.innerHTML = `<p>Has ganado!!</p><br><p><a href="./">Reiniciar</a></p>`;
        preguntaCaja.style.textAlign = "center";
    } else {
        random = Math.floor(Math.random() * preguntas.length);
        verdadero.classList.remove("correcto")
        verdadero.classList.add("grid-item");
        falso.classList.remove("correcto")
        falso.classList.add("grid-item");
        preguntaCaja.innerHTML = preguntas[random].pregunta;
        respuesta = preguntas[random].respuesta;
    }

}


verdadero.addEventListener("click", () => {
    decision = verdadero.textContent.toLowerCase();
    if (decision == respuesta) {
        n++;
        puntuacion.innerHTML = `tu puntuación es ${n}`;
        verdadero.classList.remove("grid-item")
        verdadero.classList.add("correcto");
        respuesta = null;
        preguntas.splice(random, 1)
        setTimeout(frase, 1000);
    } else {
        verdadero.classList.remove("grid-item")
        verdadero.classList.add("error");
        preguntaCaja.innerHTML = `<p>Has fallado</p><br><p><a href="./">Reiniciar</a></p>`;
        preguntaCaja.style.textAlign = "center";
        respuesta = null;
    }

});

falso.addEventListener("click", () => {
    decision = falso.textContent.toLowerCase();
    if (decision == respuesta) {
        n++;
        puntuacion.innerHTML = `tu puntuación es ${n}`;
        falso.classList.remove("grid-item")
        falso.classList.add("correcto");
        respuesta = null;
        preguntas.splice(random, 1)
        setTimeout(frase, 1000);
    } else {
        falso.classList.remove("grid-item")
        falso.classList.add("error");
        preguntaCaja.innerHTML = `<p>Has fallado</p><br><p><a href="./">Reiniciar</a></p>`;
        preguntaCaja.style.textAlign = "center";
        respuesta = null;
    }

});

frase()