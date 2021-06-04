const regex = new RegExp("^([^;]*>)")
var request = new XMLHttpRequest()

function getNextPage(responseField) {
  if (responseField == null) {
    return 0
  }

  const splitURLArray = responseField.split(" ")
  const nextURLIndex = splitURLArray.indexOf('rel=\"next\",')

  if (bar == -1) {
    return 0
  }

  let url = splitURLArray[nextURLIndex - 1]
  return url.substr(1, url.length - 3)
}
