function convertHTML(str) {
    let htmlStr = str
                .replace(/\u0026/g, "&amp;")
                .replace(/\u003C/g, "&lt;")
                .replace(/\u003E/g, "&gt;")
                .replace(/\u0022/g, "&quot;")
                .replace(/\u0027/g, "&apos;");
    
    console.log(htmlStr);
    return htmlStr;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza > Tomatoes");
convertHTML('Stuff in "quotes"');
convertHTML("Schindler's List");