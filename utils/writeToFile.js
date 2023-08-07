const fs = require("fs")

/**
 * Function responsible for writing the string
 * with the new html into a file
 * @param {*} filePath A string containing the file path
 * @param {*} newHtml A string containing the refactored html
 */
const writeToFile = async (filePath, newHtml) => {
  try {
    await fs.promises.writeFile(filePath, newHtml)
    console.log(`O arquivo ${filePath} foi salvo com sucesso.`)
  } catch (err) {
    console.error(`Erro ao salvar o arquivo ${filePath}: ${err.message}`)
    throw err
  }
}

module.exports = writeToFile
