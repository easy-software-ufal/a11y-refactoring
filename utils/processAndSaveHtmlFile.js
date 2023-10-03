const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const addLangToHtmlTag = require('./addLangToHtmlTag')
const addAltToImages = require('./addAltToImages')
const insertTableSectionTags = require('./insertTableSectionTags')
const enhanceLinkAccessibility = require('./enhanceLinkAccessibility')
const insertCharsetMeta = require('./insertCharsetMeta')
const addTitleToIframes = require('./addTitleToIframes')
const writeToFile = require('./writeToFile')
const getLangParameter = require('./getLangParameter')
const addAriaLabelToInteractiveElements = require('./addAriaLabelToInteractiveElements') // 1. Import the function
const addAriaLabelToInputs = require('./addAriaLabelToInputs')

/**
 * Function to process and save an HTML file opened in the VSCode editor.
 * 
 * @param {Object} vscodeDocument - Represents the opened document in VSCode editor.
 */
const processAndSaveHtmlFile = async (vscodeDocument) => {
  try {
    // Get the language parameter from user input
    const langParam = await getLangParameter()

    // Read the HTML file as a string
    const html = fs.readFileSync(vscodeDocument.fileName, 'utf8')

    // Parse the HTML string into a JSDOM object to facilitate modifications
    const dom = new JSDOM(html)
    const document = dom.window.document
    
    // Call various utility functions to modify the HTML document object
    addTitleToIframes(document)
    insertCharsetMeta(document)
    enhanceLinkAccessibility(document)
    insertTableSectionTags(document)
    addAltToImages(document)
    addLangToHtmlTag(document, langParam)
    addAriaLabelToInteractiveElements(document) 
    addAriaLabelToInputs(document) 
    
    // Serialize the modified document object back into an HTML string
    const modifiedHtml = dom.serialize()

    // Write the modified HTML string back to the file
    await writeToFile(vscodeDocument.fileName, modifiedHtml)
    
  } catch (error) {
    // Log any errors encountered during the process
    console.error(`Error refactoring the file: ${error.message}`)
  }
}

module.exports = processAndSaveHtmlFile
