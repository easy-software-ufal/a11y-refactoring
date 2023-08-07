const getLangParameter = require("./getLangParameter")
const addLangAttrWithParams = require("./addLangAttrWithParams")
const insertTableTags = require("./insertTableTags")
const addTargetBlank = require("./addTargetBlank")
const insertCharsetMeta = require("./insertCharsetMeta")
const writeToFile = require("./writeToFile")
const addAltAttr = require("./addAltAttr")

const fileRefactor = async (document) => {
  let html = document.getText()
  const htmlWithAltAttr = addAltAttr(html)

  try {
    const langParam = await getLangParameter()
    const htmlWithLangAttr = addLangAttrWithParams(htmlWithAltAttr, langParam)
    const htmlWithTableTags = insertTableTags(htmlWithLangAttr)
    const htmlWithTargetBlank = addTargetBlank(htmlWithTableTags)
    const htmlWithMetaCharset = insertCharsetMeta(htmlWithTargetBlank)
    await writeToFile(document.fileName, htmlWithMetaCharset)
  } catch (error) {
    console.error(`Erro ao refatorar o arquivo: ${error.message}`)
  }
}

module.exports = fileRefactor
