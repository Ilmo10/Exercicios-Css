let login = [
  {
    name: 'Ilmo',
    pass: 'Ilmoklaus',
    type: 'youtube'
  },
  {
    name: 'Erick',
    pass: 'Ilmoklaus',
    type: 'google'
  }
]

function pega(id){
  return document.getElementById(id).value
}

function botao(){
  let inputName = pega('name')
  let inputPass = pega('pass')
  
  for(log of login ){
    if(inputName === log.name && inputPass === log.pass){
      window.location.href = `http://www.${log.type}.com.br`
      //alert("Usuario logado !!")
      return
    }
  }
  alert("Login ou senha não confere!!")
}


 // let codifica = window.btoa(unescape(encodeURIComponent(inputPass)))
// console.log('codificado: ',codifica)
// let decodifica = decodeURIComponent(atob(codifica))
// console.log('descodificado: ', decodifica)

  // if(inputName === login[0].name && inputPass === login[0].pass){
  //   window.location.href = "http://www.google.com.br"
  // } else if(inputName === login[1].name && inputPass === login[1].pass){
  //   window.location.href = "http://www.youtube.com.br"
  // } else {
  //   alert('não entrou')
  // }

