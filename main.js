const mistestilo = document.querySelector('.centro-Mi');
const Bestilo = document.querySelector('.Mestilo');
const ulti = document.querySelector('.estilos-usados');
const Bulti = document.querySelector('.Ultimos');
const nuevo = document.querySelector('.PrendasM')
const Bnuevo = document.querySelector('.nuevo');
const busqueda=document.querySelector('.busqueda');
const Bbusq=document.querySelector('.busque');
const menu = document.querySelector('.menuD');
const Bmenu = document.querySelector('.conf');
const Bcam = document.querySelector('.cam');
const cam = document.querySelector('.camara');
const myA=document.querySelector('.myaccount');
const regi=document.querySelector('.cuerpo2');


Bestilo.addEventListener('click',toggle);
Bulti.addEventListener('click',toggle2);
Bnuevo.addEventListener('click',toggle3);
Bbusq.addEventListener('click',toggle4);
Bmenu.addEventListener('click',toggle5);
Bcam.addEventListener('click',toggle6);

function toggle(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.add('inactive');
	mistestilo.classList.toggle('inactive');
}

function toggle2(){
	mistestilo.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.add('inactive');
	ulti.classList.toggle('inactive');
}
function toggle3(){
	ulti.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.add('inactive');
	nuevo.classList.toggle('inactive');
}
function toggle4(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	menu.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.add('inactive');
	busqueda.classList.toggle('inactive');
}

function toggle5(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.add('inactive');
	menu.classList.toggle('inactive');
}
function toggle6(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	myA.classList.add('inactive');
	cam.classList.toggle('inactive');
}
function toggle7(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	cam.classList.add('inactive');
	myA.classList.toggle('inactive');
}
function toggle8(){
	regi.classList.toggle('inactive');
}


function cerrar(){
	myA.classList.add('inactive');

}
function cerrar2(){
	regi.classList.add('inactive');
}

function iniciar(){
	let usuario = document.getElementById("usser").value;
	let contra = document.getElementById("passw").value;
	if(usuario=='Gilmar' && contra=='12345'){
		usuario.value="";
		window.location="Inicio.html";
	}
	if(usuario=="Elizabeth" && contra=="12345"){
		window.location="InicioM.html";	
	}
	else{
		alert("USUARIO O CONTRASEÑA INCORRECTA, VUELVA A INTENTARLO");
	}
}
function cierre(){
	window.location="index.html";
}
function nuevos(){
	let genero = document.getElementById("gen").value;
	if(genero == "Hombre"){
		window.location="Inicio.html";
	}
	if(genero == "Mujer"){
		window.location="InicioM.html";	
	}
}
//CAMARA 
 	const cameraPreview = document.getElementById('camera-preview');
	const captureButton = document.getElementById('capture-btn');
	const capturedPhoto = document.getElementById('captured-photo');
	const downloadButton = document.getElementById('download-btn');
	let cameraStream = null; // Para rastrear el stream de la cámara

    // Función para solicitar permiso y comenzar la cámara
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraStream = stream; // Guardar el stream de la cámara
            cameraPreview.srcObject = stream;
            captureButton.removeAttribute('disabled');
        } catch (error) {
            console.error('Error al acceder a la cámara:', error);
            alert('No se pudo acceder a la cámara. Por favor, otorga permisos de cámara e intenta nuevamente.');
        }
    }
    
    // Función para tomar una foto
    function capturePhoto() {
        const canvas = document.createElement('canvas');
        canvas.width = cameraPreview.videoWidth;
        canvas.height = cameraPreview.videoHeight;
        canvas.getContext('2d').drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);
        
        // Convertir la foto a una URL de datos (base64)
        const photoDataUrl = canvas.toDataURL('image/jpeg');
        
        // Detener el stream de la cámara
        cameraStream.getTracks().forEach(track => track.stop());
        
        // Mostrar la foto capturada
        capturedPhoto.src = photoDataUrl;
        
        // Mostrar el botón de descarga
        downloadButton.style.display = 'block';
        downloadButton.href = photoDataUrl;
        
        // Establecer la vista previa de la cámara en null
        cameraPreview.srcObject = null;
    }
    
    // Iniciar la cámara cuando la página se carga
    window.addEventListener('load', startCamera);
    
    // Agregar un controlador de eventos al botón de captura
    captureButton.addEventListener('click', capturePhoto);
