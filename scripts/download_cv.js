document.getElementById("downloadBtn").addEventListener("click", function () {
    const pdfUrl = document.getElementById("pdfEmbed").getAttribute("src");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Joonas_Niinimäki_CV_TEMPLATE.pdf"; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});