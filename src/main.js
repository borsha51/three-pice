const PRODUCTS=[
  ['Noor Garden',2890,'Lavender','https://mcprod.aarong.com/media/catalog/product/1/4/1420000189286.jpg'],
  ['Meher Olive',2490,'Deep Teal','https://static-01.daraz.com.bd/p/2ee8b860c240a4d742e0c5263a1e09f0.png'],
  ['Ayla Rose',2690,'Royal Blue','https://nilima.com.bd/cdn/shop/files/IMS-6650-_1.jpg?v=1741688420'],
  ['Zara Noir',3790,'Midnight','https://img.drz.lazcdn.com/static/bd/p/5a6337085f7891372b8a6d95ca1b8dc5.jpgstyle%3Dwidth%3A1600px%3Bheight%3A2400px%3Bdisplay%3Ainline%3Bvertical-align%3Amiddle_960x960q80.jpg_.webp'],
  ['Raina Sand',2290,'Sand','https://mcprod.aarong.com/media/catalog/product/1/4/1420000189286.jpg'],
  ['Lina Pearl',3490,'Pearl','https://static-01.daraz.com.bd/p/2ee8b860c240a4d742e0c5263a1e09f0.png'],
  ['Hana Blue',2590,'Blue','https://nilima.com.bd/cdn/shop/files/IMS-6650-_1.jpg?v=1741688420'],
  ['Safa Plum',3890,'Plum','https://img.drz.lazcdn.com/static/bd/p/5a6337085f7891372b8a6d95ca1b8dc5.jpgstyle%3Dwidth%3A1600px%3Bheight%3A2400px%3Bdisplay%3Ainline%3Bvertical-align%3Amiddle_960x960q80.jpg_.webp']
].map((x,i)=>({id:i+1,name:x[0],price:x[1],tone:x[2],img:x[3],cat:'Three Piece'}));

const SOCIAL={
 instagram:'https://www.instagram.com/',
 facebook:'https://www.facebook.com/',
 tiktok:'https://www.tiktok.com/'
};

const ICON={
 search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 5 5"></path></svg>',
 heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"></path></svg>',
 bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5h14l-1 12H6l-1-12Z"></path><path d="M9 9V6a3 3 0 0 1 6 0v3"></path></svg>',
 instagram:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.4" cy="6.7" r="1"></circle></svg>',
 facebook:'<svg viewBox="0 0 24 24"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1C12.3 3.9 11 5.2 11 7.5V10H8.5v3H11v8"></path></svg>',
 tiktok:'<svg viewBox="0 0 24 24"><path d="M15 4c.4 2.3 1.7 3.8 4 4v3c-1.6 0-2.9-.4-4-1.1V15a5 5 0 1 1-4-4.9v3a2 2 0 1 0 1 1.9V4h3Z"></path></svg>',
 chat:'<svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.4 8.6 8.6 0 0 1-3.1-.6L4 20l1.7-3.4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"></path><path d="M8.5 12h.1M12 12h.1M15.5 12h.1"></path></svg>',
 truck:'<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle></svg>',
 shield:'<svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
 return:'<svg viewBox="0 0 24 24"><path d="M4 7h9a6 6 0 1 1-5.7 8"></path><path d="M4 7V3M4 7l4-2"></path></svg>'
};

let cart=JSON.parse(localStorage.mbnCart||'[]'), wish=JSON.parse(localStorage.mbnWish||'[]'), query='';
const app=document.querySelector('#app');
const money=n=>'৳'+n.toLocaleString('en-BD');
const save=()=>{localStorage.mbnCart=JSON.stringify(cart);localStorage.mbnWish=JSON.stringify(wish)};

