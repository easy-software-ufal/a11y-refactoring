/**
 * Insert meta charset tag if it doesn't already
 * exist in the HTML. If it already exists, it will not add it again.
 * @param {*} html A string containing the page's HTML
 * @returns The page's HTML as a string with the meta charset tag
 */
const insertCharsetMeta = (html) => {
  if (html.includes('<meta charset="UTF-8">')) return html

  const regex = /<head[^>]*>([\s\S]*?)<\/head>/i
  return html.replace(regex, (match, content) => {
    return `<head>${content}<meta charset="UTF-8"></head>`
  })
}

module.exports = insertCharsetMeta
