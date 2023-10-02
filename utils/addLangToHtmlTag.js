/**
 * Function to set the language of the document by adding a 'lang' attribute to the
 * <html> tag of the document object, aiding in accessibility and proper rendering by browsers.
 * If the <html> tag already has a 'lang' attribute, the function will not overwrite it.
 *
 * @param {Object} document - The document object representing the HTML document.
 * @param {string} lang - The language code to set as the value of the 'lang' attribute.
 */
const addLangToHtmlTag = (document, lang) => {
  try {
    // Obtain the <html> tag from the document
    const htmlTag = document.querySelector('html')
    
    // If the <html> tag exists and does not contain the 'lang' attribute, add the 'lang' attribute
    if (htmlTag && !htmlTag.hasAttribute('lang')) {
      htmlTag.setAttribute('lang', lang)
    }
    
  } catch (error) {
    // Log any errors encountered during the operation and re-throw them
    console.error(`Error adding 'lang' attribute: ${error.message}`)
    throw error
  }
}

module.exports = addLangToHtmlTag
