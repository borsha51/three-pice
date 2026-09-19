const PRODUCTS = [
  {id:1,name:"Noor Garden",price:2890,img:"https://mcprod.aarong.com/media/catalog/product/1/4/1420000189286.jpg"},
  {id:2,name:"Meher Olive",price:2490,img:"https://static-01.daraz.com.bd/p/2ee8b860c240a4d742e0c5263a1e09f0.png"},
  {id:3,name:"Ayla Rose",price:2690,img:"https://nilima.com.bd/cdn/shop/files/IMS-6650-_1.jpg?v=1741688420"},
  {id:4,name:"Zara Noir",price:3790,img:"https://img.drz.lazcdn.com/static/bd/p/5a6337085f7891372b8a6d95ca1b8dc5.jpgstyle%3Dwidth%3A1600px%3Bheight%3A2400px%3Bdisplay%3Ainline%3Bvertical-align%3Amiddle_960x960q80.jpg_.webp"}
];

const HERO = "https://www.nameerabyfarooq.com/cdn/shop/files/NewPakistaniSalwarSuitDupattaEmbroideredLilacSalwarKameez_1080x.jpg?v=1689071511";
const SOCIAL = {
  instagram:"https://www.instagram.com/",
  facebook:"https://www.facebook.com/",
  tiktok:"https://www.tiktok.com/"
};

const icon = {
  search:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg>`,
  heart:`<svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>`,
  bag:`<svg viewBox="0 0 24 24"><path d="M5 8.5h14l-1 12H6l-1-12Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>`,
  chat:`<svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.4 8.6 8.6 0 0 1-3.1-.6L4 20l1.7-3.4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24"><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>`,
  truck:`<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
  shield:`<svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z"/></svg>`,
  return:`<svg viewBox="0 0 24 24"><path d="M4 7h9a6 6 0 1 1-5.7 8"/><path d="M4 7V3M4 7l4-2"/></svg>`,
  instagram:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>`,
  facebook:`<svg viewBox="0 0 24 24"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1C12.3 3.9 11 5.2 11 7.5V10H8.5v3H11v8"/></svg>`,
  tiktok:`<svg viewBox="0 0 24 24"><path d="M15 4c.4 2.3 1.7 3.8 4 4v3c-1.6 0-2.9-.4-4-1.1V15a5 5 0 1 1-4-4.9v3a2 2 0 1 0 1 1.9V4h3Z"/></svg>`,
  youtube:`<svg viewBox="0 0 24 24"><path d="m10 8 6 4-6 4V8Z"/><rect x="3" y="5" width="18" height="14" rx="4"/></svg>`
};

const money = n => "৳" + n.toLocaleString("en-BD");
const app = document.querySelector("#app");
let wish = JSON.parse(localStorage.mbnWish || "[]");
let bag = JSON.parse(localStorage.mbnBag || "[]");

function productCard(p){
  const saved = wish.includes(p.id);
  return `<article class="product-card">
    <div class="product-photo">
      <img src="${p.img}" alt="${p.name} three piece" loading="lazy" onerror="this.style.opacity=.25">
      <span class="piece-tag">Three Piece</span>
      <button class="wish-btn ${saved ? "saved" : ""}" data-wish="${p.id}" aria-label="Wishlist">${saved ? "♥" : "♡"}</button>
      <button class="quick-add" data-bag="${p.id}">${icon.bag}<span>Quick Add</span>${icon.arrow}</button>
    </div>
    <div class="product-meta"><div><h3>${p.name}</h3><strong>${money(p.price)}</strong></div><button class="mini-order" data-order="${p.id}">Order</button></div>
  </article>`;
}

