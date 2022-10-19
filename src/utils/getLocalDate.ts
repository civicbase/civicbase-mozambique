export const getLocalDate = () => {
  return new Date().toLocaleString('pt-MZ', {
    timeZone: 'Africa/Maputo',
  })
}
