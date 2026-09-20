/**
 * ====================================================================
 * ARQUIVO DE CONFIGURAÇÃO CENTRALIZADA DA EMPRESA
 * ====================================================================
 * Altere os dados neste arquivo para atualizar automaticamente o nome,
 * telefones, e-mail, redes e textos em todo o site sem precisar mexer no HTML!
 */

const SITE_CONFIG = {
  // --- IDENTIDADE DA EMPRESA ---
  company: {
    // Nome principal exibido no site
    name: "NexusTI Soluções em Tecnologia",
    
    // Nome curto/fantasia (usado em badges e rodapé)
    shortName: "NexusTI",
    
    // Slogan principal
    slogan: "Tecnologia, suporte e soluções para você e sua empresa.",
    
    // Subtítulo descritivo
    subheadline: "Suporte técnico especializado, manutenção de computadores, montagem de PCs de alta performance, instalação de sistemas e desenvolvimento de sites em Paraipaba e região.",
    
    // Cidade e Estado de atuação
    cityState: "Paraipaba — Ceará",
    
    // Ano de referência para direitos autorais
    copyrightYear: "2026",
    
    // Informações adicionais
    modalities: "Atendimento Presencial e Remoto"
  },

  // --- CONTATOS E REDES SOCIAIS ---
  contacts: {
    // Telefone WhatsApp 1 (Principal)
    whatsapp1: {
      display: "(85) 99241-1348",
      rawNumber: "5585992411348",
      label: "WhatsApp Principal"
    },
    
    // Telefone WhatsApp 2 (Alternativo)
    whatsapp2: {
      display: "(85) 99918-6210",
      rawNumber: "5585999186210",
      label: "WhatsApp Secundário"
    },
    
    // E-mail de atendimento
    email: "mathdasilva1201@gmail.com",
    
    // Perfil do GitHub da empresa/desenvolvedor
    githubUrl: "https://github.com/matheus647/",
    githubUsername: "matheus647",
    
    // Link de localização (Google Maps)
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Paraipaba+-+Cear%C3%A1"
  },

  // --- MENSAGENS PADRONIZADAS DO WHATSAPP ---
  whatsappMessages: {
    // Mensagem ao clicar no botão geral de "Solicitar Atendimento" / Header / Hero
    general: "Olá! Gostaria de solicitar um atendimento. Vim pelo site e gostaria de saber mais sobre os serviços disponíveis.",
    
    // Mensagem para o Botão Flutuante do WhatsApp
    floating: "Olá! Encontrei o site de vocês e gostaria de solicitar atendimento.",
    
    // Mensagem para solicitação de orçamento personalizado
    budget: "Olá! Vim pelo site e gostaria de solicitar um orçamento personalizado para serviços de tecnologia.",
    
    // Atendimento Presencial
    inPerson: "Olá! Vim pelo site e gostaria de solicitar um atendimento presencial na minha casa ou empresa em Paraipaba/região.",
    
    // Atendimento Remoto
    remote: "Olá! Vim pelo site e gostaria de solicitar atendimento técnico remoto.",
    
    // Criação de Sites
    webDevelopment: "Olá! Vim pelo site e tenho interesse na criação de um site para minha empresa. Gostaria de conversar sobre o projeto e solicitar um orçamento."
  },

  // --- CATÁLOGO DE SERVIÇOS (10 SERVIÇOS COM MENSAGENS ESPECÍFICAS) ---
  services: [
    {
      id: "manutencao-computadores",
      icon: "monitor",
      emoji: "🖥️",
      title: "Manutenção de Computadores",
      shortDesc: "Diagnóstico, revisão, manutenção preventiva/corretiva e resolução de problemas físicos e lógicos em computadores e notebooks.",
      tags: ["Limpeza interna", "Troca de pasta térmica", "Upgrade", "Reparo de peças"],
      whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um atendimento de manutenção de computadores. Gostaria de saber como funciona o serviço e solicitar um orçamento."
    },
    {
      id: "montagem-pc",
      icon: "cpu",
      emoji: "🔧",
      title: "Montagem de PC",
      shortDesc: "Montagem profissional e configuração de computadores personalizados conforme a necessidade e orçamento de cada cliente.",
      tags: ["PCs para trabalho", "PCs Gamer", "Cable Management", "Testes de estabilidade"],
      whatsappMessage: "Olá! Vim pelo site e tenho interesse no serviço de montagem de PC. Gostaria de conversar sobre a configuração e solicitar um orçamento."
    },
    {
      id: "arquitetura-computadores",
      icon: "layers",
      emoji: "💻",
      title: "Arquitetura de Computadores",
      shortDesc: "Orientação e configuração de componentes, análise de compatibilidade de hardware e dimensionamento ideal para diferentes aplicações.",
      tags: ["Análise de compatibilidade", "Consultoria de hardware", "Otimização de custos"],
      whatsappMessage: "Olá! Vim pelo site e gostaria de uma consultoria de arquitetura e configuração de computadores para escolher as peças ideais."
    },
    {
      id: "diagnostico-problemas",
      icon: "tool",
      emoji: "🛠️",
      title: "Diagnóstico e Resolução de Problemas",
      shortDesc: "Investigação minuciosa de falhas de hardware e software, lentidão, travamentos ou telas azuis, encontrando a solução definitiva.",
      tags: ["Lentidão e travamentos", "Telas de erro", "Falhas de inicialização", "Recuperação"],
      whatsappMessage: "Olá! Vim pelo site porque estou com um problema no meu computador e gostaria de solicitar um diagnóstico."
    },
    {
      id: "sistemas-operacionais",
      icon: "settings",
      emoji: "⚙️",
      title: "Instalação de Sistemas Operacionais",
      shortDesc: "Instalação limpa, formatação, atualização e configuração de sistemas operacionais (Windows/Linux) com drivers oficiais atualizados.",
      tags: ["Windows 10/11", "Distribuições Linux", "Backup de dados", "Drivers oficiais"],
      whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar a instalação de um sistema operacional. Gostaria de saber como funciona o atendimento."
    },
    {
      id: "instalacao-softwares",
      icon: "package",
      emoji: "📦",
      title: "Instalação e Configuração de Softwares",
      shortDesc: "Instalação e configuração de programas essenciais, utilitários, navegadores, leitores de PDF, ferramentas de trabalho e antivírus.",
      tags: ["Softwares essenciais", "Navegadores e utilitários", "Antivírus", "Otimização"],
      whatsappMessage: "Olá! Vim pelo site e preciso de ajuda com instalação e configuração de programas e softwares no meu computador."
    },
    {
      id: "pacote-office",
      icon: "file-text",
      emoji: "📄",
      title: "Pacote Office",
      shortDesc: "Instalação, ativação e configuração da suíte de escritório para produtividade, respeitando rigorosamente os termos de uso e licenciamento.",
      tags: ["Word, Excel, PowerPoint", "Configuração de e-mail", "Produtividade", "Licenciamento"],
      whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar suporte para instalação e configuração do Pacote Office."
    },
    {
      id: "revisao-sistemas",
      icon: "search",
      emoji: "🔍",
      title: "Revisão de Sistemas",
      shortDesc: "Verificação geral do sistema operacional, inicialização, integridade de disco, remoção de arquivos desnecessários e checagem de integridade.",
      tags: ["Checkup completo", "Otimização de inicialização", "Saúde do SSD/HD", "Segurança"],
      whatsappMessage: "Olá! Vim pelo site e gostaria de agendar uma revisão completa do sistema para melhorar o desempenho do meu computador."
    },
    {
      id: "criacao-sites",
      icon: "globe",
      emoji: "🌐",
      title: "Criação de Sites",
      shortDesc: "Desenvolvimento de sites institucionais, páginas de captura e catálogos digitais modernos para pequenas empresas e profissionais.",
      tags: ["100% Responsivo", "Otimizado para Google", "Botão WhatsApp", "Design moderno"],
      whatsappMessage: "Olá! Vim pelo site e tenho interesse na criação de um site para minha empresa. Gostaria de conversar sobre o projeto e solicitar um orçamento."
    },
    {
      id: "suporte-tecnico",
      icon: "headphones",
      emoji: "🖧",
      title: "Suporte Técnico",
      shortDesc: "Atendimento ágil para dúvidas e problemas gerais relacionados a tecnologia, periféricos, impressoras, redes e conectividade.",
      tags: ["Suporte ágil", "Impressoras e periféricos", "Redes e Wi-Fi", "Atendimento contínuo"],
      whatsappMessage: "Olá! Vim pelo site e preciso de suporte técnico para resolver um problema com meus equipamentos de informática."
    }
  ],

  // --- BENEFÍCIOS DO DESENVOLVIMENTO WEB ---
  webBenefits: [
    {
      title: "Presença Digital Marcante",
      desc: "Sua empresa visível 24 horas por dia para novos clientes que buscam por produtos e serviços na região."
    },
    {
      title: "Apresentação Profissional",
      desc: "Transmita credibilidade e autoridade no seu nicho com um design moderno, polido e elegante."
    },
    {
      title: "Divulgação de Serviços",
      desc: "Apresente detalhadamente o que você faz, fotos do seu trabalho e diferenciais do seu atendimento."
    },
    {
      title: "Conversão Direta no WhatsApp",
      desc: "Botões estratégicos que facilitam para o cliente iniciar uma conversa com um único clique."
    },
    {
      title: "Localização e Contato Fácil",
      desc: "Mapas integrados, telefones, e-mail e rotas para clientes encontrarem seu negócio rapidamente."
    },
    {
      title: "Otimização para Celular e SEO",
      desc: "Carregamento veloz, adaptado para qualquer celular e preparado para os mecanismos de busca."
    }
  ],

  // --- ETAPAS DO 'COMO FUNCIONA' ---
  steps: [
    {
      step: "01",
      title: "Entre em contato",
      desc: "Você nos envia uma mensagem no WhatsApp explicando o que está acontecendo com seu computador ou qual projeto deseja realizar."
    },
    {
      step: "02",
      title: "Analisamos a necessidade",
      desc: "Fazemos uma pré-avaliação do problema ou necessidade para definir o procedimento técnico mais eficiente e econômico."
    },
    {
      step: "03",
      title: "Definimos o atendimento",
      desc: "Identificamos se o serviço será realizado de forma remota, presencialmente em seu endereço ou em nosso ponto de suporte."
    },
    {
      step: "04",
      title: "Executamos o serviço",
      desc: "Realizamos a manutenção, configuração, montagem ou desenvolvimento com precisão técnica e as melhores práticas."
    },
    {
      step: "05",
      title: "Entregamos a solução",
      desc: "Seu computador, sistema ou site é entregue testado, com garantia de funcionamento e suporte pós-serviço."
    }
  ]
};

// Exporta globalmente para o navegador ou Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
