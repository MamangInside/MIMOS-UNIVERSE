/* MIMOS Universe – pilihan bahasa EN / ID (dipakai semua halaman) */
(function(){
  var D=document.documentElement, KEY='mimos-lang';
  function saved(){try{var v=localStorage.getItem(KEY);if(v==='id'||v==='en')return v;}catch(e){}return /^id/i.test(navigator.language||'')?'id':'en';}
  function save(l){try{localStorage.setItem(KEY,l);}catch(e){}}

  var st=document.createElement('style');
  st.textContent='html[data-lang="en"] [data-l="id"],html[data-lang="id"] [data-l="en"]{display:none!important}'
  +'.langsw{display:inline-flex;border:1px solid #4a3a1a;border-radius:8px;overflow:hidden;flex:none}'
  +'.langsw button{background:none;border:0;color:#b9b2a2;padding:7px 11px;font:600 12px Montserrat,system-ui,sans-serif;cursor:pointer}'
  +'.langsw button:hover{color:#f6d98a}'
  +'.langsw button[aria-pressed="true"]{background:#e8b84a;color:#1a1204}';
  document.head.appendChild(st);
  D.setAttribute('data-lang',saved()); D.lang=saved();

  /* Terjemahan untuk halaman depan (teks asli = Inggris). */
  var ID={
  'Home':'Beranda','E-Books':'E-Book','Rent EA':'Sewa EA','About':'Tentang','Contact':'Kontak',
  'WELCOME TO':'SELAMAT DATANG DI','ONE INTELLIGENCE.':'SATU KECERDASAN.','MULTIPLE WORLDS.':'BANYAK DUNIA.',
  'We build intelligent systems, digital experiences, and real-world solutions for a smarter and more prosperous future.':'Kami membangun sistem cerdas, pengalaman digital, dan solusi dunia nyata untuk masa depan yang lebih cerdas dan sejahtera.',
  'Explore Universe':'Jelajahi Universe','Explore Store':'Lihat Toko','Lesson by Mang Arte':'Pelajaran oleh Mang Arte',
  'AI & Technology':'AI & Teknologi','Education & Knowledge':'Edukasi & Pengetahuan','Digital Lifestyle':'Gaya Hidup Digital','Sustainable Future':'Masa Depan Berkelanjutan',
  'OUR UNIVERSE':'UNIVERSE KAMI','Four projects. One ecosystem.':'Empat proyek. Satu ekosistem.','Explore all projects':'Lihat semua proyek',
  'Smarter analysis. Better decisions.':'Analisis lebih cerdas. Keputusan lebih baik.',
  'AI-powered trading solutions, expert tools, and real market strategies.':'Solusi trading berbasis AI, alat ahli, dan strategi pasar nyata.',
  'Explore':'Jelajahi','Play. Explore. Enjoy.':'Main. Jelajahi. Nikmati.',
  'Immersive games, interactive experiences, and digital entertainment.':'Game imersif, pengalaman interaktif, dan hiburan digital.',
  'Ideas become reality.':'Ide jadi kenyataan.',
  'Branding, design, production, and creative services for your vision.':'Branding, desain, produksi, dan layanan kreatif untuk visimu.',
  'Smart farming. Sustainable future.':'Budidaya cerdas. Masa depan berkelanjutan.',
  'AI-driven aquaculture technology for a healthier planet.':'Teknologi akuakultur berbasis AI untuk planet yang lebih sehat.',
  'MIMOS KNOWLEDGE STORE':'TOKO PENGETAHUAN MIMOS',
  'E-books for smarter traders. Learn. Apply. Grow.':'E-book untuk trader yang lebih cerdas. Belajar. Terapkan. Berkembang.',
  'View all e-books':'Lihat semua e-book','SPECIAL EDITION':'EDISI SPESIAL',
  'Scalping strategy for XAUUSD on the M1 timeframe: plan, entry, SL/TP, execute, repeat. A guide from the basics to real case studies, complete with risk management.':'Strategi scalping XAUUSD di timeframe M1: plan, entry, SL/TP, execute, repeat. Panduan dari dasar hingga studi kasus nyata, lengkap dengan manajemen risiko.',
  '⚠ High speed, high risk. Educational content, not financial advice.':'⚠ Kecepatan tinggi, risiko tinggi. Konten edukasi, bukan saran keuangan.',
  'Buy Now':'Beli Sekarang','All':'Semua','Trading Strategy':'Strategi Trading','Technical Analysis':'Analisis Teknikal','Chart Pattern':'Pola Chart','Beginner':'Pemula',
  'STARTER':'PEMULA','STANDARD':'STANDAR','No e-books in this category yet.':'Belum ada e-book di kategori ini.',
  'RENT EA':'SEWA EA','Automate your trading. Professional Expert Advisors with proven strategies and backtest results.':'Otomatiskan trading-mu. Expert Advisor profesional dengan strategi teruji dan hasil backtest.','Browse EA':'Lihat EA',
  'Follow the professionals. Transparent performance, low risk, and real results.':'Ikuti para profesional. Performa transparan, risiko rendah, dan hasil nyata.','View performance':'Lihat performa',
  'Innovation in progress. Exploring new technologies and future projects for a sustainable tomorrow.':'Inovasi sedang berjalan. Menjajaki teknologi baru dan proyek masa depan untuk hari esok yang berkelanjutan.','Discover Labs':'Kenali Labs',
  'START YOUR':'MULAI','JOURNEY TODAY':'PERJALANANMU HARI INI','Learn. Trade. Grow. Be part of MIMOS Universe.':'Belajar. Trading. Berkembang. Jadilah bagian dari MIMOS Universe.',
  'Global Access':'Akses Global','International & local':'Internasional & lokal','Secure Payment':'Pembayaran Aman','Instant Delivery':'Pengiriman Instan','E-book & access':'E-book & akses','24/7 Support':'Dukungan 24/7','We’re here for you':'Kami siap membantu',
  'Join MIMOS Universe':'Gabung MIMOS Universe','ONE INTELLIGENCE. MULTIPLE WORLDS.':'SATU KECERDASAN. BANYAK DUNIA.',
  'Quick Links':'Tautan Cepat','Store':'Toko','Support':'Dukungan','Payment Guide':'Panduan Pembayaran','Terms of Service':'Syarat Layanan','Privacy Policy':'Kebijakan Privasi','Refund Policy':'Kebijakan Refund','Payment Methods':'Metode Pembayaran','Follow Us':'Ikuti Kami',
  'Risk warning:':'Peringatan risiko:',
  'Trading forex, gold, and other leveraged products carries a high risk of loss and is not suitable for everyone. All content, e-books, and tools are for education only and are not financial advice. Past performance does not guarantee future results.':'Trading forex, emas, dan produk berleverage lainnya berisiko tinggi dan tidak cocok untuk semua orang. Semua konten, e-book, dan alat hanya untuk edukasi dan bukan saran keuangan. Kinerja masa lalu tidak menjamin hasil di masa depan.',
  '© 2026 MIMOS Universe. All rights reserved.':'© 2026 MIMOS Universe. Hak cipta dilindungi.',
  'Filter e-books':'Filter e-book','MIMOS Universe – silver M with eagle and wings over the earth':'MIMOS Universe – huruf M perak dengan elang dan sayap di atas bumi'
  };
  function tr(s){
    if(Object.prototype.hasOwnProperty.call(ID,s)) return ID[s];
    var m=/^by Mang Arte · (\d+) (pages|chapters) · Indonesian$/.exec(s);
    if(m) return 'oleh Mang Arte · '+m[1]+(m[2]==='pages'?' halaman':' bab')+' · Bahasa Indonesia';
    m=/^by Mang Arte · (\d+) pages · (Timeframe M1 · XAUUSD)$/.exec(s);
    if(m) return 'oleh Mang Arte · '+m[1]+' halaman · '+m[2];
    return null;
  }

  var nodes=[], attrs=[];
  function collect(){
    if(!D.hasAttribute('data-i18n-map')) return;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
    while((n=w.nextNode())){
      var p=n.parentNode&&n.parentNode.nodeName;
      if(p==='SCRIPT'||p==='STYLE'||p==='NOSCRIPT'||!n.nodeValue.trim()) continue;
      nodes.push({n:n,o:n.nodeValue});
    }
    document.querySelectorAll('[aria-label],[alt]').forEach(function(e){
      ['aria-label','alt'].forEach(function(a){ if(e.hasAttribute(a)) attrs.push({e:e,a:a,o:e.getAttribute(a)}); });
    });
  }
  function apply(l){
    D.setAttribute('data-lang',l); D.lang=l;
    nodes.forEach(function(x){
      if(l==='en'){ x.n.nodeValue=x.o; return; }
      var k=x.o.trim(), t=tr(k);
      x.n.nodeValue = t===null ? x.o : x.o.replace(k,t);
    });
    attrs.forEach(function(x){
      if(l==='en'){ x.e.setAttribute(x.a,x.o); return; }
      var t=tr(x.o); x.e.setAttribute(x.a,t===null?x.o:t);
    });
    var tt=D.getAttribute('data-title-'+l); if(tt) document.title=tt;
    var dd=D.getAttribute('data-desc-'+l), md=document.querySelector('meta[name="description"]'); if(dd&&md) md.setAttribute('content',dd);
    document.querySelectorAll('.langsw button').forEach(function(b){ b.setAttribute('aria-pressed',b.getAttribute('data-lang')===l?'true':'false'); });
    document.dispatchEvent(new CustomEvent('langchange',{detail:l}));
  }
  document.addEventListener('DOMContentLoaded',function(){
    collect();
    document.querySelectorAll('.langsw button').forEach(function(b){
      b.addEventListener('click',function(){ var l=b.getAttribute('data-lang'); save(l); apply(l); });
    });
    apply(saved());
  });
  window.mimosLang=function(){return D.getAttribute('data-lang');};
})();
