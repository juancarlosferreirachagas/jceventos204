# Mídia — guia de manutenção

## Fonte das imagens (padrão: Unsplash)

Por padrão o site usa fotos **Unsplash** em alta qualidade via CDN:

- Definição dos IDs: [`unsplash.ts`](./unsplash.ts)
- Uso no site: [`paths.ts`](./paths.ts) → [`catalog.ts`](./catalog.ts)

Requer internet no navegador. O `next.config.ts` já permite `images.unsplash.com`.

### Usar fotos locais (flyers / Instagram)

1. Coloque os arquivos em `public/images/eventos/` e `public/images/kids/`
2. Crie `.env.local`:

```
NEXT_PUBLIC_USE_LOCAL_IMAGES=true
```

3. Reinicie `npm run dev`

### Baixar Unsplash para disco (opcional)

```bash
npm run images:download
```

Grava em `public/images/` com os mesmos nomes do modo local.

## Estrutura local

```
public/images/
├── _source/     ← flyers originais
├── eventos/
└── kids/
```

## Arquivos

| Arquivo | Função |
|---------|--------|
| `unsplash.ts` | URLs Unsplash por serviço |
| `paths.ts` | Unsplash ou local (env) |
| `catalog.ts` | Alt, crop, galeria |
| `types.ts` | Tipos |

Textos de marketing: `lib/site-copy.ts`
