/* Menú lateral con botón de tres líneas (compartido por index.html y plataforma.html) */
(function(){
let PLAT,ITEMS;
const mkItems=()=>PLAT?[
 ['Inicio','⌂',{href:'index.html'}],['Dashboard','◫',{tab:'dash'}],['Registro y hoja de vida','▤',{tab:'equipo'}],['Inventario','▦',{tab:'inv'}],['Mantenimiento e historial','⚙',{tab:'mant'}],['Checklist','☑',{tab:'chk'}],['Pruebas y resultados','▥',{tab:'pru'}],['Instrumentos y pruebas','◈',{tab:'ins'}],['Evidencias','◩',{tab:'fotos'}],['Riesgos y FAQ','△',{tab:'riesgos'}],['Documentos y manuales','▣',{tab:'docs'}],['Base de datos','◉',{tab:'bd'}],['Asistente IA','✧',{tab:'ia'}]
]:[
 ['Inicio','⌂',{href:'#inicio'}],['Equipo','▤',{href:'#equipo'}],['Justificación','▦',{href:'#justificacion'}],['Diagramas','◫',{href:'#diagramas'}],['Normatividad','☑',{href:'#normatividad'}],['Módulos','▥',{href:'#modulos'}],['Base de datos','◉',{href:'#basedatos'}],['Casos de uso','◈',{href:'#casos'}],['Arquitectura','▣',{href:'#arquitectura'}],['Investigación','✧',{href:'#investigacion'}],['Mantenimiento','⚙',{href:'#mantenimiento'}],['Riesgos','△',{href:'#riesgos'}],['Aplicación','◩',{href:'#aplicacion'}],['Bibliografía','▤',{href:'#bibliografia'}],['Plataforma','✚',{href:'plataforma.html'}]
];
const css=`body>nav,#tabs{display:none!important}header:not(.hero){padding-left:72px!important}html{scroll-padding-top:20px!important}section>h2{top:20px!important}
#mbtn{position:fixed;top:12px;left:12px;z-index:900;width:46px;height:46px;border-radius:12px;border:1px solid #2c4a73;background:#0f2240;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}
#mbtn i{display:block;width:22px;height:2.5px;background:#14c8a8;border-radius:2px}
#mfondo{position:fixed;inset:0;background:rgba(2,10,24,.6);z-index:950;opacity:0;pointer-events:none;transition:opacity .2s}
#mmenu{position:fixed;top:0;left:0;bottom:0;width:min(300px,86vw);background:#0f2240;color:#b4c4dc;z-index:960;transform:translateX(-100%);transition:transform .25s;display:flex;flex-direction:column;font-family:Figtree,Arial,sans-serif}
body.mabierto #mmenu{transform:none}body.mabierto #mfondo{opacity:1;pointer-events:auto}
#mmenu .mmarca{padding:22px 20px 16px;border-bottom:1px solid #223c63}
#mmenu .mlogo{display:flex;align-items:center;gap:12px;font:1.5rem Georgia,serif;color:#fff}
#mmenu .mlogo b{width:38px;height:38px;border-radius:10px;background:#14c8a8;color:#0f2240;display:flex;align-items:center;justify-content:center;font:700 1.3rem Arial}
#mmenu .msub{margin-top:14px;font:.72rem/1.5 ui-monospace,Consolas,monospace;letter-spacing:.08em;color:#14c8a8;text-transform:uppercase}
#mmenu ul{list-style:none;padding:14px 12px;overflow-y:auto;flex:1}
#mmenu a,#mmenu button.mi{display:flex;align-items:center;gap:16px;width:100%;padding:13px 16px;margin-bottom:4px;border-radius:12px;color:#b4c4dc;text-decoration:none;font-size:1rem;background:none;border:0;cursor:pointer;text-align:left;font-family:inherit}
#mmenu a:hover,#mmenu button.mi:hover{background:#17305a;color:#fff}
#mmenu .on{background:#14c8a8!important;color:#0f2240!important;font-weight:700}
#mmenu .ic{width:20px;text-align:center;font-size:1.05rem}
#mbtn:focus-visible,#mmenu a:focus-visible,#mmenu button:focus-visible{outline:3px solid #e8a317;outline-offset:2px}`;
document.addEventListener('DOMContentLoaded',()=>{
 PLAT=!!document.getElementById('tabs');ITEMS=mkItems();
 const st=document.createElement('style');st.textContent=css;document.head.append(st);
 const btn=document.createElement('button');btn.id='mbtn';btn.type='button';btn.setAttribute('aria-label','Abrir menú');btn.innerHTML='<i></i><i></i><i></i>';
 const fondo=document.createElement('div');fondo.id='mfondo';
 const m=document.createElement('aside');m.id='mmenu';m.setAttribute('aria-label','Menú principal');
 m.innerHTML='<div class="mmarca"><div class="mlogo"><b>✚</b>ElectroSafe</div><div class="msub">Ingeniería biomédica / Gestión clínica</div></div><ul></ul>';
 const ul=m.querySelector('ul'),els=[];
 const linea=(txt,ic)=>`<span class="ic">${ic}</span>${txt}`;
 ITEMS.forEach(([t,ic,o],n)=>{const li=document.createElement('li');let e;
  if(o.href){e=document.createElement('a');e.href=o.href}else{e=document.createElement('button');e.type='button';e.className='mi'}
  e.innerHTML=linea(t,ic);e.onclick=()=>{if(o.tab&&window.tab)window.tab(o.tab);cerrar();if(o.tab)scrollTo(0,0);mark(o)};li.append(e);ul.append(li);els.push([e,o])});
 if(!PLAT&&document.getElementById('tema')){const li=document.createElement('li'),e=document.createElement('button');e.type='button';e.className='mi';e.innerHTML=linea('Cambiar modo claro / oscuro','◐');e.onclick=()=>document.getElementById('tema').click();li.append(e);ul.append(li)}
 function mark(o){els.forEach(([e,x])=>e.classList.toggle('on',x===o))}
 function abrir(){document.body.classList.add('mabierto')}function cerrar(){document.body.classList.remove('mabierto')}
 btn.onclick=()=>document.body.classList.contains('mabierto')?cerrar():abrir();fondo.onclick=cerrar;
 document.addEventListener('keydown',e=>{if(e.key==='Escape')cerrar()});
 document.body.append(btn,fondo,m);
 if(PLAT){mark(ITEMS.find(i=>i[2].tab==='dash')[2]);const t0=window.tab;if(t0)window.tab=function(id){t0(id);const it=ITEMS.find(i=>i[2].tab===id);if(it)mark(it[2])}}
 else{mark(ITEMS[0][2]);const marcar=()=>{const h=location.hash;const it=ITEMS.find(i=>i[2].href===h);if(it)mark(it[2])};addEventListener('hashchange',marcar)}
});
})();
