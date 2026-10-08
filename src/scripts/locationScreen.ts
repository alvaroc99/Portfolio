 const viewport = document.getElementById("viewport")!;
  const world = document.getElementById("world")!;
  const slides = [...document.querySelectorAll<HTMLElement>(".slide")];
  const arrows = [...document.querySelectorAll<HTMLButtonElement>(".arrow")];

  const DIRS: Record<string, [number, number]> = {
    left: [-1, 0], right: [1, 0], up: [0, -1], down: [0, 1],
  };

  let x = 0, y = 0;

  const coords = (s: HTMLElement) => [Number(s.dataset.x), Number(s.dataset.y)];
  const exists = (cx: number, cy: number) =>
    slides.some((s) => { const [sx, sy] = coords(s); return sx === cx && sy === cy; });

  // Coloca cada pantalla en su sitio del mapa
  slides.forEach((s) => {
    const [sx, sy] = coords(s);
    s.style.left = `${sx * 100}%`;
    s.style.top = `${sy * 100}%`;
  });

  function update() {
    world.style.transform = `translate(${-x * 100}%, ${-y * 100}%)`;
    arrows.forEach((a) => {
      const [dx, dy] = DIRS[a.dataset.dir!];
      a.hidden = !exists(x + dx, y + dy);
    });
    // evita desplazamientos raros del contenedor
    viewport.scrollTo(0, 0);
  }

  function go(nx: number, ny: number) {
    if (!exists(nx, ny)) return;
    x = nx; y = ny;
    update();
  }

  function goToId(id: string) {
    const slide = document.getElementById(id)?.closest<HTMLElement>(".slide");
    if (slide) { const [sx, sy] = coords(slide); go(sx, sy); }
  }

  // Flechas en pantalla
  arrows.forEach((a) =>
    a.addEventListener("click", () => {
      const [dx, dy] = DIRS[a.dataset.dir!];
      go(x + dx, y + dy);
    })
  );

  // Movimiento con teclado (flechas)
  addEventListener("keydown", (e) => {
    const map: Record<string, string> = {
      ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down",
    };
    const dir = map[e.key];
    if (!dir) return;
    const [dx, dy] = DIRS[dir];
    go(x + dx, y + dy);
  });

  // El menú del header (/#about, /#projects...) sigue funcionando
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/#"]').forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      goToId(link.hash.slice(1));
    })
  );
  document.querySelector<HTMLAnchorElement>('a[href="/"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    go(0, 0);
  });

  // Funcionamiento en moviles
  let startX = 0, startY = 0;
  addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
  }, { passive: true });
  addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 60) return;
    if (Math.abs(dx) > Math.abs(dy)) go(x + (dx < 0 ? 1 : -1), y);
    else go(x, y + (dy < 0 ? 1 : -1));
  }, { passive: true });

  // Visualiza la vista segun la url
  if (location.hash) goToId(location.hash.slice(1)); else update();