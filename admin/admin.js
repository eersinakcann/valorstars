import { db } from "../firebase.js";

import {
    collection,
    getDocs,
    addDoc,
    serverTimestamp
} from "firebase/firestore";

const tbody = document.getElementById("tbody");
const kazananYazi = document.getElementById("kazanan");

let katilimcilar=[];

async function katilimcilariGetir(){

    tbody.innerHTML="";
    katilimcilar=[];

    const snapshot=await getDocs(collection(db,"katilimcilar"));

    snapshot.forEach((doc)=>{

        const veri=doc.data();

        katilimcilar.push(veri);

        tbody.innerHTML+=`

<tr>

<td>${veri.isim}</td>

<td>${veri.email}</td>

<td>${veri.youtube}</td>

<td>${veri.discord}</td>

</tr>

`;

    });

}

katilimcilariGetir();

document.getElementById("cekilisBtn").onclick=async()=>{

if(katilimcilar.length==0){

alert("Katılımcı bulunamadı.");

return;

}

const random=Math.floor(Math.random()*katilimcilar.length);

const kazanan=katilimcilar[random];

kazananYazi.innerHTML=

`🏆 Kazanan: ${kazanan.isim}`;

await addDoc(collection(db,"kazananlar"),{

isim:kazanan.isim,

email:kazanan.email,

youtube:kazanan.youtube,

discord:kazanan.discord,

tarih:serverTimestamp()

});

alert("🎉 Kazanan Firestore'a kaydedildi.");

}