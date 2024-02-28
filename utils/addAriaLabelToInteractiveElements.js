/**
 * Enhances accessibility by adding aria-label attributes to interactive elements such as buttons and links.
 * The function aims to provide descriptive labeling to elements that may lack context for assistive technologies.
 * If an element has a `data-label` attribute but lacks an `aria-label`, the `data-label` value is used for the `aria-label`.
 * If no such labeling exists, a default "Interactive Element" label is applied.
 * 
 * @param {Object} document - Represents the parsed HTML document object.
 */
const addAriaLabelToInteractiveElements = (document) => {
    try {
        document.querySelectorAll('button, a[role="button"]').forEach(element => {
            if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
                // Check for a data-label first
                if (element.getAttribute('data-label')) {
                    element.setAttribute('aria-label', element.getAttribute('data-label'))
                }
                // If no data-label, check for a title
                else if (element.getAttribute('title')) {
                    element.setAttribute('aria-label', element.getAttribute('title'))
                }
                // If no title, check for an id
                else if (element.getAttribute('id')) {
                    // Assuming the id can be a meaningful descriptor. You might want to transform it into a more readable format
                    const readableId = element.getAttribute('id').replace(/-/g, ' ').replace(/_/g, ' ')
                    element.setAttribute('aria-label', readableId)
                }
                // Otherwise, set a default aria-label
                else {
                    element.setAttribute('aria-label', "Interactive Element")
                }
            }
        })
    } catch (error) {
        console.error(`Error adding aria-label to interactive elements: ${error.message}`)
        throw error
    }
}

module.exports = addAriaLabelToInteractiveElements
