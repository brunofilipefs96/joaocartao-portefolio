
// Tabs simples por página
function setupTabs(section){
  const tabbar = section.querySelector('.tabbar');
  if(!tabbar) return;
  const tabs = tabbar.querySelectorAll('[role="tab"]');
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.forEach(t=>t.setAttribute('aria-selected','false'));
      tab.setAttribute('aria-selected','true');
      const target = tab.dataset.target;
      section.querySelectorAll('.gallery-grid').forEach(g=>{
        g.hidden = g.id !== target;
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
  // smooth scroll inside same page only
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1 && document.querySelector(id)){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'}); }
    });
  });
  document.querySelectorAll('section').forEach(setupTabs);
});
