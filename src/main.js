const PRODUCTS = [
  {id:1,name:"Noor Garden",price:2890,img:"https://mcprod.aarong.com/media/catalog/product/1/4/1420000189286.jpg",tone:"LILAC / EMBROIDERED"},
  {id:2,name:"Meher Olive",price:2490,img:"https://static-01.daraz.com.bd/p/2ee8b860c240a4d742e0c5263a1e09f0.png",tone:"OLIVE / TEXTURED"},
  {id:3,name:"Ayla Rose",price:2690,img:"https://nilima.com.bd/cdn/shop/files/IMS-6650-_1.jpg?v=1741688420",tone:"ROSE / SOFT PRINT"},
  {id:4,name:"Zara Noir",price:3790,img:"https://img.drz.lazcdn.com/static/bd/p/5a6337085f7891372b8a6d95ca1b8dc5.jpgstyle%3Dwidth%3A1600px%3Bheight%3A2400px%3Bdisplay%3Ainline%3Bvertical-align%3Amiddle_960x960q80.jpg_.webp",tone:"NOIR / STATEMENT"}
];
const icon={
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg>',
 heart:'<svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"/></svg>',
 bag:'<svg viewBox="0 0 24 24"><path d="M5 8.5h14l-1 12H6l-1-12Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
 chat:'<svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.4 8.6 8.6 0 0 1-3.1-.6L4 20l1.7-3.4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/></svg>',
 arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>',
 plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
 truck:'<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
 shield:'<svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z"/></svg>',
 return:'<svg viewBox="0 0 24 24"><path d="M4 7h9a6 6 0 1 1-5.7 8"/><path d="M4 7V3M4 7l4-2"/></svg>',
 instagram:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
 facebook:'<svg viewBox="0 0 24 24"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1C12.3 3.9 11 5.2 11 7.5V10H8.5v3H11v8"/></svg>',
 tiktok:'<svg viewBox="0 0 24 24"><path d="M15 4c.4 2.3 1.7 3.8 4 4v3c-1.6 0-2.9-.4-4-1.1V15a5 5 0 1 1-4-4.9v3a2 2 0 1 0 1 1.9V4h3Z"/></svg>'
};
const SOCIAL={instagram:"https://www.instagram.com/",facebook:"https://www.facebook.com/",tiktok:"https://www.tiktok.com/"};
let wish=JSON.parse(localStorage.mbnWish||"[]");
let bag=JSON.parse(localStorage.mbnBag||"[]");
const money=n=>"৳"+n.toLocaleString("en-BD");
const app=document.querySelector("#app");

function productCard(p,i){
  return `<article class="product-card">
    <div class="product-photo">
      <img src="${p.img}" alt="${p.name} three piece set" loading="${i>1?"lazy":"eager"} onerror="this.style.opacity=.2">
      <div class="photo-top"><span>${p.tone}</span><button class="icon-circle" data-wish="${p.id}" aria-label="Wishlist">${wish.includes(p.id)?"♥":"♡"}</button></div>
      <button class="quick" data-order="${p.id}">Quick order ${icon.arrow}</button>
    </div>
    <div class="product-info"><div><p>THREE PIECE</p><h3>${p.name}</h3></div><strong>${money(p.price)}</strong></div>
  </article>`;
}

