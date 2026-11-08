const IMG=k=>'assets/'+k+'_cut.png';
const $=s=>document.getElementById(s),clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
/* Tong / tun */
const root=document.documentElement;let saved=null;try{saved=localStorage.getItem('rx')}catch(e){}
const h=+new Intl.DateTimeFormat('en',{hour:'numeric',hour12:false,timeZone:'Asia/Tashkent'}).format(new Date())%24;
const setT=t=>{root.dataset.theme=t;try{localStorage.setItem('rx',t)}catch(e){}};
root.dataset.theme=saved||((h>=6&&h<19)?'day':'night');
$('tg').onclick=()=>setT(root.dataset.theme=='day'?'night':'day');
/* Toshkent vaqti */
const fm=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:'Asia/Tashkent'});
setInterval(()=>$('clock').textContent=fm.format(new Date()),1000);$('clock').textContent=fm.format(new Date());
/* Kolleksiya */
const M=[
{k:'blue',w:"KO'K",c:'#123a7a',n:'Datejust 36 · Ko\'k',s:['Oystersteel va oq oltin','Yivli ramka','Jubilee bilakuzuk','100 m suvga chidamli']},
{k:'black',w:'QORA',c:'#0d0d0d',n:'Datejust 41 · Qora',s:['41 mm korpus','Oq oltin yivli ramka','Jubilee bilakuzuk','Perpetual avtomat mexanizm']},
{k:'green',w:'YASHIL',c:'#0e6b43',n:'Datejust 36 · Yashil',s:['36 mm korpus','Yivli ramka','Jubilee bilakuzuk','Sana oynasi (Cyclops)']},
{k:'burgundy',w:'BORDO',c:'#7a1431',n:'Day-Date 40 · Bordo',s:['Oq oltin yivli ramka','President bilakuzugi','Kun va sana oynalari','Perpetual avtomat mexanizm']}];
let cur=0;
M.forEach((m,i)=>{const im=new Image();im.src=IMG(m.k);im.alt='Rolex '+m.n;$('st').appendChild(im);
const b=document.createElement('button');b.style.background=m.c;b.setAttribute('aria-label',m.n);b.onclick=()=>pick(i);$('sw').appendChild(b)});
function pick(i){cur=i;[...$('st').children].forEach((e,j)=>e.classList.toggle('on',j==i));[...$('sw').children].forEach((e,j)=>e.classList.toggle('on',j==i));
$('wd').style.opacity=0;setTimeout(()=>{$('wd').textContent=M[i].w;$('wd').style.opacity=1},250);
$('nm').textContent=M[i].n;$('sp').innerHTML=M[i].s.map(x=>'<span>'+x+'</span>').join('')}
pick(0);setInterval(()=>{if(!pickLock)pick((cur+1)%M.length)},5000);let pickLock=false;
$('col').addEventListener('pointerdown',()=>pickLock=true);
/* Video yozuvlari */
const C=[[.2,'Qismlar','Har bir detal alohida yasaladi va bir butunga aylanadi.'],[.3,'Toj','Rolexning timsoli: besh uchli toj.'],[.55,'Siferblat','Nur ostida tovlanuvchi nozik tolali yuza.'],[.7,'Ramka','Yivli ramka yorug\'likni qirralarida o\'ynatadi.'],[1.01,'Yaxlit asar','Sky-Dweller: yillik kalendar va ikkinchi vaqt mintaqasi.']];
let ci=-1,vt=0;const v=$('v');
/* Scroll */
function tick(){
 const H=innerHeight,y=scrollY;
 const hp=clamp(y/(H*.3+H*.0001*0+H));
 $('g1').style.transform=`translateY(${y*.35}px) scale(${1+hp*.25})`;
 $('fr').style.transform=`scale(${1+hp*.12}) translateY(${-hp*30}px)`;
 $('fr').firstElementChild.style.transform=`scale(${1+hp*.1})`;
 const s=$('story'),sr=s.getBoundingClientRect(),p=clamp(-sr.top/(s.offsetHeight-H));
 vt+=(p-vt)*.18;if(v.duration&&Math.abs(v.currentTime-vt*v.duration)>.02)v.currentTime=vt*v.duration*.999;
 $('pb').style.height=p*100+'%';
 const idx=C.findIndex(c=>p<c[0]);
 if(idx!=ci){ci=idx;const t=$('tx');t.classList.add('sw');setTimeout(()=>{$('th').textContent=C[idx][1];$('tp').textContent=C[idx][2];t.classList.remove('sw')},300)}
 const mr=$('mi').parentElement.getBoundingClientRect(),mp=clamp((H-mr.top)/(H+mr.height));
 $('mi').style.transform=`translateY(${-(mp*16)}%) scale(${1.15-mp*.1})`;
 requestAnimationFrame(tick)}
