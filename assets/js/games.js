function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "assets/xml/games.xml", true);
    xmlhttp.send();
  }
  
  function myFunction(xml) {
    var x, i, xmlDoc, table;
    xmlDoc = xml.responseXML;
    table =
      "<tr><th>Top Selling</th><th>Title</th><th>Year of release</th></tr>";
    x = xmlDoc.getElementsByTagName("game");
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("games").innerHTML = table;
  }