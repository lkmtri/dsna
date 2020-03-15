/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = (S, K) => {
  const s = S.split('-')
    .join('')
    .toUpperCase()

  const remainder = s.length % K

  const start = s.slice(0, remainder)

  const regex = new RegExp(`.{${K}}`, 'g')
  const end = (s.slice(remainder).match(regex) || []).join('-')

  const delimiter = start && end ? '-' : ''

  return `${start}${delimiter}${end}`
}
