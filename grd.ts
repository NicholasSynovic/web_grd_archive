const re = new RegExp("^([^;]*>)")
var request = new XMLHttpRequest()

function grd(githubUsername: String) {
  const githubRepositoryAPIURL = "https://api.github.com/users/" + githubUsername + "/repos?per_page=100"

  let repositoryData = []
  repositoryData.push(getRepositories(githubRepositoryAPIURL, repositoryData))
  return repositoryData
}

function getRepositories(githubRepositoryAPIURL: string, data: Array<string>) {
  request.open("GET", githubRepositoryAPIURL, true)
  request.onload = function () {
    const jsonResponse = JSON.parse(this.response)
    const nextPageURL = getNextPageURL(request.getResponseHeader("Link"))

    jsonResponse.forEach(index => {
      console.log("hello")
    })
  }
}

function getNextPageURL(responseField) {
  if (responseField == null) {
    return 0
  }

  const splitURLArray = responseField.split(" ")
  const nextURLIndex = splitURLArray.indexOf('rel=\"next\",')

  if (bar == -1) {
    return 0
  }

  const url = splitURLArray[nextURLIndex - 1]
  return url.substr(1, url.length - 3)
}
