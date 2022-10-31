var output1 = document.querySelector("#output-text1")
var output2 = document.querySelector("#output-text2")

var url = "https://quick-access-api.desaihetav.repl.co"


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        output1.innerHTML = `<p>${data.message}</p>`
        output2.innerHTML = `<p>${data.success}</p>`
    })