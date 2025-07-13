# Guia Detalhado: Como Configurar e Personalizar o Portfólio do Salão de Beleza no Windows

Este guia explica passo a passo como configurar, personalizar e publicar o portfólio do salão de beleza em um computador Windows usando o Visual Studio Code.

## Parte 1: Configuração Inicial

### 1.1 Instalação de Ferramentas Necessárias

1. **Instalar Node.js**:
   - Acesse [nodejs.org](https://nodejs.org/)
   - Baixe a versão LTS (Long Term Support)
   - Execute o instalador e siga as instruções na tela
   - Marque a opção para instalar ferramentas adicionais se solicitado

2. **Instalar Visual Studio Code**:
   - Acesse [code.visualstudio.com](https://code.visualstudio.com/)
   - Baixe a versão para Windows
   - Execute o instalador e siga as instruções
   - Durante a instalação, marque as opções:
     - "Adicionar ao PATH"
     - "Adicionar 'Abrir com Code' ao menu de contexto"

3. **Instalar o gerenciador de pacotes pnpm**:
   - Abra o Prompt de Comando como administrador:
     - Clique no menu Iniciar
     - Digite "cmd"
     - Clique com o botão direito em "Prompt de Comando"
     - Selecione "Executar como administrador"
   - Digite o comando: `npm install -g pnpm`
   - Pressione Enter e aguarde a instalação

### 1.2 Baixar e Organizar os Arquivos do Projeto

1. **Criar pasta para o projeto**:
   - Abra o Explorador de Arquivos do Windows
   - Navegue até onde deseja salvar o projeto (ex: C:\Projetos)
   - Crie uma nova pasta chamada "beauty-brow-studio"

2. **Baixar e extrair os arquivos**:
   - Baixe o arquivo `beauty-brow-studio-source.zip` que foi enviado
   - Clique com o botão direito no arquivo baixado
   - Selecione "Extrair Tudo..."
   - Navegue até a pasta criada anteriormente
   - Clique em "Extrair"

## Parte 2: Configuração do Projeto

### 2.1 Abrir o Projeto no Visual Studio Code

1. **Abrir o Visual Studio Code**
2. **Abrir a pasta do projeto**:
   - Clique em "Arquivo" > "Abrir Pasta..."
   - Navegue até a pasta do projeto (ex: C:\Projetos\beauty-brow-studio)
   - Clique em "Selecionar Pasta"

### 2.2 Instalar Dependências do Projeto

1. **Abrir o terminal no VS Code**:
   - Clique em "Terminal" > "Novo Terminal"
   - Um terminal será aberto na parte inferior do VS Code

2. **Instalar as dependências**:
   - No terminal, digite: `pnpm install`
   - Pressione Enter
   - Aguarde a instalação (pode levar alguns minutos)
   - Você verá mensagens de progresso durante a instalação

### 2.3 Executar o Projeto Localmente

1. **Iniciar o servidor de desenvolvimento**:
   - No terminal, digite: `pnpm run dev`
   - Pressione Enter
   - Aguarde o servidor iniciar

2. **Acessar o site**:
   - O navegador deve abrir automaticamente com o site
   - Se não abrir, acesse manualmente: http://localhost:5173/
   - Você verá o portfólio funcionando localmente

## Parte 3: Entendendo a Estrutura do Projeto

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

### 3.2 Arquivos Principais para Personalização

Para personalizar o site, você precisará editar principalmente:

1. **Componentes de Layout**:
   - `src/components/layout/Navbar.tsx` - Menu de navegação
   - `src/components/layout/Footer.tsx` - Rodapé do site
   - `src/components/layout/WhatsAppButton.tsx` - Botão flutuante do WhatsApp

2. **Componentes de Conteúdo**:
   - `src/components/HeroSection.tsx` - Seção principal da página inicial
   - `src/components/ServicesSection.tsx` - Seção de serviços
   - `src/components/VideoGallery.tsx` - Galeria de vídeos
   - `src/components/TestimonialsSection.tsx` - Seção de depoimentos
   - `src/components/SocialMediaSection.tsx` - Seção de redes sociais

3. **Páginas**:
   - `src/pages/HomePage.tsx` - Página inicial
   - Outras páginas em `src/pages/`

4. **Estilos**:
   - `src/index.css` - Estilos globais e tema

## Parte 4: Personalizando o Conteúdo

### 4.1 Alterando Informações de Contato

1. **Editar o rodapé**:
   - Abra o arquivo `src/components/layout/Footer.tsx`
   - Localize as seções com informações de contato:
   ```jsx
   <div>
     <h3 className="text-xl font-bold mb-4">Contato</h3>
     <ul className="space-y-2">
       <li>Endereço: Rua Exemplo, 123</li>
       <li>Telefone: (00) 00000-0000</li>
       <li>Email: contato@beautybrowstudio.com</li>
     </ul>
   </div>
   ```
   - Substitua com suas informações reais

2. **Atualizar o botão do WhatsApp**:
   - Abra o arquivo `src/components/layout/WhatsAppButton.tsx`
   - Localize a linha com o link do WhatsApp:
   ```jsx
   href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário para design de sobrancelhas."
   ```
   - Substitua "5500000000000" pelo seu número no formato internacional (ex: 5511999999999)
   - Personalize a mensagem após "text=" se desejar

### 4.2 Alterando Links de Redes Sociais

1. **Editar links no menu**:
   - Abra o arquivo `src/components/layout/Navbar.tsx`
   - Localize o array `socialLinks`:
   ```jsx
   const socialLinks = [
     { icon: <FaInstagram size={20} />, url: 'https://instagram.com' },
     { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
     { icon: <FaTiktok size={20} />, url: 'https://tiktok.com' },
   ];
   ```
   - Substitua os URLs pelos links reais das suas redes sociais

2. **Editar links no rodapé**:
   - Abra o arquivo `src/components/layout/Footer.tsx`
   - Localize os links das redes sociais e atualize da mesma forma

### 4.3 Personalizando Serviços

1. **Editar a seção de serviços**:
   - Abra o arquivo `src/components/ServicesSection.tsx`
   - Localize o array `services`:
   ```jsx
   const services = [
     {
       id: 1,
       title: 'Design de Sobrancelhas',
       description: 'Modelagem personalizada que valoriza seu formato de rosto e realça seu olhar.',
       price: 'R$ 50,00',
       duration: '30 min',
       features: ['Análise facial', 'Modelagem com pinça', 'Acabamento com tesoura', 'Escovação']
     },
     // outros serviços...
   ];
   ```
   - Modifique os serviços existentes ou adicione novos seguindo o mesmo formato

### 4.4 Adicionando Vídeos Reais

1. **Preparar vídeos no YouTube**:
   - Faça upload dos seus vídeos no YouTube
   - Copie os links dos vídeos

2. **Atualizar a galeria de vídeos**:
   - Abra o arquivo `src/components/VideoGallery.tsx`
   - Localize o array `videos`:
   ```jsx
   const videos = [
     {
       id: 1,
       title: "Design de Sobrancelhas Clássico",
       description: "Técnica tradicional de design que realça a beleza natural das sobrancelhas.",
       videoUrl: "https://www.youtube.com/watch?v=example1",
       thumbnail: "/images/video-thumb1.jpg"
     },
     // outros vídeos...
   ];
   ```
   - Substitua os URLs de exemplo pelos seus links reais do YouTube
   - Atualize os títulos e descrições

### 4.5 Adicionando Imagens Personalizadas

1. **Preparar suas imagens**:
   - Crie uma pasta `images` dentro da pasta `public` se não existir
   - Otimize suas imagens para web (tamanhos recomendados):
     - Imagens de banner: 1920x1080px
     - Thumbnails de vídeos: 640x360px
     - Fotos de depoimentos: 200x200px (quadradas)

2. **Adicionar as imagens**:
   - Copie suas imagens para a pasta `public/images/`
   - Use nomes descritivos e sem espaços (ex: `design-sobrancelha-01.jpg`)

3. **Atualizzar referências no código**:
   - Substitua os caminhos de imagem nos componentes relevantes
   - Exemplo: `/images/seu-arquivo.jpg`

## Parte 5: Testando e Fazendo Deploy

### 5.1 Testando o Site

1. **Verificar em diferentes dispositivos**:
   - Redimensione a janela do navegador para simular diferentes tamanhos de tela
   - Teste em um dispositivo móvel real se possível

2. **Verificar funcionalidades**:
   - Teste todos os links de navegação
   - Verifique se os vídeos reproduzem corretamente
   - Teste o botão do WhatsApp e links de redes sociais

### 5.2 Preparando para Deploy

1. **Gerar a versão de produção**:
   - No terminal do VS Code, digite: `pnpm run build`
   - Pressione Enter
   - Aguarde a conclusão do processo
   - Uma pasta `dist` será criada com os arquivos otimizados

2. **Testar a versão de produção localmente** (opcional):
   - Instale o pacote `serve`: `pnpm install -g serve`
   - Execute: `serve -s dist`
   - Acesse: http://localhost:3000

### 5.3 Fazendo o Deploy

Siga as instruções detalhadas no arquivo `documentacao-deploy.md` para publicar o site. Resumidamente:

1. **Escolher um serviço de hospedagem**:
   - Opções econômicas: Hostgator, Locaweb, Hostinger
   - Opções em nuvem: Vercel, Netlify

2. **Registrar um domínio**:
   - Escolha um nome de domínio para seu site (ex: beautybrowstudio.com.br)
   - Registre através do serviço de hospedagem ou registrador específico

3. **Fazer upload dos arquivos**:
   - Para hospedagem tradicional: faça upload dos arquivos da pasta `dist` via FTP
   - Para Vercel/Netlify: siga as instruções específicas da plataforma

## Parte 6: Manutenção e Atualizações

### 6.1 Atualizando o Conteúdo

Para fazer atualizações no site após o deploy:

1. **Editar os arquivos necessários** no VS Code
2. **Testar localmente** com `pnpm run dev`
3. **Gerar nova versão** com `pnpm run build`
4. **Fazer upload** dos arquivos atualizados para a hospedagem

### 6.2 Backup do Projeto

É importante manter backups regulares:

1. **Backup do código-fonte**:
   - Copie toda a pasta do projeto para um dispositivo externo
   - Considere usar um serviço de controle de versão como GitHub

2. **Backup dos arquivos de produção**:
   - Mantenha uma cópia da pasta `dist` após cada atualização importante

## Conclusão

Este guia detalhado deve ajudá-lo a configurar, personalizar e publicar o portfólio do seu salão de beleza. Se encontrar dificuldades em qualquer etapa, consulte a documentação oficial das ferramentas ou procure ajuda de um desenvolvedor web.

Lembre-se de que a personalização contínua e a atualização regular do conteúdo são essenciais para manter seu site relevante e atraente para os clientes.
