import type { BaseTranslation } from '../i18n-types'

const en: BaseTranslation = {
  errors: {
    required: 'Required',
    number: 'Expected a number',
    string: 'Expected an answer',
  },
  placeholder: {
    month: 'Month',
    year: 'Year',
    name: 'Name',
    relationship: 'Relationship',
    closeness: 'Closeness',
    addPerson: 'Add Person',
    reset: 'Reset',
    completion: `Your survey has been submitted.`,
    agree: `Agree`,
    disagree: `Disagree`,
    credits: 'Credits',
    ODKConfirmation: `Before proceeding with the Civicbase portion of this survey, please return to ODK and make sure that you have submitted the ODK form`,
    ODKCTA: `Yes, I have submitted the ODK form, I can proceed`,
  },
  help: {
    notImportant: 'Not at all Important',
    veryImportant: 'Very Important',
    stronglyDisagree: 'Strongly Disagree',
    stronglyAgree: 'Strongly Agree',
  },
  choices: {
    notSharing: `Not Sharing with Anyone`,
    likely: ['Very Unlikely', 'Somewhat unlikely', 'Somewhat likely', 'Very Likely'],
    importance: ['Not at all important', 'Low importance', 'Important', 'Very Important'],
    QVSRReset: `Do you agree with the allocation of your votes? If you agree, select next. If not, you may click on reset and reallocate your votes.`,
    howLong: ['A few days but within a week', 'Between 1 and 2 weeks', 'Less than a month', 'More than a month'],
    entity: ['Referred to another entity', 'Dealth by SASB'],
    problems: [
      'Yes, during 1 or 2 months (Rarely)',
      'Yes, 3 months or more but not all (Sometimes)',
      'Yes, all months (Regularly)',
      'No, never',
    ],
    relationship: ['Neighbor', 'Work Colleague', 'Friend Acquaintance', 'Family Member', 'Other'],
    notAplicable: 'Not Applicable (Only emptied once since April 2021)',
    notAplicable2: 'Not Aplicable',
    satisfy: ['Very Satisfied', 'Satisfied', 'Dissatisfied', 'Very Disatisfied'],
    satisfaction: ['It has gotten worse', 'No change', 'It has improved', `Don't know`],
    satisfactionLevel: ['Very Satisfied', 'Satisfied', 'Dissatisfied', 'Very Dissastisfied'],
    serviceProvider: [
      'Landlord',
      'Intermediary',
      'SASB',
      'Private operator',
      'Manager of condominium/building',
      'Other',
    ],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    revise: ['Revise up', 'Stay the same', 'Revise down'],
    compare: ['Higher', 'About Right', 'Lower'],
    yesNo: ['Yes', 'No'],
    placeholder: 'Please select one option',
    languages: ['English', 'Portuguese'],
    sanitationType: ['sewer connection', 'Septic Tank'],
    dwellingType: [
      'Singular',
      'Compound separated sanitation',
      'Compound shared sanitation',
      'Appartment in multistoried building with shared sanitation',
    ],
    48: [
      'piped water provision for households in the city',
      'sewer connection services in the city',
      'drainage provision in the city',
      'electricity supply for households in your city.',
      'coverage of paved roads in your city.',
    ],
    430: [
      `Don't know how to contact`,
      'SASB usually take so long',
      'SASB will not solve that problem for me',
      'Do not trust SASB',
      'Someone else will call',
      'More convenient to call a plumber to fix my problem',
      'Cheaper to call a plumber',
    ],
    431: ['Fecal Sludge removal', 'Fecal Sludge Removal (Priority Request)', 'Cleaning of Septic Tank'],
    510: [
      'Not enough water to flush',
      'Sewer blockage, no proper flow, flow of black water, over flow in your dwelling or compound',
      'Sewer blockage, no proper flow, flow of black water, over flow in your block',
      'Sewer line leakage/breakage in your dwelling',
      'Sewer line leakage/breakage in your neighborhood',
      'Bad sewer smell in your dwelling',
      'Connection cutoff due to not paying bill',
      'Other',
    ],
    513: [
      `Don't know how to contact`,
      'SASB usually take so long',
      'SASB will not solve that problem for me',
      'Do not trust SASB',
      'Someone else will call',
      'More convenient to call a plumber to fix my problem',
      'Cheaper to call a plumber',
    ],
    614: [
      'Channels and boxes open',
      'Overflowing boxes',
      'Flooded roads',
      'Flooded courtyard after rain',
      'House flooded after rain',
      'Other',
    ],
    617: [
      `Don't know how to contact`,
      'SASB usually take so long',
      'SASB will not solve that problem for me',
      'Do not trust SASB',
      'Someone else will call',
      'More convenient to call a plumber to fix my problem',
      'Cheaper to call a plumber',
    ],
  },
  actions: {
    enableLocation: 'Enable Location',
    startSurvey: 'Start Survey',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
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
    language: 'Language',
    willingPay: `Please let us know the new price that you would be willing to pay?`,
    QVSRInfo: `You will have 100 credits to allocate your vote. The more you vote for an option, the more credits you will consume.  Please observe the numbers of credits left as you allocate your votes. At the end of this exercise, you will be asked to review your votes.`,
    QVSRInstruction: `Please look at the options provided and indicate how many votes you
    would like to allocate to each price option. If you dislike any of the
    options, you can also "downvote" them.`,
    IDK: `I don't know`,
    SliderInstruction: `Please use the slider to indicate your preferred price.`,
    41: 'Please enter unique ID',
    42: 'Neighborhood',
    43: 'What type of sanitation service do you have?',
    44: 'What type of dweling is this?',
    45: 'Do you share your water bill with other households?',
    46: 'With how many households do you share your water bill?',
    47: `Based on information we have collected, we found that households in
    your community typically pays around 620 meticals for the monthly
    water bill including the sanitation tax. How does this compare to the
    amount you typically pay?`,
    48: {
      paragraph1: `Residents in your neighborhood are being asked to participate in a vote. When you make your decisions, please imagine everyone else in your neighborhood will be participating in this exercise too.`,
      paragraph2: `Please distribute your votes according to the importance the following public services have for you today`,
    },

    49: {
      paragraph1: `I've been thinking
      about how the utility SASB has been managing sanitation services.
      And though I don't know much about sanitation, in my personal
      opinion, they've been doing a good job`,
      paragraph2: `And in order to improve service quality, SASB has implemented an
      innovative new training program for its workers since February 2022.
      The program involves`,
      paragraph3: `quickly fixing sewer blockages or bursts`,
      paragraph4: `improving drainage`,
      paragraph5: `promptly addressing customer complaints and`,
      paragraph6: `reducing service disruptions.`,
      paragraph7: `This innovative training program has improved service reliability
      by 55 percent and complaints response time by 34 percent in
      another country.`,
    },
    410: `I've been thinking about
    how the utility SASB has been managing sanitation services. And though
    I don't know much about sanitation, in my personal opinion, they've
    been doing a good job`,
    411: `One the scale of 1 to 4, with 1 being not at all important and 4 being very important, do you think what I have just shared with you is important to you and the people in this neighborhood?`,
    412: `On the scale of 1 to 4 with one being the lowest and  4 being the highest,how likely are you to share what I have just told you to other people in this neighborhood?`,
    413: `For households who want a NEW sewer connection, they will be required to pay a ONE TIME fee which covers the material and labor cost of constructing the sewer lines.  From the information that we have gathered, the average price that households pay for sewer connections is roughly 8500 MT. What should the sewer connection fee be for everyone in your neighborhood including yourself?`,
    414: `For households who want a NEW sewer connection, they will be required to pay a ONE TIME fee which covers the material and labor cost of constructing the sewer lines.  From the information that we have gathered, the average price that households pay for sewer connections is roughly 8500 MT. What should the sewer connection fee be for everyone in your neighborhood including yourself?`,
    415: {
      paragraph1: `Now we would like to share with
      you what your community thinks about the price to be paid for the sewer
      connection fee.`,
      paragraph2: `For the sewer connection fee. They propose an average price of ({x:number} MT),
      whereas you proposed the price ({y: number} MT).`,
      paragraph3: `Having heard the community's proposal , would you like to revise your
      previously stated price? Remember, your proposed price is ({y} MT)`,
    },
    417: {
      paragraph1: `NOW, we will be
      asking you about your willingness to pay for the monthly sanitation tax
      or sewer service fee.`,
      paragraph2: `In this survey, everyone in this neighborhood is being asked to help
      decide the price for the monthly sanitation tax or the sewer service
      fee. Currently, this constitutes 20 percent of your water bill. Based on
      the infromation we collected, this is roughly 80 meticals per month for
      each household across Beira. As you cast your votes or make your
      decisions, please imagine everyone else in your neighborhood will be
      participating in this exercise too. Thus, the collective decision by the
      neighborhood will be important for SASB to decide the pricing of their
      services.`,
      paragraph3: `The monthly sanitation tax covers the costs of maintaining and repairing
      the sewer lines. What should the monthly tax be for everyone in your
      neighborhood including yourself?`,
    },
    418: {
      paragraph1: `NOW, we
      will be asking you about your willingness to pay for the monthly
      sanitation tax or sewer service fee.`,
      paragraph2: `In this survey, everyone in this neighborhood is being asked to help
      decide the price for the monthly sanitation tax or the sewer service
      fee. Currently, this constitutes 20 percent of your water bill. Based on
      the infromation we collected, this is roughly 80 meticals per month for
      each household across Beira. As you cast your votes or make your
      decisions, please imagine everyone else in your neighborhood will be
      participating in this exercise too. Thus, the collective decision by the
      neighborhood will be important for SASB to decide the pricing of their
      services.`,
      paragraph3: `The monthly sanitation tax covers the costs of maintaining and repairing
      the sewer lines. What should the monthly tax be for everyone in your
      neighborhood including yourself?`,
    },
    419: {
      paragraph1: `Now we would like to share with
      you what your community thinks about the price to be paid for the
      monthly sanitation tax`,
      paragraph2: `For the monthly sanitation tax, They propose an average price of ({x:number} MT).
      You proposed the price ({y:number} MT).`,
      paragraph3: `Having heard the community's proposal , would you like to revise your
      previously stated price? Remember, your proposed price is ({y} MT)`,
    },
    425: `Since April 2021, have you ever emptied your septic tank?`,
    426: `Did you contact a service provider to empty the cesspool?`,
    427: `When was the last time you contacted someone to empty the
    cesspool?`,
    428: `Who did you contact?`,
    429: `Specify other`,
    430: `Why didn't you contact SASB for the problem?`,
    431: `What services did you request`,
    432: `Did you pay for the service?`,
    433: `How much did you pay for the service?`,
    434: `Currently, SASB offers the service to remove the fecal sludge removal for 2,350 Mt. What should the price for fecal slugde desludging be for everyone in your neighborhood including yourself?`,
    439: `As I mentioned
    earlier, in my personal opinion, SASB have been doing a good job! They
    have also implemented a spacial training program to improve
    performance of its workers. This innovative training program has
    improved service reliability and coplaints response previously in
    another county`,
    440: `As I mentioned earlier, in my personal opinion, SASB have been doing a good job!`,
    441: `Overall, are you satisfied with the quality of your CURRENT sewer
    services?`,
    442: `If you compare the quality of sewer services you received between
    April and September 2021 to the services you received in the last
    6 months, have you noticed any improvements?`,
    443: `Overall, are you satisfied with the quality of drainage services by
    SASB in your neighborhood?`,
    444: `If you compare the quality of drainage services between April and
    September 2021 tothe services in the last 6 months, have you noticed
    any improvements?`,
    445: `Overall, are you satisfied with the quality of SASB fecal sludge
    desludging services?`,
    446: `If you compare the quality of fecal sludge desludging services you received between April and September 2021 to the services you received in the last 6 months, have you noticed any changes?`,
    447: `Overall, are you satisfied with the quality of SASB customer service
    when responding to your questions, complaints and requests?`,
    448: `If you compare the quality of SASB's CUSTOMER services you received between April and September 2021 to the services you received in the last 6 months, have you noticed any change?`,
    449: `Overall, are you satisfied with the quality of public service by the
    Municipality of Beira?`,
    450: `If you compare the quality of Beira Municipality's public services you received between April and September 2021 to the services you received in the last 6 months, have you noticed any change?`,
    451: `On the scale of 1 to 4, with 1 being the lowest and 4 being the highest, how likely are you to share YOUR SATISFACTION towards the SASB's services mentioned above to other people in this neighborhood?`,
    452: `With whom would you like to share YOUR SATISFACTION/OPINON to?  You may provide up to 3 names. Specify your relationship and closeness for each person. For closeness , please refer to the diagram provided above. If you would not like to share your SATISFACTION to anyone , select the option "No One"`,
    453: `As previously mentioned at the start of the survey, your responses will be confidential. However, today, you have a chance to submit your satisfaction directly to SASB through us. This will enable them to follow up with you. Would you like to do that ? (There is no obligation to submit this to SASB)`,
    454: `Do you know how to contact SASB when you are faced with sanitation or
    drainage related issues?`,
    51: `I will now ask you about your experiences with your  sewer connection in your household and neighborhood block . For each experience, we want to know in how many months this happened to you in the last 6 months. Even if it happened just once during a month, we would like to count that month`,
    54: `In the last 6 months, how often did you experience a sewer blockage/breakage/overflow in your neighborhood block?`,
    55: `If you compare the frequency of sewer blockages/breakages/overflows in your neighborhood block between April and September 2021 to those in the last 6 months, have you noticed any change?`,
    56: `In the last 6 months, how often did you experience bad sewer smell in your dwelling or compound?`,
    57: `If you compare the frequency of bad sewer smell in your dwelling or compound between April and September 2021 to those in the last 6 months, have you noticed any change?`,
    58: `Since April 2021, Have you ever contacted anyone to resolve your
    sewer issues before?`,
    59: `When was the last time you contacted someone for help with a sewer
    problem?`,
    510: `What was the sewage related problem?`,
    511: `Who did you contact?`,
    512: `Specify other`,
    513: `Why didn't you contact SASB for the problem?`,
    514: `Did the person who dealt with your complaint treat you in a fair and
    polite manner?`,
    515: `Did you need to make more than one call before they entered into
    action?`,
    516: `Did you feel that you needed to pay some sort of bribe or gift to
    the employee to make the request to be processed faster?`,
    517: `Has your matter been dealt with by the SASB itself or have you been
    referred to another entity?`,
    518: `Has the problem been resolved?`,
    519: `How long did the resolution take since you have put in the request?`,
    520: `On reflection, would you like to revise the previously stated price
    for the one time sewer connection fee? Remember, your proposed price
    is ({y} MT)`,
    522: `On reflection, would you like to revise the previously stated price
    for the for the monthly sanitation tax or sewer service fee? Remember,
    your proposed price is ({y} MT)`,
    524: `Did the person who dealt with your complaint treat you in a fair and
    polite manner?`,
    525: `Did you need to make more than one call before they entered into
    action?`,
    526: `Did you feel that you needed to pay some sort of bribe or gift to the
    employee to make the request to be processed faster?`,
    527: `Has your matter been dealt with by the SASB itself or have you been
    referred to another entity?`,
    528: `Has the problem been resolved?`,
    529: `How long did the resolution take since you have put in the request?`,
    61: `I will now ask you about your experiences with rainwater drainage around your block. For each experience, we want to know in how many months this happened to you in the last 6 months. Even if it happened just once during a month, we would like to count that month`,
    62: `In the last 6 months, how often did the drainage boxes in your neighborhood block got obstructed and overflowed?`,
    64: `In the last 6 months, how often did you see that a drainage ditch/manhole was left open in your neighborhood block?`,
    66: `In the last 6 months, how often  have you had to walk through water?`,
    68: `In the last 6 months, how often were you afraid of catching a disease because of stagnant water on the street?`,
    69: `If you compare the frequency of water logging and stagnant water in your neighborhood block between April and September 2021 to those in the past 6 months, have you noticed any change?`,
    612: `Since April 2021, have you contacted someone to resolve the DRAINAGE
    issues you faced before?`,
    613: `When was the last time you contacted someone for help with a
    drainage problem?`,
    614: `What was the problem about?`,
    615: `Specify other`,
    616: `Who did you contact?`,
    617: `Why didn't you contact SASB for the problem?`,
    618: `(If contacted SASB) Did the person who dealt with your complaint treat you in a fair and polite manner?`,
    619: `(If contacted SASB) Did you need to make more than one call before they entered into action?`,
    620: `(If contacted SASB) Did you feel that you needed to pay some sort of bribe or gift to the employee to make the request to be processed faster?`,
    621: `(If contacted SASB) Has your matter been dealt with by the SASB itself or have you been referred to another entity?`,
    622: `(If contacted SASB)  Has the problem been resolved?`,
    623: `(If contacted SASB)  How long did the resolution take since you have put in the request?`,
  },
}

export default en
