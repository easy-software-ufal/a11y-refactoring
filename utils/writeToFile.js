const fs = require("fs")

/**
 * Asynchronously writes the provided HTML string to a specified file. 
 * If the file already exists, it will be overwritten. If any error occurs 
 * during the write operation, it will be caught and logged, and the error 
 * will be re-thrown.
 *
 * @param {string} filePath - The path to the file where the HTML string should be written.
 * @param {string} newHtml - The modified HTML string to be written to the file.
 * @throws Will throw an error if the writing to the file fails.
 */
const writeToFile = async (filePath, newHtml) => {
  try {
    // Write the newHtml string to the file specified by filePath.
    await fs.promises.writeFile(filePath, newHtml)
    // Log a message indicating that the file has been successfully saved.
    console.log(`The file ${filePath} has been successfully saved.`)
  } catch (err) {
    // Log any errors encountered during the writing process and re-throw them.
    console.error(`Error saving the file ${filePath}: ${err.message}`)
    throw err
  }
}

module.exports = writeToFile
