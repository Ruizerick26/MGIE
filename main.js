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

Bestilo.addEventListener('click',toggle);
Bulti.addEventListener('click',toggle2);
Bnuevo.addEventListener('click',toggle3);
Bbusq.addEventListener('click',toggle4);
Bmenu.addEventListener('click',toggle5);

function toggle(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	mistestilo.classList.toggle('inactive');
}

function toggle2(){
	mistestilo.classList.add('inactive');
	nuevo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	ulti.classList.toggle('inactive');
}
function toggle3(){
	ulti.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.add('inactive');
	nuevo.classList.toggle('inactive');
}
function toggle4(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	menu.classList.add('inactive');
	busqueda.classList.toggle('inactive');
}

function toggle5(){
	ulti.classList.add('inactive');
	nuevo.classList.add('inactive');
	mistestilo.classList.add('inactive');
	busqueda.classList.add('inactive');
	menu.classList.toggle('inactive');
}

function iniciar(){
	let usuario = document.getElementById("usser").value;
	let contra = document.getElementById("passw").value;
	if(usuario=='Gilmar' && contra=='12345'){
		usuario.value="";
		window.location="Inicio.html";
	}
	if(usuario=="Anastasia" && contra=="12345"){
		window.location="InicioM.html";	
	}
	else{
		alert("USUARIO O CONTRASEÑA INCORRECTA, VUELVA A INTENTARLO");
	}
}
function cierre(){
	window.location="index.html";
}