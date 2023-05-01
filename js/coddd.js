const mostrartabela = (paciente) =>{ 

    const listar = document.getElementById("batata")
    listar.innerHTML = ""
    paciente.foreach ( (pacientes) => {
        lista.innerHTML += `  <tr>
        <td onclick="consultarPaciente(${pacientes.id})">${pacientes.id}</td>
        <td onclick="abrirModal3()">${pacientes.nome}</td>
        <td onclick="abrirModal3()">${pacientes.cpf}</td>
        <td>
            <div>
                <button id="icon1"><a href="pronturario.html"><img src="./img/pront.png"></button></a>
                <button onclick="editarPaciente(${pacientes.id})" id="icon2"><img src="./img/edit.png"></button>
                <button onclick="removerPaciente(${pacientes.id})" id="icon3"><img src="./img/delet.png"></button>
            </div>
      r>  </td>
    </t
    `
    
        
    });
    }

    const mostrar = async() =>{
        const api = await fetch(`http://localhost:3000/novoCadastro`)
        let pacientes = await api.json()

        mostrartabela(pacientes)
    }

    const filtrar = async (buscar) =>{
        const nome = document.getElementById("txtBusca").value
        const api = await fetch(`http://localhost:3000/novoCadastro?nome_like=${nome}`)
        const pacienteNome = await api.json()

        mostrartabela(pacienteNome)
    }

    mostrar()
*/