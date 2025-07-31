const output = document.getElementById("output");

fetch("http://localhost:8080/hello")
  .then((res) => res.json())
  .then((data) => {
    output!.textContent = JSON.stringify(data, null, 2);
  })
  .catch((err) => {
    output!.textContent = `Error: ${err}`;
  });
