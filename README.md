# Doce Boutique 🍩

Site promocional estático para o projeto de empreendedorismo **Doce Boutique**
(8º ano — Ensino Fundamental II). O site apresenta a marca, os produtos em
destaque (Mini Donuts e Mousse de Maracujá) e a promoção "avalie e concorra".

## Estrutura do projeto

```
doce-boutique/
├── index.html          # página única com todas as seções
├── css/
│   └── style.css       # identidade visual, animações, responsivo
├── js/
│   └── script.js       # menu mobile, confetes, animações de scroll
├── assets/
│   └── img/
│       ├── logo.png                 # logo original usada no site (gerada por IA)
│       ├── mini-donuts.png          # ilustração dos Mini Donuts (gerada por IA)
│       ├── mousse-maracuja.png      # ilustração da Mousse de Maracujá (gerada por IA)
│       ├── promo-banner.png         # banner da promoção/sorteio (gerado por IA)
│       ├── logo-original.png        # logo criada pelas alunas (referência histórica)
│       └── panfleto-original.png    # panfleto apresentado na banca (referência histórica)
└── README.md
```

Não há build/dependências — é HTML, CSS e JS puros. Basta abrir o
`index.html` no navegador para ver o site localmente.

## 1. Publicar no GitHub Pages

1. Suba os arquivos para o repositório (branch `main`), na raiz do projeto.
2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
4. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
5. Em alguns minutos o site ficará disponível em:
   `https://deytanlab.github.io/doce-boutique/`

Como é um site 100% estático, não é necessário nenhum passo de build ou
GitHub Actions — o GitHub Pages serve os arquivos diretamente.

## 2. Formulário de avaliação (Google Forms)

O site é estático, então a coleta de respostas (Nome, Celular e Avaliação) e
o sorteio usam o **Google Forms + Google Sheets**, que é gratuito e não
exige nenhum servidor. O formulário já está criado e o link já está
configurado no botão "Quero Participar!" da seção de promoção:

[Avalie a Doce Boutique 🍩 e concorra a um kit surpresa!](https://docs.google.com/forms/d/e/1FAIpQLScmpm0Cvp2blVEBfueUMtayMZPCqhRw2kb7m0E6VDGScWGeUg/viewform)

Campos do formulário:
- **Nome** — resposta curta, obrigatória.
- **Celular** — resposta curta (validado como número), obrigatória.
- **Avaliação (nota de 0 a 5)** — grade linear de 0 a 5, obrigatória.

Caso precise trocar o link no futuro (ex: criar um novo formulário), procure
por `href="https://docs.google.com/forms` no `index.html` e substitua pelo
novo link.

Para ver as respostas: no próprio Google Forms, clique na aba **Respostas**
→ ícone do Google Sheets (canto superior direito) → **Criar planilha**.
Todas as respostas (Nome, Celular e Nota) vão aparecer automaticamente ali.

### Sorteando o nome vencedor

Na planilha gerada, você pode sortear um nome aleatoriamente com uma fórmula.
Supondo que os nomes estejam na coluna **B** (a partir da linha 2):

```
=INDEX(B2:B1000; RANDBETWEEN(1; COUNTA(B2:B1000)))
```

Cole essa fórmula em uma célula vazia e pressione Enter — ela vai sortear um
nome entre todos os que responderam. Cada vez que a planilha recalcular, um
novo nome é sorteado, então tire um print/anote o resultado assim que decidir
fazer o sorteio "oficialmente".

## 3. Personalizando o conteúdo

- **Preços/produtos**: edite a seção `<section id="produtos">` no `index.html`.
- **Cores**: todas as cores ficam centralizadas no topo do `css/style.css`,
  nas variáveis dentro de `:root` (`--pink`, `--sky`, `--yellow`, `--lilac`, etc.).
- **Textos da promoção**: seção `<section id="promocao">`.

## 4. Sobre a logo

O site usa hoje `assets/img/logo.png`: uma logo 100% original, gerada por IA,
mantendo a identidade visual criada pelas alunas (selo circular, tipografia
cursiva "Doce Boutique", "Produtos artesanais" embaixo, detalhe de linha de
costura tipo etiqueta de boutique). Os arquivos `logo-original.png` e
`panfleto-original.png` continuam em `assets/img/` apenas como referência
histórica do material apresentado na banca — eles usavam uma imagem do
personagem **Homer Simpson**, protegido por direitos autorais (Fox/Disney),
por isso não são mais usados no site publicado.

Caso queira gerar variações da logo atual, este foi o prompt (ajustado após
alguns testes para corrigir assimetrias no rosto do mascote):

```
Cute kawaii-style flat vector logo mascot for a teen bakery brand called
"Doce Boutique". A chocolate glazed mini donut character with colorful
sprinkles on top. The donut has a simple, symmetrical kawaii face centered
on the lower front of the donut (not overlapping the donut hole): two small
round black eyes evenly spaced and aligned at the same height, a tiny simple
smile, small rosy cheek blushes, no eyebrows, no eyelashes, minimal facial
detail in the style of Japanese kawaii food mascots or cute emoji stickers.
Soft pastel color palette (pink, light blue, yellow, lilac). Rounded circular
badge frame around the donut, cursive hand-lettered "Doce Boutique" text on
top of the badge, small "Produtos artesanais" text at the bottom of the
badge, thin decorative thread/needle stitch line on the side like a boutique
tag. Clean flat vector illustration, bold clean outlines, minimal shading,
centered composition, white background, no photorealism, no 3D.
```

Todas as ilustrações originais já foram geradas e estão em uso no site:
Mini Donuts (`assets/img/mini-donuts.png`), Mousse de Maracujá
(`assets/img/mousse-maracuja.png`) e o banner da promoção
(`assets/img/promo-banner.png`, exibido no topo do card de "Promoção
especial"). Caso queira gerar novas variações, segue um prompt extra opcional:

### 🌈 Prompt — Padrão/textura de fundo (opcional)

```
Seamless flat vector pattern with mini donuts, sprinkles, small hearts and
sparkles scattered on a soft pastel pink background, cute and playful style
for a teen dessert brand, subtle and not too busy, tileable pattern.
```

## 5. Público-alvo e tom de voz

O site foi pensado para adolescentes de 10 a 15 anos: cores vibrantes,
fontes arredondadas e divertidas (Baloo 2, Pacifico, Nunito), emojis,
animações leves (confetes caindo, elementos flutuantes) e linguagem
próxima/informal, mantendo tudo responsivo para celular — o dispositivo mais
usado por esse público.
