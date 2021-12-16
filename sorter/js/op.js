function OpenWnd() {
  var oWindow = window.open("", "");
  with (oWindow.document) {
    write("<html>");
    write("<head>");
    write("<title>JKT48 Sort: Raw Text Results</title>");
    write("<style>");
    write(
      'body { background-color: #FFD1DC; color: #000; font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; font-size: 15px; }'
    );
    write("</style>");
    write("</head>");
    write("<body>");
    write(csort5);
    write("<hr>");
    write("<input type='button' value='Close' onclick='window.close()'>");
    write("<hr>");
    write("</body>");
    write("</html>");
    close();
  }
}

// Define the function
// to screenshot the div
function takeshot() {
  let div = document.body;

  // Use the html2canvas
  // function to take a screenshot
  // and append it
  // to the output div
  html2canvas(div).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.png";
    link.href = canvas.toDataURL("image/png");
    link.target = "_blank";
    link.click();
  });
}
