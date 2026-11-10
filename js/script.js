var P=[
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Contract value: 71 Lakhs, Duration: 3 months',a:'Ar. Farhad H. Malagi',i:'images/auditorium.jpg',k:'interiors'},
{t:'A seminar hall of 243 seater',c:'Completed',l:'Bengaluru',s:'Complete Acoustical, HVAC, Fire fighting, Electrical works',v:'Value: 2.7 Cr, Duration: 6 months',a:'Ar. Rahul Manohar, Mumbai',i:'images/seminar-hall.jpg',k:'commercial'},
{t:'A private villa for a client',c:'Completed',l:'Mandya',s:'Area: 4400 Sft. Turn Key construction with interiors',v:'Value: 1.1 Cr, Duration: 2 years',a:'Ar. Farhad H. Malagi',i:'images/villa-mandya.jpg',k:'residential'},
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Normal hall to Moot court transformation',v:'Value: 32 Lakhs, Duration: 2.5 months',a:'Ar. Farhad H. Malagi',i:'images/moot-court.jpg',k:'interiors'},
{t:'A Convention center',c:'Ongoing',l:'Chikkamagaluru',s:'Complete Civil and Architectural works',v:'Value: 5.5 Cr, Duration: 24 months',a:'Ar. Farhad H. Malagi',i:'images/convention-centre.jpg',k:'commercial'},
{t:'A private villa for a client',c:'Completed',l:'Mysuru',s:'Area: 8500 Sq. ft. Turn Key construction with interiors',v:'Value: 3.1 Cr, Duration: 2.5 years',a:'Ar. Farhad H. Malagi',k:'residential'},
{t:'A private twin villas for a client',c:'Completed',l:'Channagiri, Davanagere',s:'Complete Civil and Architectural and interior works',v:'Value: 3.9 Cr, Duration: 2.5 years',a:'Ar. Pavan Samuel & Ar. Tony and Ar. Farhad',k:'residential'},
{t:'A private villa for a client',c:'Completed',l:'Davanagere',s:'Area: 5500 Sft. Turn Key construction with interiors',v:'Value: 1.8 Cr, Duration: 2 years',a:'Ar. Farhad H. Malagi',k:'residential'},
{t:'A private villa for a client',c:'Completed',l:'Mysuru',s:'Area: 3000 Sq. ft. Turn Key construction',v:'Value: 62 Lakhs, Duration: 1.5 Years',a:'Ar. Sushant D S',k:'residential'},
{t:'A Private villa For a client',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction with interiors',v:'Value: 1.15 Cr, Duration: 2.5 years',a:'Ar. Bharath',k:'residential'},
{t:'A private Farm house for a client',c:'Completed',l:'Gonikoppa, Coorg',s:'Area: 6400 Sq. ft. Construction of Shell and Core',v:'Value: 76 Lakhs, Duration: 6 months',a:'Ar. Malini Shekar',k:'residential'},
{t:'A Farm House for a private client',c:'Completed',l:'Nanjanagudu, Mysuru',s:'Shell and Core with architectural elements',v:'Value: 42 Lakhs, Duration: 6 months',a:'Ar. Vivek Venkateshappa',k:'residential'},
{t:'Transformation project of an existing restaurant',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction',v:'Value: 27 Lakhs, Duration: 4 months',a:'Ar. Sushant D S',k:'commercial'},
{t:'National institute of technology (North)',c:'Completed',l:'Mysuru',s:'Client: National institute of engineering, Mysuru. Construction of foundation and retaining wall',v:'Value: 2.14 Cr, Duration: 4 months',k:'commercial'},
{t:'An Interior and Fit out project',c:'Completed',l:'Bengaluru',s:'Client: Presidency University. Transformation of class rooms including audio visual and acoustical works',v:'Contract value: 13.5 Lakhs/Class rooms, Duration: 30 days/per class room',a:'Ar. Farhad H. Malagi',k:'interiors'},
{t:'Transformation project of an existing Bunglow',c:'Completed',l:'Mysuru',s:'Turn Key Civil and Architectural Construction',v:'Value: 12 Lakhs, Duration: 4 months',i:'images/bungalow.jpg',k:'residential'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Value: 82 Lakhs, Duration: 6 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-82.jpg',k:'interiors'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Complete transformation including audio visual and acoustical works',v:'Value: 3 Cr, Duration: 8 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-3cr.jpg',k:'interiors'},
{t:'An Interior and Fit out project',c:'Ongoing',l:'Bengaluru',s:'Client: Presidency University. Placement office transformation',v:'Value: 89 Lakhs, Duration: 4 months',a:'Ar. Farhad H. Malagi',i:'images/ongoing-placement.jpg',k:'interiors'}
];

function card(p,big){
  var m=p.i?'<img src="'+p.i+'" alt="'+p.t+', '+p.l+'" loading="lazy">':'<div class="tile" aria-hidden="true">'+p.l.split(",")[0]+'</div>';
  return '<article class="card'+(big?' a':'')+'">'+m+'<div class="b">'+(p.c=="Ongoing"?'<span class="tag">Ongoing</span>':'')+'<h3>'+p.t+'</h3><small>'+p.l+'. '+p.s+'.</small><small>'+p.v+(p.a?'. Designer: '+p.a:'')+'</small></div></article>';
}

var pk=document.getElementById("peek");
if(pk) pk.innerHTML=card(P[0],1)+card(P[1])+card(P[2]);

function applyFilter(cat){
  var f = cat || 'all';
  var doneEl = document.getElementById("done");
  var goingEl = document.getElementById("going");
  var secDone = document.getElementById("sec-done");
  var secGoing = document.getElementById("sec-going");
  var secAbroad = document.getElementById("sec-abroad");

  if(!doneEl && !goingEl && !secAbroad) return;

  if(doneEl){
    var dList = P.filter(function(p){
      return p.i && p.c === "Completed" && (f === 'all' || p.k === f);
    });
    doneEl.innerHTML = dList.map(function(p){ return card(p); }).join("");
    if(secDone) secDone.style.display = (f === 'abroad' || dList.length === 0) ? "none" : "";
  }

  if(goingEl){
    var gList = P.filter(function(p){
      return p.i && p.c === "Ongoing" && (f === 'all' || p.k === f);
    });
    goingEl.innerHTML = gList.map(function(p){ return card(p); }).join("");
    if(secGoing) secGoing.style.display = (f === 'abroad' || gList.length === 0) ? "none" : "";
  }

  if(secAbroad){
    var showAbroad = (f === 'all' || f === 'abroad' || f === 'residential');
    secAbroad.style.display = showAbroad ? "" : "none";
    if(f === 'abroad'){
      secAbroad.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }

  var btns = document.querySelectorAll(".filters button[data-f]");
  [].forEach.call(btns, function(b){
    b.setAttribute("aria-pressed", b.dataset.f === f ? "true" : "false");
  });
}

var filterBtns = document.querySelectorAll(".filters button[data-f]");
[].forEach.call(filterBtns, function(b){
  b.addEventListener("click", function(){
    applyFilter(b.dataset.f);
  });
});

// URL search param filter (e.g. ?cat=commercial)
try{
  var searchParams = new URLSearchParams(window.location.search);
  var initCat = searchParams.get("cat") || searchParams.get("filter") || "all";
  applyFilter(initCat);
}catch(e){
  applyFilter("all");
}

// Gallery page filter
var galBtns = document.querySelectorAll(".gal-filter button[data-gf]");
if(galBtns.length){
  [].forEach.call(galBtns, function(b){
    b.addEventListener("click", function(){
      var gf = b.dataset.gf;
      var items = document.querySelectorAll(".gal-item");
      [].forEach.call(items, function(item){
        item.style.display = (gf === "all" || item.dataset.gk === gf) ? "" : "none";
      });
      [].forEach.call(galBtns, function(btn){
        btn.setAttribute("aria-pressed", btn === b ? "true" : "false");
      });
    });
  });
}

var fm=document.getElementById("f");
if(fm) fm.onsubmit=function(e){
  e.preventDefault();
  var f=e.target;
  location.href="mailto:hello@infinitebs.in?subject="+encodeURIComponent("Website enquiry: "+f.t.value)+"&body="+encodeURIComponent("Name: "+f.n.value+"\nPhone: "+f.p.value+"\n\n"+f.m.value);
  document.getElementById("note").textContent="Your email app should open with the enquiry filled in.";
};

(function(){
  var R=matchMedia("(prefers-reduced-motion:reduce)").matches;

  function count(el){
    var text = el.textContent.trim();
    var m = /^(\d+)(.*)$/.exec(text);
    if(!m || R) return;
    var target = +m[1];
    var suffix = m[2];
    var duration = 2000;
    var startTime = null;

    el.textContent = '0' + suffix;

    function step(now){
      if(!startTime) startTime = now;
      var elapsed = now - startTime;
      var progress = Math.min(1, elapsed / duration);
      var ease = 1 - (1 - progress) * (1 - progress);
      var current = Math.round(target * ease);
      el.textContent = current + suffix;
      if(progress < 1){
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  if(!("IntersectionObserver" in window) || R) return;
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add("in");
        var b = e.target.querySelector("b");
        if(b && !b.dataset.d){
          b.dataset.d = 1;
          count(b);
        }
        io.unobserve(e.target);
      }
    });
  },{threshold:.15});

  [].forEach.call(document.querySelectorAll(".sec h2,.card,.sp-card,.facts div,.stats div,.bn .w"),function(e){
    e.classList.add("rv");
    io.observe(e);
  });
})();

(function(){
  var b=document.querySelector(".mb"), n=document.querySelector("header nav");
  if(!b) return;
  function c(){n.classList.remove("open");b.setAttribute("aria-expanded","false")}
  b.onclick=function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)};
  n.addEventListener("click",function(e){if(e.target.tagName=="A")c()});
  addEventListener("hashchange",c);
})();
(function(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  [].forEach.call(document.querySelectorAll(".marquee"),function(m){
    var t=m.querySelector(".mq-track");
    [].slice.call(t.children).forEach(function(it){
      var c=it.cloneNode(true);
      c.setAttribute("aria-hidden","true");
      [].forEach.call(c.querySelectorAll("img"),function(i){i.alt="";i.removeAttribute("loading")});
      t.appendChild(c);
    });
    m.classList.add("run");
  });
})();