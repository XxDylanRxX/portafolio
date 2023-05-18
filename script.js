 const text_area = document.querySelector(".text-area");
 const mensaje = document.querySelector(".mensaje-desencriptado")


 




 function btn_encriptando(){
    const texto_encriptado = encriptando(text_area.value)
    mensaje.value = texto_encriptado;
    text_area.value = "";
    mensaje.style.backgroundImage = "none"
 }

 function encriptando(string_encriptado){
    let codigo_matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    string_encriptado = string_encriptado.toLowerCase();

    for (let i = 0 ; i < codigo_matriz.length; i++){
        if(string_encriptado.includes(codigo_matriz[i][0])){
            string_encriptado = string_encriptado.replaceAll(codigo_matriz[i][0], codigo_matriz[i][1])
        }
    }
    return  string_encriptado

}
    


function btn_desencriptando(){
    const texto_encriptado = desencriptando(text_area.value)
    mensaje.value = texto_encriptado;
    text_area.value = "";
    
 }

function desencriptando(string_desencriptado){
    let codigo_matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    string_desencriptado = string_desencriptado.toLowerCase();

    for (let i = 0 ; i < codigo_matriz.length; i++){
        if(string_desencriptado.includes(codigo_matriz[i][1])){
            string_desencriptado = string_desencriptado.replaceAll(codigo_matriz[i][1], codigo_matriz[i][0])
        }
    }
    return string_desencriptado

}

const copiarBoton = document.querySelector(".copiar");

copiarBoton.addEventListener("click", function() {
    mensaje.select();
    document.execCommand("copy");
    // Puedes agregar una notificación o realizar cualquier otra acción después de copiar el texto
    alert("¡Texto copiado!");
});
