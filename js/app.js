/**
 * ====================================================================
 * APLICAÇÃO PRINCIPAL (APP.JS) - TI & SUPORTE TÉCNICO
 * ====================================================================
 * Gerencia tema, hidratação de dados centralizados, menu mobile,
 * WhatsApp contextual direto, integração com GitHub e formulário.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // CONFIGURAÇÃO DOS NÚMEROS DE WHATSAPP
  // ==========================================
  const whatsappNumbers = [
    (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.contacts?.whatsapp1?.rawNumber) || "5585992411348",
    (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.contacts?.whatsapp2?.rawNumber) || "5585999186210"
  ];

  /**
   * Abre diretamente o WhatsApp com o número e a mensagem codificada
   */
  function sendToWhatsApp(rawNumber, message) {
    const targetNumber = rawNumber || whatsappNumbers[0];
    const defaultMsg = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappMessages?.general) 
      || "Olá! Gostaria de solicitar um atendimento. Vim pelo site e gostaria de saber mais sobre os serviços disponíveis.";
    const finalMsg = message || defaultMsg;
    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // ==========================================
  // 1. GERENCIAMENTO DE TEMA (DARK / LIGHT)
  // ==========================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('site_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Define tema inicial
  const initialTheme = storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', initialTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('site_theme', newTheme);
      themeToggleBtn.setAttribute('aria-label', newTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    });
  }

  // ==========================================
  // 2. CENTRALIZAÇÃO E HIDRATAÇÃO DE DADOS (DOM)
  // ==========================================
  function hydrateConfig() {
    if (typeof SITE_CONFIG === 'undefined') return;

    // Atualiza elementos com [data-config]
    document.querySelectorAll('[data-config]').forEach(el => {
      const path = el.getAttribute('data-config');
      const value = getNestedValue(SITE_CONFIG, path);
      if (value !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = value;
        } else if (el.tagName === 'A') {
          if (path.includes('whatsapp1')) {
            el.href = `https://wa.me/${SITE_CONFIG.contacts.whatsapp1.rawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.general)}`;
            el.target = "_blank";
            el.rel = "noopener noreferrer";
            el.textContent = value;
          } else if (path.includes('whatsapp2')) {
            el.href = `https://wa.me/${SITE_CONFIG.contacts.whatsapp2.rawNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessages.general)}`;
            el.target = "_blank";
            el.rel = "noopener noreferrer";
            el.textContent = value;
          } else if (path.includes('email')) {
            el.href = `mailto:${value}`;
            el.textContent = value;
          } else if (path.includes('githubUrl')) {
            el.href = value;
          } else if (path.includes('locationUrl')) {
            el.href = value;
          } else {
            el.textContent = value;
          }
        } else {
          el.textContent = value;
        }
      }
    });

    // Renderiza os 10 serviços
    renderServices();

    // Renderiza etapas do Como Funciona
    renderTimeline();

    // Renderiza benefícios de desenvolvimento web
    renderWebBenefits();

    // Atualiza opções do select de serviços no formulário
    populateServiceSelect();
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  // ==========================================
  // 3. RENDERIZAÇÃO DOS SERVIÇOS (10 CARDS)
  // ==========================================
  function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid || !SITE_CONFIG.services) return;

    servicesGrid.innerHTML = '';

    SITE_CONFIG.services.forEach((service, index) => {
      const card = document.createElement('div');
      card.className = `service-card reveal reveal-delay-${(index % 3) + 1}`;
      
      const tagsHtml = service.tags
        .map(tag => `<span class="service-tag">${escapeHtml(tag)}</span>`)
        .join('');

      card.innerHTML = `
        <div class="service-card-top">
          <div class="service-icon-wrapper" aria-hidden="true">${service.emoji}</div>
          <h3 class="service-title">${escapeHtml(service.title)}</h3>
          <p class="service-desc">${escapeHtml(service.shortDesc)}</p>
          <div class="service-tags">${tagsHtml}</div>
        </div>
        <div class="service-card-bottom">
          <button type="button" class="btn btn-whatsapp btn-sm btn-block js-whatsapp-trigger" 
                  data-message="${encodeURIComponent(service.whatsappMessage)}"
                  aria-label="Solicitar serviço de ${escapeHtml(service.title)} pelo WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Solicitar este serviço
          </button>
        </div>
      `;

      servicesGrid.appendChild(card);
    });
  }

  // ==========================================
  // 4. RENDERIZAÇÃO DA TIMELINE E BENEFÍCIOS
  // ==========================================
  function renderTimeline() {
    const track = document.getElementById('timelineTrack');
    if (!track || !SITE_CONFIG.steps) return;

    track.innerHTML = '';
    SITE_CONFIG.steps.forEach((step, index) => {
      const card = document.createElement('div');
      card.className = `timeline-step-card reveal reveal-delay-${index + 1}`;
      card.innerHTML = `
        <div class="step-number-circle">${step.step}</div>
        <h4 class="step-title">${escapeHtml(step.title)}</h4>
        <p class="step-desc">${escapeHtml(step.desc)}</p>
      `;
      track.appendChild(card);
    });
  }

  function renderWebBenefits() {
    const grid = document.getElementById('webBenefitsGrid');
    if (!grid || !SITE_CONFIG.webBenefits) return;

    grid.innerHTML = '';
    SITE_CONFIG.webBenefits.forEach((b, index) => {
      const card = document.createElement('div');
      card.className = `benefit-card reveal reveal-delay-${(index % 3) + 1}`;
      card.innerHTML = `
        <div class="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="benefit-info">
          <h4>${escapeHtml(b.title)}</h4>
          <p>${escapeHtml(b.desc)}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function populateServiceSelect() {
    const select = document.getElementById('serviceSelect');
    if (!select || !SITE_CONFIG.services) return;

    select.innerHTML = '<option value="" disabled selected>Selecione o tipo de serviço desejado...</option>';
    SITE_CONFIG.services.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.title;
      opt.textContent = `${s.emoji} ${s.title}`;
      select.appendChild(opt);
    });
    const optOther = document.createElement('option');
    optOther.value = "Outro / Dúvida geral";
    optOther.textContent = "💡 Outro / Dúvida geral";
    select.appendChild(optOther);
  }

  // ==========================================
  // 5. DELEGAÇÃO DE EVENTOS DE WHATSAPP (DIRETO)
  // ==========================================
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.js-whatsapp-trigger');
    if (!trigger) return;

    e.preventDefault();

    const rawMsg = trigger.getAttribute('data-message');
    const specificNumber = trigger.getAttribute('data-number');
    const targetNumber = specificNumber === 'secondary' ? whatsappNumbers[1] : whatsappNumbers[0];

    let message = "";
    if (rawMsg) {
      message = decodeURIComponent(rawMsg);
    } else if (trigger.classList.contains('floating-whatsapp-btn')) {
      message = SITE_CONFIG.whatsappMessages.floating;
    } else {
      message = SITE_CONFIG.whatsappMessages.general;
    }

    sendToWhatsApp(targetNumber, message);
  });

  // ==========================================
  // 6. FORMULÁRIO DE CONTATO ESTRUTURADO
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const service = document.getElementById('serviceSelect').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone || !service) {
        alert('Por favor, preencha seu nome, WhatsApp e selecione o serviço desejado.');
        return;
      }

      // Mensagem estruturada conforme especificação
      const structuredMessage = 
`Olá! Vim pelo site e gostaria de solicitar atendimento.

Nome: ${name}
WhatsApp: ${phone}
Serviço: ${service}

Mensagem:
${message || 'Gostaria de saber mais sobre o atendimento e solicitar um orçamento.'}`;

      sendToWhatsApp(whatsappNumbers[0], structuredMessage);
    });
  }

  // ==========================================
  // 7. INTEGRAÇÃO DINÂMICA COM API DO GITHUB
  // ==========================================
  async function fetchGitHubRepos() {
    const reposGrid = document.getElementById('githubReposGrid');
    if (!reposGrid) return;

    const username = SITE_CONFIG.contacts.githubUsername || 'matheus647';
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Falha na API do GitHub');
      
      const repos = await response.json();
      
      if (!Array.isArray(repos) || repos.length === 0) {
        renderGitHubFallback(reposGrid);
        return;
      }

      reposGrid.innerHTML = '';
      repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repo-card reveal';
        
        const description = repo.description || 'Projeto e código-fonte desenvolvido por ' + username;
        const language = repo.language || 'Código / Web';

        repoCard.innerHTML = `
          <div>
            <div class="repo-header">
              <div class="repo-icon-name">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-name">${escapeHtml(repo.name)}</a>
              </div>
            </div>
            <p class="repo-desc">${escapeHtml(description)}</p>
          </div>
          <div class="repo-footer">
            <span class="repo-lang">
              <span class="lang-dot"></span>
              ${escapeHtml(language)}
            </span>
            <span class="repo-stars">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              ${repo.stargazers_count}
            </span>
          </div>
        `;
        reposGrid.appendChild(repoCard);
      });

      initScrollReveal();

    } catch (err) {
      console.warn('API do GitHub indisponível ou limitada, utilizando fallback visual:', err);
      renderGitHubFallback(reposGrid);
    }
  }

  function renderGitHubFallback(container) {
    container.innerHTML = `
      <div class="repo-card reveal">
        <div>
          <div class="repo-header">
            <div class="repo-icon-name">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <a href="https://github.com/matheus647/" target="_blank" rel="noopener noreferrer" class="repo-name">PORTIFOLIO</a>
            </div>
          </div>
          <p class="repo-desc">Repositório com projetos institucionais, scripts e soluções tecnológicas.</p>
        </div>
        <div class="repo-footer">
          <span class="repo-lang"><span class="lang-dot"></span>JavaScript / HTML</span>
          <span class="repo-stars">★ Público</span>
        </div>
      </div>
      <div class="repo-card reveal">
        <div>
          <div class="repo-header">
            <div class="repo-icon-name">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <a href="https://github.com/matheus647/" target="_blank" rel="noopener noreferrer" class="repo-name">web-solutions</a>
            </div>
          </div>
          <p class="repo-desc">Desenvolvimento de sites modernos para pequenas empresas e suporte técnico.</p>
        </div>
        <div class="repo-footer">
          <span class="repo-lang"><span class="lang-dot"></span>CSS / JS</span>
          <span class="repo-stars">★ Público</span>
        </div>
      </div>
    `;
    initScrollReveal();
  }

  // ==========================================
  // 8. HEADER DINÂMICO & MENU MOBILE
  // ==========================================
  const header = document.querySelector('.site-header');
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  function openMobileMenu() {
    if (mobileNavDrawer && mobileDrawerOverlay) {
      mobileNavDrawer.classList.add('active');
      mobileDrawerOverlay.classList.add('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNavDrawer && mobileDrawerOverlay) {
      mobileNavDrawer.classList.remove('active');
      mobileDrawerOverlay.classList.remove('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Tecla Escape fecha drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // ==========================================
  // 9. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // Utilitário de escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Inicialização
  hydrateConfig();
  initScrollReveal();
  fetchGitHubRepos();
});
