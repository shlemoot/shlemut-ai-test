// Scenes.jsx — 60-second promo video for Shlemut AI
// 8 scenes, music-synced @ ~120bpm (kicks every 0.5s), RTL Hebrew

const BRAND = {
  bg: '#0a0a0a',
  bgDeep: '#050505',
  gold: '#d4a843',
  goldLight: '#f5d87a',
  text: '#f6f4ef',
  muted: '#8a8a8a',
  accent: '#6c63ff',
  green: '#4ade80',
  red: '#ff3b30',
};

const HEB = {
  fontFamily: "'Assistant','Heebo','Segoe UI',Arial,sans-serif",
};

// ═══════════ KICK — strobe white flash on every kick for punch ═══════════
function Kick({ times = [], dur = 0.08 }) {
  const t = useTime();
  let hit = 0;
  for (const kt of times) {
    const dt = t - kt;
    if (dt >= 0 && dt < dur) {
      hit = Math.max(hit, 1 - dt / dur);
    }
  }
  if (hit <= 0) return null;
  return <div style={{
    position: 'absolute', inset: 0, background: '#fff',
    opacity: hit * 0.18, mixBlendMode: 'screen', pointerEvents: 'none', zIndex: 100,
  }} />;
}

// ═══════════ RGB SWEEP BG ═══════════
function RgbBG({ intensity = 1 }) {
  const t = useTime();
  const hue1 = (t * 60) % 360;
  const hue2 = (t * 60 + 120) % 360;
  const hue3 = (t * 60 + 240) % 360;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `
        radial-gradient(ellipse 60% 45% at 20% 30%, hsla(${hue1},85%,55%,${0.22*intensity}), transparent 60%),
        radial-gradient(ellipse 55% 40% at 80% 70%, hsla(${hue2},85%,55%,${0.22*intensity}), transparent 60%),
        radial-gradient(ellipse 70% 50% at 50% 100%, hsla(${hue3},85%,55%,${0.18*intensity}), transparent 60%),
        #0a0a0a
      `,
      filter: 'blur(0px)',
    }} />
  );
}

// ═══════════ GRID FLOOR (tron-ish) ═══════════
function GridFloor({ opacity = 0.3 }) {
  const t = useTime();
  const offset = (t * 60) % 80;
  return (
    <div style={{
      position: 'absolute', inset: 0, opacity, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(0deg, rgba(212,168,67,0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,168,67,0.4) 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
      backgroundPosition: `0 ${offset}px, ${offset}px 0`,
      maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
    }} />
  );
}

// ═══════════ PARTICLES ═══════════
function Particles({ count = 40, seed = 1 }) {
  const t = useTime();
  const parts = React.useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      x: ((i * 7919 + seed * 31) % 1920),
      y: ((i * 6151 + seed * 17) % 1080),
      size: 1 + ((i * 3) % 4),
      speed: 20 + ((i * 11) % 40),
      hue: (i * 47) % 360,
    }))
  ), [count, seed]);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {parts.map((p, i) => {
        const y = (p.y - t * p.speed + 1080 * 2) % 1080;
        return (
          <div key={i} style={{
            position: 'absolute', left: p.x, top: y,
            width: p.size * 2, height: p.size * 2, borderRadius: '50%',
            background: `hsl(${p.hue}, 85%, 65%)`,
            boxShadow: `0 0 ${p.size * 6}px hsl(${p.hue}, 85%, 65%)`,
            opacity: 0.7,
          }} />
        );
      })}
    </div>
  );
}

// ═══════════ RGB HEADLINE TEXT ═══════════
function RgbHeadline({ text, size = 180, y, scale = 1, opacity = 1, weight = 900 }) {
  const t = useTime();
  const pos = (t * 50) % 300;
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, top: y,
      textAlign: 'center', direction: 'rtl',
      fontFamily: HEB.fontFamily,
      fontSize: size, fontWeight: weight,
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      background: `linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0080ff,#8000ff,#ff0080,#ff0000)`,
      backgroundSize: '300% 100%',
      backgroundPosition: `${pos}% 50%`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      transform: `scale(${scale})`,
      opacity,
      textShadow: '0 0 60px rgba(255,255,255,0.1)',
      filter: 'drop-shadow(0 8px 32px rgba(255,100,50,0.3))',
    }}>
      {text}
    </div>
  );
}

// ═══════════ BIG WHITE TEXT (with RTL) ═══════════
function BigText({ text, size = 120, y, color = BRAND.text, weight = 900, scale = 1, opacity = 1, letterSpacing = '-0.02em' }) {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, top: y,
      textAlign: 'center', direction: 'rtl',
      fontFamily: HEB.fontFamily, fontSize: size, fontWeight: weight,
      color, lineHeight: 1, letterSpacing,
      transform: `scale(${scale})`, opacity,
      willChange: 'transform, opacity',
    }}>
      {text}
    </div>
  );
}

