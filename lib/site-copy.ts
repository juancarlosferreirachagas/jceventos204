import { getWhatsAppHref } from "@/lib/site";
import { MEDIA } from "@/lib/media";

/* ─── Gateway (/) ─── */
export const GATEWAY = {
  title: "Escolha sua celebração",
  subtitle: "Dois espaços, uma marca — Barueri, SP",
  eventos: {
    label: "JC Eventos 204",
    headline: "Casamentos, debutantes, corporativo e aniversários",
    cta: "Entrar no espaço de eventos",
    href: "/eventos",
    image: MEDIA.eventos.hero,
  },
  kids: {
    label: "JC Kids 204",
    headline: "Festas infantis com estrutura completa e diversão garantida",
    cta: "Entrar no JC Kids 204",
    href: "/kids",
    image: MEDIA.kids.hero,
  },
} as const;

export const SHARED = {
  city: "Barueri — SP",
  ctaPrimary: "Agendar visita no WhatsApp",
  ctaSecondary: "Falar no WhatsApp",
  ctaPromo: "Consultar promoção",
} as const;

/* ─── JC Eventos 204 (/eventos) ─── */
export const EVENTOS = {
  meta: {
    title: "JC Eventos 204 — Salão de festas em Barueri",
    description:
      "Casamentos, debutantes, corporativo e aniversários em Barueri. Salão com estrutura completa — agende sua visita.",
  },
  hero: {
    eyebrow: "Barueri — SP",
    headline: "Um espaço para a realização dos seus",
    emphasis: "sonhos",
    subheadline:
      "Salão em Jd. Mutinga com estrutura para receber sua celebração com elegância — do planejamento à festa.",
    cta: "Agendar visita no WhatsApp",
    ctaSecondary: "Explorar serviços",
    whatsappMessage:
      "Olá! Quero agendar uma visita ao JC Eventos 204 em Barueri.",
    image: MEDIA.eventos.hero,
  },
  servicos: {
    title: "Serviços",
    subtitle: "Para cada momento, um ambiente preparado",
    items: [
      {
        title: "Casamento",
        description:
          "Recepção com salão amplo, iluminação e layout flexível para cerimônia e festa — clássico ou contemporâneo.",
        image: MEDIA.eventos.servicos.casamento,
        cta: "Saber sobre casamentos",
        whatsappMessage:
          "Olá! Gostaria de informações sobre casamento no JC Eventos 204.",
      },
      {
        title: "Debutante",
        description:
          "Ambiente sofisticado para os 15 anos: pista, decoração personalizada e conforto para família e convidados.",
        image: MEDIA.eventos.servicos.debutante,
        cta: "Saber sobre debutantes",
        whatsappMessage:
          "Olá! Gostaria de informações sobre festa de debutante no JC Eventos 204.",
      },
      {
        title: "Corporativo",
        description:
          "Confraternizações, premiações e lançamentos com estrutura para palco, som e buffet corporativo.",
        image: MEDIA.eventos.servicos.corporativo,
        cta: "Saber sobre corporativo",
        whatsappMessage:
          "Olá! Preciso de um espaço para evento corporativo no JC Eventos 204.",
      },
      {
        title: "Aniversário",
        description:
          "Celebrações adultas com salão decorado, mesa de doces e buffet para reunir quem você ama.",
        image: MEDIA.eventos.servicos.aniversario,
        cta: "Saber sobre aniversários",
        whatsappMessage:
          "Olá! Gostaria de informações sobre aniversário no JC Eventos 204.",
      },
    ],
  },
  amenities: {
    title: "Tudo que você precisa em um só lugar",
    items: [
      { label: "Mobiliário completo", icon: "armchair" as const },
      { label: "Assessoria completa", icon: "handshake" as const },
      { label: "Decoração personalizada", icon: "sparkles" as const },
      { label: "Camarim personalizado", icon: "mirror" as const },
      { label: "Alta gastronomia", icon: "utensils" as const },
      { label: "Iluminação cênica decorativa", icon: "lightbulb" as const },
      { label: "DJ", icon: "disc" as const },
    ],
  },
  estrutura: {
    title: "Salão Principal — estrutura do espaço",
    lead: "Estrutura completa, conforto e organização para tornar seu evento inesquecível.",
    sections: [
      {
        icon: "mobilia" as const,
        title: "Mobília",
        items: [
          "150 cadeiras",
          "15 mesas redondas para convidados",
          "1 mesa de decoração espelhada com arranjos",
          "1 mesa rústica de apoio para almoço ou jantar",
        ],
      },
      {
        icon: "cozinha" as const,
        title: "Área de apoio / cozinha",
        items: ["Churrasqueira", "3 geladeiras", "1 forno", "1 fogão", "Gás incluso"],
      },
      {
        icon: "banheiros" as const,
        title: "Banheiros",
        items: [
          "3 banheiros: masculino, feminino e PCD com fraldário",
          "Papel higiênico, papel toalha e sabonete líquido inclusos",
        ],
      },
      {
        icon: "privativo" as const,
        title: "Espaço privativo",
        items: ["Ambiente exclusivo", "Ar-condicionado", "Banheiro separado"],
      },
      {
        icon: "equipe" as const,
        title: "Equipe inclusa",
        items: ["1 pessoa responsável pela limpeza dos banheiros e apoio durante o evento"],
      },
    ],
    eventInfo: [
      "Duração do evento: 6 horas",
      "Espaço liberado para montagem a partir das 07:00",
    ],
    disclaimer:
      "Valores e pacotes conforme data e disponibilidade — detalhes na visita e na proposta, sem compromisso.",
  },
  diferenciais: {
    title: "Diferenciais",
    subtitle: "O que faz a diferença na sua escolha",
    items: [
      {
        icon: "mapPin" as const,
        title: "Barueri, fácil de chegar",
        description: "Av. Diretriz, 204 — Jd. Mutinga. Rotas pelo Waze ou Google Maps no rodapé.",
      },
      {
        icon: "layers" as const,
        title: "Dois espaços, um endereço",
        description: "Salão principal para eventos adultos e JC Kids 204 para festas infantis no mesmo local.",
      },
      {
        icon: "scan" as const,
        title: "Conheça antes de fechar",
        description: "Tour virtual 360° com salão, camarim e áreas de apoio — explore sem sair de casa.",
      },
      {
        icon: "message" as const,
        title: "Proposta sob medida",
        description: "Atendimento direto no WhatsApp com retorno em até 1 dia útil em horário comercial.",
      },
    ],
  },
  galeria: {
    title: "Galeria",
    subtitle: "Inspirações para o seu evento",
    filters: ["Todos", "Casamentos", "Debutantes", "Corporativo", "Aniversários"] as const,
    items: MEDIA.eventos.galeria,
  },
  tour360: {
    eyebrow: "Tour virtual 360°",
    title: "Entre no salão",
    emphasis: "como se estivesse lá",
    subtitle:
      "Salão, camarim, entrada e cada detalhe em panorama imersivo — explore o espaço por dentro.",
    badge: "7 ambientes reais",
  },
  contato: {
    title: "Fale com a gente",
    subtitle: "Retorno em até 1 dia útil em horário comercial.",
  },
} as const;

