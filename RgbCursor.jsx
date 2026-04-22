// RGB cursor — dot follows instantly, ring lerp-follows, hue cycles. Matches original site.
const RgbCursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  React.useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, hue = 0;
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = mx + 'px'; dotRef.current.style.top = my + 'px'; }
      hue = (hue + 0.5) % 360;
      document.documentElement.style.setProperty('--cursor-color', `hsl(${hue},100%,50%)`);
    };
    let raf;
    const tick = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(tick);
    };
    const over = (e) => {
      const hover = e.target.closest && e.target.closest('a,button,input,textarea,select,[role=button]');
      if (ringRef.current) ringRef.current.classList.toggle('hover', !!hover);
    };
    const down = () => ringRef.current && ringRef.current.classList.add('click');
    const up = () => ringRef.current && ringRef.current.classList.remove('click');
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};
Object.assign(window, { RgbCursor });
