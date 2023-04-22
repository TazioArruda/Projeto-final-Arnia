const modal = document.getElementById("modal-container")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
<<<<<<< HEAD
const modal4 = document.getElementById("modal4")
=======
>>>>>>> c703bf576f692b0f3ef97971ecfb4006b3c274e7
const form =  document.getElementById("formModal")
const btn = document.getElementById("buttonConfirm")




async function criarPost(novo){
  
    return fetch('http://localhost:3000/novoCadastro',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        },

        body: JSON.stringify(novo)
        
    })
<<<<<<< HEAD
   
=======
    
>>>>>>> c703bf576f692b0f3ef97971ecfb4006b3c274e7
}




// Abrir e fechar modal 1 

abrirModal = ()=>{
    modal.style.display = "flex"
}
console.log(modal)
fecharModal = () =>{
    modal.style.display = "none"
}

// Abrir e fechar modal 2 

abrirModal2 = ()=>{
    modal2.style.display = "flex"
}
console.log(modal2)
fecharModal2 = () =>{
    modal2.style.display = "none"
}

<<<<<<< HEAD
// Abrir e fechar modal 3 
=======
// Abrir e fechar modal 2 
>>>>>>> c703bf576f692b0f3ef97971ecfb4006b3c274e7
abrirModal3 = ()=>{
    modal3.style.display = "flex"
}
console.log(modal3)
<<<<<<< HEAD

=======
>>>>>>> c703bf576f692b0f3ef97971ecfb4006b3c274e7
fecharModal3 = () =>{
    modal3.style.display = "none"
}

<<<<<<< HEAD
// Abrir e fechar modal 4
abrirModal4 = ()=>{
    modal4.style.display = "flex"
}
console.log(modal4)

fecharModal4 = () =>{
    modal4.style.display = "none"
}

 // Abrir e fechar modal 4

abrirModal5 = ()=>{
    modal4.style.display = "flex"
}
console.log(modal5)

fecharModal5 = () =>{
    modal5.style.display = "none"
}
=======
>>>>>>> c703bf576f692b0f3ef97971ecfb4006b3c274e7



 async function enviarDados(){

  const cpfValue =  document.querySelector('#cpf');
  const nomeValue = document.querySelector('#nome');
  const dataValue = document.querySelector('#datanas');
  const emailValue = document.querySelector('#email');
  const sexoValue = document.querySelector('#sexo');
  const nacValue = document.querySelector('#nac');
  const natuValue = document.querySelector('#natu');
  const profValue = document.querySelector('#prof');
  const escoValue = document.querySelector('#esco');
  const civilValue = document.querySelector('#civil');
  const maeValue = document.querySelector('#mae');
  const paiValue = document.querySelector('#pai');


   const novoCadastro = {
        cpf:cpfValue.value,
        nome:nomeValue.value,
        dataNas:dataValue.value,
        email:emailValue.value,
        sexo:sexoValue.value,
        nac:nacValue.value,
        natu:natuValue.value,
        prof:profValue.value,
        esco:escoValue.value,
        civil:civilValue.value,
        mae:maeValue.value,
        pai:paiValue.value,
    }
    console.log(novoCadastro)
    
await criarPost(novoCadastro)
console.log(criarPost)
}

criarPost()

btn.addEventListener('click', enviarDados)

