/**
 * Function responsible for adding the alternative
 * text attribute to a string with the page's html
 * @param {*} html A string containing the html of the page
 * @returns A string with html after adding alt attribute to images
 */
const addAltAttr = (html) => {
  const regex = /<img(?![^>]*alt=)[^>]*>/gi
  return html.replace(regex, (match) => match.replace(/\/?>/, ' alt=""$&'))
}

module.exports = addAltAttr