function render(){
 app.innerHTML=`
 <div class="announcement"><span>FREE DELIVERY ON 2+ SETS</span><span class="announce-dot">·</span><span>MADE FOR BANGLADESH</span><span class="announce-dot">·</span><span>7 DAY EASY RETURN</span></div>
 <header class="site-header">
   <a class="brand" href="#home" aria-label="Made by Nexora home"><span>MADE BY</span><b>NEXORA</b></a>
   <nav class="desktop-nav"><a class="active" href="#home">Home</a><a href="#collection">Collections</a><a href="#shop">Shop</a><a href="#story">Our Story</a><a href="#social">Journal</a></nav>
   <div class="header-actions">
     <button class="head-btn" onclick="openSearch()" aria-label="Search">${icon.search}</button>
     <button class="head-btn wish-head" onclick="document.querySelector('#shop').scrollIntoView({behavior:'smooth'})" aria-label="Wishlist">${icon.heart}<i>${wish.length}</i></button>
     <button class="head-btn bag-head" onclick="openBag()" aria-label="Shopping bag">${icon.bag}<i>${bag.length}</i></button>
     <button class="agent-pill" onclick="agent()"><span>${icon.chat}</span>Chat with us</button>
     <button class="mobile-menu" onclick="toggleMenu()" aria-label="Menu">☰</button>
   </div>
 </header>
 <div class="mobile-menu-panel" id="mobileMenu"><a href="#home" onclick="toggleMenu()">Home</a><a href="#collection" onclick="toggleMenu()">Collections</a><a href="#shop" onclick="toggleMenu()">Shop</a><a href="#story" onclick="toggleMenu()">Our Story</a><a href="#social" onclick="toggleMenu()">Journal</a></div>

 <main>
 <section class="hero-new" id="home">
   <div class="hero-copy">
     <div class="hero-kicker"><span></span>THE NEXORA EDIT · 01</div>
     <h1>Three Piece,<br><em>reimagined.</em></h1>
     <p>Heritage silhouettes, considered fabrics and effortless details — designed for the woman who makes every day her own.</p>
     <div class="hero-cta"><a class="primary-btn" href="#shop">Explore the collection ${icon.arrow}</a><a class="text-link" href="#story">Discover our story</a></div>
     <div class="hero-note"><b>01</b><span></span><small>CURATED IN BANGLADESH</small></div>
   </div>
   <div class="hero-visual">
     <div class="hero-frame"><img src="https://www.nameerabyfarooq.com/cdn/shop/files/NewPakistaniSalwarSuitDupattaEmbroideredLilacSalwarKameez_1080x.jpg?v=1689071511" alt="Lavender three piece fashion look"></div>
     <div class="hero-badge"><span>NEW</span><b>DROP</b><small>SS · 26</small></div>
     <div class="hero-side-copy">TRADITION<br><i>×</i> MODERN</div>
   </div>
 </section>

 <section class="marquee"><div>THREE PIECE <i>✦</i> EVERYDAY ELEGANCE <i>✦</i> MADE BY NEXORA <i>✦</i> THREE PIECE <i>✦</i> EVERYDAY ELEGANCE <i>✦</i></div></section>

 <section class="intro-section" id="collection">
   <div class="section-label"><span>01</span><i></i><span>THE COLLECTION</span></div>
   <div class="intro-grid">
     <div><h2>One set.<br><em>Three stories.</em></h2></div>
     <div class="intro-copy"><p>Our three-piece edit brings together the Kameez, Salwar or Trouser, and Dupatta in one considered look. Elegant enough for occasions, effortless enough for every day.</p><a class="under-link" href="#shop">Shop the edit ${icon.arrow}</a></div>
   </div>
   <div class="component-row">
     <div class="component"><span class="component-num">01</span><div class="component-shape shape-top"></div><h3>Kameez</h3><p>The statement layer</p></div>
     <div class="component"><span class="component-num">02</span><div class="component-shape shape-bottom"></div><h3>Salwar / Trouser</h3><p>The effortless base</p></div>
     <div class="component"><span class="component-num">03</span><div class="component-shape shape-scarf"></div><h3>Dupatta / Orna</h3><p>The finishing touch</p></div>
   </div>
 </section>

 <section class="shop-new" id="shop">
   <div class="shop-heading"><div><div class="section-label"><span>02</span><i></i><span>THE EDIT</span></div><h2>Pieces worth <em>keeping.</em></h2></div><a class="under-link" href="#collection">View collection ${icon.arrow}</a></div>
   <div class="products-new">${PRODUCTS.map(productCard).join("")}</div>
 </section>

 <section class="story" id="story">
   <div class="story-image"><img src="https://static-01.daraz.com.bd/p/2ee8b860c240a4d742e0c5263a1e09f0.png" alt="Made by Nexora fabric detail" loading="lazy"><span>MADE BY NEXORA</span></div>
   <div class="story-copy"><div class="section-label"><span>03</span><i></i><span>OUR STORY</span></div><h2>Designed with<br><em>intention.</em></h2><p>Made by Nexora is a fashion edit built around the beauty of the Bangladeshi three-piece. We keep the silhouettes familiar, the details thoughtful and the feeling unmistakably yours.</p><a class="primary-btn dark" href="#social">Meet Nexora ${icon.arrow}</a><div class="story-stat"><strong>01</strong><span>design language<br>rooted in heritage</span></div></div>
 </section>

 <section class="values">
   <div><span>${icon.truck}</span><h3>Reliable delivery</h3><p>Across Bangladesh</p></div>
   <div><span>${icon.shield}</span><h3>Secure checkout</h3><p>Cash or online payment</p></div>
   <div><span>${icon.return}</span><h3>Easy returns</h3><p>Within 7 days</p></div>
   <div><span>${icon.chat}</span><h3>Real support</h3><p>We're here when you need us</p></div>
 </section>

 <section class="social-section" id="social">
   <div class="social-main"><div class="section-label"><span>04</span><i></i><span>FOLLOW THE EDIT</span></div><h2>See what’s<br><em>next.</em></h2><p>New drops, styling notes and everyday inspiration from Made by Nexora.</p><div class="social-links"><a href="${SOCIAL.instagram}" target="_blank" rel="noreferrer">${icon.instagram}<span>Instagram</span></a><a href="${SOCIAL.facebook}" target="_blank" rel="noreferrer">${icon.facebook}<span>Facebook</span></a><a href="${SOCIAL.tiktok}" target="_blank" rel="noreferrer">${icon.tiktok}<span>TikTok</span></a></div></div>
   <div class="social-card"><span>@MADEBYNEXORA</span><b>Quiet luxury,<br>made personal.</b><a href="#shop">Shop the latest ${icon.arrow}</a></div>
 </section>
 </main>

 <footer class="footer-new"><div class="footer-top"><a class="brand light" href="#home"><span>MADE BY</span><b>NEXORA</b></a><div class="footer-links"><a href="#home">Home</a><a href="#shop">Shop</a><a href="#collection">Collections</a><a href="#story">Our Story</a><a href="#social">Journal</a></div><button class="footer-chat" onclick="agent()">Chat with an agent ${icon.arrow}</button></div><div class="footer-bottom"><span>© 2026 Made by Nexora</span><span>THREE PIECE · REDEFINED</span><span>Bangladesh</span></div></footer>
 <button class="floating-chat" onclick="agent()" aria-label="Chat">${icon.chat}<b></b></button>
 `;
 document.querySelectorAll("[data-wish]").forEach(b=>b.onclick=()=>{const id=+b.dataset.wish;wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];localStorage.mbnWish=JSON.stringify(wish);render()});
 document.querySelectorAll("[data-order]").forEach(b=>b.onclick=()=>openOrder(+b.dataset.order));
}

