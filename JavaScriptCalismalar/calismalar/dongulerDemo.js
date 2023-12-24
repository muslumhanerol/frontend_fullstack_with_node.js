var kullanicilar = [
    {email:"mslmhanerol@gmail.com",sifre:"123456"},
    {email:"mslmhan@gmail.com",sifre:"123456"}
]

var tvitler =[
    {email:"mslmhanerol@gmail.com",tivir:"Bu gün hava çok güzel"},
    {email:"mslmhanerol@gmail.com",tivir:"Bu gün hava soğuk"},
    {email:"mslmha@gmail.com",tivir:"Bu gün hava sıcak"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email&&kullanicilar[i].sifre==sifre){
            return true;
        }
    } return false;
}
function giris(){
    if(kullaniciVarmi(email,sifre)){
    console.log(tvitler)    
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı");
    }
}

giris(email,sifre)