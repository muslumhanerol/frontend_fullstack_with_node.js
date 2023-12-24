// innerHTML=p nin içini yazığımız yer.
// document.getElementById("bio").innerHTML="Müslüm Gaziantep 2023"

// var intro1=document.getElementById("intro1");

// var mesaj=document.getElementById("mesaj");

// // mesaj kısmı boş olmasına rağmen introdan aldık yazdırdık.
// mesaj.innerHTML=intro1.innerHTML;   

// ----------------------------------------------------------------------------------------------
// getElementsByClassName' içeriklere ulaşma.

// var classElemanları = document.getElementsByClassName("intro1");
// alert(classElemanları[1].innerHTML);

// ----------------------------------------------------------------------------------------------
// querySelectorAll aynı clasa sahip olan tagler arasında seçim yaptırı. iki intro1 clası olduğu var sayılsın <p></p> <h1></h1> bunlardan p yi alabiliriz.

// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);

// ----------------------------------------------------------------------------------------------

// document.getElementsByName name üzerinden işlem yapmamızı sağlar.

// var isimElemanları = document.getElementsByName("musteriAdi");
// alert(isimElemanları[0].value);
// var sehirElemanlari = document.getElementsByName("musteriSehir");
// alert(sehirElemanlari[0].value);

// ----------------------------------------------------------------------------------------------

// AddEventListener
// var muslum = document.getElementById("muslum").addEventListener("click",rengiDegistir);
// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";

//     var isimElemanları = document.getElementsByName("musteriAdi");
//     isimElemanları[0].value ="Erol"
// }

// var muslum = document.getElementById("muslum").addEventListener("mouseover",rengiDegistir);
// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";

//     var isimElemanları = document.getElementsByName("musteriAdi");
//     isimElemanları[0].value ="Erol"
// }

// var hahaha = document.getElementById("muslum").addEventListener("click",hizadegis);
// function hizadegis(){
//     document.getElementById("div1").setAttribute(
//         "style", "font-size: 55px; font-style: italic; color:red; ");}

// ----------------------------------------------------------------------------------------------

// bir alt elemende erişim sağlar
// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);


// baslık oluşturduk
var baslik = document.createElement("h2"); 
// node oluşturduk
var node = document.createTextNode("Merhaba JavaSciript")
// basligin alt modu olarak ekledik
baslik.appendChild(node)


var div1=document.getElementById("div1")
var p2=document.getElementById("p2")
// div1 icine bir element ekle(baslik elementini ekle,p2 den once ekle)
div1.insertBefore(baslik,p2)

alert("p2 siliiyor")
// p2 yi silme işlemi
div1.removeChild(p2);

alert("Değiştiriliyor");
var p1=document.getElementById("p1")
// basliği p1 in yerine ekle
div1.replaceChild(baslik,p1)





