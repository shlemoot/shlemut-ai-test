// Floating music player + autoplay with start-at-middle + user-gesture fallback.
const MusicPlayer = ({ entered }) => {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [vol, setVol] = React.useState(90);
  const startedRef = React.useRef(false);

  const startFromMiddle = React.useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (a.duration && isFinite(a.duration)) {
        a.currentTime = a.duration * 0.25;
      }
    } catch (e) {}
    a.volume = vol / 100;
    const p = a.play();
    if (p && p.then) p.then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [vol]);

  // When user clicks "enter" the site, fire off playback. Also set a one-shot
  // fallback on the next pointer interaction in case autoplay is blocked.
  React.useEffect(() => {
    if (!entered || startedRef.current) return;
    startedRef.current = true;
    const a = audioRef.current;
    if (!a) return;
    const kick = () => startFromMiddle();
    if (a.readyState >= 1) kick();
    else a.addEventListener('loadedmetadata', kick, { once: true });

    const fallback = () => { if (!playing) kick(); };
    window.addEventListener('pointerdown', fallback, { once: true });
    return () => window.removeEventListener('pointerdown', fallback);
  }, [entered, startFromMiddle, playing]);

  // Listen for promo iframe messages — mute when video plays, resume when it ends
  React.useEffect(() => {
    const pausedByPromoRef = { current: false };
    const handler = (e) => {
      if (!e.data || e.data.source !== 'shlemut-promo') return;
      const a = audioRef.current;
      if (!a) return;
      if (e.data.type === 'promo-play') {
        if (!a.paused) {
          pausedByPromoRef.current = true;
          a.pause();
          setPlaying(false);
        }
      } else if (e.data.type === 'promo-end') {
        if (pausedByPromoRef.current) {
          pausedByPromoRef.current = false;
          a.volume = vol / 100;
          a.play().then(() => setPlaying(true)).catch(() => {});
        }
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [vol]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.volume = vol / 100;
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const setVolume = (v) => {
    setVol(v);
    if (audioRef.current) audioRef.current.volume = v / 100;
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" crossOrigin="anonymous" src="https://raw.githubusercontent.com/shlemoot/shlemut-ai-site/main/assets/audio/bg-music.mp3" />
      <div style={{
        position: 'fixed', bottom: 20, left: 20, zIndex: 9999,
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'rgba(20,20,24,.85)', backdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(212,168,67,.35)', borderRadius: 40,
        padding: '8px 14px 8px 8px',
        boxShadow: '0 8px 28px rgba(0,0,0,.5)',
      }}>
        <button onClick={toggle} title={playing ? 'השתק' : 'הפעל'} style={{
          width: 36, height: 36, borderRadius: '50%', border: 'none',
          background: playing ? 'linear-gradient(135deg,#d4a843,#e8c460)' : 'rgba(255,255,255,.08)',
          color: playing ? '#000' : '#fff', fontSize: '1rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: playing ? 'orbPulse 2s ease-in-out infinite' : 'none',
        }}>
          {playing ? '🔊' : '🔇'}
        </button>
        <input type="range" min="0" max="100" value={vol}
          onChange={(e) => setVolume(+e.target.value)}
          style={{ width: 90, accentColor: '#d4a843' }} />
        <span style={{ fontSize: '.72rem', color: 'var(--muted-light)', minWidth: 32 }}>{vol}%</span>
      </div>
    </>
  );
};
Object.assign(window, { MusicPlayer });
