import type { BaseTranslation } from '../i18n-types'

const pt: BaseTranslation = {
  errors: {
    required: 'Required',
    number: 'Expected a number',
    string: 'Expected an answer',
  },
  placeholder: {
    month: 'Mês',
    year: 'Ano',
    name: 'Nome',
    relationship: 'Relação',
    closeness: 'Closeness',
    addPerson: 'Adicionar Pessoa',
    reset: 'Reset',
    completion: `Your survey has been submitted.`,
    agree: `Concordo`,
    disagree: `Discordo`,
    credits: 'Créditos',
  },
  help: {
    notImportant: 'Not at all Important',
    veryImportant: 'Very Important',
    stronglyDisagree: 'Strongly Disagree',
    stronglyAgree: 'Strongly Agree',
  },
  choices: {
    likely: ['Improvável', 'Pouco provável', 'Provável', 'Muito provável'],
    importance: [
      'Não importante',
      'Pouco importante',
      'Importante',
      'Muito importante',
    ],
    QVSRReset: `Está de acordo com o resultado dos seus votos? Se está de acordo seleccione próximo, se não pode fazer "reset" e fazer a distribuição novamente`,
    howLong: [
      'A few days but within a week',
      'Between 1 and 2 weeks',
      'Less than a month',
      'More than a month',
    ],
    entity: ['Encaminhado para outra entidade', 'Tratado pelo próprio SASB'],
    problems: [
      'Sim, durante 1 ou 2 meses',
      'Sim durante 3 ou mais meses mas não todos',
      'Sim, todos os meses',
      'Não, nunca',
    ],
    relationship: [
      'Vizinho',
      'Colega de Trabalho',
      'Amigo ou Conhecido',
      'Familiar',
      'Outro',
    ],
    notAplicable:
      'Não se Aplica (Esvaziado somente uma vez desde Abril de 2021)',
    satisfy: [
      'Muito Satisfeito',
      'Satisfeito',
      'Pouco satisfeito',
      'Insatisfeito',
    ],
    satisfaction: [
      'A qualidade Piorou',
      'Não mudou',
      'A qualidade Melhorou',
      'Não sei dizer',
    ],
    satisfactionLevel: [
      'Muito Satisfeito',
      'Satisfeito',
      'Pouco satisfeito',
      'Insatisfeito',
    ],
    serviceProvider: [
      'Dono da casa',
      'Intermediário',
      'SASB',
      'Operador privado',
      'Gestor do condomínio/prédio',
      'Outro',
    ],
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    revise: ['Rever, aumentar o preco', 'Manter', 'Rever, baixar o preco'],
    compare: ['Maior', 'Próximo disso', 'Menor'],
    yesNo: ['Sim', 'Não'],
    placeholder: 'Por favor escolha uma opção',
    languages: ['Inglês', 'Português'],
    sanitationType: ['Ligação ao sistema de esgoto', 'Fossa séptica'],
    dwellingType: [
      'Casa singular com serviço de saneamento singularizado',
      'Condomínio com saneamento singular',
      'Condomínio com serviço de saneamento comum (ex. “macamelo”)',
      'Flat num prédio com serviço de saneamento comum',
    ],
    48: [
      'Fornecimento de água canalizada para residências da cidade.',
      'Serviços de esgoto.',
      'Serviços de drenagem da cidade.',
      'Fornecimento de eletricidade (energia) para residências na sua cidade.',
      'Pavimentação de ruas na sua cidade.',
    ],
    430: [
      `Não sei a quem devo contactar`,
      'SASB normalmente leva muito tempo',
      'SASB não irá resolver o meu problema',
      'Não confio no trabalho pelo SASB',
      'Outra pessoa irá contactar o SASB',
      'É mais conveniente chamar um canalizador',
      'É mais barato chamar um canalizador',
    ],
    431: [
      'Remoção de lodo fecal',
      'Remoção de lodo fecal (Pedido Prioritário)',
      'Limpeza do tanque séptico',
    ],
    510: [
      'Falta de agua suficiente para passar o retrete (descarregar o autoclismo)',
      'Bloqueio de esgoto, sem fluxo adequado, refluxo de água negra, transbordo na sua residência ou condomínio',
      'Bloqueio de esgoto, sem fluxo adequado, refluxo de água negra, transbordo no seu bloco/quarteirão',
      'Vazamento/ruptura da linha de esgoto na sua residência',
      'Vazamento/ruptura da linha de esgoto no seu bairro',
      'Mau cheiro de esgoto dentro da residência',
      'Corte da liguação por causa de falta de pagamento da factura',
      'Outro',
    ],
    513: [
      `Não sei a quem devo contactar`,
      'SASB normalmente leva muito tempo',
      'SASB não irá resolver o meu problema',
      'Não confio no trabalho pelo SASB',
      'Outra pessoa irá contactar o SASB',
      'É mais conveniente chamar um canalizador',
      'É mais barato chamar um canalizador',
    ],
    614: [
      'Valas/bueiros/caixas de inspeção abertos',
      'Caixas a transbordar',
      'Ruas inundadas',
      'Quintal inundada depois da chuva',
      'Casa inundada depois da chuva',
      'Outro',
    ],
    617: [
      `Não sei a quem devo contactar`,
      'SASB normalmente leva muito tempo',
      'SASB não irá resolver o meu problema',
      'Não confio no trabalho pelo SASB',
      'Outra pessoa irá contactar o SASB',
      'É mais conveniente chamar um canalizador',
      'É mais barato chamar um canalizador',
    ],
  },
  actions: {
    enableLocation: 'Habilitar Localização',
    startSurvey: 'Comerçar Pesquisa',
    next: 'Próximo',
    previous: 'Anterior',
    submit: 'Enviar',
  },
  headings: {
    1: `Background Data`,
    2: `Background Data`,
    3: `Background Data`,
    4: `Service Prioritization`,
    5: `Information Experiment`,
    6: `Sharing Information`,
    7: `WTP - Sewer Connection Fee`,
    8: `Community Price Point - Sewer Connection Fee`,
    9: `WTP - Monthly Sanitation Tax/Sewer Service Fee`,
    10: `Community Price Point - Monthly Sanitation Tax/Sewer Service Fee`,
    11: `WTP - New Monthly  Drainage Service Fee`,
    12: `Community Price Point - New Monthly Drainage Service Fee`,
    13: `WTP for Fecal Sludge Management Services`,
    14: `WTP for Fecal Sludge Management Services`,
    15: `Information Experiment - Reminder`,
    16: `Satisfaction towards SASB's Services`,
    17: `Sharing of Satisfaction`,
    18: ``,
    19: `Experience with Household Sewer Services`,
    20: `Experience Interacting with SASB when dealing with Sewer ISSUES`,
    21: `Revising WTP: Sewer Connection Fee`,
    22: `Revising WTP : Monthly Sanitation Tax/Sewer Service Fee`,
    23: `Experience Interacting with SASB when dealing with Septic Tank`,
    24: `Revising WTP: Fecal Sludge Desludging Services`,
    25: `Experience with Drainage Condition`,
    26: `Experience Interacting with SASB when dealing with Drainage Issues`,
    27: ``,
  },
  questions: {
    language: 'Idioma',
    willingPay: `Pode dizer nos qual é o novo preço que está disposto a pagar?`,
    QVSRInfo: `You will have 100 credits to allocate your vote. The more you vote for an option, the more credits you will consume.  Please observe the numbers of credits left as you allocate your votes. At the end of this exercise, you will be asked to review your votes.`,
    QVSRInstruction: `Por favor aprecie as opções fornecidas e indique quantos votos gostaria de alocar a cada uma delas. Caso não goste de nenhuma opção pode votar contra ela. (Enumerador pode demonstrar como se faz). `,
    IDK: `Eu não sei`,
    SliderInstruction: `Por favor, use a régua (deslisador) para indicar o valor preferido. (Entrevistador pode demonstrar)`,
    41: 'Por favor, insira a ID única (campo será preenchido automaticamente)',
    42: 'Bairro',
    43: 'Que tipo de serviço sanitário o (a) senhor (a) possui?',
    44: 'Que tipo de propriedade é esta?',
    45: 'Partilha a factura de água com outros agregados?',
    46: 'Com quantos agregados compartilha a factura de água?',
    47: `Com base em informações que coletamos, descobrimos que famílias nesta comunidade pagam tipicamente por volta de 620 meticals para a conta de água todo mês incluindo o imposto do saneamento. Como este valor se compara ao que você paga geralmente?`,
    48: {
      paragraph1: `Residentes no seu bairro irão participar deste exercício. Quando tomar suas decisões, por favor, imagine que o resto do seu bairro também está a participar deste exercício.`,
      paragraph2: `Distribua os seus votos de acordo com a importancia que os seguintes servicos publicos tem para si hoje`,
    },
    49: {
      paragraph1: `Estive a pensar sobre como o SASB administra os serviços de saneamento. Apesar de eu não saber muito sobre saneamento, na minha opinião eles estão a fazer um bom trabalho`,
      paragraph2: `Para melhorar a qualidade deste serviço, o SASB está a implementar um programa  inovador de formação dos seus trabalhadores desde Fevereiro de 2022. O programa envolve`,
      paragraph3: `reparar rapidamente obstruções ou rachas no sistema de esgoto`,
      paragraph4: `melhorar a drenagem`,
      paragraph5: `responder prontamente às reclamações dos clientes e`,
      paragraph6: `reduzir interupções no serviço.`,
      paragraph7: `Num outro país, este inovador programa de formação melhorou a confiabilidade do serviço em 55 por cento e o tempo de resposta para reclamações em 34 por cento.`,
    },
    410: `Estive a pensar sobre como a SASB administra os serviços de saneamento. Apesar de eu não saber muito sobre saneamento, na minha opinião eles estão fazendo um bom trabalho. `,
    411: `Como avalia, numa escala de 1 a 4, com 1 sendo não completamente importante e 4 muito importante, a importância da informação que acabei de partilhar consigo para as pessoas no seu bairro?`,
    412: `Numa escala de 1 a 4, sendo 1 o mais baixo e 4 o mais alto, qual a probabilidade de você compartilhar a informação que eu lhe dei com outras pessoas do seu bairro?`,
    413: {
      paragraph1: `Pediram a todos os moradores do seu bairro para ajudar na tomada de decisão sobre a taxa de ligação ao esgoto. Quando votar ou tomar as suas decisões, por favor imagine que todos os seus vizinhos também participam deste exercício também.  Assim, a decisão colectiva sobre bairro será importante para o SASB tomar uma decisão em relação ao valor da taxa da ligação ao sistema de esgoto`,
      paragraph2: `lista de preços com visualizações economistas) Os agregados que queiram uma NOVA ligação à rede de esgoto deverão pagar uma taxa única que cobra os custos de material e mão de obra para a construção da tubagem. Qual deve ser a taxa de ligação para cada um dos moradores deste bairro incluindo a si próprio? Pode distribuir os seus votos por mais que uma das opções de preço listadas a seguir. Com base na informação recolhida o valor da taxa média actual é cerca de 8500 Meticais.`,
    },
    414: {
      paragraph1: `Pediram a todos os moradores do seu bairro para ajudar na tomada de decisão sobre a taxa de ligação ao esgoto. Quando votar ou tomar as suas decisões, faça o favor de imaginar que todos os seus vizinhos também participam deste exercício.  Assim, a decisão colectiva pelo bairro será importante para o SASB tomar uma decisão em relação ao valor da taxa da ligação ao sistema de esgoto`,
      paragraph2: `Os agregados que queiram uma NOVA ligação à rede de esgoto deverão pagar uma taxa única que cobra os custos de material e mão de obra para a construção da tubagem. Qual deve ser a taxa de ligação para cada um dos moradores deste bairro incluindo a si próprio? Pode distribuir os seus votos por mais de uma das opções de preço listadas a seguir. Com base na informação recolhida o valor da taxa média actual é cerca de 8500 Meticais.`,
    },
    415: {
      paragraph1: `Agora gostaria de compartilhar consigo o que a sua comunidade acha do valor que deve ser pago para a taxa de ligação ao sistema de esgoto.`,
      paragraph2: `Para a ligação ao sistema de esgoto de acordo com o nosso inquérito se propõe um preço médio de (X). Propûs o preço ({y} MT)`,
      paragraph3: `Ouvido a proposta da comunidade prefere mudar o preço que mencionou? O preço que mencionou é ({y} MT)`,
    },
    417: {
      paragraph1: `Agora iremos perguntar-lhe sobre a sua disponibilidade de pagar por uma taxa de saneamento mensal`,
      paragraph2: `Nesta pesquisa, estamos pedindo para todos residentes deste bairro para ajudar na decisão sobre o valor da taxa de saneamento (serviço de esgoto) que deveria ser pago mensalmente. Actualmente, essa taxa está fixada em 20 por cento da sua factura de água. De acordo com a informação que recolhemos, isso é aproximadamente 80 meticais por mês para cada agregado familiar na Beira. O resultado colectivo do bairro será importante para o SASB na tomada de decisão sobre o preço dos seus serviços.`,
      paragraph3: `A taxa mensal de saneamento cobre os custos de manutenção e reparação das tubagens de esgoto. Qual deveria ser a o valor da taxa mensal para todo no seu bairro incluindo você?`,
    },
    418: {
      paragraph1: `Agora, vamos fazer perguntas sobre a sua vontade de pagar pela taxa mensal de saneamento ou a taxa de serviço de esgoto.`,
      paragraph2: `Nesta pesquisa, pede-se a todos residentes neste bairro a ajudar a determinar um preço para a taxa para saneamento ou de seviço de esgoto a ser paga mensalmente. Actualmente, essa taxa representa 20 por cento da sua factura de água. Com base nas informações recolhidas, isso é aproximadamente 80 meticals por mês para cada agregado na Beira. Enquanto estiver a votar ou tomar a sua decisão, por favor imagine que todos no seu bairro também participam deste exercício. O resultado do exercício colectivo do bairro será importante para a SASB determinar o preço dos seus serviços.`,
      paragraph3: `A taxa mensal de saneamento cobre os custos de manutenção e reparação das linhas de esgoto. Qual deve ser a taxa mensal para todos no seu bairro, incluindo você?`,
    },
    419: {
      paragraph1: `Agora gostaria de compartilhar consigo o que a sua comunidade acha do valor que deve ser pago para a taxa de ligação ao sistema de esgoto..`,
      paragraph2: `Para a taxa mensal de saneamento a comunidade propõe um preço médio de (X). Você propôs o preço ({y} MT)`,
      paragraph3: `Ouvido a proposta da comunidade prefere mudar o preço que propôs? O preço que mencionou é ({y} MT)`,
    },
    421: {
      paragraph1: `AGORA, imagine que o SASB apresente uma nova taxa mensal para resolver os problemas de drenagem no seu bairro. Queremos fazer algumas perguntas sobre a sua vontade de pagar esta taxa hipotética.`,
      paragraph2: `Nesta pesquisa, pedimos a todos os moradores deste bairro para ajudar na decisão sobre o valor da taxa mensal de drenagem. Essa taxa é hipotética, mas no caso em que for criada pode ajudar o SASB a reduzir os problemas de drenagem no seu bairro, como inundações e/o alagamentos. Quando estiver a votar ou definir a sua proposta, por favor tome em consideração que todos os residentes do seu bairro irão participar neste exercício. O resultado deste exercício colectivo será importante para o SASB tomar uma decisão sobre a eventual criação desta taxa e o respectivo valor. Note que neste momento não há nenhum plano para a sua criação e que se trata apenas de um exercício meramente experimental.`,
      paragraph3: `Se o SASB apresentar uma nova taxa mensal para melhorar as condições da drenagem no seu bairro, quanto deveria ser o valor mensal dessa taxa para todos no seu bairro incluindo você.`,
    },
    422: {
      paragraph1: `AGORA, imagine que o SASB apresente uma nova taxa mensal para resolver os problemas de drenagem no seu bairro. Queremos fazer algumas perguntas sobre sua vontade de pagar esta taxa hipotética.`,
      paragraph2: `Nesta pesquisa, pedimos a todos os moradores deste bairro para ajudar na decisão sobre um o valor duma a taxa mensal de drenagem. Essa taxa é hipotética mas caso for criada pode ajudar o SASB a reduzir os problemas de drenagem como inundações e/o alagamentos no seu bairro. Quando estiver a votar ou definir a sua proposta, por favor tome em consideração que todos os residentes do seu bairro irão participar deste exercício. O resultado deste exercício colectivo será importante para o SASB na decisão sobre uma eventual criação desta taxa e o respectivo valor. Note que neste momento não há nenhum plano para a criação desta taxa, trata-se apenas de um exercício meramente experimental.`,
      paragraph3: `Se a SASB apresentar uma nova taxa mensal para melhorar as condições da drenagem no seu bairro, quanto deveria ser o valor mensal dessa taxa para todos no seu bairro incluindo você`,
    },
    423: {
      paragraph1: `Agora gostaríamos de partilhar consigo a opinião da sua comunidade sobre o valor que deve ser pago para uma taxa de drenagem mensal hipotética`,
      paragraph2: `Para a taxa mensal de drenagem hipotética a comunidade propôs um preço médio de (X). Você propôs o preço ({y} MT)`,
      paragraph3: `Ouvido a proposta da comunidade prefere rever/mudar o preço que indicou antes? O preço que indicou é ({y} MT)`,
    },
    425: `Desde Abril 2021 já mandou esvaziar a sua fossa séptica?`,
    426: `Contactou um provedor de serviço para esvaziar a fossa?`,
    427: `Quando foi a última vez que contactou alguém para limpar a sua fossa?`,
    428: `A quem contactou?`,
    429: `Especifique outro`,
    430: `Porque não contactou o SASB?`,
    431: `Que tipo de seviços pediu?`,
    432: `Pagou pelo serviço?`,
    433: `Quanto pagou pelo serviço?`,
    434: `Actualmente, o SASB oferece o serviço de remoção de lodo fecal e limpeza da fosse séptica por um preço total de 8700MT. (Mostrar repartição dos custos também por tipo de habitação)`,
    435: `A que preço consideraria o valor da taxa para a remoção do lodo fecal DEMASIADAMENTE CARO para este serviço? (Demasiadamente Caro)`,
    436: `A que preço consideraria o valor da taxa para a remoção do lodo fecal DEMASIADAMENTE BARATO de modo a que desconfie que o serviço seja de má qualidade?`,
    437: `A que preço consideraria a taxa para a remoção do lodo fecal a ficar caro, mas ainda assim  consideria pagar pelo servico?`,
    438: `A que preço consideraria a taxa para a remoção do lodo fecal muito acessível ou um óptimo custo-benefício?`,
    439: `Como mencionei anteriormente, na minha opinião pessoal, o SASB tem feito um bom trabalho! Eles implementaram também um programa de treinamento especial para melhorar o desempenho de seus funcionários. Esse programa de treinamento inovador já melhorou a confiabilidade dos serviços e a resposta à reclamações num outro país.`,
    440: `Como mencionei anteriormente, na minha opinião pessoal, o SASB está a fazer um bom trabalho!`,
    441: `De modo geral, está satisfeito com a qualidade dos serviços de esgoto actualmente prestados?`,
    442: `Comparando a qualidade dos serviços de esgoto que recebeu entre Abril e Setembro de 2021 com os serviços dos últimos 6 meses, notou alguma melhoria?`,
    443: `De modo geral, está satisfeito com a qualidade do serviço de drenagem da SASB no seu bairro?`,
    444: `Comparando a qualidade dos serviços de drenagem entre Abril e Setembro de 2021 com os serviços dos últimos 6 meses, você notou alguma mudança na qualidade?`,
    445: `De modo geral, você está satisfeito com a qualidade do serviço de remoção de lodo fecal do SASB?`,
    446: `Comparando a qualidade dos serviços de remoção de lodo fecal que você recebeu entre Abril e Setembro de 2021 com os serviços dos últimos 6 meses, você notou alguma mudança na qualidade?`,
    447: `De modo geral, está satisfeito com a qualidade do serviço ao consumidor do SASB na resposta às suas perguntas, inquiteções, reclamações e pedidos?`,
    448: `Comparando a qualidade dos serviços ao consumidor que recebeu entre Abril e Setembro de 2021 com os serviços durante os últimos 6 meses, você notou alguma mudança na qualidade?`,
    449: `De modo geral, está satisfeito com a qualidade do serviço público do município de Beira?`,
    450: `Comparando a qualidade dos serviços públicos do Município de Beira que recebeu entre Abril e Setembro de 2021 com os serviços durante os últimos 6 meses, você notou alguma mudança na qualidade?`,
    451: `Numa escala de 1 a 4, sendo 1 o menor valor e 4 o maior, quão provável é do (a) senhor (a) partilhar a sua satisfação com os serviços da SASB mencionados acima com outras pessoas do seu bairro.`,
    452: `Com quem gostaria de partilhar a sua opinão/nível de satisfacção? Pode indicar até cinco pessoas. Faça o favor de especificar o tipo de relacionamento que tem com cada uma destas e também o nível de aproximação ou intimidade. Para intimidade, faça o favor usar do diagrama acima.`,
    453: `Como mencionado no início da entrevista, suas respostas são confidenciais. Porém, hoje, tem a possibilidade de submeter sua avaliação diretamente ao SASB através deste inquérito. Isso permitirá ao SASB entrar em contacto consigo para dar seguimento. Gostaria de fazer isso? (Não há obrigatoriedade de submeter isto ao SASB)`,
    454: `Sabe como contactar o SASB em caso de problemas relacionados ao saneamento ou drenagem?`,
    51: `Agora vou perguntar sobre suas experiências com a ligação da sua casa ao sistema de esgoto. Para cada experiência, queremos saber em quantos meses isso aconteceu com o senhor (a) nos últimos 6 meses. Mesmo que tenha acontecido apenas uma vez durante um mês, gostaríamos de contar esse mês`,
    52: `Nos últimos 6 meses, com que frequência sofreu interrupções por causa dum bloqueio de esgoto causando retorno e transbordo na sua residência ou condomínio?`,
    53: `Comparando a frequência de entupimento/rachas/transbordo de esgoto na sua casa  ou condomínio entre Abril e Setembro de 2021 com os dos últimos 6 meses, notou alguma mudança?`,
    54: `Nos últimos 6 meses, com que frequência sofreu  obstruções/rupturas/transbordos no seu bloco?`,
    55: `Comparando a frequência de entupimento/rachas/transbordos de esgoto no seu bairro entre Abril e Setembro de 2021 com os dos últimos 6 meses, notou alguma mudança?`,
    56: `Nos últimos 6 meses, Com que frequência sentiu mau cheiro de esgoto na sua residência ou condomínio?`,
    57: `Comparando a frequência em que sentiu mau cheiro de esgoto na sua casa ou condomínio entre Abril e Setembro de 2021 com os dos últimos 6 meses, notou alguma mudança?`,
    58: `De Abril de 2021 até então, contactou algúem para os problemas de drenagem que enfrentou antes?`,
    59: `Quando foi a última vez que contactou alguém para ajudar-lhe com o problema de esgoto?`,
    510: `Qual era o problema com o esgoto?`,
    511: `A quem contactou?`,
    512: `Especifique outro`,
    513: `Porque não contactou o SASB?`,
    514: `(Caso tenha contactado o SASB), a pessoa que lhe atendeu tratou-lhe duma forma correcta e educada?`,
    515: `(Caso tenha sido o SASB), teve que fazer mais que uma chamada até que começaram a intervir?`,
    516: `(Caso tenha contactado o SASB), sentiu a necessidade de subornar ou oferecer algo ao funcionário para que o atendimento fosse rápido?`,
    517: `(Caso tenha contactado o SASB), o seu problema foi tratado pelo próprio SASB ou foi encaminhado para outra entidade?`,
    518: `(Caso tenha contactado o SASB) O seu poblema ficou resolvido?`,
    519: `(Caso tenha contactado o SASB) Quanto tempo levou a solução do problema contando a partir do momento que fez o primeiro contacto?`,
    520: `Reflectindo melhor, gostaria de rever o valor que mencionou antes sobre a taxa única de ligação ao sistema de esgoto? O valor que mencionou antes é ({y} MT)`,
    522: `Reflectindo melhor, gostaria de rever o preço que estava disposto (a) a pagar para a taxa mensal de saneamento ou serviço de esgoto? O valor que indicou era ({y} MT)`,
    524: `(Caso tenha contactado o SASB), a pessoa que lhe atendeu tratou-lhe duma forma correcta e educada?`,
    525: `(Caso tenha sido o SASB), teve que fazer mais que uma chamada até que começaram a intervir?`,
    526: `(Caso tenha contactado o SASB), sentiu a necessidade de subornar ou oferecer algo ao funcionário para que o atendimento fosse rápido?`,
    527: `(Caso tenha contactado o SASB), o seu problema foi tratado pelo próprio SASB ou foi encaminhado para outra entidade?`,
    528: `(Caso tenha contactado o SASB) O seu poblema ficou resolvido?`,
    529: `(Caso tenha contactado o SASB) Quanto tempo levou a solução do problema contando a partir do momento que fez o primeiro contacto?`,
    530: `Reflectindo melhor, gostaria de rever o valor que mencionou antes para a taxa Limpeza/esvaziamanrto da fossa? O valor que mencionou antes é ({y} MT)`,
    61: `Agora farei algumas perguntas relacionadas à sua experiência com a drenagem das águas de chuva no seu quarteirão. Para cada experiência queremos saber em quantos meses ela ocorreu durante os últimos 6 meses. Mesmo se num determinado mês tenha ocorrido apenas uma vez, queremos incluir este mês na contagem.`,
    62: `Nos últimos 6 meses, em quantos meses a caixa de drenagem do quarteirão do seu bairro bloqueou e transbordou?`,
    63: `Comparando a situação entre Abril e Setembro do ano passado (2021) com a situação dos últimos 6 meses notou alguma mudança na ocorrência de bloqueis das caixas de drenagem?`,
    64: `Nos últimos 6 meses, em quantos meses observou que uma vala de drenagem/bueiro foi deixada aberta no seu quarteirão?`,
    65: `Pense em valas de drenagem ou caixas de inspecção (bueiros) deixadas abertas no seu quarteirão. Nota alguma mudança entre Abril e Setembro de 2021 com a dos últimos 6 meses?`,
    66: `Nos últimos 6 meses, em quantos meses teve que caminhar na água?`,
    67: `Nos últimos 6 meses, em quantos meses ficou encharcado (“levou banho”) por causa da passagem de carros?`,
    68: `Nos últimos 6 meses, em quantos meses ficou com medo de apanhar uma doença por causa da água estagnada na rua?`,
    69: `Comparando a frequência de ocorrência de alagamentos ou água estagnada no seu quarteirão entre Abril e Setembro de 2021 com a dos últimos 6 meses, notou alguma redução?`,
    610: `Nos últimos 6 meses, em quantos meses o seu bairro experimentou inundações depois de chuva?`,
    611: `Se você comparar a frequência de ocorrência de alagamentos depois de chuva no seu quarteirão entre Abril e Setembro de 2021 com a dos últimos 6 meses, você notou alguma redução?`,
    612: `Contactou alguém para resolver os problemas de drenagem que enfrentou?`,
    613: `Quando foi a última vez que contactou alguém para a resolução de problemas de drenagem?`,
    614: `Qual era a natureza do problema`,
    615: `Especifique outro`,
    616: `Quem contactou`,
    617: `Porquê não contactou o SASB  esse problema?`,
    618: `Caso seja o SASB, a pessoa que lhe atendeu tratou-lhe duma forma correcta e educada?`,
    619: `Caso tenha sido com SASB, teve que fazer mais que uma chamada até que começaram a actuar?`,
    620: `Caso tenha sido com o SASB, ficou com a impressão que tivesse que pagar alguma suborno ou "doação" ao funcionário para assegurar o rápido processamento do seu pedido?`,
    621: `Caso tenha contactado o SASB, o seu problema foi tratado pelo próprio SASB ou foi encaminhado para outra entidade?`,
    622: `O seu poblema ficou resolvido?`,
    623: `Quanto tempo levou a solução do problema contando do momento que fez o promeiro contacto?`,
    624: `Depois de ter partilhado a sua experiência com a drenagem gostaria de rever o preço que estava disposta a pagar para a taxa mensal de drenagem? O valor que indicou era (Y1)`,
  },
}

export default pt