function render(){
  app.innerHTML = `
  <div class="topbar"><span>‹</span><div>Free Shipping on Orders Over $100 &nbsp; | &nbsp; Easy Returns &nbsp; | &nbsp; Premium Quality</div><span>›</span></div>
  <header class="header">
    <a class="logo" href="#home"><span>MADE</span><small>BY NEXORA</small></a>
    <nav>
      <a class="active" href="#home">Home</a><a href="#shop">Shop⌄</a><a href="#collection">Three Piece⌄</a><a href="#story">About Us</a><a href="#journal">Journal</a><a href="#contact">Contact</a>
    </nav>
    <div class="actions"><button onclick="openSearch()" aria-label="Search">${icon.search}</button><button onclick="scrollToShop()" aria-label="Wishlist">${icon.heart}<i>${wish.length}</i></button><button onclick="openBag()" aria-label="Bag">${icon.bag}<i>${bag.length}</i></button><button class="menu-btn" onclick="toggleMenu()" aria-label="Menu">☰</button></div>
  </header>
  <div class="mobile-nav" id="mobileNav"><a href="#home" onclick="toggleMenu()">Home</a><a href="#shop" onclick="toggleMenu()">Shop</a><a href="#collection" onclick="toggleMenu()">Three Piece</a><a href="#story" onclick="toggleMenu()">About Us</a><a href="#journal" onclick="toggleMenu()">Journal</a><a href="#contact" onclick="toggleMenu()">Contact</a></div>
  <main>
    <section class="hero" id="home"><img src="${HERO}" alt="Lavender Bangladeshi three piece collection"><div class="hero-shade"></div><div class="hero-content"><span>NEW COLLECTION</span><h1>Three Piece.<br>Redefined.</h1><p>Timeless designs, premium fabrics,<br>made for your everyday elegance.</p><a class="btn light" href="#shop">Shop Three Piece ${icon.arrow}</a></div><div class="hero-side">TRADITION<br><b>MEETS</b><br>MODERN<br>STYLE</div><div class="hero-count">01 / 03 &nbsp; ← &nbsp; →</div></section>
    <section class="collection" id="collection"><div class="eyebrow">THE COLLECTION</div><h2>One Set. Three Stories.</h2><p class="collection-lead">Kameez for grace, Salwar/Trouser for comfort, Dupatta for the perfect finish.</p><div class="parts"><div class="part"><div class="round-img"><img src="${PRODUCTS[0].img}" alt="Kameez detail"></div><b>Kameez</b><span>(Top)</span><small>Grace in every detail</small></div><strong class="plus">+</strong><div class="part"><div class="round-img"><img src="${PRODUCTS[1].img}" alt="Salwar trouser detail"></div><b>Salwar / Trouser</b><span>(Bottom)</span><small>Comfort in every step</small></div><strong class="plus">+</strong><div class="part"><div class="round-img"><img src="${PRODUCTS[2].img}" alt="Dupatta detail"></div><b>Dupatta</b><span>(Scarf)</span><small>The perfect finish</small></div></div><a class="shop-all" href="#shop">Shop All ${icon.arrow}</a></section>
    <section class="featured" id="shop"><div class="section-head"><div><div class="eyebrow">FEATURED COLLECTION</div><h2>Our Best Selling Three Piece</h2></div><a href="#collection">View All ${icon.arrow}</a></div><div class="products">${PRODUCTS.map(productCard).join("")}</div></section>
    <section class="story" id="story"><div class="story-photo"><img src="${PRODUCTS[1].img}" alt="Made by Nexora textile detail"><span>MADE BY NEXORA</span></div><div class="story-copy"><div class="eyebrow">ABOUT OUR STORE</div><h2>Crafted for<br>Modern Women</h2><p>Made by Nexora is a premium fashion brand, offering elegant and comfortable three-piece collections for every occasion. We believe in quality, simplicity, and timeless style.</p><a class="btn dark" href="#journal">Learn More ${icon.arrow}</a></div><div class="quote">“Elegance<br>is a choice.”<small>— MADE BY NEXORA</small></div></section>
    <section class="journal" id="journal"><div class="section-head"><div><div class="eyebrow">FOLLOW OUR JOURNAL</div><h2>Style. Stories. Inspiration.</h2></div><a href="${SOCIAL.instagram}" target="_blank" rel="noreferrer">Follow Us ${icon.arrow}</a></div><div class="journal-grid"><a class="journal-card" href="#shop"><img src="${PRODUCTS[0].img}" alt=""><div><b>New Arrivals</b><span>Fresh styles for your wardrobe.</span><small>Read More →</small></div></a><a class="journal-card" href="#collection"><img src="${PRODUCTS[2].img}" alt=""><div><b>Fashion Tips</b><span>Style guide & care tips.</span><small>Read More →</small></div></a><a class="journal-card" href="#shop"><img src="${PRODUCTS[1].img}" alt=""><div><b>Lookbook</b><span>Explore our latest collection.</span><small>Read More →</small></div></a><a class="journal-card" href="#story"><img src="${HERO}" alt=""><div><b>Behind the Scenes</b><span>Our journey & values.</span><small>Read More →</small></div></a></div></section>
    <section class="services" id="contact"><div>${icon.truck}<span><b>Fast & Reliable Delivery</b><small>Across Bangladesh</small></span></div><div>${icon.shield}<span><b>Secure Payments</b><small>Cash on Delivery / Online</small></span></div><div>${icon.return}<span><b>Easy Return Policy</b><small>Within 7 Days</small></span></div><div>${icon.chat}<span><b>24/7 Customer Support</b><small>We're here to help</small></span></div></section>
  </main>
  <footer class="footer"><div class="footer-brand"><a class="logo light" href="#home"><span>MADE</span><small>BY NEXORA</small></a><p>© 2026 Made by Nexora. All rights reserved.</p></div><div class="footer-links"><a href="#home">Home</a><a href="#shop">Shop</a><a href="#collection">Three Piece</a><a href="#story">About Us</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><div class="footer-social"><a href="${SOCIAL.instagram}" target="_blank" rel="noreferrer">${icon.instagram}</a><a href="${SOCIAL.facebook}" target="_blank" rel="noreferrer">${icon.facebook}</a><a href="${SOCIAL.tiktok}" target="_blank" rel="noreferrer">${icon.tiktok}</a><a href="#" onclick="agent();return false">${icon.youtube}</a><button onclick="agent()">${icon.chat} Chat with an agent</button></div></footer>
  <button class="float-chat" onclick="agent()" aria-label="Chat">${icon.chat}<b></b></button>`;

  document.querySelectorAll("[data-wish]").forEach(btn => btn.onclick = () => { const id=Number(btn.dataset.wish); wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id]; localStorage.mbnWish=JSON.stringify(wish); render(); });
  document.querySelectorAll("[data-bag]").forEach(btn => btn.onclick = () => { const id=Number(btn.dataset.bag); if(!bag.includes(id)) bag.push(id); localStorage.mbnBag=JSON.stringify(bag); render(); openBag(); });
  document.querySelectorAll("[data-order]").forEach(btn => btn.onclick = () => openOrder(Number(btn.dataset.order)));
}

