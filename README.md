# Catálogo de Cerâmicas Artesanais

Este é um site de uma página única (single-page) que serve como catálogo para exibir peças de cerâmica artesanal. O site inclui:

- Layout responsivo para funcionar bem em dispositivos móveis e desktop
- Carrossel de fotos para exibir os produtos em destaque
- Seções para categorias de produtos
- Formulário de contato
- Design elegante e moderno

## Estrutura do Projeto

```
catalogo/
├── index.html        # Estrutura principal do site
├── styles.css        # Estilos visuais
├── script.js         # Funcionalidades interativas e carrossel
└── images/           # Pasta para armazenar todas as imagens
```

## Como Personalizar

### Alterando o Conteúdo

Para personalizar o conteúdo do site, edite o arquivo `index.html`:

- Mude o título, descrições e textos para adaptá-los à sua marca
- Atualize os links das redes sociais no rodapé
- Altere as categorias de produtos conforme necessário

### Alterando Imagens

1. Substitua as imagens na pasta `images/` por suas próprias fotos de cerâmica
2. Mantenha os mesmos nomes de arquivo ou atualize os caminhos em `index.html` e `script.js`
3. Imagens recomendadas:
   - `hero-bg.jpg` - Imagem de fundo da seção inicial (1920x1080px)
   - `ceramica1.jpg` a `ceramica5.jpg` - Imagens para o carrossel (recomendado 1200x800px)
   - `vasos.jpg`, `pratos.jpg`, `decorativas.jpg`, `xicara.jpg` - Imagens das categorias (500x500px)

### Alterando o Carrossel

Para adicionar, remover ou modificar as imagens do carrossel:

1. Abra o arquivo `script.js`
2. Encontre o array `carouselImages`
3. Edite as entradas existentes ou adicione novas seguindo o mesmo formato

### Personalizando Cores

As cores do site podem ser facilmente personalizadas editando as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #7c5e48;    /* Cor principal */
    --secondary-color: #d7c0ae;  /* Cor secundária */
    --accent-color: #967259;     /* Cor de destaque */
    --text-color: #333333;       /* Cor do texto */
    --light-color: #f9f5f0;      /* Cor clara para fundos */
    --dark-color: #2c2418;       /* Cor escura para cabeçalho/rodapé */
}
```

## Visualizando o Site

Para visualizar o site localmente:

1. Abra o arquivo `index.html` em seu navegador web
2. Navegue pelo site para garantir que tudo esteja funcionando corretamente

## Implementação Online

Para disponibilizar o site online:

1. Contrate um serviço de hospedagem web
2. Faça upload de todos os arquivos da pasta `catalogo` para o servidor
3. Configure o domínio para apontar para o seu site

## Recursos Adicionais

Para funcionalidades mais avançadas, considere:

- Implementar um sistema de carrinho de compras com JavaScript e backend
- Adicionar um sistema de gerenciamento de conteúdo (CMS) para atualizar produtos facilmente
- Integrar análises do Google Analytics para monitorar o tráfego do site

---

Criado por Luis Otavio Mendes da Silva | © 2025
