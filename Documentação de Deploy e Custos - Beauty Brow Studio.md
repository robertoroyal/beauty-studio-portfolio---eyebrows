# Documentação de Deploy e Custos - Beauty Brow Studio

## Introdução

Este documento fornece instruções detalhadas para publicar o site do Beauty Brow Studio na internet, além de informações sobre custos de manutenção e orientações para atualização do conteúdo.

## Requisitos para Deploy

Para disponibilizar o site na internet, você precisará de:

1. Um serviço de hospedagem web
2. Um nome de domínio (ex: beautybrowstudio.com.br)
3. Acesso FTP ou SSH para upload de arquivos (fornecido pelo serviço de hospedagem)

## Opções de Hospedagem Recomendadas

### Opção 1: Hospedagem Compartilhada (Mais econômica)

**Provedores recomendados:**
- Hostgator Brasil
- Locaweb
- Hostinger Brasil

**Vantagens:**
- Custo mais baixo
- Fácil configuração
- Suporte técnico em português
- Painel de controle intuitivo

**Desvantagens:**
- Recursos compartilhados
- Menos controle sobre o ambiente

### Opção 2: Hospedagem em Nuvem (Melhor desempenho)

**Provedores recomendados:**
- Vercel
- Netlify
- AWS Amplify

**Vantagens:**
- Melhor desempenho
- Escalabilidade automática
- Integração com GitHub para deploy automático
- Certificado SSL gratuito

**Desvantagens:**
- Pode ser mais caro dependendo do tráfego
- Interface em inglês (alguns provedores)

## Custos Estimados (Anuais)

### Domínio
- Registro de domínio .com.br: R$ 40,00 a R$ 60,00 por ano
- Registro de domínio .com: R$ 50,00 a R$ 70,00 por ano

### Hospedagem
- Hospedagem compartilhada: R$ 15,00 a R$ 30,00 por mês (R$ 180,00 a R$ 360,00 por ano)
- Hospedagem em nuvem (Vercel/Netlify plano gratuito): R$ 0,00 (com limitações)
- Hospedagem em nuvem (plano profissional): R$ 50,00 a R$ 100,00 por mês (R$ 600,00 a R$ 1.200,00 por ano)

### Certificado SSL (Segurança)
- Let's Encrypt (incluído na maioria das hospedagens): Gratuito
- Certificado SSL premium: R$ 100,00 a R$ 300,00 por ano (opcional)

### Custo Total Anual Estimado
- **Opção econômica:** R$ 220,00 a R$ 420,00 por ano
- **Opção intermediária:** R$ 400,00 a R$ 600,00 por ano
- **Opção premium:** R$ 700,00 a R$ 1.500,00 por ano

## Passo a Passo para Deploy

### 1. Preparação do Projeto

1. Abra o terminal no diretório do projeto
2. Execute o comando de build para gerar os arquivos otimizados:
   ```
   cd /caminho/para/beauty-brow-studio
   pnpm run build
   ```
3. Após a conclusão, uma pasta `dist` ou `build` será criada com os arquivos prontos para deploy

### 2. Registro de Domínio

1. Escolha um provedor de registro de domínio (Registro.br, GoDaddy, Namecheap, etc.)
2. Verifique a disponibilidade do domínio desejado (ex: beautybrowstudio.com.br)
3. Complete o processo de registro e pagamento
4. Aguarde a confirmação do registro (pode levar até 48 horas)

### 3. Contratação de Hospedagem

1. Escolha um dos provedores recomendados
2. Selecione um plano adequado às suas necessidades
3. Complete o processo de contratação e pagamento
4. Acesse o painel de controle fornecido pelo provedor

### 4. Deploy em Hospedagem Compartilhada

1. Acesse o painel de controle da sua hospedagem
2. Localize a seção de gerenciamento de arquivos ou FTP
3. Faça upload de todos os arquivos da pasta `dist` ou `build` para a pasta raiz do seu site (geralmente chamada `public_html`, `www` ou `htdocs`)
4. Configure o domínio para apontar para sua hospedagem (siga as instruções específicas do seu provedor)

### 5. Deploy em Plataformas de Nuvem (Vercel/Netlify)

#### Vercel (Recomendado)

1. Crie uma conta em vercel.com
2. Instale o Vercel CLI:
   ```
   npm install -g vercel
   ```
3. No diretório do projeto, execute:
   ```
   vercel login
   vercel
   ```
4. Siga as instruções na tela para completar o deploy
5. Configure seu domínio personalizado nas configurações do projeto no dashboard da Vercel

#### Netlify

1. Crie uma conta em netlify.com
2. Arraste e solte a pasta `dist` ou `build` na interface do Netlify
3. Configure seu domínio personalizado nas configurações do site no dashboard do Netlify

## Manutenção e Atualização do Site

### Atualizando Conteúdo

Para atualizar o conteúdo do site, você precisará:

1. Modificar os arquivos fonte no diretório do projeto
2. Gerar uma nova versão otimizada com `pnpm run build`
3. Fazer upload dos novos arquivos para sua hospedagem

### Modificações Comuns

#### Alterar Informações de Contato

1. Edite o arquivo `/src/components/layout/Footer.tsx` para atualizar informações no rodapé
2. Edite o arquivo `/src/components/layout/WhatsAppButton.tsx` para atualizar o número do WhatsApp

#### Adicionar Novos Serviços

1. Edite o arquivo `/src/components/ServicesSection.tsx` e adicione novos itens ao array `services`

#### Atualizar Depoimentos

1. Edite o arquivo `/src/components/TestimonialSlider.tsx` e modifique o array `testimonials`

#### Adicionar Novos Vídeos

1. Edite o arquivo `/src/components/VideoGallery.tsx` e adicione novos itens ao array `videos`

## Monitoramento e Análise

Para acompanhar o desempenho do seu site:

1. Configure o Google Analytics:
   - Crie uma conta em analytics.google.com
   - Obtenha o código de rastreamento
   - Adicione-o ao arquivo `index.html` na pasta `public`

2. Monitore regularmente:
   - Número de visitantes
   - Páginas mais acessadas
   - Tempo médio de permanência
   - Taxa de conversão (contatos via WhatsApp)

## Suporte e Manutenção Técnica

Para manutenção técnica contínua, considere:

1. Contratar um desenvolvedor para atualizações periódicas (R$ 200 a R$ 500 por mês, dependendo da complexidade)
2. Solicitar atualizações pontuais quando necessário (R$ 100 a R$ 300 por atualização)

## Backup e Segurança

1. Faça backup regular dos arquivos do site
2. Mantenha uma cópia local do código-fonte
3. Utilize senhas fortes para todos os serviços relacionados ao site
4. Mantenha o sistema de hospedagem atualizado

## Conclusão

Este documento fornece as informações essenciais para publicar e manter o site do Beauty Brow Studio. Para qualquer dúvida adicional, entre em contato com o desenvolvedor.
Gmail: joserobertodasilvaa2023@gmail.com
WhatsApp: 11 9 91761002

---

**Nota:** Os custos mencionados são estimativas baseadas nos preços médios do mercado brasileiro em maio de 2025 e podem variar conforme o provedor escolhido e promoções disponíveis.
