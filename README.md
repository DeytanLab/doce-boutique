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
│       ├── logo-original.png       # logo criada pelas alunas
│       └── panfleto-original.png   # panfleto apresentado na banca (referência)
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

## 2. Configurar o formulário de avaliação (Google Forms)

O site é estático, então a coleta de respostas (Nome + Nota) e o sorteio
usam o **Google Forms + Google Sheets**, que é gratuito e não exige nenhum
servidor:

1. Acesse [forms.google.com](https://forms.google.com) e crie um novo formulário, ex: **"Avalie a Doce Boutique 🍩"**.
2. Adicione duas perguntas:
   - **Nome** — resposta curta, obrigatória.
   - **Nota (de 0 a 5)** — pergunta do tipo "Grade" (grade escala linear de 0 a 5) ou múltipla escolha com as opções 0, 1, 2, 3, 4, 5, obrigatória.
3. (Opcional) Adicione uma mensagem de confirmação como "Obrigada por avaliar! Boa sorte no sorteio 🍀".
4. Clique em **Enviar** → aba do link (🔗) → copie o link do formulário.
5. No arquivo `index.html`, procure por:

   ```html
   href="https://forms.gle/SUBSTITUA-PELO-LINK-DO-SEU-GOOGLE-FORMS"
   ```

   e substitua pelo link real do seu formulário.

6. Para ver as respostas: no próprio Google Forms, clique na aba **Respostas**
   → ícone do Google Sheets (canto superior direito) → **Criar planilha**.
   Todas as respostas (Nome + Nota) vão aparecer automaticamente ali.

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

## 4. Sobre a logo atual e sugestão de evolução

A logo e o panfleto originais (em `assets/img/`) usam uma imagem do
personagem **Homer Simpson**, que é um personagem protegido por direitos
autorais (Fox/Disney). Para uma apresentação escolar isso tende a ser
tranquilo, mas **não é recomendado para uma versão pública e "premium" do
site**, publicada com o nome da marca. Para deixar 100% original e ainda mais
com a cara da Doce Boutique, seguem prompts prontos para gerar novas imagens
em qualquer IA de geração de imagem (Midjourney, DALL·E, Ideogram, Bing Image
Creator, etc.):

### 🎨 Prompt — Logo/mascote original

```
Cute flat vector logo mascot for a teen bakery brand called "Doce Boutique".
A friendly cartoon mini donut character with big sparkly eyes and a shy smile,
winking, chocolate glaze with colorful sprinkles, soft pastel color palette
(pink, light blue, yellow, lilac), rounded circular badge frame, cursive
hand-lettered "Doce Boutique" text on top, small "Produtos artesanais" text
at the bottom, thin decorative thread/needle stitch line on the side like a
boutique tag, minimal flat illustration style, clean vector, white background,
no photorealism.
```

### 🍩 Prompt — Ilustração dos Mini Donuts

```
Flat vector illustration of a stack of 4 mini donuts with pastel glaze
(pink, yellow, lilac) and colorful sprinkles, cute and playful style,
soft pastel background, rounded shapes, subtle drop shadow, aimed at a
fun dessert brand for teenagers, no text, square composition.
```

### 🍮 Prompt — Ilustração da Mousse de Maracujá

```
Flat vector illustration of a small glass cup of passion fruit mousse
(pale yellow cream with passion fruit seeds and a berry on top), cute
dessert illustration, pastel purple and yellow color palette, soft
rounded shapes, subtle drop shadow, playful style for a teen dessert
brand, no text, square composition.
```

### 🎉 Prompt — Banner/ilustração da promoção

```
Flat vector illustration of a cute gift box overflowing with mini donuts
and a passion fruit mousse cup, confetti and sparkles around it, pastel
pink/lilac/yellow color palette, playful and fun style for a teenage
dessert brand promotion, no text, wide composition.
```

### 🌈 Prompt — Padrão/textura de fundo (opcional)

```
Seamless flat vector pattern with mini donuts, sprinkles, small hearts and
sparkles scattered on a soft pastel pink background, cute and playful style
for a teen dessert brand, subtle and not too busy, tileable pattern.
```

Depois de gerar as imagens, basta salvá-las em `assets/img/` (ex:
`mascote.png`, `donuts.png`, `mousse.png`) e trocar as referências
correspondentes no `index.html` (hoje os produtos usam emojis 🍩🍮 como
placeholder no lugar de fotos reais).

## 5. Público-alvo e tom de voz

O site foi pensado para adolescentes de 10 a 15 anos: cores vibrantes,
fontes arredondadas e divertidas (Baloo 2, Pacifico, Nunito), emojis,
animações leves (confetes caindo, elementos flutuantes) e linguagem
próxima/informal, mantendo tudo responsivo para celular — o dispositivo mais
usado por esse público.