// ═══════════ GOLD PILL BADGE ═══════════
function GoldBadge({ text, x = '50%', y, size = 22 }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, transform: 'translateX(-50%)',
      direction: 'rtl', fontFamily: HEB.fontFamily,
      background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.goldLight})`,
      color: '#000', padding: `${size*0.5}px ${size*1.5}px`,
      borderRadius: 999, fontWeight: 800, fontSize: size,
      letterSpacing: '0.02em',
      boxShadow: `0 10px 40px rgba(212,168,67,0.5)`,
    }}>{text}</div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 1: DRAMATIC LOGO REVEAL (0 - 4s)
// ══════════════════════════════════════════════════════════════════════════
function Scene1_Logo() {
  const { localTime: lt } = useSprite();
  const t = useTime();

  // Logo GIF entry: zoom from huge w/ rotation, land, then subtle pulse
  const logoScale = interpolate([0, 0.6, 0.9, 2.5, 3, 4], [6, 0.9, 1.05, 1, 1.15, 0.4], Easing.easeOutExpo)(lt);
  const logoOp = interpolate([0, 0.35, 3.4, 4], [0, 1, 1, 0], Easing.linear)(lt);
  const logoRot = interpolate([0, 0.9], [-180, 0], Easing.easeOutBack)(lt);

  // Text comes in after logo lands
  const textOp = interpolate([1.0, 1.4, 3.4, 4], [0, 1, 1, 0], Easing.linear)(lt);
  const textY = interpolate([1.0, 1.4], [40, 0], Easing.easeOutBack)(lt);

  // RGB ring rotates behind
  const ringRot = t * 120;

  // Glow pulse on the logo
  const glowPulse = 1 + Math.sin(t * 3) * 0.15;

  // Shockwave burst when logo lands (0.9s)
  const shockProg = lt > 0.85 && lt < 1.8 ? (lt - 0.85) / 0.95 : -1;
  const shockScale = shockProg >= 0 ? interpolate([0, 1], [0.5, 3.5], Easing.easeOutCubic)(shockProg) : 0;
  const shockOp = shockProg >= 0 ? 1 - shockProg : 0;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <RgbBG intensity={0.7} />
      <Particles count={60} seed={1} />

      {/* Radial light rays from center */}
      <div style={{
        position: 'absolute', left: '50%', top: '42%', transform: `translate(-50%,-50%) scale(${logoScale * 1.4}) rotate(${t * 20}deg)`,
        width: 900, height: 900,
        background: `conic-gradient(from 0deg, transparent 0deg, rgba(212,168,67,0.3) 5deg, transparent 10deg, transparent 30deg, rgba(245,216,122,0.25) 35deg, transparent 40deg)`,
        opacity: logoOp * 0.7,
        filter: 'blur(2px)',
      }} />

      {/* RGB spinning ring behind logo */}
      <div style={{
        position: 'absolute', left: '50%', top: '42%',
        width: 560, height: 560, borderRadius: '50%',
        transform: `translate(-50%,-50%) scale(${logoScale * 1.1 * glowPulse})`,
        background: `conic-gradient(from ${ringRot}deg, #ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0080ff,#8000ff,#ff0080,#ff0000)`,
        opacity: logoOp * 0.55, filter: 'blur(50px)',
      }} />

      {/* Gold glow aura behind logo */}
      <div style={{
        position: 'absolute', left: '50%', top: '42%',
        width: 640, height: 640, borderRadius: '50%',
        transform: `translate(-50%,-50%) scale(${logoScale * glowPulse})`,
        background: `radial-gradient(circle, ${BRAND.gold} 0%, ${BRAND.goldLight} 25%, transparent 60%)`,
        opacity: logoOp * 0.6, filter: 'blur(40px)',
      }} />

      {/* Shockwave ring */}
      {shockOp > 0 && (
        <div style={{
          position: 'absolute', left: '50%', top: '42%',
          width: 400, height: 400, borderRadius: '50%',
          transform: `translate(-50%,-50%) scale(${shockScale})`,
          border: `4px solid ${BRAND.gold}`,
          opacity: shockOp,
          boxShadow: `0 0 80px ${BRAND.gold}, inset 0 0 80px ${BRAND.goldLight}`,
        }} />
      )}

      {/* The LOGO GIF itself — center */}
      <img src="shots/logo-nav.gif" alt="שלמות AI"
        style={{
          position: 'absolute', left: '50%', top: '42%',
          width: 380, height: 'auto',
          transform: `translate(-50%,-50%) scale(${logoScale}) rotate(${logoRot}deg)`,
          opacity: logoOp,
          filter: `drop-shadow(0 0 60px ${BRAND.gold}) drop-shadow(0 0 120px rgba(245,216,122,0.8)) drop-shadow(0 20px 60px rgba(0,0,0,0.8))`,
          willChange: 'transform, opacity',
        }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Text below logo */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 140,
        textAlign: 'center', direction: 'rtl', fontFamily: HEB.fontFamily,
        opacity: textOp, transform: `translateY(${textY}px)`,
      }}>
        <div style={{
          fontSize: 160, fontWeight: 900, lineHeight: 1,
          background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.goldLight}, ${BRAND.gold})`,
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.04em',
          filter: `drop-shadow(0 8px 40px rgba(212,168,67,0.6))`,
        }}>שלמות AI</div>
        <div style={{
          fontSize: 30, fontWeight: 600, color: BRAND.text, opacity: 0.75,
          marginTop: 6, letterSpacing: '0.3em',
        }}>STUDIO · SHLEMUT · AI</div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 1.5: MOCKUP REVEAL — show the product box
// ══════════════════════════════════════════════════════════════════════════
function Scene1b_Mockup() {
  const { localTime: lt } = useSprite();
  const t = useTime();
  const op = interpolate([0, 0.3, 4.5, 5], [0, 1, 1, 0], Easing.linear)(lt);

  // Box enters from far away (small, tilted) → lands front-and-center
  const boxScale = interpolate([0, 0.8, 1.1, 4.2, 5], [0.1, 1.05, 1, 1, 0.7], Easing.easeOutExpo)(lt);
  const boxRotY = interpolate([0, 1.2], [-45, 0], Easing.easeOutCubic)(lt);
  const boxY = interpolate([0, 0.8], [80, 0], Easing.easeOutBack)(lt);
  const boxOp = interpolate([0, 0.4, 4.2, 5], [0, 1, 1, 0], Easing.linear)(lt);

  // Title text above
  const titleOp = interpolate([0.3, 0.8], [0, 1], Easing.linear)(lt);
  const titleY = interpolate([0.3, 0.8], [-30, 0], Easing.easeOutBack)(lt);

  // Stats/features pops in AROUND the box
  const feature1 = lt > 1.5;
  const feature2 = lt > 1.9;
  const feature3 = lt > 2.3;

  // Gold glow pulse
  const pulse = 1 + Math.sin(t * 4) * 0.08;

  // Light sweep across box
  const sweepX = interpolate([1.3, 2.3], [-100, 120], Easing.easeInOutCubic)(lt);
  const sweepOp = lt > 1.3 && lt < 2.3 ? 1 : 0;

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, overflow: 'hidden' }}>
      <RgbBG intensity={0.5} />
      <Particles count={40} seed={15} />
      <GridFloor opacity={0.2} />

      {/* Title */}
      <div style={{
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        <BigText text="הכירו את" size={64} y={80} color={BRAND.muted} weight={500} letterSpacing="0.15em" />
        <RgbHeadline text="עורך אולטימטיבי + סוכן AI" size={100} y={160} />
      </div>

      {/* Gold radial glow behind box */}
      <div style={{
        position: 'absolute', left: '50%', top: '58%',
        width: 900, height: 900, borderRadius: '50%',
        transform: `translate(-50%,-50%) scale(${pulse})`,
        background: `radial-gradient(circle, ${BRAND.gold} 0%, rgba(212,168,67,0.3) 30%, transparent 65%)`,
        opacity: boxOp * 0.55, filter: 'blur(40px)',
      }} />

      {/* THE MOCKUP BOX */}
      <div style={{
        position: 'absolute', left: '50%', top: '58%',
        transform: `translate(-50%,-50%) translateY(${boxY}px) scale(${boxScale}) perspective(1800px) rotateY(${boxRotY}deg)`,
        transformStyle: 'preserve-3d',
        opacity: boxOp,
        filter: `drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 60px rgba(212,168,67,0.4))`,
      }}>
        <img src="shots/mockup.png" alt="עורך אולטימטיבי + סוכן AI"
          style={{ width: 720, height: 'auto', display: 'block' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Light sweep */}
        {sweepOp > 0 && (
          <div style={{
            position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',
            background: `linear-gradient(110deg, transparent ${sweepX}%, rgba(255,255,255,0.35) ${sweepX + 10}%, transparent ${sweepX + 20}%)`,
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }} />
        )}
      </div>

      {/* Floating feature badges around the box */}
      {feature1 && (
        <div style={{
          position: 'absolute', right: 80, top: 340,
          opacity: Math.min(1, (lt - 1.5) / 0.3),
          transform: `translateX(${interpolate([1.5, 1.9], [50, 0], Easing.easeOutBack)(lt)}px)`,
          direction: 'rtl', fontFamily: HEB.fontFamily,
          padding: '22px 34px', borderRadius: 18,
          background: 'rgba(20,20,20,0.85)',
          border: `2px solid ${BRAND.gold}`,
          boxShadow: `0 10px 40px rgba(212,168,67,0.4)`,
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ fontSize: 52, fontWeight: 900, color: BRAND.gold, lineHeight: 1 }}>11</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.text, marginTop: 4 }}>כלי פרימיום</div>
          <div style={{ fontSize: 16, color: BRAND.muted, marginTop: 2 }}>למקצוענים</div>
        </div>
      )}

      {feature2 && (
        <div style={{
          position: 'absolute', left: 80, top: 420,
          opacity: Math.min(1, (lt - 1.9) / 0.3),
          transform: `translateX(${interpolate([1.9, 2.3], [-50, 0], Easing.easeOutBack)(lt)}px)`,
          direction: 'rtl', fontFamily: HEB.fontFamily,
          padding: '22px 34px', borderRadius: 18,
          background: 'rgba(20,20,20,0.85)',
          border: `2px solid ${BRAND.gold}`,
          boxShadow: `0 10px 40px rgba(212,168,67,0.4)`,
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ fontSize: 52, fontWeight: 900, color: BRAND.goldLight, lineHeight: 1 }}>99</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.text, marginTop: 4 }}>כלים מבוססי AI</div>
          <div style={{ fontSize: 16, color: BRAND.muted, marginTop: 2 }}>לעימוד חכם</div>
        </div>
      )}

      {feature3 && (
        <div style={{
          position: 'absolute', right: 100, bottom: 220,
          opacity: Math.min(1, (lt - 2.3) / 0.3),
          transform: `translateX(${interpolate([2.3, 2.7], [50, 0], Easing.easeOutBack)(lt)}px)`,
          direction: 'rtl', fontFamily: HEB.fontFamily,
          padding: '18px 28px', borderRadius: 14,
          background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.goldLight})`,
          color: '#000', fontWeight: 800, fontSize: 26,
          boxShadow: `0 10px 40px rgba(212,168,67,0.6)`,
        }}>
          ✨ שליחות הוצאה לאור
        </div>
      )}

      {/* Tagline at bottom */}
      {lt > 3.2 && (
        <div style={{ opacity: Math.min(1, (lt - 3.2) / 0.3) }}>
          <BigText text='"מפלצת של פרודקטיביות!!!"' size={42} y={960} color={BRAND.goldLight} weight={700} />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 2: "החיים הקלים!!!" HEADLINE (4 - 10s)
// ══════════════════════════════════════════════════════════════════════════
function Scene2_TheEasyLife() {
  const { localTime: lt } = useSprite();

  // Entry: tiny bounce in
  const scale1 = interpolate([0, 0.4, 0.6], [0.3, 1.15, 1], Easing.easeOutBack)(lt);
  const op1 = interpolate([0, 0.3, 5.5, 6], [0, 1, 1, 0], Easing.linear)(lt);

  // Subtitle comes in after
  const subScale = interpolate([0.9, 1.3], [0.8, 1], Easing.easeOutBack)(lt);
  const subOp = interpolate([0.9, 1.3, 5.3, 5.8], [0, 1, 1, 0], Easing.linear)(lt);

  // Third line
  const kScale = interpolate([1.9, 2.2], [0.5, 1], Easing.easeOutBack)(lt);
  const kOp = interpolate([1.9, 2.2, 5.3, 5.8], [0, 1, 1, 0], Easing.linear)(lt);

  // Shake on kick at 4.0
  const shake = lt < 0.15 ? Math.sin(lt * 180) * (1 - lt / 0.15) * 8 : 0;

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <RgbBG intensity={1.2} />
      <GridFloor opacity={0.2} />
      <Particles count={40} seed={2} />

      <div style={{ transform: `translateX(${shake}px)`, position: 'absolute', inset: 0 }}>
        <div style={{ opacity: op1, transform: `scale(${scale1})`, transformOrigin: '50% 50%' }}>
          <RgbHeadline text="החיים הקלים!!!" size={260} y={340} />
        </div>

        <div style={{ opacity: subOp, transform: `scale(${subScale})`, transformOrigin: '50% 50%' }}>
          <BigText text="עימוד ספרים שלמים" size={90} y={660} color={BRAND.text} weight={700} />
        </div>

        <div style={{ opacity: kOp, transform: `scale(${kScale})`, transformOrigin: '50% 50%' }}>
          <BigText text="בלחיצה אחת" size={90} y={770} color={BRAND.gold} weight={900} />
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 3: THE OLD WAY (pain) (10 - 18s)
// ══════════════════════════════════════════════════════════════════════════
function Scene3_OldWay() {
  const { localTime: lt } = useSprite();
  const t = useTime();

  // Stamp copy lines in fast as typing/slamming
  const line1 = lt > 0.2;
  const line2 = lt > 1.0;
  const line3 = lt > 2.0;
  const line4 = lt > 3.0;
  const crossout = lt > 5.5;

  const exitOp = interpolate([0, 0.3, 7.5, 8], [0, 1, 1, 0], Easing.linear)(lt);

  // Red flicker
  const redFlick = 0.4 + Math.sin(t * 8) * 0.2;

  const items = [
    { text: 'עריכה ידנית של כל עמוד', delay: 0.2 },
    { text: 'שעות של תיקוני אלמנות ויתומים', delay: 1.0 },
    { text: 'סגנונות שצריך להגדיר מחדש', delay: 2.0 },
    { text: 'לילות שלמים של עבודה חוזרת', delay: 3.0 },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at center, #2a0808 0%, #0a0202 70%)`,
      opacity: exitOp,
    }}>
      {/* scanlines */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.2,
        background: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,0,0,0.15) 3px 4px)',
      }} />

      <BigText text="פעם..." size={80} y={120} color={BRAND.muted} weight={400} />

      <div style={{
        position: 'absolute', left: 160, right: 160, top: 250,
        direction: 'rtl', fontFamily: HEB.fontFamily,
      }}>
        {items.map((item, i) => {
          const shown = lt > item.delay;
          const iLt = lt - item.delay;
          const xOff = shown ? interpolate([0, 0.3], [60, 0], Easing.easeOutBack)(iLt) : 60;
          const op = shown ? Math.min(1, iLt / 0.3) : 0;
          const struck = crossout;
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 28,
              fontSize: 64, fontWeight: 700, color: '#ffcccc',
              marginBottom: 28, opacity: op, transform: `translateX(${xOff}px)`,
            }}>
              <span style={{
                width: 60, height: 60, borderRadius: '50%',
                background: `rgba(255,59,48,${redFlick})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 900, fontSize: 32,
                boxShadow: '0 0 30px rgba(255,59,48,0.6)',
                flexShrink: 0,
              }}>✕</span>
              <span style={{
                position: 'relative',
                textDecoration: struck ? 'line-through' : 'none',
                textDecorationColor: '#ff3b30',
                textDecorationThickness: 4,
                transition: 'text-decoration 0.3s',
              }}>{item.text}</span>
            </div>
          );
        })}
      </div>

      {lt > 6 && (
        <div style={{ opacity: (lt - 6) / 0.5 }}>
          <BigText text="די." size={180} y={820} color={BRAND.red} weight={900} />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 4: AI TAKES OVER (18 - 28s)
// ══════════════════════════════════════════════════════════════════════════
function Scene4_AiTakeover() {
  const { localTime: lt } = useSprite();

  const op = interpolate([0, 0.3, 9.5, 10], [0, 1, 1, 0], Easing.linear)(lt);

  // Title drops in
  const titleY = interpolate([0, 0.6], [-100, 0], Easing.easeOutBack)(lt);
  const titleOp = Math.min(1, lt / 0.3);

  // Screenshot windows popping in
  const windows = [
    { src: 'shots/home.jpg', delay: 1.0, x: 60, y: 250, w: 560, h: 420, rot: -3, label: 'מסך הבית' },
    { src: 'shots/editor.jpg', delay: 1.5, x: 680, y: 180, w: 560, h: 420, rot: 2, label: 'עורך AI אולטימטיבי' },
    { src: 'shots/quick.jpg', delay: 2.0, x: 1300, y: 250, w: 560, h: 420, rot: -2, label: '40+ כלים' },
    { src: 'shots/image.jpg', delay: 2.5, x: 200, y: 700, w: 520, h: 340, rot: 3, label: 'יוצר תמונות' },
    { src: 'shots/scripts.jpg', delay: 3.0, x: 780, y: 740, w: 520, h: 340, rot: -2, label: 'סקריפטים' },
    { src: 'shots/text.jpg', delay: 3.5, x: 1360, y: 700, w: 480, h: 340, rot: 2, label: 'עיבוד טקסט' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op }}>
      <RgbBG intensity={0.7} />
      <Particles count={30} seed={4} />

      <div style={{ opacity: titleOp, transform: `translateY(${titleY}px)` }}>
        <BigText text="אבל עכשיו —" size={64} y={60} color={BRAND.gold} weight={600} />
        <RgbHeadline text="ה-AI עובד בשבילכם" size={130} y={120} />
      </div>

      {windows.map((w, i) => {
        const s = lt > w.delay;
        const wLt = lt - w.delay;
        const scale = s ? interpolate([0, 0.35], [0.3, 1], Easing.easeOutBack)(wLt) : 0;
        const wOp = s ? Math.min(1, wLt / 0.3) : 0;
        return (
          <div key={i} style={{
            position: 'absolute', left: w.x, top: w.y,
            width: w.w, height: w.h,
            transform: `rotate(${w.rot}deg) scale(${scale})`,
            opacity: wOp,
            borderRadius: 16, overflow: 'hidden',
            boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 2px rgba(212,168,67,0.4)`,
            background: '#111',
          }}>
            <img src={w.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => { e.target.style.display = 'none'; }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '12px 20px', direction: 'rtl', fontFamily: HEB.fontFamily,
              background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.9))',
              color: BRAND.gold, fontSize: 22, fontWeight: 800,
            }}>{w.label}</div>
          </div>
        );
      })}

      {lt > 7 && (
        <div style={{ opacity: Math.min(1, (lt - 7) / 0.4), position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center' }}>
          <GoldBadge text="40+ כלים חכמים בעברית" y={0} size={32} x="50%" />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 5: SPEED DEMO — Book pagination countdown (28 - 38s)
// ══════════════════════════════════════════════════════════════════════════
function Scene5_Speed() {
  const { localTime: lt } = useSprite();
  const op = interpolate([0, 0.3, 9.5, 10], [0, 1, 1, 0], Easing.linear)(lt);

  // Big counter counting down from "300 pages" → progress bar fills
  // 2 seconds to do the whole thing
  const progress = interpolate([1.5, 3.5], [0, 1], Easing.easeInOutCubic)(lt);
  const pagesDone = Math.floor(progress * 300);
  const timer = interpolate([1.5, 3.5], [0, 120], Easing.linear)(lt); // seconds

  // Pages stacking up animation
  const stackCount = Math.min(30, Math.floor(progress * 30));

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, background: '#080808' }}>
      <RgbBG intensity={0.4} />
      <GridFloor opacity={0.3} />

      {/* Title */}
      <BigText text="ספר שלם." size={100} y={80} color={BRAND.text} weight={800} />
      <RgbHeadline text="2 דקות." size={180} y={180} />

      {/* Page counter — massive monospace */}
      <div style={{
        position: 'absolute', left: 80, top: 460,
        direction: 'ltr', fontFamily: 'JetBrains Mono, monospace',
      }}>
        <div style={{ fontSize: 28, color: BRAND.muted, marginBottom: 12, fontWeight: 600 }}>PAGES PAGINATED</div>
        <div style={{
          fontSize: 200, fontWeight: 900, lineHeight: 1,
          color: BRAND.gold,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.04em',
          textShadow: `0 0 40px rgba(212,168,67,0.5)`,
        }}>{String(pagesDone).padStart(3, '0')}<span style={{ color: BRAND.muted, fontSize: 120 }}> / 300</span></div>

        <div style={{ fontSize: 28, color: BRAND.muted, marginTop: 30, marginBottom: 12, fontWeight: 600 }}>TIME</div>
        <div style={{
          fontSize: 100, fontWeight: 900, color: BRAND.green,
          fontVariantNumeric: 'tabular-nums',
        }}>{String(Math.floor(timer/60)).padStart(2,'0')}:{String(Math.floor(timer%60)).padStart(2,'0')}</div>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', left: 80, right: 80, top: 940, height: 24,
        background: 'rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress * 100}%`, height: '100%',
          background: `linear-gradient(90deg, ${BRAND.gold}, ${BRAND.goldLight}, ${BRAND.green})`,
          boxShadow: `0 0 30px ${BRAND.gold}`,
          transition: 'none',
        }} />
      </div>

      {/* Right side: stacking pages */}
      <div style={{ position: 'absolute', right: 120, top: 420, width: 500, height: 520 }}>
        {Array.from({ length: stackCount }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute', left: (i * 2) - 15, top: (i * 3) - 20,
            width: 380, height: 480, background: '#f8f5ed',
            borderRadius: 4, border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transform: `rotate(${(i % 3 - 1) * 1.2}deg)`,
          }}>
            {/* fake text lines */}
            <div style={{ padding: 30, direction: 'rtl' }}>
              {Array.from({ length: 18 }).map((_, j) => (
                <div key={j} style={{
                  height: 8, background: '#2a2a2a', borderRadius: 2,
                  marginBottom: 8, opacity: 0.7,
                  width: `${60 + ((j*13 + i*7) % 40)}%`,
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {lt > 4 && (
        <div style={{ opacity: Math.min(1, (lt - 4) / 0.4) }}>
          <BigText text="Gemma 4 — 300 מילישניות לעמוד" size={54} y={680} color={BRAND.goldLight} weight={600} />
        </div>
      )}
      {lt > 5.5 && (
        <div style={{ opacity: Math.min(1, (lt - 5.5) / 0.4) }}>
          <BigText text="תיקון אלמנות ∙ יתומים ∙ נהרות ∙ צפיפות" size={40} y={760} color={BRAND.muted} weight={500} />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 6: 40+ TOOLS GRID EXPLOSION (38 - 46s)
// ══════════════════════════════════════════════════════════════════════════
function Scene6_ToolsGrid() {
  const { localTime: lt } = useSprite();
  const op = interpolate([0, 0.3, 7.5, 8], [0, 1, 1, 0], Easing.linear)(lt);

  const tools = [
    'ניקוי רווחים', 'המרת גרשיים', 'ניקוד אוטומטי', 'תיקון RTL',
    'חיפוש GREP חכם', 'ניתוח מסמך', 'מונה שעות', 'עיבוד טקסט',
    'סקריפטים AI', 'יצירת תמונות', 'תיקון סגנונות', 'מילון מונחים',
    'שינוי גופן המוני', 'ייצוא PDF', 'בדיקת איות', 'מרווחים אוטומטי',
    'חלוקת פסקאות', 'מספור אוטומטי', 'טבלאות חכמות', 'כותרות חכמות',
    'הערות שוליים', 'תוכן עניינים', 'מפתח אלפביתי', 'ביבליוגרפיה',
    'תמונות חכמות', 'חיתוך אוטומטי', 'התאמת צבע', 'יצוא ספר אלקטרוני',
    'EPUB חכם', 'קורקטור', 'חלוקת עמודים', 'אופטימיזציה',
  ];

  const cols = 8, rows = 4;
  const cellW = 220, cellH = 130, gap = 16;
  const gridW = cols * cellW + (cols - 1) * gap;
  const gridH = rows * cellH + (rows - 1) * gap;
  const startX = (1920 - gridW) / 2;
  const startY = 340;

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op }}>
      <RgbBG intensity={0.8} />
      <Particles count={30} seed={6} />

      {/* Title */}
      <div style={{ opacity: Math.min(1, lt / 0.4) }}>
        <BigText text="40+ כלים חכמים" size={90} y={80} color={BRAND.text} weight={900} />
        <BigText text="כולם בעברית ∙ כולם עובדים אופליין" size={36} y={200} color={BRAND.gold} weight={500} />
      </div>

      {/* Grid */}
      {tools.slice(0, cols * rows).map((name, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const tileDelay = 0.6 + (col * 0.035) + (row * 0.06);
        const show = lt > tileDelay;
        const tLt = lt - tileDelay;
        const scale = show ? interpolate([0, 0.3], [0, 1], Easing.easeOutBack)(tLt) : 0;
        const tOp = show ? Math.min(1, tLt / 0.25) : 0;
        const hue = (i * 13) % 360;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: startX + col * (cellW + gap),
            top: startY + row * (cellH + gap),
            width: cellW, height: cellH,
            transform: `scale(${scale})`, opacity: tOp,
            borderRadius: 18,
            background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
            border: `1.5px solid hsla(${hue}, 70%, 60%, 0.4)`,
            boxShadow: `0 0 24px hsla(${hue}, 70%, 60%, 0.2)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            direction: 'rtl', fontFamily: HEB.fontFamily,
            fontSize: 22, fontWeight: 700, color: BRAND.text,
            textAlign: 'center', padding: 12,
            backdropFilter: 'blur(8px)',
          }}>{name}</div>
        );
      })}

      {lt > 5 && (
        <div style={{ opacity: Math.min(1, (lt - 5) / 0.3), transform: `scale(${interpolate([5, 5.3], [0.7, 1], Easing.easeOutBack)(lt)})`, transformOrigin: '50% 100%' }}>
          <BigText text="...ועוד" size={48} y={1000} color={BRAND.goldLight} weight={700} />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 7: TESTIMONIALS — real customer quotes (46 - 54s)
// ══════════════════════════════════════════════════════════════════════════
function Scene7_Testimonials() {
  const { localTime: lt } = useSprite();
  const op = interpolate([0, 0.3, 7.5, 8], [0, 1, 1, 0], Easing.linear)(lt);

  const quotes = [
    { img: 'shots/t-mordechai.png', name: 'מרדכי', text: '"תודה רבה על הסקריפט המטורף ועוד בכזה מחיר! אשריך לגמרי!"', show: 0.3, dur: 1.6 },
    { img: 'shots/t-rimon.png', name: 'סטודיו רימון', text: '"המימוש הראשוני נראה מדהים ביותר! הסקריפט הולך להרוויח הרבה תורה ותפילה!"', show: 1.9, dur: 1.6 },
    { img: 'shots/t-tzach.png', name: 'צח מלול', text: '"בתור חובב אינדיזיין מושבע — הסקריפט הזה לא עוד סקריפט ברשימה, אלא ממש שינוי מציאות."', show: 3.5, dur: 1.6 },
    { img: 'shots/t-hezi.png', name: 'תא חזי', text: '"צעד ענק וחשוב בהטמעת שיטות עבודה שכולנו/רובנו מכירים, בתוך אינדיזיין!"', show: 5.1, dur: 1.6 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, background: '#080810' }}>
      <RgbBG intensity={0.5} />
      <Particles count={25} seed={7} />

      {/* Header */}
      <div style={{ opacity: Math.min(1, lt / 0.3) }}>
        <BigText text="המשתמשים שלנו אומרים" size={56} y={60} color={BRAND.muted} weight={500} />
        <RgbHeadline text="מקצוענים כבר שם" size={130} y={130} />
      </div>

      {quotes.map((q, i) => {
        const shown = lt > q.show;
        const qLt = lt - q.show;
        const visible = qLt < q.dur;
        if (!shown || !visible) return null;

        const entryOp = Math.min(1, qLt / 0.2);
        const exitOp = qLt > q.dur - 0.25 ? Math.max(0, 1 - (qLt - (q.dur - 0.25)) / 0.25) : 1;
        const qOp = Math.min(entryOp, exitOp);
        const slideX = interpolate([0, 0.3], [80, 0], Easing.easeOutBack)(qLt);

        return (
          <div key={i} style={{
            position: 'absolute', left: 120, right: 120, top: 350,
            opacity: qOp, transform: `translateX(${slideX}px)`,
            display: 'flex', alignItems: 'center', gap: 50, direction: 'rtl',
            fontFamily: HEB.fontFamily,
          }}>
            {/* Avatar */}
            <div style={{
              width: 320, height: 320, borderRadius: 20,
              overflow: 'hidden', flexShrink: 0,
              border: `4px solid ${BRAND.gold}`,
              boxShadow: `0 20px 80px rgba(212,168,67,0.5)`,
              background: '#1a1a1a',
            }}>
              <img src={q.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }} />
            </div>

            {/* Quote */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 200, lineHeight: 0.6, color: BRAND.gold,
                opacity: 0.4, fontFamily: 'Georgia, serif', marginBottom: -20,
              }}>"</div>
              <div style={{
                fontSize: 54, fontWeight: 700, color: BRAND.text,
                lineHeight: 1.3, marginBottom: 30,
                textWrap: 'pretty',
              }}>{q.text}</div>
              <div style={{
                fontSize: 36, fontWeight: 800, color: BRAND.gold,
              }}>— {q.name}</div>
            </div>
          </div>
        );
      })}

      {/* Progress dots */}
      <div style={{
        position: 'absolute', bottom: 80, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 14,
      }}>
        {quotes.map((q, i) => {
          const active = lt >= q.show && lt < q.show + q.dur;
          return (
            <div key={i} style={{
              width: active ? 50 : 14, height: 14, borderRadius: 7,
              background: active ? BRAND.gold : 'rgba(255,255,255,0.2)',
              transition: 'none',
            }} />
          );
        })}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 8 (was 7): IMPACT — "מפלצת של פרודקטיביות!!" (46 - 54s)
// ══════════════════════════════════════════════════════════════════════════
function Scene7_Monster() {
  const { localTime: lt } = useSprite();
  const t = useTime();
  const op = interpolate([0, 0.3, 7.5, 8], [0, 1, 1, 0], Easing.linear)(lt);

  // Text slams in
  const scale = interpolate([0, 0.3, 0.5, 6.5, 7], [3, 0.95, 1, 1, 1.1], Easing.easeOutExpo)(lt);
  const shake = lt < 0.4 ? Math.sin(lt * 200) * (1 - lt / 0.4) * 12 : 0;

  // Stat counters
  const stat1 = Math.floor(interpolate([1.5, 3.5], [0, 300], Easing.easeOutCubic)(lt));
  const stat2 = Math.floor(interpolate([2.0, 4.0], [0, 40], Easing.easeOutCubic)(lt));
  const stat3 = Math.floor(interpolate([2.5, 4.5], [0, 2], Easing.easeOutCubic)(lt));

  const zoomPulse = 1 + Math.sin(t * 8) * 0.02;

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, overflow: 'hidden' }}>
      {/* Intense bg */}
      <RgbBG intensity={1.6} />
      <GridFloor opacity={0.4} />
      <Particles count={60} seed={7} />

      {/* Radial zoom lines */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.04) 0deg, transparent 2deg 10deg)',
        animation: `none`, transform: `scale(${zoomPulse})`,
      }} />

      <div style={{ position: 'absolute', inset: 0, transform: `scale(${scale}) translateX(${shake}px)`, transformOrigin: '50% 50%' }}>
        <RgbHeadline text="מפלצת של" size={180} y={240} />
        <RgbHeadline text="פרודקטיביות!!" size={220} y={420} />
      </div>

      {/* Stats below */}
      {lt > 1.5 && (
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 720,
          display: 'flex', justifyContent: 'center', gap: 80,
          direction: 'rtl', fontFamily: HEB.fontFamily,
        }}>
          {[
            { num: stat1, suffix: '', label: 'עמודים בספר', color: BRAND.gold, show: 1.5 },
            { num: stat2, suffix: '+', label: 'כלים חכמים', color: BRAND.goldLight, show: 2.0 },
            { num: stat3, suffix: ' דק׳', label: 'עד שסיימתם', color: BRAND.green, show: 2.5 },
          ].map((s, i) => (
            <div key={i} style={{
              textAlign: 'center', opacity: lt > s.show ? Math.min(1, (lt - s.show) / 0.3) : 0,
              transform: `scale(${lt > s.show ? interpolate([s.show, s.show + 0.4], [0.6, 1], Easing.easeOutBack)(lt) : 0.6})`,
            }}>
              <div style={{
                fontSize: 140, fontWeight: 900, color: s.color, lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                textShadow: `0 0 40px ${s.color}`,
              }}>{s.num}{s.suffix}</div>
              <div style={{ fontSize: 32, fontWeight: 600, color: BRAND.text, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {lt > 5.5 && (
        <div style={{ opacity: Math.min(1, (lt - 5.5) / 0.4) }}>
          <BigText text="העתיד כבר כאן." size={56} y={990} color={BRAND.muted} weight={600} letterSpacing="0.1em" />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// SCENE 8: CTA — "התחילו בחינם" (54 - 60s)
// ══════════════════════════════════════════════════════════════════════════
function Scene8_CTA() {
  const { localTime: lt } = useSprite();
  const t = useTime();
  const op = interpolate([0, 0.3, 5.7, 6], [0, 1, 1, 1], Easing.linear)(lt);

  // Logo slams in
  const logoScale = interpolate([0, 0.5], [3, 1], Easing.easeOutExpo)(lt);
  const logoOp = Math.min(1, lt / 0.3);

  // CTA button pulses
  const pulse = 1 + Math.sin(t * 5) * 0.03;

  const btnScale = interpolate([1.2, 1.6], [0, 1], Easing.easeOutBack)(lt);
  const btnOp = Math.min(1, Math.max(0, (lt - 1.2) / 0.3));

  const urlOp = Math.min(1, Math.max(0, (lt - 2.2) / 0.3));

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op }}>
      <RgbBG intensity={0.8} />
      <GridFloor opacity={0.25} />
      <Particles count={40} seed={8} />

      {/* Golden ring behind logo */}
      <div style={{
        position: 'absolute', left: '50%', top: 300, transform: 'translateX(-50%)',
        width: 580, height: 580, borderRadius: '50%',
        background: `conic-gradient(from ${t * 80}deg, ${BRAND.gold}, ${BRAND.goldLight}, #fff, ${BRAND.goldLight}, ${BRAND.gold})`,
        opacity: logoOp * 0.5, filter: 'blur(50px)',
      }} />

      {/* Logo */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 280,
        textAlign: 'center', direction: 'rtl', fontFamily: HEB.fontFamily,
        opacity: logoOp, transform: `scale(${logoScale})`,
      }}>
        <div style={{
          fontSize: 240, fontWeight: 900, lineHeight: 1,
          background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.goldLight}, ${BRAND.gold})`,
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.04em',
          filter: `drop-shadow(0 12px 60px rgba(212,168,67,0.6))`,
        }}>שלמות AI</div>
      </div>

      {/* CTA button */}
      <div style={{
        position: 'absolute', left: '50%', top: 700,
        transform: `translateX(-50%) scale(${btnScale * pulse})`,
        opacity: btnOp,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 18,
          padding: '28px 72px', borderRadius: 999,
          background: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.goldLight})`,
          color: '#000', fontFamily: HEB.fontFamily,
          fontSize: 56, fontWeight: 900, direction: 'rtl',
          boxShadow: `0 20px 80px rgba(212,168,67,0.6), 0 0 0 4px rgba(212,168,67,0.2)`,
          letterSpacing: '-0.01em',
        }}>
          <span>התחילו בחינם</span>
          <span style={{
            display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: BRAND.red,
            boxShadow: `0 0 20px ${BRAND.red}`,
          }} />
        </div>
        <div style={{
          textAlign: 'center', marginTop: 22,
          fontSize: 36, fontWeight: 600, color: BRAND.text, direction: 'rtl',
          fontFamily: HEB.fontFamily,
        }}>10 נקודות AI חינם ∙ כל יום</div>
      </div>

      {/* URL */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 60,
        textAlign: 'center', opacity: urlOp,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 40, fontWeight: 700, color: BRAND.goldLight,
        letterSpacing: '0.05em',
      }}>shlemut-ai.com</div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// MASTER: Composition
// ══════════════════════════════════════════════════════════════════════════
function Composition() {
  // Kick times — synced with typical EDM @ 120bpm → kick every 0.5s
  // Pick key accent kicks to flash on
  const kicks = [
    0, 4, 10, 18, 28, 38, 46, 54, // scene changes
    6, 8, 12, 14, 16, 20, 22, 24, 26, 30, 32, 34, 36, 40, 42, 44, 48, 50, 52, 56, 58,
  ];

  return (
    <>
      {/* Background persistent */}
      <div style={{ position: 'absolute', inset: 0, background: BRAND.bgDeep }} />

      <Sprite start={0} end={4}><Scene1_Logo /></Sprite>
      <Sprite start={4} end={9}><Scene1b_Mockup /></Sprite>
      <Sprite start={9} end={14}><Scene2_TheEasyLife /></Sprite>
      <Sprite start={14} end={20}><Scene3_OldWay /></Sprite>
      <Sprite start={20} end={28}><Scene4_AiTakeover /></Sprite>
      <Sprite start={28} end={36}><Scene5_Speed /></Sprite>
      <Sprite start={36} end={42}><Scene6_ToolsGrid /></Sprite>
      <Sprite start={42} end={49}><Scene7_Testimonials /></Sprite>
      <Sprite start={49} end={55}><Scene7_Monster /></Sprite>
      <Sprite start={55} end={60}><Scene8_CTA /></Sprite>

      {/* Global kick flash */}
      <Kick times={kicks} dur={0.1} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        zIndex: 50,
      }} />
    </>
  );
}

Object.assign(window, {
  Composition, Scene1_Logo, Scene1b_Mockup, Scene2_TheEasyLife, Scene3_OldWay, Scene4_AiTakeover,
  Scene5_Speed, Scene6_ToolsGrid, Scene7_Testimonials, Scene7_Monster, Scene8_CTA, BRAND,
});
