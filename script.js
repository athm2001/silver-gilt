let currentLang = "ar";
const whatsappNumber = "967774399915";

const products = [
  {
    ar:"خاتم فضة رجالي",
    en:"Men Silver Ring",
    img:"https://source.unsplash.com/400x400/?silver,ring",
    offer:false
  },
  {
    ar:"سوار فضة نسائي",
    en:"Women Silver Bracelet",
    img:"https://source.unsplash.com/400x400/?silver,bracelet",
    offer:true
  },
  {
    ar:"سلسلة فضة",
    en:"Silver Necklace",
    img:"https://source.unsplash.com/400x400/?silver,necklace",
    offer:false
  }
];

function renderProducts(){
  productsGrid.innerHTML="";
  offersGrid.innerHTML="";

  products.forEach(p=>{
    const name=currentLang==="ar"?p.ar:p.en;

    const card=`
    <div class="product-card">
      <img src="${p.img}">
      <div class="info">
        <h3>${name}</h3>
        <button onclick="orderProduct('${name}')">
          ${currentLang==="ar"?"اطلب عبر واتساب":"Order via WhatsApp"}
        </button>
      </div>
    </div>`;

    p.offer?offersGrid.innerHTML+=card:productsGrid.innerHTML+=card;
  });
}

function orderProduct(name){
  const msg=currentLang==="ar"
    ?`مرحبًا، أريد طلب المنتج: ${name}`
    :`Hello, I want to order: ${name}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`);
}

function toggleLang(){
  currentLang=currentLang==="ar"?"en":"ar";
  document.body.dir=currentLang==="ar"?"rtl":"ltr";

  document.querySelectorAll("[data-ar]").forEach(el=>{
    el.textContent=el.dataset[currentLang];
  });

  document.querySelector(".lang-btn").textContent=
    currentLang==="ar"?"EN":"AR";

  renderProducts();
}

window.onload=()=>{
  renderProducts();
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("active"));
};
