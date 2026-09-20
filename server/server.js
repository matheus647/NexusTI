/**
 * ====================================================================
 * SERVIDOR ESTÁTICO & API (NODE.JS + EXPRESS) - OPCIONAL
 * ====================================================================
 * Permite rodar o projeto localmente com Node.js ou em plataformas
 * como Render, Railway, Vercel ou VPS.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da raiz do projeto
const publicDirectoryPath = path.join(__dirname, '..');
app.use(express.static(publicDirectoryPath));

// Rota de Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'NexusTI Solutions API',
    location: 'Paraipaba - Ceará'
  });
});

// Rota Fallback para Single Page
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Servidor NexusTI rodando com sucesso!`);
  console.log(`📍 Ambiente: http://localhost:${PORT}`);
  console.log(`✨ Localização: Paraipaba — Ceará`);
  console.log(`====================================================`);
});
