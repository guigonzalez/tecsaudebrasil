# TecSaúde Brasil - Site de Divulgação

Site de divulgação para o evento TecSaúde Brasil (tecsaudebrasil.com.br) - O maior evento de tecnologia em saúde do Brasil.

**📅 Data:** 20 a 23 de agosto de 2026  
**📍 Local:** Universidade do Oeste Paulista (Unoeste) - Guarujá, SP

## 🚀 Características

- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Performance Otimizada**: HTML estático para carregamento rápido
- **Acessibilidade**: Seguindo boas práticas de acessibilidade web
- **SEO Friendly**: Estrutura otimizada para motores de busca
- **GitHub Pages Ready**: Configurado para hospedagem no GitHub Pages

## 📁 Estrutura do Projeto

```
Site/
├── index.html          # Página inicial (homepage)
├── expositores.html    # Página dedicada para expositores
├── patrocinadores.html # Página dedicada para patrocinadores  
├── sobre.html          # Página sobre o evento
├── styles.css          # Estilos CSS baseados nos design tokens
├── script.js           # JavaScript para interatividade multi-página
├── design-tokens.json  # Tokens de design do projeto
├── dark_logo.png       # Logo para tema escuro
├── light_logo.png      # Logo para tema claro
└── README.md          # Este arquivo
```

## 🎨 Design System

O site utiliza um sistema de design baseado nos tokens fornecidos:

### Paleta de Cores
- **Primary**: #00254f (base), #013672 (light), #000e2b (dark)
- **Secondary**: #2b90ab (base), #a2dee8 (light)
- **Tertiary**: #fdd86d
- **Neutros**: #181818 (black), #abafb0 (grey), #f3f7fa (white)

### Tipografia
- Fonte: Inter (Google Fonts)
- Pesos: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## 📱 Estrutura Multi-Página

### 🏠 Página Inicial (index.html)
- Hero section com informações do evento
- Cards de navegação rápida
- Destaques principais
- Estatísticas em preview

### 🏢 Página Expositores (expositores.html)
- Benefícios de ser expositor
- **Opções de Stand**:
  - Stand Premium (10m²) - área interna nobre
  - Stand Compacto (5m²) - área interna estratégica  
  - Área Demonstrativa (87m²) - área externa para equipamentos grandes
- **Oportunidades para Palestrantes**:
  - Salas fechadas climatizadas
  - Temas diversos sobre medicina e saúde
  - Audiência qualificada
- Serviços adicionais e cronograma

### 🤝 Página Patrocinadores (patrocinadores.html)
- Benefícios do patrocínio
- **Níveis de Patrocínio**:
  - Diamond (patrocínio master)
  - Gold (patrocínio premium)  
  - Silver (patrocínio standard)
- Oportunidades especiais
- Comparativo de benefícios
- Timeline do patrocinador

### 📋 Página Sobre (sobre.html)
- Informações completas do evento
- **Data**: 20-23 de agosto de 2026
- **Local**: Universidade do Oeste Paulista (Unoeste) - Guarujá, SP
- Estrutura do evento
- Temas e conteúdo das palestras
- Público-alvo
- Cronograma detalhado dos 4 dias

## 🔧 Hospedagem no GitHub Pages

### Configuração Inicial

1. **Faça upload dos arquivos** para um repositório no GitHub
2. **Vá até Settings** do repositório
3. **Acesse a seção Pages** no menu lateral
4. **Selecione a fonte**: "Deploy from a branch"
5. **Escolha a branch**: main ou gh-pages
6. **Pasta**: / (root)
7. **Clique em Save**

### URL do Site
Após a configuração, o site estará disponível em:
```
https://[seu-usuario].github.io/[nome-do-repositorio]
```

### Domínio Personalizado (Opcional)
Para usar um domínio personalizado:
1. Adicione um arquivo `CNAME` com o domínio desejado
2. Configure o DNS do domínio para apontar para o GitHub Pages
3. Habilite HTTPS nas configurações

## ✏️ Como Atualizar o Site

### Conteúdo
- Edite o arquivo `index.html` para alterar textos, links e estrutura
- Mantenha a estrutura HTML existente para preservar o design

### Estilos
- Modifique `styles.css` para ajustar cores, espaçamentos e layout
- Use as variáveis CSS definidas no `:root` para manter consistência

### Funcionalidades
- Adicione ou modifique JavaScript em `script.js`
- Mantenha as funcionalidades existentes de navegação e animações

## 🎯 Recursos Implementados

### Navegação Multi-Página
- Menu responsivo com hamburguer no mobile
- Navegação entre páginas com estado ativo
- Links contextuais entre seções
- Breadcrumb visual no header

### Interatividade Avançada
- Animações de entrada personalizadas por página
- Contadores animados nas estatísticas
- Efeitos hover diferenciados por tipo de card
- Seleção interativa de stands e patrocínios
- Timeline interativa com detalhes expandíveis

### Funcionalidades Específicas por Página
- **Homepage**: Contadores animados e navegação rápida
- **Expositores**: Comparação de stands e temas de palestras
- **Patrocinadores**: Comparativo de níveis e tabela interativa
- **Sobre**: Cronograma de 4 dias e estrutura detalhada

### Responsividade Completa
- Grid adaptativo para todas as páginas
- Timeline responsiva com layout mobile específico
- Tabelas com scroll horizontal em telas pequenas
- Cards que se reorganizam em diferentes breakpoints

## 📈 Performance

- **HTML estático**: Carregamento rápido
- **CSS otimizado**: Uso de variáveis e grid
- **JavaScript modular**: Funcionalidades organizadas
- **Lazy loading**: Preparado para imagens adicionais

## 🔍 SEO

- Meta tags otimizadas
- Estrutura HTML semântica
- Alt texts nas imagens
- URLs amigáveis com âncoras

## 📞 Manutenção

### Atualizações Frequentes
- Datas do evento
- Lista de expositores/patrocinadores
- Informações de contato

### Monitoramento
- Use o Google Search Console para monitorar SEO
- Configure Google Analytics para métricas de uso
- Teste regularmente em diferentes dispositivos

## 🤝 Contribuição

Para contribuir com melhorias:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente as mudanças
4. Teste em diferentes dispositivos
5. Submeta um pull request

## 📝 Licença

Este projeto foi desenvolvido para divulgação do evento TecSaúde Brasil.