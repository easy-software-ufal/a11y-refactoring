/**
 * Function responsible for adding the title
 * attribute to iframes in the page's html
 * @param {*} html A string containing the html of the page
 * @returns A string with html after adding title attribute to iframes
 */
const addTitleToIframes = (html) => {
  const regex = /<iframe(?![^>]*title=)[^>]*>/gi
  return html.replace(regex, (match) =>
    match.replace(/\/?>/, ` title=""$&`)
  )
}

module.exports = addTitleToIframes
