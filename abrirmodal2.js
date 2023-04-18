const modal = document.getElementById("modal-container")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const modal5 = document.getElementById("modal5")
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

getPacientes = async ()=>{
    console.log("teste")
    const content = document.getElementById('tabela')
    const requisicao = await fetch('http://localhost:3000/novoCadastro')
    const pacientes = await requisicao.json()
    console.log(pacientes)
    let conteudo = ''

    pacientes.forEach(paciente => {

        conteudo = conteudo +`<div>${paciente.nome}</div>, <div>${paciente.cpf}</div>`
        
    });

    content.innerHTML = conteudo

}


postPaciente = async (novo) =>{
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
    getPacientes()
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

// Abrir e fechar modal 3 
abrirModal3 = ()=>{
    modal3.style.display = "flex"
}
console.log(modal3)

fecharModal3 = () =>{
    modal3.style.display = "none"
}
// Abrir e fechar modal 4 
abrirModal4 = ()=>{
    modal4.style.display = "flex"
}
console.log(modal4)

fecharModal4 = () =>{
    modal4.style.display = "none"
}


// Abrir e fechar modal 5

abrirModal5 = ()=>{
    modal5.style.display = "flex"
}
console.log(modal5)

fecharModal5 = () =>{
    modal5.style.display = "none"
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
    
    postPaciente(novoCadastro)
    console.log(novoCadastro)

})
getPacientes()
