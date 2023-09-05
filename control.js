let botonBusqueda = document.getElementById("btnBuscar");
let inputBusqueda = document.getElementById("inputBusqueda");
let capital = document.getElementById("capital");
let bandera = document.getElementById("bandera");

//------------------------boton de busqueda

botonBusqueda.addEventListener("click", () => {
    let nombrePais = inputBusqueda.value;
    let url = `https://restcountries.com/v3.1/translation/${nombrePais}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].maps.googleMaps);


            datosPais.innerHTML = `
        <div class="bandera">
            <h1>BANDERA</h1>
            <img src="${data[0].flags.svg}" alt="capital" class="banderaImg"/>
            <h2 id="nombre">${data[0].name.common.toUpperCase()}</h2>
        </div>   
        <div class="capital">
            <h1>CAPITAL</h1>
            <img src="./img/icons8-país-100.png" alt="capital" />
            <h2 id="capital">${data[0].capital[0].toUpperCase()}</h2>
        </div>
        <div class="poblacion">
            <h1>POBLACION</h1>
            <img src="./img/POBLACION.png" alt="poblacion" />
            <h2 id="capital">${data[0].population.toLocaleString()}</h2>
        </div>
        <div class="idioma">
            <h1>IDIOMA</h1>
            <img src="./img/IDIOMA.png" alt="idioma" />
            <h2 id="capital">${Object.values(data[0].languages).toString().split(",").join(", ").toUpperCase()}</h2>
        </div>
        <div class="moneda">
            <h1>MONEDA</h1>
            <img src="./img/MONEDA.png" alt="moneda" />
            <h2 id="capital">${data[0].currencies[Object.keys(data[0].currencies)].name.toUpperCase()}</h2>
        </div>
        <div class="indicador">
            <h1>INDICADOR</h1>
            <img src="./img/INDICADOR.png" alt="indicador" />
            <h2 id="capital">${Object.keys(data[0].currencies)[0]}</h2>
        </div>
        <div class="continente">
            <h1>CONTINENTE</h1>
            <img src="./img/CONTINENTE.png" alt="continente" />
            <h2 id="capital">${data[0].region.toUpperCase()}</h2>
        </div>
        <div class="region">
            <h1>REGION</h1>
            <img src="./img/CONTINENTE.png" alt="region" />
            <h2 id="capital">${data[0].subregion.toUpperCase()}</h2>
        </div>
        <div class="semanaI">
            <h1>INICIO SEMANA</h1>
            <img src="./img/SEMANA.png" alt="Inicio semana" />
            <h2 id="capital">${data[0].startOfWeek.toUpperCase()}</h2>
        </div>
        <div class="horario">
            <h1>HUSO HORARIO</h1>
            <img src="./img/horario.png" alt="capital" class="Horario"/>
            <h2 id="capital">${data[0].timezones[0].toUpperCase()}</h2>
        </div> 
        <div class="area">
            <h1>AREA</h1>
            <img src="./img/TAMAÑO.png" alt="capital" class="area"/>
            <h2 id="capital">${data[0].area.toLocaleString()}</h2>
        </div> 
        <div class="escudo">
            <h1>ESCUDO</h1>
            <img src="${data[0].coatOfArms.svg}" alt="capital" class="banderaImg"/>
            <h2 id="capital">${data[0].name.common.toUpperCase()}</h2>
        </div> 
        `;
        
        })



})
