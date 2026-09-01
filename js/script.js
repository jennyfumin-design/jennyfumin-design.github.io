// scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  els.forEach(el=>io.observe(el));

  // staggered image-grid reveal
  const staggerEls = document.querySelectorAll('.stagger');
  const io3 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io3.unobserve(e.target); }
    });
  }, {threshold:0.1});
  staggerEls.forEach(el=>io3.observe(el));

  // nav dot active state
  const sections = ['hero','about','travel','brand','drawing','results','pack','photo','video','contact'].map(id=>document.getElementById(id));
  const dots = document.querySelectorAll('.dots a');
  const io2 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const idx = sections.indexOf(e.target);
        dots.forEach(d=>d.classList.remove('active'));
        if(dots[idx]) dots[idx].classList.add('active');
      }
    });
  }, {threshold:0.5});
  sections.forEach(s=>{ if(s) io2.observe(s); });
