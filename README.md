# JC Eventos 204

Site de apresentação — salão de festas e JC Kids em Barueri, SP.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Porta de entrada — Eventos ou Kids |
| `/eventos` | Salão adulto (casamento, debutante, corporativo, aniversário) |
| `/kids` | Festas infantis |

## Manutenção

| O quê | Onde |
|-------|------|
| Textos e CTAs | `lib/site-copy.ts` |
| Imagens (paths, alt, crop) | `lib/media/` — ver [lib/media/README.md](lib/media/README.md) |
| Legal / promo até 35% | `lib/site-legal.ts` |
| Avaliações Google | `lib/reviews.ts` |
| Contato / WhatsApp | `lib/site.ts` |
| Ícones de marca | `components/icons/` |

### Imagens

Padrão: fotos reais do Instagram [@jceventos204](https://www.instagram.com/jceventos204/) em `public/images/`.

```bash
npm run images:instagram   # baixar/atualizar fotos do Instagram
npm run images:download    # placeholders Unsplash (dev)
```

Para usar Unsplash: `NEXT_PUBLIC_USE_UNSPLASH=true` no `.env.local`

### Trocar uma foto

1. Substitua o arquivo em `public/images/eventos/` ou `public/images/kids/`
2. **Mantenha o mesmo nome** (ex.: `servico-casamento.jpg`)
3. Se for foto nova com nome diferente, atualize `lib/media/paths.ts`

## Stack

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript
