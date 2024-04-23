/*  Return the top 100 repositories of a GitHub user
        githubUsername: string = A valid GitHub username
        amount: integer (min 0, max 100) = The number of repositories to return
*/
function grd(githubUsername, amount = 100) {
    var githubRepositoryAPIURL = "https://api.github.com/users/" + githubUsername + "/repos?per_page=" + amount.toString

    console.log(githubUsername)
    console.log(githubRepositoryAPIURL)

    var data = []
    var request = new XMLHttpRequest()

    request.open("GET", githubRepositoryAPIURL, true)
    request.onload = function () {
        jsonResponse = JSON.parse(this.response)
        jsonResponse.forEach(index => {
        data.push([index.name, index.html_url, index.description])
        })
    }
    request.send()

    return data
}
