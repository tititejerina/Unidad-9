let victoriasUsuario = 0;
let victoriasMaquina = 0;
while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
  jugada = jugada.toLowerCase();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  let resultadoTexto = "";

    if (jugada === jugadaMaquina) {
    console.log("Empate");
    resultadoTexto = "¡Empate en esta ronda!";
    } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
    ) {
    victoriasUsuario++;
    resultadoTexto = "¡Ganaste esta ronda!";
    } else {
    victoriasMaquina++;
    resultadoTexto = "La máquina ganó esta ronda";
    }
    alert(`La máquina eligió: ${jugadaMaquina}\n\n${resultadoTexto}\nMarcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
    console.log(`Marcador: Tú ${victoriasUsuario} - ${victoriasMaquina} Máquina`);
}

let ganador = victoriasUsuario === 3 ? "¡Ganaste!" : "La máquina ganó";
console.log(ganador);
alert(ganador);