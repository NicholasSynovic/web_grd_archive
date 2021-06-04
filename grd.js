var request = new XMLHttpRequest()

function grd(githubUsername) {
  const githubRepositoryAPIURL = "https://api.github.com/users/" + githubUsername + "/repos?per_page=100"

  let repositoryData = []
  getRepositories(githubRepositoryAPIURL, repositoryData)

  return repositoryData

  return repositoryData
}

function getRepositories(githubRepositoryAPIURL, data) {
  request.open("GET", githubRepositoryAPIURL, true)
  request.onload = function () {

    const jsonResponse = JSON.parse(this.response)
    const nextPageURL = getNextPageURL(request.getResponseHeader("Link"))

    jsonResponse.forEach(index => {
      data.push([index.name, index.html_url, index.description])
    })

    if (nextPageURL != 0) {
      getRepositories(nextPageURL, data)
    }

    return data
  }
}

function getNextPageURL(responseField) {
  const splitURLArray = responseField.split(" ")
  const nextURLIndex = splitURLArray.indexOf('rel=\"next\",')

  if (nextURLIndex != -1) {
    const url = splitURLArray[nextURLIndex - 1]
    return url.substr(1, url.length - 3)
  }
  return 0
}
