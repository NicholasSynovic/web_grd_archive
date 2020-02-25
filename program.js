// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

const regex = new RegExp("^([^;]*>)")

window.onload = function()  {

    var visitedPages = new Array()

    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)

    var request = new XMLHttpRequest()

    program("https://api.github.com/users/benawad/repos?per_page=100")

    function program(url)   {
        request.open("GET", url, true)
        request.onload = function()   {
            // TODO: Add error checking incase code 403 appears. Wanted code is 304
            response = JSON.parse(this.response)
            buildPage(response)
        }
        request.send()
    }

    function buildPage(json)    {
        json.forEach(index =>   {
            const container = document.createElement("div")
            const name = document.createElement("ol")
            const description = document.createElement("ul")
            const urlLink = document.createElement("a")
            const url = document.createElement("ul")
            
            urlLink.setAttribute("href", index.html_url)
            container.setAttribute("class", "container")

            name.textContent = index.name
            description.textContent = index.description
            url.textContent = index.html_url

            name.appendChild(description)
            urlLink.appendChild(url)
            name.appendChild(urlLink)
            container.appendChild(name)
            app.appendChild(container)
        })
    }
}