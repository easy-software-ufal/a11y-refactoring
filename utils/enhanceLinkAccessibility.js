/**
 * Function to enhance link accessibility by adding title attributes to <a> tags
 * with a target="_blank" attribute in the document object, provided they don't
 * already have a title attribute.
 * 
 * @param {Object} document - The document object representing the HTML document.
 */
const enhanceLinkAccessibility = (document) => {
  try {
    // Select all <a> tags in the document that have a target="_blank" attribute
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      // If the link already has a title attribute, do not modify it
      if (link.hasAttribute('title')) return
      
      // Add an appropriate title to the link
      link.setAttribute('title', 'Link to external site (opens in a new window)')
    })
  } catch (error) {
    // Log any errors encountered and re-throw them
    console.error(`Error adding title to links with target="_blank": ${error.message}`)
    throw error
  }
}

module.exports = enhanceLinkAccessibility
