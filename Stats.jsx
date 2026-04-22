// 6-up stats row — animated: float, gold orb, pulsing ping, conic ring on hover, flash-in number.
const Stats = () => {
  const items = [
    { num: '40+', lab: 'כלים אוטומטיים' },
    { num: '114', lab: 'פקודות AI' },
    { num: '300ms', lab: 'עימוד עמוד' },
    { num: '100%', lab: 'תמיכה בעברית' },
    { num: '6', lab: 'מנועי AI' },
    { num: 'OFFLINE', lab: 'עובד אופליין' },
  ];
  return (
    <section style={{ padding: '0 0 60px' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14, maxWidth: 1000, margin: '0 auto' }}>
          {items.map((it, i) => {
            const isOffline = it.num === 'OFFLINE';
            const glow = isOffline ? 'rgba(0,223,216,.55)' : 'rgba(212,168,67,.5)';
            const numGrad = isOffline
              ? 'linear-gradient(180deg,#baffef,#00dfd8 50%,#00837e)'
              : 'linear-gradient(180deg,#f5d87a,#d4a843 45%,#a67f2e)';
            const pingColor = isOffline ? '#00dfd8' : '#d4a843';
            return (
              <div key={it.lab} className="stat-card" style={{
                position: 'relative', textAlign: 'center', padding: '22px 10px 18px',
                background: 'linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.015))',
                border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, overflow: 'hidden',
                animation: `statFloat 5s ease-in-out infinite ${-i * 0.8}s`,
              }}>
                <div style={{
                  position: 'absolute', width: 80, height: 80, borderRadius: '50%', filter: 'blur(24px)',
                  background: `radial-gradient(circle,${glow},transparent 70%)`,
                  top: 4, left: '50%', transform: 'translateX(-50%)', zIndex: 0,
                  animation: `orbPulse 3.5s ease-in-out infinite ${-i * 0.8}s`,
                }} />
                <span style={{
                  position: 'absolute', top: 10, right: 10, width: 6, height: 6, borderRadius: '50%',
                  background: pingColor,
                  animation: `ping 2s ease-in-out infinite ${-i * 0.4}s`,
                }} />
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontSize: it.num.length > 5 ? '1.1rem' : '1.75rem',
                  fontWeight: 900, display: 'block', lineHeight: 1,
                  background: numGrad,
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 2px 8px ${glow})`,
                  animation: `flashIn .9s ease-out ${i * 0.1}s backwards`,
                }}>{it.num}</span>
                <span style={{ position: 'relative', zIndex: 1, fontSize: '.78rem', color: 'var(--muted)', marginTop: 6, display: 'block' }}>{it.lab}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { Stats });
