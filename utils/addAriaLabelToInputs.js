/**
 * Function to enhance the accessibility of input fields and textareas by adding aria-labels to them.
 * The aria-label attribute is added to each input field and textarea that does not have an associated label.
 * The value of the aria-label is set to the value of the placeholder attribute of the input field or textarea, if available.
 *
 * @function
 * @param {Object} document - Represents the parsed HTML document object from JSDOM library. 
 * It provides a programmatic interface for interacting with the HTML document to modify its structure and content.
 *
 * @throws Will throw an error if encounters any issues while adding aria-labels to the input fields and textareas.
 */
const addAriaLabelToInputs = (document) => {
    try {
        document.querySelectorAll('input, textarea').forEach(field => {
            if (!field.getAttribute('aria-label')) {
                let genericAriaLabel = field.getAttribute('placeholder') || field.getAttribute('name') || field.getAttribute('id')
                
                if (genericAriaLabel) {
                    genericAriaLabel = genericAriaLabel.replace(/[_-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
                    field.setAttribute('aria-label', genericAriaLabel)
                }
            }
        })
    } catch (error) {
        console.error(`Error adding aria-label to inputs: ${error.message}`)
        throw error
    }
}

module.exports = addAriaLabelToInputs
