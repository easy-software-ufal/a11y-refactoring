const vscode = require("vscode")
const accessAndRefactorOpenedFile = require("./utils/accessAndRefactorOpenedFile")

/**
 * This method is called when the extension is activated.
 * The extension is activated the very first time the command is executed.
 *
 * @param {vscode.ExtensionContext} context - The context in which the extension is executed,
 * provides access to the VS Code API and allows subscriptions to be pushed to it.
 */
const activate = (context) => {
  // Log a message to the console indicating that the extension is active.
  console.log('Congratulations, your extension "a11y-refactoring" is now active!')

  // Register the command that activates the extension and attach it to a function.
  let disposable = vscode.commands.registerCommand(
    "a11y-refactoring.a11y",
    function () {
      // Call the function that accesses and refactors the opened file.
      accessAndRefactorOpenedFile()
      // Show an information message in the window indicating that the extension is running.
      vscode.window.showInformationMessage("a11y-refactoring is running!")
    }
  )
  
  // Push the command to the subscriptions of the context so that it is disposed of when the extension is deactivated.
  context.subscriptions.push(disposable)
}

/**
 * This method is called when the extension is deactivated.
 * It currently does not perform any actions.
 */
const deactivate = () => {}

module.exports = {
  activate,
  deactivate,
}