/* ─── JC Kids 204 (/kids) ─── */
export const KIDS = {
  meta: {
    title: "JC Kids 204 — Festas infantis em Barueri",
    description:
      "Aniversário infantil, festa temática e brinquedoteca no JC Kids 204 — Barueri. Estrutura completa com monitor e brinquedos inclusos.",
  },
  hero: {
    eyebrow: "JC Kids 204 · Barueri",
    headline: "A festa que seu filho",
    emphasis: "vai lembrar para sempre",
    subheadline:
      "Playground, piscina de bolinhas e equipe no local — 6 horas de celebração no mesmo endereço do JC Eventos 204.",
    cta: "Orçar festa no WhatsApp",
    ctaSecondary: "Ver pacotes e brinquedos",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre festa infantil no JC Kids 204.",
    image: MEDIA.kids.hero,
  },
  servicos: {
    title: "Pacotes Kids",
    subtitle: "Celebrações que encantam os pequenos",
    items: [
      {
        title: "Aniversário infantil",
        description:
          "Salão decorado, mesas para convidados e espaço para bolo, doces e alegria sem fim.",
        image: MEDIA.kids.servicos.aniversarioInfantil,
        cta: "Montar aniversário",
        whatsappMessage: "Olá! Quero orçar aniversário infantil no JC Kids 204.",
      },
      {
        title: "Festa temática",
        description:
          "Personagens favoritos, cores vibrantes e cenários que transformam a festa em aventura.",
        image: MEDIA.kids.servicos.festaTematica,
        cta: "Escolher tema",
        whatsappMessage: "Olá! Quero uma festa temática no JC Kids 204.",
      },
      {
        title: "Brinquedoteca",
        description:
          "Área de recreação com brinquedos para manter as crianças animadas e seguras.",
        image: MEDIA.kids.servicos.brinquedoteca,
        cta: "Incluir brinquedoteca",
        whatsappMessage: "Olá! Gostaria de incluir brinquedoteca na festa no JC Kids 204.",
      },
    ],
  },
  amenities: {
    title: "Tudo que você precisa em um só lugar",
    items: [
      { label: "Mobiliário infantil", icon: "armchair" as const },
      { label: "Decoração temática", icon: "sparkles" as const },
      { label: "Brinquedoteca", icon: "blocks" as const },
      { label: "Buffet infantil", icon: "utensils" as const },
      { label: "Recreação", icon: "party" as const },
      { label: "Iluminação decorativa", icon: "lightbulb" as const },
      { label: "Mesa do bolo", icon: "cake" as const },
    ],
  },
  estrutura: {
    title: "Espaço Kids — estrutura completa",
    lead: "Espaço ideal para festas infantis, aniversários e confraternizações com conforto, segurança e diversão.",
    sections: [
      {
        icon: "espaco" as const,
        title: "Espaço Kids",
        items: ["20 mesas redondas para convidados", "150 cadeiras"],
      },
      {
        icon: "brinquedos" as const,
        title: "Brinquedos",
        items: [
          "Playground com tobogã",
          "Piscina de bolinhas",
          "Cama elástica",
          "Mesa de sinuca",
          "Mesa de pebolim",
          "Tombo Legal",
        ],
      },
      {
        icon: "cozinha" as const,
        title: "Cozinha",
        items: [
          "1 fogão",
          "1 forno",
          "Gás incluso",
          "Churrasqueira",
          "1 geladeira",
          "1 freezer",
        ],
      },
      {
        icon: "banheiros" as const,
        title: "Banheiros",
        items: [
          "3 banheiros: masculino, feminino e fraldário",
          "Papel higiênico, sabonete líquido e papel toalha inclusos",
        ],
      },
      {
        icon: "equipe" as const,
        title: "Equipe inclusa",
        items: [
          "1 pessoa responsável pela limpeza dos banheiros e apoio durante o evento",
          "1 monitor para os brinquedos durante o evento",
        ],
      },
    ],
    eventInfo: [
      "Duração do evento: 6 horas",
      "Espaço liberado para montagem a partir das 07:00",
    ],
    disclaimer:
      "Valores e pacotes conforme data e disponibilidade — detalhes na visita e na proposta, sem compromisso.",
  },
  diferenciais: {
    title: "Diferenciais",
    subtitle: "Segurança e diversão para os pequenos",
    items: [
      {
        icon: "shield" as const,
        title: "Equipe no evento",
        description: "Monitor nos brinquedos e apoio com banheiros durante toda a festa — inclusos na locação.",
      },
      {
        icon: "gamepad" as const,
        title: "Diversão garantida",
        description: "Playground, piscina de bolinhas, cama elástica e jogos para manter a turma animada.",
      },
      {
        icon: "clock" as const,
        title: "Tempo de festa generoso",
        description: "6 horas de evento e montagem liberada a partir das 07:00 para você organizar tudo com calma.",
      },
      {
        icon: "building" as const,
        title: "No mesmo JC Eventos 204",
        description: "Estrutura infantil dedicada no endereço que você já conhece — ideal para famílias de Barueri.",
      },
    ],
  },
  galeria: {
    title: "Galeria JC Kids 204",
    subtitle: "Ideias para a festa do seu filho",
    filters: ["Todos", "Aniversário", "Temática", "Brinquedoteca"] as const,
    items: MEDIA.kids.galeria,
  },
  tour360: {
    eyebrow: "Tour virtual 360°",
    title: "O mundo das festas",
    emphasis: "na palma da mão",
    subtitle:
      "Salão Kids, cores e diversão em panorama completo — veja onde a alegria do seu filho vai acontecer.",
    badge: "2 ambientes Kids",
  },
  contato: {
    title: "Fale com a gente",
    subtitle: "Retorno em até 1 dia útil em horário comercial.",
  },
} as const;

export function eventosWhatsApp(message?: string) {
  return getWhatsAppHref(message ?? EVENTOS.hero.whatsappMessage);
}

export function kidsWhatsApp(message?: string) {
  return getWhatsAppHref(message ?? KIDS.hero.whatsappMessage);
}
