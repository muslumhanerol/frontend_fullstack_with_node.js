// function selam(){
//     console.log("Merhaba")
// }
// selam();

var selamFonksşyonu =function selam(){
    console.log("Merhaba")
}
selamFonksşyonu();

const selamFonksşyonu2 = () => {
    console.log("Merhaba 2");
    console.log("Birşey");
}
selamFonksşyonu2();

const selamFonksşyonu3 = (mesaj,mesaj2) => {
    console.log(mesaj);
    console.log(mesaj2);
    
}
selamFonksşyonu3("Merhaba Jacascript!","java2");


var topla = (sayi1,sayi2)=>{
    return sayi1+sayi2;
}
let toplam = topla(3,4);
console.log(toplam);