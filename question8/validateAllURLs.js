const axios = require('axios')
const { JSDOM } = require('jsdom')
const _ = require('lodash')

const checkIf200 = _.memoize(async url => {
  try {
    const response = await axios.get(url)
    if (response.status !== 200) return false
    return true
  } catch (e) {
    return false
  }
})

async function validateAllURLs(htmlStringOrElement) {
  let wrapper
  if (typeof htmlStringOrElement.getElementsByTagName === 'function') {
    wrapper = htmlStringOrElement
  } else {
    const dom = new JSDOM(htmlStringOrElement)
    wrapper = dom.window.document
  }
  const allAnchors = Array.from(wrapper.getElementsByTagName('a'))

  // 1. extract all of the URLs
  const allURLs = allAnchors.map(anchorEl => anchorEl.getAttribute('href'))

  // 2. and 3. test URLs concurrently
  // NOTE: is it worth removing the hash part of the URL?
  // Theoretically speaking, the hash should not affect the response status code
  const areURLs200 = await Promise.all(allURLs.map(url => checkIf200(url)))

  const validURLs = allURLs.filter((url, index) => areURLs200[index])
  const invalidURLs = allURLs.filter((url, index) => !areURLs200[index])

  return { invalidURLs: invalidURLs, validURLs: validURLs }
}

module.exports = validateAllURLs
