(function(){
  // Menu mobile
  var t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});}
  // Ferme les sous-menus au clic extérieur
  document.addEventListener('click',function(e){document.querySelectorAll('.nav details[open]').forEach(function(d){if(!d.contains(e.target))d.removeAttribute('open')})});
  // Intro (page d'accueil uniquement, une fois par visite)
  var intro=document.getElementById('intro');
  if(!intro)return;
  var seen=false;try{seen=sessionStorage.getItem('cl-intro')==='1'}catch(e){}
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(seen||reduce){intro.remove();return}
  document.documentElement.style.overflow='hidden';
  var name=intro.querySelector('.name');var txt=name.textContent;name.textContent='';
  Array.prototype.forEach.call(txt,function(ch,i){var s=document.createElement('span');s.textContent=ch===' '?' ':ch;s.style.animationDelay=(0.5+i*0.07)+'s';name.appendChild(s)});
  var closed=false;
  function close(){if(closed)return;closed=true;intro.classList.add('done');document.documentElement.style.overflow='';try{sessionStorage.setItem('cl-intro','1')}catch(e){}setTimeout(function(){intro.remove()},1100)}
  var v=intro.querySelector('video');var timer=setTimeout(close,6500);
  if(v){v.addEventListener('ended',function(){clearTimeout(timer);close()});var pr=v.play&&v.play();if(pr&&pr.catch)pr.catch(function(){});}
  intro.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'||e.key==='Enter'||e.key===' ')close()});
})();
