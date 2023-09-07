const mistestilo = document.querySelector('.centro-Mi');
const Bestilo = document.querySelector('.Mestilo');
const ulti = document.querySelector('.estilos-usados');
const Bulti = document.querySelector('.Ultimos');
const nuevo = document.querySelector('.PrendasM');
const Bnuevo = document.querySelector('.nuevo');
const busqueda = document.querySelector('.busqueda');
const Bbusq = document.querySelector('.busque');
const menu = document.querySelector('.menuD');
const Bmenu = document.querySelector('.conf');

Bestilo.addEventListener('click', toggle);
Bulti.addEventListener('click', toggle2);
Bnuevo.addEventListener('click', toggle3);
Bbusq.addEventListener('click', toggle4);
Bmenu.addEventListener('click', toggle5);

// Selecciona la imagen de la cámara (icono ag.png)
const cameraIcon = document.getElementById('camera-icon');
const cameraPreview = document.getElementById('camera-preview');
const captureButton = document.getElementById('capture-btn');
const capturedPhoto = document.getElementById('captured-photo');
const downloadButton = document.getElementById('download-btn');
let cameraStream = null; // Para rastrear el stream de la cámara
let cameraOpened = false; // Para verificar si la cámara está abierta

// Función para abrir o cerrar la cámara al hacer clic en la imagen de la cámara
cameraIcon.addEventListener('click', () => {
	if (cameraOpened) {
		// Si la cámara está abierta, detén el stream y oculta la vista previa
		stopCamera();
	} else {
		// Si la cámara no está abierta, ábrela
		startCamera();
	}
	cameraOpened = !cameraOpened; // Cambia el estado de la cámara
});

// Función para solicitar permiso y comenzar la cámara

async function startCamera() {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true });
		cameraStream = stream; // Guardar el stream de la cámara
		cameraPreview.srcObject = stream;
		captureButton.style.display = 'block'; // Mostrar el botón de captura
		captureButton.removeAttribute('disabled'); // Habilitar el botón de captura
		cameraPreview.style.display = 'block'; // Mostrar la vista previa de la cámara
	} catch (error) {
		console.error('Error al acceder a la cámara:', error);
		alert('No se pudo acceder a la cámara. Por favor, otorga permisos de cámara e intenta nuevamente.');
	}
}


// Función para detener la cámara
function stopCamera() {
	if (cameraStream) {
		cameraStream.getTracks().forEach(track => track.stop());
		cameraPreview.style.display = 'none'; // Ocultar la vista previa de la cámara
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

	// Mostrar el botón de descarga
	downloadButton.style.display = 'block';
	downloadButton.href = photoDataUrl;

	// Ocultar la vista previa de la cámara
	cameraPreview.style.display = 'none';

	// También puedes ocultar el botón de captura si lo deseas
	captureButton.style.display = 'none';

	// Ocultar la imagen capturada
	capturedPhoto.style.display = 'none';
}

// Iniciar la cámara cuando la página se carga (opcional)
// window.addEventListener('load', startCamera);

// Agregar un controlador de eventos al botón de captura
captureButton.addEventListener('click', capturePhoto);

function toggle() {
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	mistestilo.classList.toggle('inactive');
}

function toggle2() {
	mistestilo.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	ulti.classList.toggle('inactive');
}

function toggle3() {
	ulti.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	nuevo.classList.toggle('inactive');
}

function toggle4() {
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	menu.classList.add('inactive');
	busqueda.classList.toggle('inactive');
}

function toggle5() {
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.toggle('inactive');
}

function iniciar() {
	let usuario = document.getElementById("usser").value;
	let contra = document.getElementById("passw").value;
	if (usuario == 'Gilmar' && contra == '12345') {
		usuario.value = "";
		window.location = "Inicio.html";
	}
	if (usuario == "Anastasia" && contra == "12345") {
		window.location = "InicioM.html";
	} else {
		alert("USUARIO O CONTRASEÑA INCORRECTA, VUELVA A INTENTARLO");
	}
}

function cierre() {
	window.location = "index.html";
}
