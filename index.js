const vscode = require("vscode")

const accessOpenedFile = require("./utils/accessOpenedFile")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {
  console.log(
    'Congratulations, your extension "a11y-refactoring" is now active!'
  )

  let disposable = vscode.commands.registerCommand(
    "a11y-refactoring.a11y",
    function () {
      accessOpenedFile()
      vscode.window.showInformationMessage("a11y-refactoring is running!")
    }
  )

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
const deactivate = () => {}

module.exports = {
  activate,
  deactivate,
}
