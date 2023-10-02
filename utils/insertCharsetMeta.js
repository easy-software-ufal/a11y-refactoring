/**
 * Function to insert a <meta charset="UTF-8"> tag within the <head> section of the document object
 * if it does not already exist.
 *
 * @param {Object} document - The document object representing the HTML document.
 */
const insertCharsetMeta = (document) => {
  try {
    // Look for an existing <meta charset="UTF-8"> tag in the document
    const existingMetaCharset = document.querySelector('meta[charset="UTF-8"]')
    
    // If a <meta charset="UTF-8"> tag already exists, do not insert again
    if (existingMetaCharset) return

    // Look for the <head> tag in the document
    const head = document.querySelector('head')

    // If there is no <head> tag, do nothing
    if (!head) return

    // Create a new <meta charset="UTF-8"> tag and append it to the <head> tag
    const metaCharset = document.createElement('meta')
    metaCharset.setAttribute('charset', 'UTF-8')
    head.appendChild(metaCharset)
  } catch (error) {
    // Log any errors encountered and re-throw them
    console.error(`Error inserting meta charset: ${error.message}`)
    throw error
  }
}

module.exports = insertCharsetMeta