function scrollToShop(){ document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"}); }
window.toggleMenu=()=>document.querySelector("#mobileNav")?.classList.toggle("open");
window.scrollToShop=scrollToShop;
window.openSearch=()=>document.body.insertAdjacentHTML("beforeend",`<div class="overlay" onclick="this.remove()"><div class="search-box" onclick="event.stopPropagation()"><button class="close" onclick="this.closest('.overlay').remove()">×</button><div class="eyebrow">SEARCH THE EDIT</div><h2>Find your next set.</h2><input autofocus placeholder="Search Noor Garden..." oninput="filterSearch(this.value)"><div id="searchResults"></div></div></div>`);
window.filterSearch=q=>{const box=document.querySelector("#searchResults");if(!box)return;const found=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));box.innerHTML=q?(found.length?found.map(p=>`<button class="result" onclick="document.querySelector('.overlay').remove();scrollToShop()"><img src="${p.img}" alt=""><span>${p.name}<small>${money(p.price)}</small></span></button>`).join(""):"<small>No matching set found.</small>"):"<small>Search by product name.</small>"};
window.openBag=()=>document.body.insertAdjacentHTML("beforeend",`<div class="overlay" onclick="this.remove()"><aside class="side-box" onclick="event.stopPropagation()"><button class="close" onclick="this.closest('.overlay').remove()">×</button><div class="eyebrow">YOUR BAG</div><h2>Your selected sets.</h2><div class="bag-items">${bag.length?bag.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return `<div><img src="${p.img}" alt=""><span>${p.name}<small>${money(p.price)}</small></span></div>`;}).join(""):"<small>Your bag is empty.</small>"}</div><a class="btn dark" href="#shop" onclick="this.closest('.overlay').remove()">Continue Shopping ${icon.arrow}</a></aside></div>`);
window.openOrder=id=>{const p=PRODUCTS.find(x=>x.id===id);document.body.insertAdjacentHTML("beforeend",`<div class="overlay" onclick="this.remove()"><div class="order-box" onclick="event.stopPropagation()"><button class="close" onclick="this.closest('.overlay').remove()">×</button><div class="eyebrow">ORDER REQUEST</div><h2>${p.name}</h2><p>${money(p.price)} · Three Piece</p><form onsubmit="event.preventDefault();this.closest('.overlay').remove();alert('Thanks! Your demo order request has been received.')"><input required placeholder="Full name"><input required placeholder="Phone / WhatsApp"><textarea required placeholder="Delivery address"></textarea><select><option>Size — S</option><option>Size — M</option><option>Size — L</option><option>Size — XL</option></select><button class="btn dark">Send order request ${icon.arrow}</button></form></div></div>`);};
window.agent=()=>document.body.insertAdjacentHTML("beforeend",`<div class="overlay" onclick="this.remove()"><div class="order-box" onclick="event.stopPropagation()"><button class="close" onclick="this.closest('.overlay').remove()">×</button><div class="eyebrow">NEXORA CONCIERGE</div><h2>How can we help?</h2><form onsubmit="event.preventDefault();this.closest('.overlay').remove();alert('Thanks! We will get back to you soon.')"><input required placeholder="Your name"><input required placeholder="Phone / WhatsApp"><textarea required placeholder="How can we help?"></textarea><button class="btn dark">Message us ${icon.arrow}</button></form></div></div>`);
render();
