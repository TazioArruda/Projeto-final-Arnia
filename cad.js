const formElement = document.querySelector("#content")


let data

async function getApi(){
    const request = await fetch("http://localhost:3000/paciente")
    data = await request.json()
    let textoPaciente = ""
    data.forEach(element => {
      textoPaciente = textoPaciente + `<p>nome do paciente ${element.nome}</p>`
      document.getElementById("teste").innerHTML = textoPaciente
    });


}

getApi()
const resultadoApi = data



/*------------------------------------FUNÇÃO DE MUDANÇA DO FORMULARIO ----------------------------*/

function handleNextPage(e) {
  e.preventDefault()
  
  const html = `
  <div id="content1">

        
                <img id="logo-form1" src="./img/cadastroformlogo.png"/>
                 <div id="text1"><p><strong>Seja bem-vindo(a)!</strong></p><p>Escolha uma senha</p></div>

                <form id="singup-form1">
                         <label for="nome" id="senha">Senha</label>
                         <input name="nome" id="senhaForm" /><br>
                         <label for="email" id="confsenha">Confirmar senha</label>
                         <input type="email" id="confirmForm"/><br>

                         <div id="restriForm1">
                            <div>*Precisa no mínimo 8 digitos<div>
                            <div>*Precisa conter um caractere especial */+.</div>
                            <div>*Precisa conter uma letra em MAIÚSCULA.</div>
                          <div>
                         
                </form>
                <div id="buttom2"><button type="submit" id="prosseForm">Prosseguir</button></div>


            
    </div>
  `
  formElement.innerHTML = html
}

formElement.addEventListener('submit', handleNextPage)


/*-------------------------------------------------FINAL DA FUNÇÃO -------------------------------------------------*/