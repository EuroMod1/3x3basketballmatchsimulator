// Dropdown
const dropdown = document.querySelector('.dropdown');
if (dropdown){
  const toggle = dropdown.querySelector('.dropdown-toggle');
  toggle.addEventListener('click', () => {
    const expanded = dropdown.getAttribute('aria-expanded') === 'true';
    dropdown.setAttribute('aria-expanded', String(!expanded));
  });
  document.addEventListener('click', (e)=>{
    if(!dropdown.contains(e.target)) dropdown.setAttribute('aria-expanded','false');
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  for(const entry of entries){
    if(entry.isIntersecting) entry.target.classList.add('on');
  }
},{threshold: .15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Smooth anchor close dropdown
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', ()=> dropdown?.setAttribute('aria-expanded','false'));
});
