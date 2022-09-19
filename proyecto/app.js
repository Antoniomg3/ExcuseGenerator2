window.onload = function() {
    //let excuse = [];
    let who = ["El perro ", "Mi abuela ", "Mi tortuga ", "Mi pajaro "];
    let accion = ["se comió ", "se hizo pis ", "aplastó ", "rompió "];
    let what = ["mis llaves ", "mis deberes ", "mi bici ", "la ventana "];
    let when = [
      "antes de clase",
      "justo a tiempo",
      "cuando terminé",
      "durante el almuerzo",
      "mientras jugaba",
    ];
  
    let resultado = "";
  
    let indice_quien = Math.floor(Math.random() * who.length);
    let quien = who[indice_quien];
    resultado += quien;
  
    let indice_accion = Math.floor(Math.random() * accion.length);
    let aaccion = accion[indice_accion];
    resultado += aaccion;
  
    let indice_que = Math.floor(Math.random() * what.length);
    let que = what[indice_que];
    resultado += que;
  
    let indice_cuando = Math.floor(Math.random() * when.length);
    let cuando = when[indice_cuando];
    resultado += cuando;
  
    document.getElementById("excuse").innerHTML = resultado;
  
    /*
      const palabras = [who, accion, what, when];
  
      function excuse2(array){
          array.forEach(element => {
              let ramdomizar = Math.floor(Math.random() * element.length);
              excuse.push(element[ramdomizar]);
          });
      }
      excuse2(palabras);
      let resultado = excuse.join(" ");
      console.log(resultado);
      document.write(resultado);
      */
  };