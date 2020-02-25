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
                const name = document.createElement("ol")
                name.textContent = index.name

                app.appendChild(name)

                repoName.push(index.name)
                repoDescription.push(index.description)
                repoURL.push(index.html_url)
            }
        })
    }

    request.send()

    console.log(repoName)
    console.log(repoDescription)
    console.log(repoURL)
}