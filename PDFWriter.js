let pdf_html = require("html-pdf")

class PDFWriter {

    static WritePDF(pdf, html){
        pdf_html.create(html, {}).toFile(pdf, err => console.log(err))} 
}

module.exports = PDFWriter