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
    label: "JC Kids",
    headline: "Festas infantis com recreação e muito colorido",
    cta: "Entrar no JC Kids",
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
    cta: "Agendar visita gratuita",
    ctaSecondary: "Ver serviços",
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
  diferenciais: {
    title: "Diferenciais",
    subtitle: "Por que escolher o JC Eventos 204",
    items: [
      { title: "Localização em Barueri", description: "Av. Diretriz, 204 — Jd. Mutinga, fácil acesso na região." },
      { title: "Salão versátil", description: "Layout adaptável para casamentos, 15 anos, confraternizações e festas de aniversário." },
      { title: "Estrutura completa", description: "Iluminação, área para buffet e montagem de decoração — consulte o que está incluso na proposta." },
      { title: "Atendimento próximo", description: "Visita agendada para você conhecer o espaço antes de fechar — sem compromisso." },
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
      "Salão, camarim, entrada e cada detalhe em panorama imersivo — explore o espaço antes de agendar sua visita.",
    badge: "7 ambientes reais",
  },
  contato: {
    title: "Visite o espaço",
    subtitle: "Agende uma visita presencial e conheça o salão sem compromisso.",
  },
} as const;

/* ─── JC Kids (/kids) ─── */
export const KIDS = {
  meta: {
    title: "JC Kids — Festas infantis em Barueri",
    description:
      "Aniversário infantil, festa temática e brinquedoteca em Barueri. O espaço ideal para a alegria do seu filho.",
  },
  hero: {
    eyebrow: "JC Kids · Barueri",
    headline: "O espaço ideal para fazer a",
    emphasis: "alegria do seu filho",
    subheadline:
      "Festas infantis com ambiente colorido, recreação e montagens temáticas — diversão do começo ao fim.",
    cta: "Quero uma festa Kids",
    ctaSecondary: "Ver pacotes",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre festa infantil no JC Kids.",
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
        whatsappMessage: "Olá! Quero orçar aniversário infantil no JC Kids.",
      },
      {
        title: "Festa temática",
        description:
          "Personagens favoritos, cores vibrantes e cenários que transformam a festa em aventura.",
        image: MEDIA.kids.servicos.festaTematica,
        cta: "Escolher tema",
        whatsappMessage: "Olá! Quero uma festa temática no JC Kids.",
      },
      {
        title: "Brinquedoteca",
        description:
          "Área de recreação com brinquedos para manter as crianças animadas e seguras.",
        image: MEDIA.kids.servicos.brinquedoteca,
        cta: "Incluir brinquedoteca",
        whatsappMessage: "Olá! Gostaria de incluir brinquedoteca na festa no JC Kids.",
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
  diferenciais: {
    title: "Por que o JC Kids",
    subtitle: "Tudo pensado para os pequenos",
    items: [
      { title: "Ambiente colorido", description: "Mural artístico e salão amplo que as crianças adoram explorar." },
      { title: "Recreação", description: "Estrutura para manter a turma entretida durante toda a festa." },
      { title: "Montagem temática", description: "Decoração personalizada conforme o tema escolhido — detalhes na proposta." },
      { title: "Mesmo endereço", description: "Av. Diretriz, 204 — estrutura do JC Eventos 204 dedicada ao público infantil." },
    ],
  },
  galeria: {
    title: "Galeria Kids",
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
    title: "Agende uma visita",
    subtitle: "Traga a família, conheça o espaço e tire suas dúvidas antes de fechar a data.",
  },
} as const;

export function eventosWhatsApp(message?: string) {
  return getWhatsAppHref(message ?? EVENTOS.hero.whatsappMessage);
}

export function kidsWhatsApp(message?: string) {
  return getWhatsAppHref(message ?? KIDS.hero.whatsappMessage);
}
