# 🚀 Deploy e Hospedagem - TecSaúde Brasil 2026

## GitHub Pages

### Configuração Atual

**Repositório:** https://github.com/guigonzalez/tecsaudebrasil  
**Site publicado:** https://guigonzalez.github.io/tecsaudebrasil/  
**Branch de deploy:** `main`  
**Pasta de origem:** `/` (raiz do repositório)

### Status do Deploy
```json
{
  "status": "built",
  "build_type": "legacy",
  "source": {
    "branch": "main",
    "path": "/"
  },
  "public": true,
  "https_enforced": true
}
```

## Processo de Deploy

### Workflow Automatizado
1. **Push para main** → Trigger automático do GitHub Pages
2. **Build process** → GitHub processa os arquivos estáticos
3. **Deploy** → Site atualizado automaticamente
4. **Cache invalidation** → CDN atualizado (até 10 minutos)

### Comandos Locais
```bash
# 1. Fazer alterações nos arquivos
# 2. Adicionar ao git
git add .

# 3. Commit das mudanças
git commit -m "Descrição das alterações"

# 4. Push para o repositório
git push origin main

# 5. Deploy automático será iniciado
```

## Estrutura de Arquivos para Deploy

### Arquivos Essenciais
```
tecsaudebrasil/
├── index.html          # Página principal (obrigatória)
├── 404.html           # Página de erro (opcional)
├── robots.txt         # SEO (opcional)
├── sitemap.xml        # SEO (opcional)
├── favicon.ico        # Ícone do site (recomendado)
└── outros arquivos... # CSS, JS, imagens, etc.
```

### Configurações Recomendadas

#### robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://guigonzalez.github.io/tecsaudebrasil/sitemap.xml
```

#### .gitignore (recomendado)
```gitignore
# Sistema
.DS_Store
Thumbs.db

# Logs
*.log

# Dependências (se usar build tools)
node_modules/
.npm

# Arquivos temporários
.tmp/
dist/
```

## Configurações de DNS (Futuro)

### Domínio Personalizado
Para usar um domínio personalizado (ex: tecsaudebrasil.com.br):

1. **Adicionar CNAME**:
   ```bash
   # Criar arquivo CNAME na raiz do repositório
   echo "tecsaudebrasil.com.br" > CNAME
   ```

2. **Configurar DNS**:
   ```dns
   # No provedor de DNS
   CNAME   www   guigonzalez.github.io
   A       @     185.199.108.153
   A       @     185.199.109.153
   A       @     185.199.110.153  
   A       @     185.199.111.153
   ```

3. **Verificar no GitHub**:
   - Settings > Pages > Custom domain
   - Adicionar domínio e verificar
   - Aguardar propagação DNS (até 48h)

## Monitoramento

### Status do Site
```bash
# Verificar se o site está online
curl -I https://guigonzalez.github.io/tecsaudebrasil/

# Resposta esperada
# HTTP/1.1 200 OK
```

### Performance Monitoring

#### Core Web Vitals
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

#### Uptime Monitoring
- **UptimeRobot**: Monitoramento gratuito
- **Status.io**: Dashboard de status
- **GitHub Status**: https://www.githubstatus.com/

## Backup e Versionamento

### Backup Automático
- **Git History**: Todo o histórico fica salvo no GitHub
- **Releases**: Tags específicas para versões estáveis
- **Branches**: Backup de diferentes versões

### Estratégia de Releases
```bash
# Criar uma release/tag
git tag -a v1.0.0 -m "Versão 1.0.0 - Launch inicial"
git push origin v1.0.0
```

### Rollback
```bash
# Reverter para versão anterior
git revert HEAD
git push origin main

# Ou reverter para tag específica
git reset --hard v1.0.0
git push -f origin main
```

## Otimizações de Deploy

### Compressão
GitHub Pages automaticamente:
- **Gzip compression**: Habilitado por padrão
- **Brotli compression**: Habilitado para navegadores compatíveis

### CDN Global
- **Fastly CDN**: GitHub Pages usa Fastly
- **Cache headers**: Configurados automaticamente
- **Edge locations**: Distribuição mundial

### Headers de Cache
```http
# Configuração automática do GitHub Pages
Cache-Control: max-age=600
ETag: "hash-do-arquivo"
Last-Modified: Data da última modificação
```

## SSL/TLS

### Certificado Automático
- **Let's Encrypt**: Certificado gratuito automático
- **Renovação**: Automática a cada 90 dias
- **Force HTTPS**: Habilitado por padrão

### Configuração de Segurança
```http
# Headers de segurança automáticos
Strict-Transport-Security: max-age=31536000
X-Frame-Options: deny
X-Content-Type-Options: nosniff
```

## Debugging de Deploy

### Logs de Build
- **GitHub Actions**: Tab "Actions" no repositório
- **Build status**: Indicador verde/vermelho
- **Error logs**: Detalhes em caso de falha

### Problemas Comuns

#### 1. Página 404
```bash
# Verificar se index.html existe na raiz
ls -la index.html

# Verificar case sensitivity nos links
# GitHub Pages é case-sensitive
```

#### 2. CSS/JS não carregam
```bash
# Verificar paths relativos
# Correto: href="styles.css"
# Incorreto: href="/styles.css" (para GitHub Pages)
```

#### 3. Imagens não aparecem
```bash
# Verificar nomes de arquivos
# Certificar que não há espaços ou caracteres especiais
```

## Alternativas de Hospedagem

### Outras Opções Gratuitas
1. **Netlify**: Deploy automático, formulários, funções
2. **Vercel**: Otimizado para frameworks modernos
3. **Firebase Hosting**: Integração com outros serviços Google
4. **Surge.sh**: Deploy simples via CLI

### Migração (se necessário)
```bash
# Para Netlify
npm install -g netlify-cli
netlify deploy --dir . --prod

# Para Vercel  
npm install -g vercel
vercel --prod

# Para Surge
npm install -g surge
surge .
```

## Manutenção

### Atualizações Regulares
- **Dependências**: Verificar vulnerabilidades
- **Conteúdo**: Manter informações atualizadas
- **Performance**: Monitorar métricas regularmente

### Checklist de Deploy
- [ ] Testar localmente antes do push
- [ ] Verificar links internos e externos
- [ ] Validar HTML/CSS
- [ ] Testar responsividade
- [ ] Verificar performance
- [ ] Confirmar acessibilidade

---

*Guia de Deploy do TecSaúde Brasil 2026 - Versão 1.0*