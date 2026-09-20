# 🚀 NexusTI — Soluções em Tecnologia & Suporte Técnico

Website institucional completo, moderno, profissional, responsivo e interativo para empresa de serviços de TI e suporte técnico em **Paraipaba — Ceará**.

---

## 🌟 Principais Recursos

- **Identidade Visual Provisória e Centralizada**: Altere o nome da empresa, contatos e mensagens em um único arquivo (`js/config.js`) sem precisar alterar múltiplos pontos do HTML.
- **Sistema de Temas Claro & Escuro (Dark/Light Mode)**: Alternância suave com persistência no `localStorage` e paleta tecnológica profissional (Azul Escuro, Ciano, Grafite e Branco).
- **Integração Completa com WhatsApp**:
  - Mensagens personalizadas e contextuais para cada um dos 10 serviços oferecidos.
  - Seletor inteligente para alternar entre os números **(85) 99241-1348** e **(85) 99918-6210**.
  - Botão flutuante de WhatsApp fixo com animação de pulso.
- **10 Serviços Especializados**:
  1. 🖥️ Manutenção de computadores
  2. 🔧 Montagem de PC
  3. 💻 Arquitetura de computadores
  4. 🛠️ Diagnóstico e resolução de problemas
  5. ⚙️ Instalação de sistemas operacionais
  6. 📦 Instalação e configuração de softwares
  7. 📄 Pacote Office
  8. 🔍 Revisão de sistemas
  9. 🌐 Criação de sites
  10. 🖧 Suporte técnico
- **Orçamento Personalizado**: Apresentação transparente dos critérios de precificação sem preços fictícios.
- **Como Funciona**: Timeline interativa fluida (horizontal no desktop e vertical no celular).
- **Atendimento Presencial e Remoto**: Ações diretas para atendimento domiciliar/comercial, suporte remoto e localização em Paraipaba - CE.
- **Criação de Sites para Pequenas Empresas**: Seção dedicada com benefícios e incentivo à presença digital de comércios locais.
- **Integração com GitHub API**: Carrega automaticamente os repositórios públicos de [github.com/matheus647](https://github.com/matheus647/) com fallback resiliente.
- **Formulário Interativo de Contato**: Valida os campos e gera uma mensagem estruturada no WhatsApp.
- **Performance & Acessibilidade**: HTML5 semântico, SEO com Open Graph, microinterações, canvas interativo e suporte a `prefers-reduced-motion`.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Estrutura semântica principal e SEO
├── css/
│   └── style.css       # Design System completo, temas claro/escuro e responsividade
├── js/
│   ├── config.js       # PONTO CENTRAL DE CONFIGURAÇÃO DA EMPRESA
│   ├── app.js          # Lógica principal, WhatsApp router, tema, GitHub API e form
│   └── hero-canvas.js  # Efeito de nós e partículas tecnológicas no Hero
├── server/
│   └── server.js       # Servidor opcional Node.js + Express
├── package.json        # Configuração de scripts e dependências
└── README.md           # Documentação e manual de personalização
```

---

## ⚡ Como Executar o Projeto

### Opção 1: Direto no Navegador (Sem Instalação)
Basta dar um duplo clique no arquivo `index.html` ou abri-lo em qualquer navegador (Google Chrome, Edge, Firefox, etc.). Não é necessária nenhuma instalação.

### Opção 2: Com VS Code Live Server
Abra a pasta do projeto no VS Code, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

### Opção 3: Com Node.js + Express (Opcional)
Se desejar executar utilizando o backend em Node.js:

1. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse no navegador: `http://localhost:3000`

---

## ⚙️ Como Personalizar os Dados em 1 Único Local (`js/config.js`)

Todos os dados da empresa estão concentrados no arquivo **`js/config.js`**. Veja abaixo como alterar cada informação:

### 1. Alterar o Nome da Empresa
Abra `js/config.js` e localize a chave `company`:
```javascript
company: {
  name: "Seu Novo Nome de Empresa",       // Nome completo
  shortName: "NovoNome",                  // Nome curto para logotipo
  slogan: "Seu slogan aqui...",           // Slogan principal
  cityState: "Paraipaba — Ceará",         // Cidade e Estado
  copyrightYear: "2026"
}
```

### 2. Alterar os Números de Telefone / WhatsApp
No mesmo arquivo `js/config.js`, na chave `contacts`:
```javascript
contacts: {
  whatsapp1: {
    display: "(85) 99241-1348",           // Como aparece escrito na tela
    rawNumber: "5585992411348",           // Apenas números (com código 55 do Brasil)
    label: "WhatsApp Principal"
  },
  whatsapp2: {
    display: "(85) 99918-6210",
    rawNumber: "5585999186210",
    label: "WhatsApp Secundário"
  }
}
```

### 3. Alterar o E-mail
```javascript
email: "seuemail@exemplo.com",
```

### 4. Alterar o Link do GitHub
```javascript
githubUrl: "https://github.com/seunome/",
githubUsername: "seunome",
```

### 5. Alterar a Localização no Google Maps
```javascript
locationUrl: "https://www.google.com/maps/search/?api=1&query=Sua+Rua+Paraipaba+CE",
```

### 6. Alterar ou Adicionar Serviços
Dentro de `SITE_CONFIG.services`, você pode editar os títulos, descrições, tags e a mensagem padrão que será enviada no WhatsApp para cada serviço.

### 7. Alterar Mensagens Padrão do WhatsApp
Dentro de `SITE_CONFIG.whatsappMessages`, configure os textos enviados pelos botões de orçamento, atendimento presencial, remoto e desenvolvimento de sites.

---

## 🌐 Como Hospedar Gratuitamente

- **GitHub Pages**: Crie um repositório no GitHub, suba os arquivos e ative o GitHub Pages nas configurações do repositório (Branch `main` / pasta raiz).
- **Vercel / Netlify**: Arraste a pasta do projeto diretamente para o painel da plataforma para publicação instantânea com certificado SSL grátis.
