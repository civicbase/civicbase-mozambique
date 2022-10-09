export const getRandomQVSRSlider = () => {
  return Math.random() < 0.5 ? 'Treatment - QVSR' : 'Control - Price Slider'
}

export const getRandomTreatmentControl = () => {
  return Math.random() < 0.5 ? 'Treatment' : 'Control'
}
