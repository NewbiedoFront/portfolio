document.querySelector('.abrir-menu').onclick = function(){
	document.documentElement.classList.add('menu-ativo');
};
document.documentElement.onclick = function(event){
	if (event.target === document.documentElement){
		document.documentElement.classList.remove('menu-ativo');
	}
};