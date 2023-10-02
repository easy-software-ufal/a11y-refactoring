const vscode = require("vscode")
const processAndSaveHtmlFile = require("./processAndSaveHtmlFile")

/**
 * Function to access and refactor the currently opened file in VSCode editor.
 * If there is no open file, it logs a message to the console and returns.
 * If there is an open file, it calls the processAndSaveHtmlFile function to process the file.
 * Any errors during the process are caught and logged to the console.
 */
const accessAndRefactorOpenedFile = () => {
  try {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor

    // If there is no active text editor, log a message to the console and return
    if (!editor) {
      console.log("No open file.")
      return
    }

    // Get the document from the active text editor
    const document = editor.document
    
    // Call the processAndSaveHtmlFile function to process and save the document
    processAndSaveHtmlFile(document)
  } catch (error) {
    // Log any errors to the console
    console.error(`Error accessing the opened file: ${error.message}`)
  }
}

module.exports = accessAndRefactorOpenedFile
