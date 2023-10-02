/**
 * Function to insert <thead> and <tbody> tags within every <table> element in the document object
 * if they do not already exist, to improve table structure and accessibility.
 *
 * @param {Object} document - The document object representing the HTML document.
 */
const insertTableSectionTags = (document) => {
  try {
    // Select all <table> tags in the document
    document.querySelectorAll('table').forEach(table => {
      let thead = table.querySelector('thead')
      let tbody = table.querySelector('tbody')
      
      // If the table already contains <thead> and <tbody>, do not insert them again
      if (thead && tbody) return
      
      // If the table does not have <thead>, create one and insert it in the table
      if (!thead) {
        thead = document.createElement('thead')
        const firstRow = table.querySelector('tr')
        if (firstRow) thead.appendChild(firstRow)
        table.insertBefore(thead, table.firstChild)
      }
      
      // If the table does not have <tbody>, create one and insert it in the table
      if (!tbody) {
        tbody = document.createElement('tbody')
        let row
        while ((row = table.querySelector('tr'))) {
          tbody.appendChild(row)
        }
        table.appendChild(tbody)
      }
    })
  } catch (error) {
    // Log any errors encountered and re-throw them
    console.error(`Error inserting <thead> and <tbody> tags: ${error.message}`)
    throw error
  }
}

module.exports = insertTableSectionTags