window.toggleMenu=()=>document.querySelector("#mobileMenu").classList.toggle("open");
window.openSearch=()=>document.body.insertAdjacentHTML("beforeend",'<div class="overlay" onclick="this.remove()"><div class="search-panel" onclick="event.stopPropagation()"><button class="close" onclick="this.closest(\'.overlay\').remove()">×</button><p>SEARCH THE EDIT</p><h2>Find your next set.</h2><input autofocus placeholder="Try “Noor Garden”" oninput="filterSearch(this.value)"><div id="searchResults"></div></div></div>');
window.filterSearch=q=>{const r=document.querySelector("#searchResults");if(!r)return;const found=PRODUCTS.filter(p=>(p.name+" "+p.tone).toLowerCase().includes(q.toLowerCase()));r.innerHTML=q?found.map(p=>'<button onclick="document.querySelector(\'.overlay\').remove();document.querySelector(\'#shop\').scrollIntoView({behavior:\'smooth\'})"><img src="'+p.img+'"><span>'+p.name+'<small>'+money(p.price)+'</small></span></button>').join(""):'<small class="search-hint">Search by name, colour or mood.</small>'};
window.openBag=()=>document.body.insertAdjacentHTML("beforeend",'<div class="overlay" onclick="this.remove()"><div class="side-panel" onclick="event.stopPropagation()"><button class="close" onclick="this.closest(\'.overlay\').remove()">×</button><p>YOUR BAG</p><h2>Saved for later.</h2><div class="bag-list">'+(bag.length?bag.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return '<div><img src="'+p.img+'"><span>'+p.name+'<small>'+money(p.price)+'</small></span></div>'}).join(""):'<small>Your bag is empty. Add a set to begin.</small>')+'</div><a class="primary-btn dark" href="#shop" onclick="this.closest(\'.overlay\').remove()">Continue shopping '+icon.arrow+'</a></div></div>');
window.openOrder=id=>{const p=PRODUCTS.find(x=>x.id===id);document.body.insertAdjacentHTML("beforeend",'<div class="overlay" onclick="this.remove()"><div class="order-panel" onclick="event.stopPropagation()"><button class="close" onclick="this.closest(\'.overlay\').remove()">×</button><p>ORDER REQUEST</p><h2>'+p.name+'</h2><small>'+money(p.price)+' · Three Piece</small><form onsubmit="event.preventDefault();this.closest(\'.overlay\').remove();alert(\'Thanks! Your demo order request has been received.\')"><input required placeholder="Full name"><input required placeholder="Phone / WhatsApp"><textarea required placeholder="Delivery address"></textarea><select><option>Size — S</option><option>Size — M</option><option>Size — L</option><option>Size — XL</option></select><button class="primary-btn dark">Send order request '+icon.arrow+'</button></form></div></div>')};
window.agent=()=>document.body.insertAdjacentHTML("beforeend",'<div class="overlay" onclick="this.remove()"><div class="order-panel" onclick="event.stopPropagation()"><button class="close" onclick="this.closest(\'.overlay\').remove()">×</button><p>NEXORA CONCIERGE</p><h2>How can we help?</h2><form onsubmit="event.preventDefault();this.closest(\'.overlay\').remove();alert(\'Thanks! We will get back to you soon.\')"><input required placeholder="Your name"><input required placeholder="Phone / WhatsApp"><textarea required placeholder="How can we help?"></textarea><button class="primary-btn dark">Message us '+icon.arrow+'</button></form></div></div>');
render();
