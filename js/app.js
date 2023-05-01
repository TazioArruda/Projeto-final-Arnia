const modal = document.getElementById("modal-container")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const modal5 = document.getElementById("modal5")
const modal6 = document.getElementById("modal6")
const form = document.getElementById("formModal")
const form2 =  document.getElementById("formModal2")

const apiUrl = 'https://arniabackend.onrender.com'


let edicaoPaciente = null


/*const filter = async () =>{
    const pesquisar = inputpesquisa.value;
    const requisicao = await fetch (`http://localhost:3000/novoCadastro${pesquisar}`)
    const data = await requisicao.json()
}*/



filtrarTabela = async () => {
    let input, filtro, tabela, linhas, i, valorCelula;

    const requisicao = await fetch(apiUrl + '/novoCadastro')
    const pacientes = await requisicao.json()

    console.log(pacientes)
    input = document.getElementById("txtBusca")
    filtro = input.value.toUpperCase()
    tabela = document.getElementById("contentTable")
    linhas = tabela.getElementsByTagName("tr")

    coluna = 1;
    for(i=0; i< linhas.length;i++){
        valorCelula = linhas[i].getElementsByTagName("td")[coluna];

        if(valorCelula){
            if(valorCelula.innerHTML.toUpperCase().indexOf(filtro)){
                linhas[i].style.display="";

            } else {
                linhas[i].style.display ="none"
            }
        }
    }

}




getPacientes = async ()=>{
    
    const content = document.getElementById('batata')
    const requisicao = await fetch(apiUrl + '/novoCadastro')
    const pacientes = await requisicao.json()
    console.log(pacientes)
    let conteudo = ''

    pacientes.forEach(paciente => {

        conteudo = conteudo +`  <tr>
        <td onclick="consultarPaciente(${paciente.id})">${paciente.id}</td>
        <td onclick="abrirModal3()">${paciente.nome}</td>
        <td onclick="abrirModal3()">${paciente.cpf}</td>
        <td>
            <div>
                <button id="icon1"><a href="pronturario.html"><img src="./img/pront.png"></button></a>
                <button onclick="editarPaciente(${paciente.id})" id="icon2"><img src="./img/edit.png"></button>
                <button onclick="removerPaciente(${paciente.id})" id="icon3"><img src="./img/delet.png"></button>
            </div>
        </td>
    </tr>
    `
        
        
    });

    content.innerHTML = conteudo

    

}


postPaciente = async (novo) =>{
    await fetch (apiUrl + '/novoCadastro',{
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

    await fetch (apiUrl + `/novoCadastro/${id}`,{
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



consultarPaciente = async (id) =>{
    const requisicao = await fetch(apiUrl + `/novoCadastro/${id}`)
    consPaciente = await requisicao.json()

    document.getElementById('cpf').value = consPaciente.cpf 
    document.getElementById('nome').value = consPaciente.nome
    document.getElementById('dataNas').value = consPaciente.dataNas
    document.getElementById('email').value = consPaciente.email
    document.getElementById('sexo').value = consPaciente.sexo
    document.getElementById('nac').value = consPaciente.nac
    document.getElementById('natu2').value = consPaciente.natu
    document.getElementById('prof2').value = consPaciente.prof
    document.getElementById('esco2').value = consPaciente.esco
    document.getElementById('civil2').value = consPaciente.civil
    document.getElementById('mae2').value = consPaciente.mae
    document.getElementById('pai2').value = consPaciente.pai
  

    
    abrirModal3()
    
    
}





editarPaciente = async (idPaciente) => {
    const requisicao = await fetch(apiUrl + `/novoCadastro/${idPaciente}`)
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
    await fetch (apiUrl + `/novoCadastro/${idPaciente}`,{
        method:'DELETE',
    })

    getPacientes()
}


// --------------------Abrir e fechar modal 1 

abrirModal = ()=>{
    modal.style.display = "flex"
}
console.log(modal)

fecharModal = () =>{
    modal.style.display = "none"
}

// ---------------------Abrir e fechar modal 2 

abrirModal2 = ()=>{
    modal2.style.display = "flex"
}
console.log(modal2)

fecharModal2 = () =>{
    modal2.style.display = "none"
    console.log(fecharModal2)
}

// ---------------------Abrir e fechar modal 3 
abrirModal3 = ()=>{
    modal3.style.display = "flex"
}
console.log(modal3)

fecharModal3 = () =>{
    modal3.style.display = "none"
}
// ---------------------Abrir e fechar modal 4 
abrirModal4 = ()=>{
    modal4.style.display = "flex"
}
console.log(modal4)

fecharModal4 = () =>{
    modal4.style.display = "none"
}


// ----------------- Abrir e fechar modal 5

abrirModal5 = ()=>{
    modal5.style.display = "flex"
}
console.log(modal5)

fecharModal5 = () =>{
    modal5.style.display = "none"
}
//--------------- Abrir e fechar modal 6

abrirModal6 = ()=>{
    modal6.style.display = "flex"
}
console.log(modal6)

fecharModal6 = () =>{
    modal6.style.display = "none"
}

//--------------- função para atualizar a pagina quando o cadastro for efetuado-----------///

function recarregarAPagina(){
    window.location.reload();
} 

//----------------- FUNÇÃO DE EDIÇÃO DE PACIENTE -------------------------///

const processarDados = (paciente) =>{
    
    console.log(paciente)
    if(edicaoPaciente === null){
        postPaciente(paciente)
    }   else{

        putPaciente(edicaoPaciente.id, paciente)
    }


    

}

//--------------------------FUNÇÃO DE CADASTRO DE USUARIO --------------------/////

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
        pai:paiForm,


    }

    processarDados(novoCadastro)

})
//--------------------------FUNÇÃO DE ATUALIZAR O MODAL QUANDO OS DADOS SÃO ALTERADOS POR O ÚSUARIO -------///
form2.addEventListener("submit", (e) =>{
    e.preventDefault()
    const cpfForm = form2.elements["cpf2"].value
    const nomeForm = form2.elements["nome2"].value
    const dataNasForm = form2.elements["dataNas2"].value
    const emailForm = form2.elements["email2"].value
    const sexoForm = form2.elements["sexo2"].value
    const nacForm = form2.elements["nac2"].value
    const natuForm = form2.elements["natu2"].value
    const profForm = form2.elements["prof2"].value
    const escoForm = form2.elements["esco2"].value
    const civilForm = form2.elements["civil2"].value
    const maeForm = form2.elements["mae2"].value
    const paiForm = form2.elements["pai2"].value

   const atualizarCadastro = {
    
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

    processarDados(atualizarCadastro)
    fecharModal2()
})

getPacientes()
