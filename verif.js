
function VerifNom(){
    let FormNom=document.getElementById('Nom')
    let Nom=FormNom.value
    console.log("fel nom")
   return verifpn(Nom)
}
function verifpn(x){
    let n=0
    var letters = /^[A-Za-z]+$/;
   

    if (x.length==0||!x.match(letters)){
        console.log("8585")
        return false

    }else{
        console.log("azzzzer")
        return true
        
    }

}function VerifPreNom(){
   let FormPreNom=document.getElementById('PreNom')
let PreNom=FormPreNom.value
    return verifpn(PreNom)
}
function VerifPassword(){
  let  FormPassword=document.getElementById('PassWord')
    let Password=FormPassword.value
    let letters = /^[A-Za-z]+$/
    if (Password.match(letters)){
        return true
    }else{
        return false
    }


}function VerifEmail(){
  let  FormEmail=document.getElementById('Email')
    let Email=FormEmail.value
    let emailEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/
    if (Email.match(emailEx))
    {
      return (true)
    }else{
        return false
    }

}
document.getElementById("MyForm").addEventListener("submit", function(event){
    event.preventDefault()
    VerifForm()
  });
  
function VerifForm(){
    
    console.log("you have submitted the form")
     if(!VerifNom()){
         console.log("fazert")
        document.getElementById('errorNom').innerHTML="nom problem"
     }else if (!VerifPreNom()){
        document.getElementById('errorPrenom').innerHTML="prenom problem"
    }else if (VerifPassword()){
        document.getElementById('errorEmail').innerHTML="password problem"
    }else if (!VerifEmail()){
        console.log("ghalet")
    document.getElementById('errorPassword').innerHTML="mail problem"}
    console.log("shiiiiiih")
    return false

}