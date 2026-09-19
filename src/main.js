const P=[
['Noor Garden','Three Piece',2890,'Ivory','https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=85&auto=format&fit=crop'],
['Meher Olive','Three Piece',2490,'Olive','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=85&auto=format&fit=crop'],
['Ayla Rose','Three Piece',2690,'Rose','https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1000&q=85&auto=format&fit=crop'],
['Zara Noir','Three Piece',3790,'Noir','https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&q=85&auto=format&fit=crop'],
['Raina Sand','Three Piece',2290,'Sand','https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1000&q=85&auto=format&fit=crop'],
['Lina Pearl','Three Piece',3490,'Pearl','https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1000&q=85&auto=format&fit=crop'],
['Hana Blue','Three Piece',2590,'Blue','https://images.unsplash.com/photo-1512353087810-25dfcd100962?w=1000&q=85&auto=format&fit=crop'],
['Safa Plum','Three Piece',3890,'Plum','https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=85&auto=format&fit=crop']
].map((x,i)=>({id:i+1,name:x[0],cat:x[1],price:x[2],tone:x[3],img:x[4]}));

const SOCIAL={
  instagram:'https://www.instagram.com/',
  facebook:'https://www.facebook.com/',
  tiktok:'https://www.tiktok.com/'
};

let cart=JSON.parse(localStorage.mbnCart||'[]'),
    wish=JSON.parse(localStorage.mbnWish||'[]'),
    filter='All',
    query='';

const app=document.querySelector('#app');
const money=n=>'৳'+n.toLocaleString('en-BD');

function save(){
  localStorage.mbnCart=JSON.stringify(cart);
  localStorage.mbnWish=JSON.stringify(wish);
}

function imageTag(p, extra=''){
  return '<img loading="lazy" src="'+p.img+'" alt="'+p.name+' three-piece fashion set" '+extra+' onerror="this.style.display=\'none\';this.parentElement.classList.add(\'mediaFallback\')">';
}

function card(p){
  return '<article class="card" data-id="'+p.id+'">'+
    '<div class="media">'+imageTag(p)+
      '<span class="badge">Three Piece</span>'+
      '<button class="heart" data-wish="'+p.id+'" aria-label="Save '+p.name+'">'+(wish.includes(p.id)?'♥':'♡')+'</button>'+
    '</div>'+
    '<div class="copy"><div><small>Three Piece · '+p.tone+'</small><h3>'+p.name+'</h3></div><span class="price">'+money(p.price)+'</span></div>'+
    '<button class="btn dark orderBtn" data-order="'+p.id+'">Order this set →</button>'+
  '</article>';
}

