/**
 * ====================================================================
 * CANVAS DE REDE & NÓS TECNOLÓGICOS (HERO BACKGROUND)
 * ====================================================================
 * Efeito visual leve e moderno com partículas e conexões de rede,
 * adaptado a temas claro/escuro e respeitando prefers-reduced-motion.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];

  // Verifica preferências de acessibilidade
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Configuração de nós
  const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 28), 45);
  const MAX_DISTANCE = 130;

  function initDimensions() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(themeColor) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = themeColor;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections(lineColor) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          const opacity = (1 - distance / MAX_DISTANCE) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor.replace('ALPHA', opacity.toFixed(3));
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const nodeColor = isDark ? 'rgba(0, 229, 255, 0.6)' : 'rgba(2, 132, 199, 0.6)';
    const lineColor = isDark ? 'rgba(0, 229, 255, ALPHA)' : 'rgba(2, 132, 199, ALPHA)';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(nodeColor);
    }

    drawConnections(lineColor);

    animationFrameId = requestAnimationFrame(render);
  }

  window.addEventListener('resize', () => {
    initDimensions();
    initParticles();
  });

  initDimensions();
  initParticles();
  render();
})();
