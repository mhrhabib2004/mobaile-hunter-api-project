const loadPhone = async (searchText,isShowall) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones=data.data;
    // console.log(phones);
    displayPhones(phones,isShowall);
}


const displayPhones = (phones,isShowall) =>{
// console.log(phones);

const phoneContainer = document.getElementById('phone-container');
phoneContainer.textContent='';
// disply show all button if there are more then 12 photos
const showAllConteinar=document.getElementById('show-all-container');

if(phones.length>12 && !isShowall){
    showAllConteinar.classList.remove('hidden');

}
else{
    showAllConteinar.classList.add('hidden');
}
// console.log('is show all',isShowall)
// disply only frist photos
if(!isShowall){
    phones = phones.slice(0,12);
}

phones.forEach(phone=>{
    console.log(phone);
    const phoneCrad = document.createElement('div');
    phoneCrad.classList=`card p-4 bg-gray-100 shadow-2xl`;
    phoneCrad.innerHTML= `<figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="text-2xl text-center font-extrabold">${phone.phone_name}</h2>
      <p class="text-3xl text-center font-bold">There are many variations of passages of available, but the majority have suffered</p>
      <div onclick="handelshowditels('${phone.slug}')" class="card-actions justify-center">
        <button onclick="my_modal.showModal()" class="btn btn-primary">Show detals</button>
      </div>
    </div>
    `
    phoneContainer.appendChild(phoneCrad);
    
});
toggolLodingSippinar(false);
}
// show ditels part
const handelshowditels=async(id) => {
     console.log('yeah i am working',id);
    //  data lode 
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDitels(phone);
}

// show ditels
const showPhoneDitels = (phone) =>{
    console.log(phone);
  const ditelsShow = document.getElementById('show-ditels-div');
  ditelsShow.innerHTML=`
  <img  src="${phone.image}" alt="">
  <h3 class="font-bold text-lg">${phone.name}</h3>
  
  
  `



}

// search hendelar
const searchHendelar = (isShowall) =>{
    toggolLodingSippinar(true);
    const searchFild=document.getElementById('search-fild');
    const searchText = searchFild.value;
    // console.log(searchText);
    loadPhone(searchText,isShowall);
}

// loding spinar
const toggolLodingSippinar= (isloding)=>{
    const lodingSpinar=document.getElementById('loding-spiner');
    if(isloding){
        lodingSpinar.classList.remove('hidden');
    }
    else{
        lodingSpinar.classList.add('hidden');
    }
}

// handel show all 
const handelShowall = ()=>{
    searchHendelar(true);
}

// loadPhone();