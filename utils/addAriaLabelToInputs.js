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
        // Query the document for all input fields and textareas
        document.querySelectorAll('input, textarea').forEach(field => {
            // Check if the field has associated labels. If it doesn't, proceed to add an aria-label.
            if (!field.labels.length) {
                // Get the value of the placeholder attribute of the field
                const placeholder = field.getAttribute('placeholder')
                // If a placeholder is available, set its value as the aria-label of the field
                if (placeholder) field.setAttribute('aria-label', placeholder)
            }
        })
    } catch (error) {
        // Log and throw any errors encountered during the process
        console.error(`Error adding aria-label to inputs: ${error.message}`)
        throw error
    }
}

module.exports = addAriaLabelToInputs