function render(){
  if(location.hash==='#/nexora-admin'){
    app.innerHTML='<div class="admin"><a class="logo" href="#/">MADE <span>BY NEXORA</span></a><p class="eyebrow">PRIVATE DEMO PANEL</p><h1>Store overview.</h1><div class="adminGrid"><div class="stat">Products<strong>'+P.length+'</strong></div><div class="stat">Saved pieces<strong>'+wish.length+'</strong></div><div class="stat">Bag items<strong>'+cart.length+'</strong></div></div><p>This hidden frontend panel uses mock data. Connect a secure backend/Turso layer later for real orders and administration.</p></div>';
    return;
  }

  const list=P.filter(p=>(filter==='All'||p.cat===filter)&&(!query||(`${p.name} ${p.cat} ${p.tone}`).toLowerCase().includes(query.toLowerCase())));

  app.innerHTML=
  '<div class="top">COMPLIMENTARY DELIVERY ON ORDERS OVER ৳5,000 · MADE WITH INTENTION IN BANGLADESH</div>'+
  '<header class="nav">'+
    '<a class="logo" href="#/">MADE <span>BY NEXORA</span></a>'+
    '<nav class="links"><a href="#shop">Shop</a><a href="#collections">Three Piece</a><a href="#about">About Store</a><a href="#social">Social</a></nav>'+
    '<div class="actions">'+
      '<button class="icon" id="search" aria-label="Search">⌕</button>'+
      '<button class="icon" id="saved" aria-label="Saved pieces">♡ <span>'+wish.length+'</span></button>'+
      '<button class="icon bagAction" id="bag" aria-label="Shopping bag">Bag <span>'+cart.length+'</span></button>'+
    '</div>'+
  '</header>'+
  '<main>'+
    '<section class="hero">'+
      '<div class="heroText"><p class="eyebrow">THE THREE-PIECE EDIT · 2026</p><h1>Quietly <em>distinct.</em><br>Made to be worn.</h1><p class="lead">Premium three-piece sets designed for everyday elegance, celebrations and effortless South Asian style.</p><p><a class="btn dark" href="#shop">Shop Three Piece →</a></p></div>'+
      '<div class="heroImg" role="img" aria-label="Nexora fashion editorial"></div>'+
    '</section>'+
    '<section class="section" id="collections"><p class="eyebrow">CATEGORY</p><h2>Three Piece.</h2><p class="lead">One signature category: complete three-piece sets, edited for a refined everyday wardrobe.</p><div class="cats"><button class="cat" data-cat="Three Piece"><span>01</span><b>Three Piece</b><small>kameez · trouser · dupatta</small></button></div></section>'+
    '<section class="section" id="shop"><div class="sectionHead"><div><p class="eyebrow">THE EDIT · '+P.length+' LOOKS</p><h2>Three pieces, one complete look.</h2></div><div class="tools"><input class="search" id="q" aria-label="Search products" placeholder="Search Three Piece" value="'+query+'"></div></div><div class="tools filterTools"><button class="btn '+(filter==='All'?'dark':'')+'" data-cat="All">All</button><button class="btn '+(filter==='Three Piece'?'dark':'')+'" data-cat="Three Piece">Three Piece</button></div><div class="grid">'+list.map(card).join('')+'</div></section>'+
    '<section class="story" id="about"><div class="storyImg" role="img" aria-label="Made by Nexora editorial story"></div><div class="storyText"><p class="eyebrow">ABOUT STORE</p><h2>Less noise.<br>More you.</h2><p>Made by Nexora is a Bangladesh-focused fashion concept built around coordinated three-piece dressing. We keep the edit small, the silhouettes wearable and the visual language quiet—so the outfit stays at the center.</p><div class="aboutGrid"><div><b>01</b><span>Curated sets</span></div><div><b>02</b><span>Bangladesh delivery</span></div><div><b>03</b><span>Agent support</span></div></div><a class="btn dark" href="#shop">Explore the edit →</a></div></section>'+
    '<section class="section socialSection" id="social"><div class="sectionHead"><div><p class="eyebrow">SOCIAL MEDIA</p><h2>Stay in the edit.</h2><p class="lead">Follow Made by Nexora for new drops, styling notes and collection updates.</p></div></div><div class="socialGrid">'+
      '<a class="socialCard" href="'+SOCIAL.instagram+'" target="_blank" rel="noreferrer"><span>01</span><strong>Instagram</strong><small>Visual stories & new drops ↗</small></a>'+
      '<a class="socialCard" href="'+SOCIAL.facebook+'" target="_blank" rel="noreferrer"><span>02</span><strong>Facebook</strong><small>Updates & announcements ↗</small></a>'+
      '<a class="socialCard" href="'+SOCIAL.tiktok+'" target="_blank" rel="noreferrer"><span>03</span><strong>TikTok</strong><small>Style moments & short edits ↗</small></a>'+
    '</div></section>'+
    '<section class="section newsletter" id="contact"><div><p class="eyebrow">CUSTOMER SUPPORT</p><h2>Need help choosing?</h2><p class="lead">Talk to our fashion agent for size, fabric, availability and order questions.</p></div><form id="news"><input required type="email" placeholder="Your email address" aria-label="Your email address"><button class="btn dark">Subscribe</button></form></section>'+
  '</main>'+
  '<footer class="footer"><div><b>© 2026 MADE BY NEXORA</b><div class="social"><a href="'+SOCIAL.instagram+'" target="_blank" rel="noreferrer">Instagram</a><a href="'+SOCIAL.facebook+'" target="_blank" rel="noreferrer">Facebook</a><a href="'+SOCIAL.tiktok+'" target="_blank" rel="noreferrer">TikTok</a></div></div><div>Three Piece · Bangladesh · Premium demo · Turso ready later</div></footer>'+
  '<button class="agentFloat" id="agent" aria-label="Chat with a Nexora fashion agent"><span class="agentIcon">✦</span><span class="agentLabel">Chat with an agent</span></button>';

  bind();
}

function bind(){
  document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{
    filter=b.dataset.cat;
    location.hash='#shop';
    render();
    setTimeout(()=>document.querySelector('#shop')?.scrollIntoView({behavior:'smooth'}),0);
  });

  document.querySelector('#q')?.addEventListener('input',e=>{
    query=e.target.value;
    render();
    const input=document.querySelector('#q');
    if(input){input.focus();input.setSelectionRange(query.length,query.length);}
  });

  document.querySelector('#bag')?.addEventListener('click',()=>drawer('Your bag'));
  document.querySelector('#saved')?.addEventListener('click',()=>drawer('Saved pieces'));

  document.querySelector('#search')?.addEventListener('click',()=>{
    const q=prompt('Search Three Piece',query);
    if(q!==null){query=q;location.hash='#shop';render();}
  });

  document.querySelectorAll('.card').forEach(c=>c.onclick=e=>{
    if(e.target.closest('.heart,.orderBtn'))return;
    modal(P.find(p=>p.id==c.dataset.id));
  });

  document.querySelectorAll('[data-wish]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const id=+b.dataset.wish;
    wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];
    save();render();
  });

  document.querySelectorAll('[data-order]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();orderForm(P.find(p=>p.id==b.dataset.order));
  });

  document.querySelector('#agent')?.addEventListener('click',agent);

  document.querySelector('#news')?.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you — you are on the Nexora list.');
    e.target.reset();
  });
}

