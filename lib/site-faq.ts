export type FaqItem = { question: string; answer: string };

const SHARED: FaqItem[] = [
  {
    question: "Onde fica o JC Eventos 204?",
    answer:
      "Av. Diretriz, 204 — Jd. Mutinga, Barueri — SP. No rodapé do site você encontra atalhos para Waze e Google Maps.",
  },
  {
    question: "Qual a diferença entre Eventos 204 e Kids 204?",
    answer:
      "São dois espaços no mesmo endereço: o Salão Principal para casamentos, debutantes, corporativo e aniversários adultos; o JC Kids 204 é dedicado a festas infantis com brinquedos e monitor inclusos.",
  },
  {
    question: "Quanto tempo dura o evento?",
    answer: "A locação padrão é de 6 horas de festa, conforme pacote e data contratados.",
  },
  {
    question: "A partir de que horário posso montar?",
    answer: "O espaço é liberado para montagem a partir das 07:00 do dia do evento.",
  },
  {
    question: "Vocês divulgam valores no site?",
    answer:
      "Não. Cada data e pacote têm condições específicas — enviamos proposta personalizada no WhatsApp após sua consulta, sem compromisso.",
  },
  {
    question: "Como funciona a promoção de segunda a quinta?",
    answer:
      "Há desconto de até 35% em locações de segunda a quinta, conforme disponibilidade, pacote e forma de pagamento. Consulte pelo WhatsApp para saber se sua data se enquadra.",
  },
  {
    question: "Posso conhecer o salão antes de fechar?",
    answer:
      "Sim. Agende visita pelo WhatsApp ou explore o tour virtual 360° com fotos panorâmicas dos ambientes.",
  },
  {
    question: "Em quanto tempo respondem no WhatsApp?",
    answer: "Retorno em até 1 dia útil em horário comercial.",
  },
];

export const EVENTOS_FAQ: FaqItem[] = [
  ...SHARED,
  {
    question: "O que está incluso no Salão Principal?",
    answer:
      "150 cadeiras, 15 mesas redondas, mesa de decoração espelhada, mesa rústica de apoio, churrasqueira, geladeiras, forno, fogão com gás, banheiros (incl. PCD com fraldário), espaço privativo com ar-condicionado e apoio de equipe durante o evento.",
  },
  {
    question: "Para quais tipos de evento o salão é indicado?",
    answer: "Casamentos, festas de 15 anos, confraternizações corporativas e aniversários adultos.",
  },
];

export const KIDS_FAQ: FaqItem[] = [
  ...SHARED,
  {
    question: "O que está incluso no JC Kids 204?",
    answer:
      "20 mesas e 150 cadeiras, playground com tobogã, piscina de bolinhas, cama elástica, jogos, cozinha completa com churrasqueira, banheiros com fraldário, monitor nos brinquedos e apoio com banheiros durante toda a festa.",
  },
  {
    question: "Preciso contratar recreador à parte?",
    answer:
      "A locação inclui monitor para os brinquedos durante o evento. Serviços extras de recreação ou personagens podem ser combinados na proposta.",
  },
];
