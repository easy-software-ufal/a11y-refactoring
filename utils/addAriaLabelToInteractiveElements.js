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
        // Handle buttons and links with role="button"
        document.querySelectorAll('button, a[role="button"]').forEach(element => {
            // If the element does not have an aria-label
            if (!element.getAttribute('aria-label')) {
                // If it has a data-label, use that as the aria-label
                if (element.getAttribute('data-label')) {
                    element.setAttribute('aria-label', element.getAttribute('data-label'))
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
