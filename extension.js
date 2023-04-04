// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");

function addLangAttr(html) {
	const regex = /<html\b[^>]*>/i;
	const langAttr = ' lang=""';
	if (!regex.test(html)) {
	  return html;
	}
	return html.replace(regex, match => {
	  if (match.includes("lang")) {
		return match;
	  }
	  const index = match.lastIndexOf(">");
	  return match.slice(0, index) + langAttr + match.slice(index);
	});
  }

async function writeToFile(filePath, text) {
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`O arquivo ${filePath} foi salvo com sucesso.`);
  });
}


function addAltAttr(html) {
	return html.replace(/<img(?![^>]*alt=)[^>]*>/gi, match => match.replace(/\/?>/, ' alt=""$&'));
}

function accessOpenedFile() {
	const editor = vscode.window.activeTextEditor;

	if (!editor) {
		console.log('No open file.');
		return;
	}

	const document = editor.document;

	console.log('getText');
	console.log(document.getText());
	console.log('filename');
	console.log(document.fileName);

	let html = document.getText();

	const htmlWithAltAttr = addAltAttr(html);
	console.log('htmlWithAltAttr');
	console.log(htmlWithAltAttr);
	
	const htmlWithLangAttr = addLangAttr(htmlWithAltAttr)
	console.log('htmlWithLangAttr');
	console.log(htmlWithLangAttr);

	writeToFile(document.fileName, htmlWithLangAttr);

}


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "a11y-refactoring" is now active!');

	// The command has been defined in the package.json file
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('a11y-refactoring.a11y', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from a11y-refactoring!');
	});
	accessOpenedFile();

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
