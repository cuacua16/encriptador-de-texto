const text = document.getElementById("text");
const result = document.getElementById("result");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");
const mensajeCopiado = document.getElementById("mensajeCopiado");
let mensaje;
const mode = document.querySelector(".fa-solid");
const loading = document.getElementById("loading");
const puntos = document.getElementById("puntos");
let switched = false;

mode.addEventListener("click", () => {
  mode.classList.toggle("fa-toggle-off");
  mode.classList.toggle("fa-toggle-on");
  if (switched) {
    document.querySelector(":root").style.setProperty("--color1", "#223d47");
    document.querySelector(":root").style.setProperty("--color2", "#7e9d9a");
    document.querySelector(":root").style.setProperty("--color3", "#b3c2c8");
    document.querySelector(":root").style.setProperty("--color4", "#759ab0");
    document.querySelector(":root").style.setProperty("--color5", "#f2eaed");
  } else {
    document.querySelector(":root").style.setProperty("--color1", "#000000");
    document.querySelector(":root").style.setProperty("--color2", "#062f4f");
    document.querySelector(":root").style.setProperty("--color3", "#b3c2c8");
    document.querySelector(":root").style.setProperty("--color4", "#b82601");
    document.querySelector(":root").style.setProperty("--color5", "#f2eaed");
  }
  switched = !switched;
});

encriptar.addEventListener("click", () => {
  if (chequearMinusculas(text.value)) {
    result.style.display = "none";
    loading.style.display = "flex";
    result.textContent = encriptarMensaje(text.value);
    mensaje = text.value;
    setTimeout(() => {
      loading.style.display = "none";
      result.style.display = "flex";
    }, 3200);
  } else {
    alert("Escriba solo con minúsculas por favor");
  }
});

let width = 75;
setInterval(() => {
  if (width > 85) {
    width = 75;
  }
  width += 5;
  puntos.style.width = `${width}px`;
}, 500);

const encriptarMensaje = (mensaje) => {
  let nuevoMensaje = "";
  for (let i = 0; i < mensaje.length; i++) {
    switch (mensaje[i]) {
      case "a":
        nuevoMensaje += "ai";
        break;
      case "e":
        nuevoMensaje += "enter";
        break;
      case "i":
        nuevoMensaje += "imes";
        break;
      case "o":
        nuevoMensaje += "ober";
        break;
      case "u":
        nuevoMensaje += "ufat";
        break;
      default:
        nuevoMensaje += mensaje[i];
        break;
    }
  }
  return nuevoMensaje;
};
const chequearMinusculas = (texto) => {
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};
desencriptar.addEventListener("click", () => {
  result.style.display = "none";
  loading.style.display = "flex";
  result.textContent = mensaje;
  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "flex";
  }, 2500);
});

copiar.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
  mensajeCopiado.textContent = "Texto copiado en el portapapeles";
  setTimeout(() => {
    mensajeCopiado.textContent = "";
  }, 1500);
});
