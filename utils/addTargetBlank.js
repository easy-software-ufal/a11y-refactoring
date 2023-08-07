/**
 * Function responsible for adding target="_blank" to hyperlink tags
 * @param {*} html A string containing the html of the page
 * @returns A string with the html after adding the target attribute
 */
const addTargetBlank = (html) => {
  const regex = /<a\b(?![^>]*\bhref\s*=\s*(["'])#.*\1)[^>]*>/g
  return html.replace(regex, (match) => {
    if (match.includes("target=")) {
      return match
    } else {
      const insertIndex = match.lastIndexOf(">")
      return `${match.slice(
        0,
        insertIndex
      )} target="_blank" title="Link para site externo (abre numa nova janela)"${match.slice(
        insertIndex
      )}`
    }
  })
}

module.exports = addTargetBlank
