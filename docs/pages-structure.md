# 📄 Estrutura das Páginas - TecSaúde Brasil 2026

## Anatomia Geral das Páginas

Todas as páginas seguem a mesma estrutura base:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta tags, título, CSS -->
</head>
<body>
    <!-- Header com navegação -->
    <!-- Conteúdo específico da página -->
    <!-- Footer -->
    <!-- Scripts -->
</body>
</html>
```

## 🏠 Página Principal (index.html)

### Estrutura
1. **Header** - Navegação principal
2. **Hero Section** - Apresentação do evento
3. **Navigation Cards** - Links para outras seções
4. **Event Stats** - Estatísticas do evento
5. **Footer** - Informações de contato

### Hero Section
```html
<section class="hero">
    <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-gradient"></div>
    </div>
    
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="title-highlight">TecSaúde Brasil</span>
                <span class="title-year">2026</span>
            </h1>
            
            <p class="hero-subtitle">
                O maior evento de tecnologia em saúde do Brasil
            </p>
            
            <div class="hero-info">
                <span class="hero-date">20-23 AGO 2026</span>
                <span class="hero-location">Unoeste Guarujá</span>
            </div>
            
            <div class="hero-actions">
                <a href="expositores.html" class="btn-hero btn-hero-primary">
                    Seja um Expositor
                </a>
                <a href="patrocinadores.html" class="btn-hero btn-hero-secondary">
                    Seja um Patrocinador
                </a>
            </div>
        </div>
    </div>
</section>
```

### Navigation Cards
- **Grid responsivo** com 4 cards
- **Links diretos** para páginas internas
- **Ícones temáticos** para cada seção

### Event Stats
- **Estatísticas do evento** em destaque
- **Animação de contadores** ao entrar na viewport
- **Grid responsivo** para diferentes telas

## 🏢 Página de Expositores (expositores.html)

### Estrutura
1. **Page Header** - Título e descrição
2. **Why Exhibit** - Benefícios de expor
3. **Stand Types** - Tipos de stands
4. **Speaker Opportunities** - Oportunidades para palestrantes  
5. **Additional Services** - Serviços extras
6. **Timeline** - Cronograma
7. **CTA Section** - Call to action final

### Tipos de Stand
```html
<div class="stands-grid">
    <div class="stand-card stand-premium">
        <div class="stand-header">
            <h3>Stand Premium</h3>
            <div class="stand-price">Premium</div>
        </div>
        <div class="stand-specs">
            <p><strong>Área:</strong> 10m²</p>
            <p><strong>Localização:</strong> Área interna nobre</p>
        </div>
        <ul class="stand-features">
            <!-- Lista de benefícios -->
        </ul>
        <a href="#" class="btn btn-primary">Solicitar Cotação</a>
    </div>
    <!-- Outros stands... -->
</div>
```

## 🤝 Página de Patrocinadores (patrocinadores.html)

### Estrutura
1. **Page Header**
2. **Sponsorship Benefits** - Benefícios do patrocínio
3. **Sponsorship Levels** - Níveis de patrocínio
4. **Benefits Comparison** - Comparativo de benefícios
5. **Additional Opportunities** - Oportunidades extras
6. **CTA Section**

### Níveis de Patrocínio
- **Diamond** - Nível premium
- **Gold** - Nível intermediário  
- **Silver** - Nível básico

Cada nível tem:
- **Preço/categoria**
- **Lista de benefícios**
- **Botão de ação**

## 🎤 Página de Palestrantes (palestrantes.html)

### Estrutura
1. **Page Header**
2. **Keynote Speakers** - Palestrantes principais
3. **Specialists** - Especialistas por área (com tabs)
4. **Workshops** - Workshops práticos
5. **Call for Papers** - Chamada para submissões

### Keynote Speakers
```html
<div class="speakers-grid keynote-grid">
    <div class="speaker-card featured">
        <div class="speaker-avatar">
            <div class="avatar-placeholder">
                <span class="avatar-initials">MD</span>
            </div>
            <div class="speaker-badge keynote-badge">Keynote</div>
        </div>
        <div class="speaker-info">
            <h3 class="speaker-name">Dr. Maria Digital</h3>
            <p class="speaker-title">Chief Medical Officer</p>
            <p class="speaker-topic">Tópico da palestra</p>
            <div class="speaker-tags">
                <span class="tag">IA</span>
                <span class="tag">Diagnósticos</span>
            </div>
        </div>
    </div>
</div>
```

### Sistema de Tabs
- **Navegação por áreas** (IA, IoT, Big Data, Robótica)
- **Conteúdo dinâmico** via JavaScript
- **Badges coloridos** por especialidade

### Workshops
- **Níveis de dificuldade** (Iniciante, Intermediário, Avançado)
- **Informações detalhadas** (duração, vagas, pré-requisitos)
- **Instrutores qualificados**

## 📋 Página Sobre (sobre.html)

### Estrutura
1. **Page Header**
2. **Event Info** - Informações básicas
3. **Event Structure** - Estrutura do evento
4. **Event Themes** - Temas abordados
5. **Target Audience** - Público-alvo
6. **Schedule** - Programação por dias
7. **CTA Section**

### Informações do Evento
- **Data e local**
- **Estrutura física**
- **Capacidade e recursos**

### Programação
```html
<div class="schedule-grid">
    <div class="day-card">
        <div class="day-header">
            <h3>Dia 1 - 20/08</h3>
            <span class="day-theme">Abertura e Networking</span>
        </div>
        <div class="day-content">
            <div class="schedule-item">
                <span class="time">09:00</span>
                <span class="activity">Credenciamento</span>
            </div>
            <!-- Mais atividades... -->
        </div>
    </div>
</div>
```

## 🧩 Componentes Compartilhados

### Header
```html
<header class="header">
    <nav class="nav">
        <div class="nav-container">
            <div class="nav-brand">
                <a href="index.html">
                    <img src="dark_logo.png" alt="TecSaúde Brasil" class="logo logo-dark">
                    <img src="light_logo.png" alt="TecSaúde Brasil" class="logo logo-light">
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link">Início</a></li>
                <li><a href="expositores.html" class="nav-link">Expositores</a></li>
                <li><a href="patrocinadores.html" class="nav-link">Patrocinadores</a></li>
                <li><a href="palestrantes.html" class="nav-link">Palestrantes</a></li>
                <li><a href="sobre.html" class="nav-link">Sobre</a></li>
                <li class="nav-cta-mobile">
                    <a href="https://tecsaudebrasil.com.br" class="cta-link" target="_blank">Inscreva-se</a>
                </li>
            </ul>
            <div class="nav-cta">
                <a href="https://tecsaudebrasil.com.br" class="cta-link" target="_blank">Inscreva-se</a>
            </div>
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</header>
```

### Page Header
```html
<section class="page-header">
    <div class="container">
        <h1>Título da Página</h1>
        <p>Descrição da página</p>
    </div>
</section>
```

### Footer
- **Informações da empresa**
- **Links de navegação**  
- **Detalhes do evento**
- **Copyright**

## 📱 Responsividade

### Breakpoints Principais
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Adaptações Mobile
- **Menu hamburger** no header
- **Cards em coluna única**
- **Texto e espaçamentos reduzidos**
- **Botões de largura completa**

### Adaptações Desktop
- **Grid layouts** multi-colunas
- **Navegação horizontal**
- **Hover effects** aprimorados
- **Espaçamentos maiores**

---

*Estrutura de Páginas do TecSaúde Brasil 2026 - Versão 1.0*