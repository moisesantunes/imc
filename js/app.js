const dados = document.querySelector("#dados");
const mostruario=document.querySelector("#mostruario")
const magresa =`<p class='magro '>IMC: < 18,5 | Magro | Grau: 0</p>`;
const normal =`<p class='normal '>IMC: >= 18.5 e < 25.0 | Normal | Grau: 0</p>`;
const sobrepeso =`<p class='sobre-peso '>IMC: >= 25.0 e < 30.0 | Sobrepeso | Grau: I</p>`;
const obesidade =`<p class='obesidade '>IMC: >= 30.0 e < 40.0 | Obesidade | Grau: II</p>`;
const obesidadeGrave =`<p class='obesidade-grave '>IMC: >= 40.0 | Obesidade Grave | Grau: III</p>`;

let parametros=[magresa,normal,sobrepeso, obesidade, obesidadeGrave];
parametros.forEach((item)=>{
//alert(item)
mostruario.innerHTML+=item
//mostruario.appendChild(item)
})
dados.addEventListener("submit", (e)=>{

	e.preventDefault()
	limpa()
	let p=  dados.elements["peso"].value;
	let qa = dados.elements["altura"].value;
	let imc = p/(qa*qa)
resultado(imc.toFixed(2))
descricao(imc.toFixed(2))
//	alert(imc.toFixed(2))
})

function resultado(res){
	let resultado= document.querySelector("#resultado")
	resultado.textContent=`IMC= ${res}`;
}

function descricao(val){
///limpa()
	if(val < 18.5){
//	alert('ta magro')
	 document.getElementsByClassName('magro')[0].className +=" show"
	
	}else if(val >= 18.5 && val < 25.0 ){
//	alert('ta normal')
	document.getElementsByClassName('normal')[0].className +=" show"
	
	} else if(val >= 25.0 && val < 30.0 ){
//	alert('ta meio gordo')
	document.getElementsByClassName('sobre-peso')[0].className +=" show"
	
	}else if(val >= 30.0 && val < 39.9){
//	alert('ta gordo mesmo')
	document.getElementsByClassName('obesidade')[0].className +=" show"
	
	}else{
//	alert('já era , pacoto')
	document.getElementsByClassName('obesidade-grave')[0].className +=" show"
	
	}
		
}
function limpa(){
let listaP =document.querySelectorAll("#mostruario p");
for(let i=0; i<listaP.length;i++){
//alert(listaP[i].classList)
if(listaP[i].classList.contains("show")){
//alert(listaP[i].classList+" tem show")
listaP[i].classList.remove("show");

}

}

}