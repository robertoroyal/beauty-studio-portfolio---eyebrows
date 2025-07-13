# Tecnologias Utilizadas no Beauty Brow Studio

Este projeto foi desenvolvido utilizando um conjunto moderno de tecnologias web, focado em performance, escalabilidade e uma experiência de desenvolvimento eficiente. Abaixo, detalhamos as principais ferramentas e frameworks empregados:

## Frontend

### React
O projeto é construído com [React](https://react.dev/), uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário. A escolha do React permite o desenvolvimento de componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código.

### TypeScript
Para garantir maior robustez e manutenibilidade, o projeto utiliza [TypeScript](https://www.typescriptlang.org/), um superconjunto tipado do JavaScript que compila para JavaScript puro. O TypeScript adiciona tipagem estática ao código, o que ajuda a identificar erros durante o desenvolvimento e melhora a legibilidade do código, especialmente em projetos maiores.

### Tailwind CSS
O estilo visual do projeto é gerenciado com [Tailwind CSS](https://tailwindcss.com/), um framework CSS utilitário-first. Em vez de classes pré-definidas, o Tailwind oferece classes de utilidade de baixo nível que podem ser combinadas diretamente no HTML para construir designs complexos. Isso agiliza o processo de estilização e garante consistência no design.

## Ferramentas de Desenvolvimento e Build

### Vite
[Vite](https://vitejs.dev/) é utilizado como o bundler e servidor de desenvolvimento. Conhecido por sua velocidade e eficiência, o Vite oferece um ambiente de desenvolvimento rápido com Hot Module Replacement (HMR) instantâneo, otimizando significativamente o fluxo de trabalho do desenvolvedor.

### pnpm
Como gerenciador de pacotes, o projeto emprega [pnpm](https://pnpm.io/). O pnpm é uma alternativa rápida e eficiente ao npm e yarn, que economiza espaço em disco e acelera as instalações de pacotes ao utilizar um armazenamento de conteúdo endereçável para todas as dependências.

### Node.js
[Node.js](https://nodejs.org/) é o ambiente de tempo de execução JavaScript que permite a execução de ferramentas de desenvolvimento e scripts de build fora do navegador. É fundamental para o funcionamento do pnpm e do Vite.

### 3.1 Estrutura de Pastas e Arquivos

O projeto está organizado da seguinte forma:

```
beauty-brow-studio/
├── public/               # Arquivos estáticos (imagens, ícones)
├── src/                  # Código-fonte do projeto
│   ├── components/       # Componentes reutilizáveis
│   │   ├── layout/       # Componentes de layout (menu, rodapé)
│   │   └── ui/           # Componentes de interface
│   ├── pages/            # Páginas do site
│   ├── App.tsx           # Componente principal com rotas
│   ├── index.css         # Estilos globais
│   └── main.tsx          # Ponto de entrada da aplicação
├── index.html            # Arquivo HTML principal
├── package.json          # Dependências e scripts
└── tailwind.config.js    # Configuração do Tailwind CSS
```

Esta combinação de tecnologias resulta em um projeto web moderno, performático e fácil de manter e expandir.

