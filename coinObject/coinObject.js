const ente = document.getElementById("ente");

const encabezado = document.createElement("header")
ente.appendChild(encabezado);

const titulo = document.createElement("h1");
encabezado.appendChild(titulo);
titulo.innerText = "Objeto Moeda"

const principal = document.createElement("main");
principal.id = "principal";
ente.appendChild(principal);

const primera = document.createElement("section");
primera.id = "primera";
principal.appendChild(primera);

const primeraContenido = document.createElement("div");
primeraContenido.className = "contenido";
primera.appendChild(primeraContenido);

const primeraLanzamientos = document.createElement("div");
primeraLanzamientos.className = "mitad";
primeraContenido.appendChild(primeraLanzamientos);

const primeraFrecuencia = document.createElement("div");
primeraFrecuencia.className = "mitad";
primeraContenido.appendChild(primeraFrecuencia);

const segunda = document.createElement("section");
segunda.id = "segunda";
principal.appendChild(segunda);

const segundaContenido = document.createElement("div");
segundaContenido.className = "contenido";
segunda.appendChild(segundaContenido);

const segundaLanzamientos = document.createElement("div");
segundaLanzamientos.className = "mitad";
segundaContenido.appendChild(segundaLanzamientos);

const segundaFrecuencia = document.createElement("div");
segundaFrecuencia.className = "mitad";
segundaContenido.appendChild(segundaFrecuencia);

const moneda = document.createElement("div");
moneda.id = "moneda";
segundaLanzamientos.appendChild(moneda)

const rodela = document.createElement("figure");
rodela.id = "rodela";
moneda.appendChild(rodela);

const pieDePagina = document.createElement("footer")
ente.appendChild(pieDePagina);

const nota = document.createElement("p");
pieDePagina.appendChild(nota);
nota.innerText = "entrega 12 sprint 6 q1"

const coin = {
    state: 0,
  
    flip: function () {
        this.state = Math.floor(Math.random()*2);
        return this.state;
    },
  
    toString: function () {
        let aviso = "";
        if (this.state === 0) {
            aviso = "Heads";
        }
        if (this.state === 1) {
            aviso = "Tails";
        }
        return aviso;
    },
  
    toHTML: function () {
        let image = document.createElement("img");
        image.className = "moeda"

        if (this.state === 0) {
            image.src = "./images/cara.jpg";
            image.alt = "Heads";
        }
        if (this.state === 1) {
            image.src = "./images/aguila.jpg";
            image.alt = "Tails";
        }
        return image;
    },
};

function display20Flips() {
    let counter = {};
    const results = [];
    for (let i = 0; i < 20; i++) {
        coin.flip();
        results[i] = coin.toString();
        const parrafo = document.createElement("p")
        parrafo.innerHTML = coin.toString();
        primeraLanzamientos.appendChild(parrafo);
        counter[results[i]] = counter[results[i]] ? counter[results[i]] + 1 : 1;
    }

    for (const resultado in counter) {
        const parrafo = document.createElement("p");
        primeraFrecuencia.appendChild(parrafo);
        parrafo.innerHTML = `${resultado} : ${counter[resultado]}`
    }
    return results;
}
display20Flips();

function display20Images() {
    let counter = {};
    let matriz = [];
    const results = [];
    for (let i = 0; i < 20; i++) {
        coin.flip();
        results[i] = coin.toHTML();
        rodela.appendChild(coin.toHTML());
        matriz[i] = coin.toString();
        counter[matriz[i]] = counter[matriz[i]] ? counter[matriz[i]] + 1 : 1;
    }

    for (const resultado in counter) {
        const parrafo = document.createElement("p");
        segundaFrecuencia.appendChild(parrafo);
        parrafo.innerHTML = `${resultado} : ${counter[resultado]}`
    }
    return results;
}

display20Images();
