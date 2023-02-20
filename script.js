
function linearSearch() {
    let arr = document.getElementById("array").value.split(",");
    let key = document.getElementById("key").value;
    let result = document.getElementById("result");
    result.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      let node = document.createElement("LI");
      let textnode = document.createTextNode(arr[i]);
      node.appendChild(textnode);
      if (arr[i] == key) {
        node.style.backgroundColor = "green";
      }
      result.appendChild(node);
    }
  }