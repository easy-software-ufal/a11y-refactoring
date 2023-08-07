/**
 * Insert meta charset tag if it doesn't already
 * exist in the HTML. If it already exists, it will not add it again.
 * @param {*} html A string containing the page's HTML
 * @returns The page's HTML as a string with the meta charset tag
 */
const insertCharsetMeta = (html) => {
  const regex = /(<head[^>]*>)([\s\S]*?)(<\/head>)/i
  const match = html.match(regex)

  if (match) {
    const head = match[0]
    const content = match[2]

    if (content.includes('<meta charset="UTF-8">')) return html

    const newContent = `<head>${content}<meta charset="UTF-8"></head>`
    return html.replace(head, newContent)
  } else {
    return html
  }
}

module.exports = insertCharsetMeta
