# 🎨 Sistema de Design - TecSaúde Brasil 2026

## Paleta de Cores

### Cores Principais
```css
/* Cores da Marca */
--primary-base: #00254f;      /* Azul principal */
--primary-light: #1a3d6b;     /* Azul claro */
--primary-dark: #001122;      /* Azul escuro */

--secondary-base: #2b90ab;    /* Azul secundário */
--secondary-light: #4fa6c0;   /* Azul secundário claro */
--secondary-dark: #1f6b80;    /* Azul secundário escuro */

--tertiary-base: #fdd86d;     /* Amarelo dourado */
--tertiary-light: #ffe08a;    /* Amarelo claro */
--tertiary-dark: #f4c430;     /* Amarelo escuro */
```

### Cores Neutras
```css
/* Neutros */
--all-black: #181818;         /* Preto para textos */
--grey-disabled: #6b7280;     /* Cinza para textos secundários (WCAG AAA) */
--all-white: #f3f7fa;         /* Background branco suave */
```

### Cores de Status
```css
--error-color: #ef4444;       /* Vermelho para erros */
```

## Tipografia

### Família de Fontes
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Pesos de Fonte
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extra-bold: 800;
```

### Hierarquia Tipográfica

#### Desktop
- **H1**: 2.5rem (40px) - Títulos principais
- **H2**: 2rem (32px) - Títulos de seção
- **H3**: 1.5rem (24px) - Subtítulos
- **H4**: 1.25rem (20px) - Títulos menores

#### Mobile
- **H1**: 2rem (32px)
- **H2**: 1.75rem (28px) 
- **H3**: 1.25rem (20px)
- **H4**: 1.125rem (18px)

## Espaciamento

### Sistema de Spacing
```css
--spacing-xs: 8px;      /* Extra pequeno */
--spacing-sm: 12px;     /* Pequeno */
--spacing-md: 16px;     /* Médio */
--spacing-lg: 24px;     /* Grande */
--spacing-xl: 32px;     /* Extra grande */
--spacing-xxl: 48px;    /* 2x grande */
--spacing-xxxl: 64px;   /* 3x grande */

/* Spacing específico por número */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
```

## Componentes

### Botões

#### Botão Primário
```css
.btn-primary {
    background-color: var(--primary-base);
    color: white;
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    transition: var(--transition-normal);
}

.btn-primary:hover {
    background-color: var(--primary-light);
}
```

#### Botão Secundário
```css
.btn-secondary {
    background-color: var(--secondary-base);
    color: white;
}
```

#### Botão Outline
```css
.btn-outline {
    background-color: transparent;
    border: 2px solid var(--secondary-base);
    color: var(--secondary-base);
}
```

### Cards

#### Card Padrão
```css
.card {
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-lg);
    border: 1px solid rgba(43, 144, 171, 0.2);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-base);
}
```

## Border Radius

```css
--border-radius-sm: 8px;      /* Pequeno */
--border-radius-md: 12px;     /* Médio */
--border-radius-lg: 16px;     /* Grande */
--border-radius-xl: 24px;     /* Extra grande */
--border-radius-full: 9999px; /* Circular */
```

## Transições

```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
--transition-color: color 0.2s ease-in-out;
```

## Gradientes

```css
--gradient-hero: linear-gradient(45deg, var(--tertiary-base) 5%, var(--secondary-base) 30%, var(--primary-base));
--gradient-button: linear-gradient(135deg, var(--primary-base), var(--primary-light));
--gradient-card: linear-gradient(135deg, var(--grey-disabled) 0%, var(--all-white) 100%);
```

## Acessibilidade (WCAG AAA)

### Contraste de Cores
- **Texto principal**: Contraste mínimo 7:1
- **Texto secundário**: Contraste mínimo 7:1
- **Textos sobre fundos coloridos**: Sempre com contraste adequado

### Princípios de Design
- **Sem sombras**: Design flat para melhor legibilidade
- **Borders sólidas**: Uso de bordas ao invés de sombras
- **Cores consistentes**: Sistema padronizado em todas as páginas
- **Tamanhos mínimos**: Botões e links com área de toque adequada

## Responsividade

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) {  /* Tablet */
@media (min-width: 1024px) { /* Desktop */
@media (min-width: 1440px) { /* Large Desktop */
```

### Containers
```css
.container {
    max-width: 1200px; /* Mobile/Tablet */
    max-width: 1400px; /* Desktop */
    max-width: 1600px; /* Large screens */
    padding: 0 var(--spacing-md);
    margin: 0 auto;
}
```

## Estados de Interação

### Hover
- **Cards**: `transform: translateY(-5px)`
- **Botões**: Mudança de cor de fundo
- **Links**: Mudança de cor

### Focus
- **Elementos focáveis**: Outline visível para navegação por teclado
- **Cores de foco**: Seguem o sistema de cores principal

### Active
- **Botões**: Feedback visual imediato
- **Links ativos**: Cor e peso de fonte diferenciados

---

*Sistema de Design do TecSaúde Brasil 2026 - Versão 1.0*