// Full-screen entry splash with fog orbs, scan line, and RGB-bordered entry button.
const EntrySplash = ({ onEnter }) => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 10001,
    background: '#000',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28,
    overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      {[
        { w:500,h:500,c:'#ff0040',t:'-10%',l:'-5%',d:'12s',dl:'0s' },
        { w:400,h:400,c:'#6c63ff',b:'-5%',r:'-5%',d:'14s',dl:'2s' },
        { w:350,h:350,c:'#00ff80',t:'40%',l:'50%',d:'11s',dl:'4s' },
        { w:300,h:300,c:'#ffcc00',b:'20%',l:'20%',d:'13s',dl:'3s' },
        { w:250,h:250,c:'#00ccff',t:'10%',r:'30%',d:'15s',dl:'5s' },
      ].map((o,i) => (
        <div key={i} style={{
          position: 'absolute', width: o.w, height: o.h,
          borderRadius: '50%', filter: 'blur(100px)', opacity: .35,
          background: o.c,
          top: o.t, left: o.l, right: o.r, bottom: o.b,
          animation: `fogDrift ${o.d} ease-in-out infinite alternate`,
          animationDelay: o.dl,
        }} />
      ))}
    </div>
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
      background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.015) 2px,rgba(255,255,255,.015) 4px)',
    }} />
    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <img src="assets/images/logo-nav.gif" alt="לוגו" style={{
        height: 100, borderRadius: 16,
        animation: 'logoPulse 3s ease-in-out infinite',
      }} />
      <button onClick={onEnter} style={{
        background: 'rgba(20,20,24,.8)', color: '#fff',
        border: '2px solid rgba(212,168,67,.4)',
        padding: '18px 44px', borderRadius: 12,
        fontFamily: 'inherit', fontSize: '1.1rem', fontWeight: 700,
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
        backdropFilter: 'blur(10px)', letterSpacing: '.5px',
      }} className="entry-btn">
        <span style={{
          background: 'linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#8000ff,#ff0080,#ff0000)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'rgbText 5s linear infinite',
        }}>▶ הפעל את העורך</span>
      </button>
      <div style={{ fontSize: '.78rem', color: 'var(--muted)', letterSpacing: '.5px' }}>ULTIMATE EDITOR — AI POWERED</div>
    </div>
  </div>
);
Object.assign(window, { EntrySplash });
