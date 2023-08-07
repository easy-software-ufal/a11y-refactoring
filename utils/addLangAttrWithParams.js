/**
 * Function responsible for adding the
 * lang attribute to the main html tag
 * @param {*} html A string containing the html of the page
 * @param {*} lang A string containing the language of the page
 * @returns A string with the html after adding the lang attribute
 */
const addLangAttrWithParams = (html, lang) => {
  const regex = /<html(?:\s[^>]*?)?>/
  const match = html.match(regex)
  if (match) {
    const htmlTag = match[0]
    if (!htmlTag.includes("lang=")) {
      const newHtmlTag = htmlTag.replace(">", ` lang="${lang}">`)
      return html.replace(regex, newHtmlTag)
    }
  }
  return html
}

module.exports = addLangAttrWithParams
