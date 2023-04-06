const formElement = document.querySelector("#content")

function handleNextPage(e) {
  e.preventDefault()
  
  const html = `
  <div id="content1">

            <div id="logocadastro">
                <img id="logo-form1" src="./img/cadastroformlogo.png"/>
                 <div id="text1"><p>Seja bem-vindo(a)!</p><p>Escolha uma senha</p></div>

                <form id="singup-form1">
                         <label for="nome" id="senha">Senha</label>
                         <input name="nome" id="senhaForm" /><br>
                         <label for="email" id="confsenha">Confirmar senha</label>
                         <input type="email" id="confirmForm"/><br>

                         <div id="restriForm">
                            <div>*Precisa no mínimo 8 digitos<div>
                            <div>*Precisa conter um caractere especial */+.</div>
                            <div>*Precisa conter uma letra em MAIÚSCULA.</div>
                        <div>
                         <button type="submit" id="prosseForm">Prosseguir</button>
                </form>

            </div>
            
    </div>
  `

  formElement.innerHTML = html
}

formElement.addEventListener('submit', handleNextPage)

