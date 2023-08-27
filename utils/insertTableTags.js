/**
 * Function responsible for inserting thead and tbody tags into table elements.
 * If the table already contains thead and tbody, it will not add them again.
 * @param {string} html - A string containing the page's HTML.
 * @returns {string} The page's HTML as a string with thead and tbody tags.
 */
const insertTableTags = (html) => {
  const regex = /<table\b[^>]*>(.*?)<\/table>/s
  return html.replace(regex, (match, tableContent) => {
    if (/thead/i.test(tableContent) && /tbody/i.test(tableContent)) {
      return match
    }

    let newTableContent = `
      <thead>
        ${
          /<tr/i.test(tableContent)
            ? tableContent.match(/<tr[\s\S]*?<\/tr>/i) || ""
            : ""
        }
      </thead>
      <tbody>
        ${
          /<tr/i.test(tableContent)
            ? tableContent.replace(/<tr[\s\S]*?<\/tr>/i, "")
            : tableContent
        }
      </tbody>
    `

    return `<table>${newTableContent}</table>`
  })
}

module.exports = insertTableTags
