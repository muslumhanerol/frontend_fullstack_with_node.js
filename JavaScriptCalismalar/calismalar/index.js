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

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
    console.log(tvitler)    
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı");
    }
}

giris(email,sifre)