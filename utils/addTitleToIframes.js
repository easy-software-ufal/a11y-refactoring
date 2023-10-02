/**
 * Function to add a title attribute to all <iframe> elements in a document object
 * which do not already have a title attribute.
 * 
 * @param {Object} document - The document object representing the HTML document.
 */
const addTitleToIframes = (document) => {
  try {
    // Select all <iframe> tags in the document that do not have a title attribute
    document.querySelectorAll('iframe:not([title])').forEach(iframe => {
      // Add an empty title attribute to each selected <iframe> tag
      iframe.setAttribute('title', '')
    })
  } catch (error) {
    // Log any errors encountered and re-throw them
    console.error(`Error adding title attribute to iframes: ${error.message}`)
    throw error
  }
}

module.exports = addTitleToIframes
