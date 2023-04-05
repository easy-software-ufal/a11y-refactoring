// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");

/**
 * Receives language parameter via input box
 * @returns A string with the language entered by the user
 */
async function getLangParameter() {
	try {
		const parameter = await vscode.window.showInputBox({
			prompt: 'Informe o idioma da página:',
			placeHolder: 'Exemplo: pt-BR'
		});
		console.log(`parameter: ${parameter}`);
		return parameter;
	} catch (error) {
		console.error(error);
	}
}

/**
 * Function responsible for adding target="_blank" to hyperlink tags
 * @param {*} html A string containing the html of the page
 * @returns A string with the html after adding the target attribute
 */
function addTargetBlank(html) {
    const regex = /<a\b(?![^>]*\bhref\s*=\s*(["'])#.*\1)[^>]*>(?!<\/a>)/g;
    return html.replace(regex, match => {
        if (match.includes('target=')) {
            return match;
        } else {
            return match.replace('>', ' target="_blank">');
        }
    });
}

/**
 * Function responsible for adding summary attribute to table tags
 * @param {*} html A string containing the html of the page
 * @returns A string with the html after adding the summary attribute
 */
function addSummaryAttr(html) {
	const regex = /<table(?![^>]*\bsummary=)[^>]*>/g;
	return html.replace(regex, match => match.replace(">", " summary" + (match.endsWith("/") ? "" : '=""') + ">"));
}

/**
 * Function responsible for adding the 
 * lang attribute to the main html tag
 * @param {*} html A string containing the html of the page
 * @param {*} lang A string containing the language of the page
 * @returns A string with the html after adding the lang attribute
 */
function addLangAttrWithParams(html, lang) {
	const regex = /<html(?:\s[^>]*?)?>/;
	const match = html.match(regex);
	if (match) {
		const htmlTag = match[0];
		if (!htmlTag.includes("lang=")) {
			const newHtmlTag = htmlTag.replace(">", ` lang="${lang}">`);
			return html.replace(regex, newHtmlTag);
		}
	}
	return html;
}

/**
 * Function responsible for writing the string 
 * with the new html into a file
 * @param {*} filePath A string containing the file path
 * @param {*} newHtml A string containing the refactored html
 */
async function writeToFile(filePath, newHtml) {
	fs.writeFile(filePath, newHtml, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`O arquivo ${filePath} foi salvo com sucesso.`);
	});
}

/**
 * Function responsible for adding the alternative 
 * text attribute to a string with the page's html
 * @param {*} html A string containing the html of the page
 * @returns A string with html after adding alt attribute to images
 */
function addAltAttr(html) {
	return html.replace(/<img(?![^>]*alt=)[^>]*>/gi, match => match.replace(/\/?>/, ' alt=""$&'));
}

/**
 * Function responsible for accessing a file opened in the VSCode editor
 * @returns 
 */
function accessOpenedFile() {
	const editor = vscode.window.activeTextEditor;

	if (!editor) {
		console.log('No open file.');
		return;
	}

	const document = editor.document;

	fileRefactor(document);
}

/**
 * Function responsible for refactoring an html 
 * file using functions declared elsewhere
 * @param {*} document An html file
 */
function fileRefactor(document) {
	let html = document.getText();

	const htmlWithAltAttr = addAltAttr(html);

	getLangParameter().then((param) => {
		const htmlWithLangAttr = addLangAttrWithParams(htmlWithAltAttr, param);
		const htmlWithSummaryAttr = addSummaryAttr(htmlWithLangAttr);
		const htmlWithTargetBlank = addTargetBlank(htmlWithSummaryAttr);

		writeToFile(document.fileName, htmlWithTargetBlank);
	});
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
		vscode.window.showInformationMessage('a11y-refactoring is running!');
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
