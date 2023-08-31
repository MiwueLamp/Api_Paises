let botonBusqueda=document.getElementById("btnBuscar");
let inputBusqueda=document.getElementById("inputBusqueda");

//------------------------boton de busqueda

botonBusqueda.addEventListener("click",()=>{
    let nombrePais = inputBusqueda.value;
    let url=`https://restcountries.com/v3.1/translation/${nombrePais}`;
    console.log(url);
    fetch(url)
    .then ((response)=>response.json())
    .then ((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].borders);
        console.log(data[0].continents[0]);
        console.log(data[0].name.common);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);


    })


})
