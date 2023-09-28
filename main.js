
//café
modalcafe = document.getElementById("modalCafé")
 abrirmodal = document.getElementById("openModal")
 fechar = document.getElementsByClassName("fechar")[0]

//torta
 modalTorta = document.getElementById("modalTorta")
 abrirtorta = document.getElementById("openTorta")
 fecharTortas = document.getElementsByClassName("fecharTortas")[0]

//milkshakes
 modalMilkshakes = document.getElementById("modalMilkshakes")
 abrirMilkshake = document.getElementById("openMilkshakes")
 fecharMilkshakes = document.getElementsByClassName("fecharMilkshakes")[0]
 
//salgados
 abrirSalgados = document.getElementById("openSalgados")
 modalSalgados = document.getElementById("modalSalgados")
 fecharSalgados = document.getElementsByClassName("fecharSalgados")[0]
 
 
 
 



 //café
 abrirmodal.onclick = function(){
    modalcafe.style.display = "block"
  }

 fechar.onclick = function(){
    modalcafe.style.display = "none"
 }



 //tortas

 abrirtorta.onclick = function(){
  modalTorta.style.display = "block" }

 fecharTortas.onclick = function(){
   modalTorta.style.display ="none"
 }





//milkshakes
 abrirMilkshake.onclick = function(){
  modalMilkshakes.style.display = "block"
 }

 fecharMilkshakes.onclick = function(){
  modalMilkshakes.style.display ="none"
}
 


//salgados
abrirSalgados.onclick = function(){
  modalSalgados.style.display ="block"
}

fecharSalgados.onclick = function(){
  modalSalgados.style.display ="none"
  console.log("clicou fechar")
}
