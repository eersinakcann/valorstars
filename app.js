import { db } from "./firebase.js";

import {
collection,
addDoc
} from "firebase/firestore";

document.getElementById("katilBtn").onclick=async()=>{

let isim=document.getElementById("isim").value;

if(isim==""){
alert("İsim gir");
return;
}

await addDoc(collection(db,"katilimcilar"),{

isim:isim,

tarih:new Date()

});

document.getElementById("sonuc").innerHTML="✅ Katıldınız.";

}