requestAnimationFrame(tick);
new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.2}).observe&&document.querySelectorAll('.rv').forEach(el=>new IntersectionObserver((e,o)=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.disconnect()}}),{threshold:.2}).observe(el));

const STORE={tel:'+998880007777',telTxt:'+998 88 000 77 77',addr:"Toshkent shahri, Amir Temur ko'chasi",hours:'Har kuni 10:00 – 20:00',tg:''};
const CLICK={service:'',merchant:'',rate:0};
const P=[{k:'blue',n:'Datejust 36',r:'126234',s:"Oystersteel va oq oltin · Ko'k siferblat · Jubilee",p:10100},
{k:'black',n:'Datejust 41',r:'126334',s:'Oystersteel va oq oltin · Qora siferblat · Jubilee',p:11650},
{k:'green',n:'Datejust 36',r:'126234',s:'Oystersteel va oq oltin · Yashil siferblat · Jubilee',p:10100},
{k:'burgundy',n:'Day-Date 40',r:'228239',s:'Oq oltin · Bordo siferblat · President',p:51600}];
const fmt=n=>'$'+n.toLocaleString('en-US'),M_=id=>$(id).classList.add('on'),X=id=>$(id).classList.remove('on');
function toast(t){const e=$('ts');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),3400)}
$('ctel').textContent=STORE.telTxt;$('ctel').href='tel:'+STORE.tel;$('cad').textContent=STORE.addr;$('cad').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(STORE.addr);$('chr').textContent=STORE.hours;
$('gr').innerHTML=P.map((p,i)=>`<article class="pc"><img src="${IMG(p.k)}" alt="Rolex ${p.n}"><h3>${p.n}</h3><small>Ref. ${p.r}</small><p>${p.s}</p><b>${fmt(p.p)}</b><button class="bt" onclick="buy(${i})">BUYURTMA BERISH</button></article>`).join('');
document.querySelectorAll('.md').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)X(m.id)}));
let U=null,tmp=null,cp=null,loc='';try{U=JSON.parse(localStorage.getItem('rxu'))}catch(e){}
const upd=()=>$('lg').textContent=U?U.name.split(' ')[0]:'Kirish';upd();
const ords=()=>{try{return JSON.parse(localStorage.getItem('rxo'))||[]}catch(e){return[]}};
function norm(v){v=v.trim();if(v.includes('@'))return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?v.toLowerCase():null;let d=v.replace(/\D/g,'');if(d.length==9)d='998'+d;return /^998\d{9}$/.test(d)?'+'+d:null}
function openAuth(){$('a1').style.display='';$('a2').style.display='none';M_('mAuth')}
$('lg').onclick=()=>{if(!U)return openAuth();$('pn').textContent=U.name+' · '+U.id;const o=ords().filter(x=>x.u==U.id);$('pl').innerHTML=o.length?o.map(x=>`<li><b>${x.no}</b> — Rolex ${x.n} · ${fmt(x.p)}<br><small>${x.reg} · ${x.pay} · ${x.date}</small></li>`).join(''):"<li>Hozircha buyurtmalar yo'q</li>";M_('mProf')};
$('pOut').onclick=()=>{U=null;try{localStorage.removeItem('rxu')}catch(e){}upd();X('mProf')};
$('aSend').onclick=()=>{const id=norm($('au').value),nm=$('an').value.trim();if(!nm||!id)return toast("Ism va to'g'ri telefon yoki Gmail kiriting");tmp={name:nm,id};$('a1').style.display='none';$('a2').style.display='';$('aTo').textContent=id};
$('aOk').onclick=()=>{if($('ac').value!='1234')return toast("Kod noto'g'ri (demo kod: 1234)");U=tmp;try{localStorage.setItem('rxu',JSON.stringify(U))}catch(e){}upd();X('mAuth');toast('Xush kelibsiz, '+U.name+'!');if(cp!=null)buy(cp)};
const RG={"Toshkent shahri":"Shu kunning o'zida yoki 1 kun ichida","Toshkent viloyati":'1 kun',"Samarqand":'1–2 kun',"Buxoro":'1–3 kun',"Andijon":'1–2 kun',"Farg'ona":'1–2 kun',"Namangan":'1–2 kun',"Qashqadaryo":'1–3 kun',"Surxondaryo":'2–3 kun',"Jizzax":'1–2 kun',"Sirdaryo":'1–2 kun',"Navoiy":'1–3 kun',"Xorazm":'2–3 kun',"Qoraqalpog'iston":'2–4 kun'};
$('or').innerHTML=Object.keys(RG).map(r=>`<option>${r}</option>`).join('');
const rgT=()=>$('ort').textContent='Yetkazish muddati: '+RG[$('or').value]+' (taxminiy)';$('or').onchange=rgT;rgT();
document.querySelectorAll('[name=dv]').forEach(r=>r.onchange=()=>$('od').style.display=document.querySelector('[name=dv]:checked').value=='Yetkazib berish'?'':'none');
function buy(i){if(!U){cp=i;return openAuth()}cp=i;const p=P[i];$('oi').src=IMG(p.k);$('on2').textContent='Rolex '+p.n;$('orf').textContent='Ref. '+p.r;$('op').textContent=fmt(p.p);$('on').value=U.name;$('ot').value=U.id.includes('@')?'':U.id;$('o1').style.display='';$('o2').style.display='none';M_('mOrd')}
$('oLoc').onclick=()=>navigator.geolocation?navigator.geolocation.getCurrentPosition(q=>{loc=q.coords.latitude.toFixed(5)+','+q.coords.longitude.toFixed(5);$('oLm').innerHTML='<a target="_blank" rel="noopener" href="https://www.google.com/maps?q='+loc+'">'+loc+'</a>'},()=>toast("Joylashuvni aniqlab bo'lmadi, manzilni yozing")):toast("Brauzer joylashuvni qo'llamaydi");
$('oGo').onclick=()=>{const p=P[cp],nm=$('on').value.trim(),tl=norm($('ot').value),dv=document.querySelector('[name=dv]:checked').value,pm=document.querySelector('[name=pm]:checked').value,rg=$('or').value,ad=$('oa').value.trim(),dl=dv=='Yetkazib berish';
 if(!nm||!tl||tl.includes('@')||(dl&&!ad&&!loc))return toast("Ism, telefon va manzilni (yoki joylashuvni) kiriting");
 const o={no:'RX-'+Date.now().toString().slice(-6),u:U.id,n:p.n+' ('+p.r+')',p:p.p,reg:dl?rg:"Do'kondan olish",pay:pm,date:new Date().toLocaleDateString('uz')};const L=ords();L.push(o);try{localStorage.setItem('rxo',JSON.stringify(L))}catch(e){}
 const msg=['Buyurtma '+o.no,'Soat: Rolex '+o.n,'Narx: '+fmt(p.p),'Ism: '+nm,'Telefon: '+tl,'Olish: '+dv+(dl?' · '+rg+' · '+ad+(loc?' · https://www.google.com/maps?q='+loc:''):' · '+STORE.addr),"To'lov: "+pm].join('\n'),enc=encodeURIComponent(msg);
 $('dNo').textContent='Buyurtma raqami: '+o.no;$('dTx').textContent="Operator siz bilan "+STORE.telTxt+" raqamidan bog'lanadi. Buyurtmani tezlashtirish uchun uni pastdagi tugma orqali yuborishingiz mumkin.";
 $('dWa').href='https://wa.me/'+STORE.tel.replace('+','')+'?text='+enc;$('dTg').href='https://t.me/share/url?url=%20&text='+enc;
 const c=$('dClick');c.style.display=pm=='Click'?'':'none';c.onclick=()=>{if(CLICK.service&&CLICK.merchant&&CLICK.rate)window.open('https://my.click.uz/services/pay?service_id='+CLICK.service+'&merchant_id='+CLICK.merchant+'&amount='+Math.round(p.p*CLICK.rate)+'&transaction_param='+o.no);else toast("Click hali ulanmagan: operator to'lov havolasini yuboradi")};
 $('o1').style.display='none';$('o2').style.display=''};
