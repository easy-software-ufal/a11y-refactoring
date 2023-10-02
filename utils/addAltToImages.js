/**
 * Function to enhance image accessibility by adding alt attributes to <img> tags
 * in the document object that do not already have an alt attribute. The alt attribute
 * is added with an empty string as its value, as a placeholder for developers to
 * provide meaningful alternative text.
 *
 * @param {Object} document - The document object representing the HTML document.
 */
const addAltToImages = (document) => {
  try {
    // Select all <img> tags in the document that do not have an alt attribute
    document.querySelectorAll('img:not([alt])').forEach(img => {
      // Add an empty alt attribute to each selected <img> tag
      img.setAttribute('alt', '')
    })
  } catch (error) {
    // Log any errors encountered during the operation and re-throw them
    console.error(`Error adding alt attribute to images: ${error.message}`)
    throw error
  }
}

module.exports = addAltToImages