function modal(p){
  document.body.insertAdjacentHTML('beforeend',
  '<div class="modal" id="modal"><div class="modalBox"><div class="modalMedia">'+imageTag(p)+'</div><div class="modalCopy"><button class="close" id="close">Close ×</button><p class="eyebrow">Three Piece · '+p.tone+'</p><h2>'+p.name+'</h2><p class="lead">A refined three-piece set with an easy silhouette, considered texture and a graceful matching dupatta.</p><h3>'+money(p.price)+'</h3><div class="tools"><button class="btn" id="addBag">Add to bag</button><button class="btn dark" id="orderNow">Order now →</button></div></div></div></div>');
  document.querySelector('#close').onclick=()=>document.querySelector('#modal').remove();
  document.querySelector('#addBag').onclick=()=>{cart.push(p.id);save();document.querySelector('#modal').remove();render();alert(p.name+' added to your bag.')};
  document.querySelector('#orderNow').onclick=()=>{document.querySelector('#modal').remove();orderForm(p)};
}

function orderForm(p){
  document.body.insertAdjacentHTML('beforeend',
  '<div class="modal" id="order"><div class="modalBox single"><div class="modalCopy"><button class="close" id="orderClose">Close ×</button><p class="eyebrow">ORDER THREE PIECE</p><h2>'+p.name+'</h2><p class="lead">'+money(p.price)+' · Demo order request</p><form id="orderForm"><input required name="name" placeholder="Full name"><input required name="phone" placeholder="Phone number"><input required name="address" placeholder="Delivery address"><select name="size"><option>Size: S</option><option>Size: M</option><option>Size: L</option><option>Size: XL</option></select><button class="btn dark" type="submit">Place order request →</button></form></div></div></div>');
  document.querySelector('#orderClose').onclick=()=>document.querySelector('#order').remove();
  document.querySelector('#orderForm').onsubmit=e=>{
    e.preventDefault();
    const f=new FormData(e.target);
    alert('Order request received for '+p.name+'. Customer: '+f.get('name')+'. Connect backend/Turso to save and process real orders.');
    document.querySelector('#order').remove();
  };
}

function agent(){
  document.body.insertAdjacentHTML('beforeend',
  '<div class="modal" id="agentModal"><div class="modalBox single"><div class="modalCopy"><button class="close" id="agentClose">Close ×</button><p class="eyebrow">NEXORA FASHION AGENT</p><h2>How can we help?</h2><p class="lead">Ask about size, fabric, delivery, availability or your order.</p><form id="agentForm"><input required placeholder="Your name"><input required type="tel" placeholder="Phone / WhatsApp"><textarea required placeholder="How can we help?"></textarea><button class="btn dark">Send to agent →</button></form></div></div></div>');
  document.querySelector('#agentClose').onclick=()=>document.querySelector('#agentModal').remove();
  document.querySelector('#agentForm').onsubmit=e=>{
    e.preventDefault();
    alert('Message ready for the Nexora agent. Connect backend/Turso to receive messages in the admin panel.');
    document.querySelector('#agentModal').remove();
  };
}

function drawer(title){
  const items=title==='Saved pieces'?P.filter(p=>wish.includes(p.id)):P.filter(p=>cart.includes(p.id));
  document.body.insertAdjacentHTML('beforeend',
  '<div class="drawerBg" id="db"><aside class="drawer"><div class="drawerHead"><h2>'+title+'</h2><button class="close" id="dc">Close ×</button></div>'+
  (items.length?items.map(p=>'<div class="cartItem"><img src="'+p.img+'" alt="'+p.name+'"><div><h3>'+p.name+'</h3><small>'+money(p.price)+'</small></div><button class="btn dark" data-drawer-order="'+p.id+'">Order</button></div>').join(''):'<p class="lead">Nothing here yet.</p>')+
  '</aside></div>');
  document.querySelector('#dc').onclick=()=>document.querySelector('#db').remove();
  document.querySelectorAll('[data-drawer-order]').forEach(b=>b.onclick=()=>{
    document.querySelector('#db').remove();
    orderForm(P.find(p=>p.id==b.dataset.drawerOrder));
  });
}

window.onhashchange=render;
render();
