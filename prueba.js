const axios = require("axios")

axios.get("https://uploadbeta.com/api/pi/?cached&n=1000000")
    .then(res => {
        let encontrado = false;
        let posicion = 1;
        while (encontrado == false){
            primero = res.data[posicion].toString() + res.data[posicion + 1].toString()
            primero = parseInt(primero)
            
            segundo = res.data[posicion + 2].toString() + res.data[posicion + 3].toString() + res.data[posicion + 4].toString()
            segundo = parseInt(segundo)
            
            tercero = res.data[posicion + 5].toString() + res.data[posicion + 6].toString() + res.data[posicion + 7].toString() + res.data[posicion + 8].toString()
            tercero = parseInt(tercero)

            multiplicacion = primero * segundo
            
            if (multiplicacion == tercero){
                encontrado = true
                console.log(primero.toString() + segundo.toString() + tercero.toString());
            }
            else{
                posicion = posicion + 1
            }
        }
    })
