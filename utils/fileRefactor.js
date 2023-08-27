const fs = require("fs")
const getLangParameter = require("./getLangParameter")
const addLangAttrWithParams = require("./addLangAttrWithParams")
const insertTableTags = require("./insertTableTags")
const addTargetBlank = require("./addTargetBlank")
const insertCharsetMeta = require("./insertCharsetMeta")
const addAltAttr = require("./addAltAttr")
const writeToFile = require("./writeToFile")
const addTitleToIframes = require("./addTitleToIframes")

const processFile = async (document) => {
  try {
    const langParam = await getLangParameter()

    let html = fs.readFileSync(document.fileName, "utf8")

    // Apply addAltAttr
    html = addAltAttr(html)

    // Apply addLangAttrWithParams
    html = addLangAttrWithParams(html, langParam)

    // Apply insertTableTags
    html = insertTableTags(html)

    // Apply addTargetBlank
    html = addTargetBlank(html)

    // Apply insertCharsetMeta
    html = insertCharsetMeta(html)

    html = addTitleToIframes(html)

    await writeToFile(document.fileName, html)
  } catch (error) {
    console.error(`Erro ao refatorar o arquivo: ${error.message}`)
  }
}

module.exports = processFile
