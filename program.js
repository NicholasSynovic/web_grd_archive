// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

window.onload = function()  {
    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)

    var repoName = []
    var repoDescription = []
    var repoURL = []
    var request = new XMLHttpRequest()

    request.open("GET", "https://api.github.com/users/benawad/repos", true)
    request.onload = function()   {
        response = JSON.parse(this.response)
        response.forEach(index => {
            if(request.status >= 305 && request.status < 400)   {
                repoName.push("Error")
                repoDescription.push("Error")
                repoURL.push("Error")
            }
            else    {
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
            }
        })
    }
    request.send()

    console.log(repoName)
    console.log(repoDescription)
    console.log(repoURL)
}