const modal = document.getElementById("modal-container")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const modal5 = document.getElementById("modal5")
const modal6 = document.getElementById("modal6")
const form =  document.getElementById("formModal")
let edicaoPaciente = null





getPacientes = async ()=>{
    console.log("teste")
    const content = document.getElementById('batata')
    const requisicao = await fetch('http://localhost:3000/novoCadastro')
    const pacientes = await requisicao.json()
    console.log(pacientes)
    let conteudo = ''

    pacientes.forEach(paciente => {

        conteudo = conteudo +`  <tr>
        <td onclick="abrirModal3()">${paciente.id}</td>
        <td onclick="abrirModal3()">${paciente.nome}</td>
        <td onclick="abrirModal3()">${paciente.cpf}</td>
        <td>
            <div>
                <button id="icon1"><a href="pronturario.html"><img src="./img/pront.png"></button></a>
                <button onclick="editarPaciente(${paciente.id})" id="icon2"><img src="./img/edit.png"></button>
                <button onclick="removerPaciente(${paciente.id}" id="icon3"><img src="./img/delet.png"></button>
            </div>
        </td>
    </tr>`
        
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

putPaciente = async (id, novo) =>{

    await fetch (`http://localhost:3000/novoCadastro/${id}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json, text/plain, */*', 
            'Content-Type': 'application/json'  


        },
        body: JSON.stringify(novo)
    })
    fecharModal()
    fecharModal2()
    getPacientes()
    edicaoPaciente = null

}

editarPaciente = async (idPaciente) => {
    const requisicao = await fetch(`http://localhost:3000/novoCadastro/${idPaciente}`)
    edicaoPaciente = await requisicao.json()

    document.getElementById('cpf2').value = edicaoPaciente.cpf
    document.getElementById('nome2').value = edicaoPaciente.nome
    document.getElementById('dataNas2').value = edicaoPaciente.dataNas
    document.getElementById('email2').value = edicaoPaciente.email
    document.getElementById('sexo2').value = edicaoPaciente.sexo
    document.getElementById('nac2').value = edicaoPaciente.nac
    document.getElementById('natu2').value = edicaoPaciente.natu
    document.getElementById('prof2').value = edicaoPaciente.prof
    document.getElementById('esco2').value = edicaoPaciente.esco
    document.getElementById('civil2').value = edicaoPaciente.civil
    document.getElementById('mae2').value = edicaoPaciente.mae
    document.getElementById('pai2').value = edicaoPaciente.pai
    

    abrirModal2()

}

removerPaciente = async (idPaciente) => {
    await fetch (`http://localhost:3000/novoCadastro/${idPaciente}`,{
        method:'DELETE',
    })

    getPaciente()
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
// Abrir e fechar modal 6

abrirModal6 = ()=>{
    modal6.style.display = "flex"
}
console.log(modal6)

fecharModal6 = () =>{
    modal6.style.display = "none"
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

    if(edicaoPaciente === null){
        postPaciente(novoCadastro)
    }   else{

        putPaciente(edicaoPaciente.id, novoCadastro)
    }
    
    postPaciente(novoCadastro)
    console.log(novoCadastro)

})
getPacientes()
