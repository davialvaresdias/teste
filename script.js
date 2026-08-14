const form = document.getElementById("meu-form")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")
form.addEventListener("submit", function(event) {
    event.preventDefault()
    if (inputNome.value ==="") {
        alert("Nome é obrigatório")
        return
}
   if (inputEmail.value ==="") {
    alert("Email é obrigatório")
    return
}
    if (inputSenha.value ==="") {
    alert("Senha é obrigatório") 
    return
}
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
    alert("Email Inválido") 
    return
}
   if (inputSenha.value.length <6) {
    alert("senha deve ter no mínimo 6 caracteres")
    return
   }
 alert ("Cadastro realizado com sucesso")
})