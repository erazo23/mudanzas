
var form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    //enviar datos (USANDO FETCH)
    var datos = new FormData(form)
    var param = {
        method: 'POST',
        body: datos
    }

    fetch('post.php',param)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data === 'error'){
            swal("Ups!","Verifica la información que ingresaste.","warning");
        }else{
            swal("Solicitud Enviada!","Nuestros agentes se contactarán contigo en las próximas 24 horas.","success");

        }
    })
    .catch(function(err){
        alert(err)
    })
});

var x = document.getElementById('more');


const cambiar = () => {location.href = './perfiles.html';}

x.onclick = cambiar;