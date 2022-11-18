const socket = io()

socket.on('connect', ()=>{
    console.log('soy un soket')
})
//atajar mensaje
socket.on("msg", (data) => {
    //socket.emit("notification", )
  })

socket.on('msg-list', (data) => {
    console.log('index : '+ data)
    let html = ''
    data.forEach(obj => {
        html += `
        <div>
        <strong>${obj.user}:</strong> <p class="hora">${obj.fecha}</p>  <p class="mensaje">${obj.mensaje}</p>
        </div>
        `  
    });
    document.getElementById('div-list-msgs').innerHTML = html
  })

function enviarMensaje(){
    const userName = document.getElementById('user-msg').value
    const msgParaEnviar = document.getElementById('input-msg').value
    socket.emit('msg', {user: userName, mensaje: msgParaEnviar})
}
socket.on('form', (data) =>{
  let html = ''
  data.forEach(obj => {
    html += `
  <tr>
    <td>
        <p>
          ${obj.id}
        </p>
    </td>
    <td>
        <p>
          ${obj.title}
        </p>
    </td>
    <td>
        <p>
          ${obj.price}
        </p>
    </td>
      <td>
          <div class="imgContenedor">
            <img class="imgPrueba" src="${obj.thumbnail}"/>
          </div>
      </td>  
  </tr> 
    `  
});
})