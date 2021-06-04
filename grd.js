function grd(githubUsername) {
  var githubRepositoryAPIURL = "https://api.github.com/users/" + githubUsername + "/repos?per_page=100"

  return getRepositories(githubRepositoryAPIURL)
}

function getRepositories(githubRepositoryAPIURL, data) {
  var data = []
  var request = new XMLHttpRequest()

  request.open("GET", githubRepositoryAPIURL, true)
  request.onload = function parseJSON() {

    var jsonResponse = JSON.parse(this.response)

    jsonResponse.forEach(index => {
      console.log(index.name)
    })
  }
  console.log(data)
}
