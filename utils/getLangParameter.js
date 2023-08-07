const vscode = require("vscode")

/**
 * Receives language parameter via input box
 * @returns A string with the language entered by the user
 */
const getLangParameter = async () => {
  try {
    const parameter = await vscode.window.showInputBox({
      prompt: "Enter the language of the page:",
      placeHolder: "Example: pt-BR",
    })
    console.log(`parameter: ${parameter}`)
    return parameter
  } catch (error) {
    console.error(`Erro ao obter o parâmetro de linguagem: ${error.message}`)
    throw error
  }
}

module.exports = getLangParameter
