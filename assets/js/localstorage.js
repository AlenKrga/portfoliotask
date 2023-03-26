    // Check if the browser supports local storage
    if (typeof(Storage) !== "undefined") {
        // Retrieve data from local storage
        var data = localStorage.getItem("data");
        if (data) {
          var list = JSON.parse(data);
          for (var i = 0; i < list.length; i++) {
            var item = document.createElement("li");
            item.appendChild(document.createTextNode(list[i]));
            document.getElementById("output").appendChild(item);
          }
        } else {
          document.getElementById("output").innerHTML = "";
        }
      } else {
        document.getElementById("output").innerHTML = "Sorry, your browser does not support local storage";
      }

      // Save data to local storage
      function saveData() {
        var input = document.getElementById("input").value;
        if (input.trim() === "") {
          alert("Input field cannot be empty");
          return;
        }
        var data = localStorage.getItem("data");
        var list = data ? JSON.parse(data) : [];
        list.push(input);
        localStorage.setItem("data", JSON.stringify(list));
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(input));
        document.getElementById("output").appendChild(item);
      }

      // Clear data from local storage
      function clearData() {
        localStorage.removeItem("data");
        document.getElementById("output").innerHTML = "";
      }

  