function img(p,cls=''){
 return '<img class="'+cls+'" src="'+p.img+'" alt="'+p.name+' Three Piece set" loading="lazy" onerror="this.parentElement.classList.add(\'fallback\');this.remove()">';
}
function card(p){
 return '<article class="product" data-id="'+p.id+'"><div class="productMedia">'+img(p)+'<span class="tag">Three Piece</span><button class="wish" data-wish="'+p.id+'" aria-label="Save '+p.name+'">'+(wish.includes(p.id)?'♥':'♡')+'</button></div><div class="productInfo"><div><h3>'+p.name+'</h3><p>Three Piece · '+p.tone+'</p></div><strong>'+money(p.price)+'</strong></div><button class="orderBtn" data-order="'+p.id+'">Order this set <span>→</span></button></article>';
}
function render(){
 if(location.hash==='#/nexora-admin'){
  app.innerHTML='<div class="admin"><a class="brand" href="#/">MADE <small>BY NEXORA</small></a><p class="eyebrow">PRIVATE PANEL</p><h1>Store overview.</h1><div class="adminGrid"><div>Products<strong>'+PRODUCTS.length+'</strong></div><div>Saved pieces<strong>'+wish.length+'</strong></div><div>Bag items<strong>'+cart.length+'</strong></div></div><p>Frontend demo. Connect Turso/backend later for real orders and administration.</p></div>';return;
 }
 const list=PRODUCTS.filter(p=>!query||p.name.toLowerCase().includes(query.toLowerCase())||p.tone.toLowerCase().includes(query.toLowerCase()));
 app.innerHTML=
 '<div class="announcement">Premium Three Piece Collection &nbsp;·&nbsp; Elegant &nbsp;/&nbsp; Comfortable &nbsp;/&nbsp; Timeless</div>'+
 '<header class="nav"><a class="brand" href="#/">MADE <small>BY NEXORA</small></a><nav><a href="#home">Home</a><a href="#shop">Shop</a><a class="active" href="#collections">Three Piece</a><a href="#about">About Store</a><a href="#social">Social</a></nav><div class="navActions"><button id="search" aria-label="Search">'+ICON.search+'</button><button id="saved" aria-label="Wishlist">'+ICON.heart+'<i>'+wish.length+'</i></button><button id="bag" aria-label="Bag">'+ICON.bag+'<i>'+cart.length+'</i></button><button class="agentTop" id="agentTop">'+ICON.chat+'<span>Chat with an agent</span></button></div></header>'+
 '<main id="home">'+
 '<section class="hero"><div class="heroCopy"><p class="eyebrow">NEW COLLECTION</p><h1>Three Piece.<br><em>Redefined.</em></h1><p>Timeless designs, premium fabrics,<br>made for your everyday elegance.</p><a class="primary" href="#shop">Shop Three Piece <span>→</span></a></div><div class="heroPhoto"><div class="heroCaption">TRADITION<br>MEETS<br>MODERN<br>STYLE</div></div></section>'+
 '<section class="collection" id="collections"><div><p class="eyebrow">OUR COLLECTION</p><h2>Three Piece</h2><p>Explore our exclusive collection of premium three-piece sets, designed for elegance, comfort and everyday grace.</p><a class="textLink" href="#shop">Shop All <span>→</span></a></div><div class="pieces"><div><span class="pieceIcon kameez"></span><b>Kameez</b><small>(Top)</small></div><strong>+</strong><div><span class="pieceIcon trouser"></span><b>Salwar / Trouser</b><small>(Bottom)</small></div><strong>+</strong><div><span class="pieceIcon dupatta"></span><b>Dupatta / Orna</b><small>(Scarf)</small></div></div></section>'+
 '<section class="shop" id="shop"><div class="shopHead"><div><p class="eyebrow">FEATURED COLLECTION</p><h2>Our Best Selling Three Piece</h2></div><a class="textLink" href="#collections">View All <span>→</span></a></div><div class="products">'+list.slice(0,4).map(card).join('')+'</div></section>'+
 '<section class="about" id="about"><div class="aboutPhoto"></div><div class="aboutCopy"><p class="eyebrow">ABOUT OUR STORE</p><h2>Crafted for<br>Modern Women</h2><p>Made by Nexora is a premium fashion brand, offering elegant and comfortable three-piece collections for every occasion. We believe in quality, simplicity, and timeless style.</p><a class="textLink" href="#shop">Learn More <span>→</span></a></div><div class="follow" id="social"><p class="eyebrow">SOCIAL MEDIA</p><h3>Stay connected for new arrivals, style inspiration and more.</h3><div class="socialIcons"><a href="'+SOCIAL.instagram+'" target="_blank" rel="noreferrer">'+ICON.instagram+'<span>Instagram</span></a><a href="'+SOCIAL.facebook+'" target="_blank" rel="noreferrer">'+ICON.facebook+'<span>Facebook</span></a><a href="'+SOCIAL.tiktok+'" target="_blank" rel="noreferrer">'+ICON.tiktok+'<span>TikTok</span></a></div><p>@madebynexora</p></div></section>'+
 '<section class="services"><div>'+ICON.truck+'<span><b>Fast & Reliable Delivery</b><small>Across Bangladesh</small></span></div><div>'+ICON.shield+'<span><b>Secure Payments</b><small>Cash on Delivery / Online</small></span></div><div>'+ICON.return+'<span><b>Easy Return Policy</b><small>Within 7 Days</small></span></div><div>'+ICON.chat+'<span><b>24/7 Customer Support</b><small>We’re here to help</small></span></div></section>'+
 '</main>'+
 '<footer><a class="brand" href="#/">MADE <small>BY NEXORA</small></a><div class="footNav"><a href="#home">Home</a><a href="#shop">Shop</a><a href="#collections">Three Piece</a><a href="#about">About Store</a><a href="#social">Social</a></div><div class="footSocial"><a href="'+SOCIAL.instagram+'" target="_blank" rel="noreferrer">'+ICON.instagram+'</a><a href="'+SOCIAL.facebook+'" target="_blank" rel="noreferrer">'+ICON.facebook+'</a><a href="'+SOCIAL.tiktok+'" target="_blank" rel="noreferrer">'+ICON.tiktok+'</a><span></span><button id="agentFoot">'+ICON.chat+' Chat with an agent</button></div><p>© 2026 Made by Nexora. All rights reserved.</p></footer>'+
 '<button class="agentFloat" id="agentFloat" aria-label="Chat with an agent">'+ICON.chat+'<b></b></button>';
 bind();
}
function bind(){
 document.querySelector('#search').onclick=()=>{const q=prompt('Search Three Piece',query);if(q!==null){query=q;render();location.hash='#shop'}};
 document.querySelector('#saved').onclick=()=>drawer('Saved pieces');
 document.querySelector('#bag').onclick=()=>drawer('Your bag');
 document.querySelector('#agentTop')?.addEventListener('click',agent);
 document.querySelector('#agentFoot')?.addEventListener('click',agent);
 document.querySelector('#agentFloat')?.addEventListener('click',agent);
 document.querySelectorAll('.product').forEach(x=>x.onclick=e=>{if(!e.target.closest('.wish,.orderBtn'))modal(PRODUCTS.find(p=>p.id==x.dataset.id))});
 document.querySelectorAll('[data-wish]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=+b.dataset.wish;wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];save();render()});
 document.querySelectorAll('[data-order]').forEach(b=>b.onclick=e=>{e.stopPropagation();orderForm(PRODUCTS.find(p=>p.id==b.dataset.order))});
}
function modal(p){
 document.body.insertAdjacentHTML('beforeend','<div class="overlay" id="modal"><div class="modal productModal"><div class="modalPhoto">'+img(p)+'</div><div class="modalCopy"><button class="close" id="close">Close ×</button><p class="eyebrow">THREE PIECE · '+p.tone+'</p><h2>'+p.name+'</h2><p>A refined three-piece set with a graceful matching dupatta, comfortable trouser and polished kameez.</p><h3>'+money(p.price)+'</h3><div class="modalBtns"><button class="secondary" id="addBag">Add to bag</button><button class="primary" id="orderNow">Order now →</button></div></div></div></div>');
 document.querySelector('#close').onclick=()=>document.querySelector('#modal').remove();
 document.querySelector('#addBag').onclick=()=>{cart.push(p.id);save();document.querySelector('#modal').remove();render()};
 document.querySelector('#orderNow').onclick=()=>{document.querySelector('#modal').remove();orderForm(p)};
}
function orderForm(p){
 document.body.insertAdjacentHTML('beforeend','<div class="overlay" id="order"><div class="modal single"><div class="modalCopy"><button class="close" id="orderClose">Close ×</button><p class="eyebrow">ORDER THREE PIECE</p><h2>'+p.name+'</h2><p>'+money(p.price)+' · Order request</p><form id="orderForm"><input required placeholder="Full name"><input required type="tel" placeholder="Phone number"><input required placeholder="Delivery address"><select><option>Size: S</option><option>Size: M</option><option>Size: L</option><option>Size: XL</option></select><button class="primary">Place order request →</button></form></div></div></div>');
 document.querySelector('#orderClose').onclick=()=>document.querySelector('#order').remove();
 document.querySelector('#orderForm').onsubmit=e=>{e.preventDefault();alert('Order request received. Connect backend/Turso to process real orders.');document.querySelector('#order').remove()};
}
function agent(){
 document.body.insertAdjacentHTML('beforeend','<div class="overlay" id="agentModal"><div class="modal single"><div class="modalCopy"><button class="close" id="agentClose">Close ×</button><p class="eyebrow">NEXORA FASHION AGENT</p><h2>How can we help?</h2><p>Ask about size, fabric, delivery, availability or your order.</p><form id="agentForm"><input required placeholder="Your name"><input required type="tel" placeholder="Phone / WhatsApp"><textarea required placeholder="How can we help?"></textarea><button class="primary">Send to agent →</button></form></div></div></div>');
 document.querySelector('#agentClose').onclick=()=>document.querySelector('#agentModal').remove();
 document.querySelector('#agentForm').onsubmit=e=>{e.preventDefault();alert('Message ready for the Nexora agent. Connect backend/Turso to receive it.');document.querySelector('#agentModal').remove()};
}
function drawer(title){
 const items=title==='Saved pieces'?PRODUCTS.filter(p=>wish.includes(p.id)):PRODUCTS.filter(p=>cart.includes(p.id));
 document.body.insertAdjacentHTML('beforeend','<div class="drawerBg" id="db"><aside class="drawer"><div class="drawerHead"><h2>'+title+'</h2><button class="close" id="dc">Close ×</button></div>'+(items.length?items.map(p=>'<div class="drawerItem"><img src="'+p.img+'" alt="'+p.name+'"><div><b>'+p.name+'</b><small>'+money(p.price)+'</small></div><button class="secondary" data-drawer-order="'+p.id+'">Order</button></div>').join(''):'<p>Nothing here yet.</p>')+'</aside></div>');
 document.querySelector('#dc').onclick=()=>document.querySelector('#db').remove();
 document.querySelectorAll('[data-drawer-order]').forEach(b=>b.onclick=()=>{document.querySelector('#db').remove();orderForm(PRODUCTS.find(p=>p.id==b.dataset.drawerOrder))});
}
window.onhashchange=render;
render();
