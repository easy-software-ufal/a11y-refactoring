const vscode = require("vscode")

const fileRefactor = require("./fileRefactor")

/**
 * Function responsible for accessing a file opened in the VSCode editor
 * @returns
 */
const accessOpenedFile = () => {
  try {
    const editor = vscode.window.activeTextEditor

    if (!editor) {
      console.log("No open file.")
      return
    }

    const document = editor.document
    fileRefactor(document)
  } catch (error) {
    console.error(`Erro ao acessar o arquivo aberto: ${error.message}`)
  }
}

module.exports = accessOpenedFile
