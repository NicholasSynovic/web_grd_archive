function grd(githubUsername) {
  var githubRepositoryAPIURL = "https://api.github.com/users/" + githubUsername + "/repos?per_page=100"

  console.log(githubUsername)
  console.log(githubRepositoryAPIURL)

  return getRepositories(githubRepositoryAPIURL)
}

function getRepositories(githubRepositoryAPIURL) {
  var data = []
  var request = new XMLHttpRequest()

  console.log(githubRepositoryAPIURL)

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
