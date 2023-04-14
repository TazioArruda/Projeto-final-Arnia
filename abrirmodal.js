const modal = document.getElementById("modal-container")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const form =  document.getElementById("formModal")




/*const novoPaciente = async (post) => {
    // Obtenho a lista de pacientes 
    const url = "http://localhost:3000/novoCadastro";
    const response = await fetch(url);
    const patients = await response.json();

    await fetch (url , {
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, /*', 
            'Content-Type': 'application/json'  


        },
        body: JSON.stringify(post)
    })


}*/

getPaciente = async ()=>{
    const content = document.getElementById('contentTable')
    const requisicao = await fetch('http://localhost3000/novoCadastro')
    const pacientes = await requisicao.json()
    console.log(pacientes)
    let conteudo = ''
    pacientes.forEach(paciente => {

        conteudo = conteudo +'<div>${paciente.nome}</div>'
        
    });

    content.innerHTML = conteudo
}
novoPaciente = async (novo) =>{
    await fetch ('http://localhost:3000/novoCadastro',{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*', 
            'Content-Type': 'application/json'  


        },
        body: JSON.stringify(novo)
    })
    fecharModal()
    fecharModal2()
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

// Abrir e fechar modal 2 
abrirModal3 = ()=>{
    modal3.style.display = "flex"
}
console.log(modal3)
fecharModal3 = () =>{
    modal3.style.display = "none"
}




form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const cpfForm = form.elements["cpf"].value
    const nomeForm = form.elements["nome"].value
    const dataNasForm = form.elements["dataNas"].value
    const emailForm = form.elements["email"].value
    const sexoForm = form.elements["sexo"].value
    const nacForm = form.elements["nac"].value
    const natuForm = form.elements["natu"].value
    const profForm = form.elements["prof"].value
    const escoForm = form.elements["esco"].value
    const civilForm = form.elements["civil"].value
    const maeForm = form.elements["mae"].value
    const paiForm = form.elements["pai"].value

   const novoCadastro = {

        cpf: cpfForm,
        nome:nomeForm,
        dataNas:dataNasForm,
        email:emailForm,
        sexo:sexoForm,
        nac:nacForm,
        natu:natuForm,
        prof:profForm,
        esco:escoForm,
        civil:civilForm,
        mae:maeForm,
        pai:paiForm

        


    }
    
    novoPaciente(novoCadastro)

})

