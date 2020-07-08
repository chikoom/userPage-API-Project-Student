class Renderer {

  renderScreen = siteData => {
    for(let key of Object.keys(siteData)){
      $(`.${key}-container`).empty()
      const template = Handlebars.compile($(`#${key}-template`).html());
      const HTML = template({ data:siteData[key] })
      $(`.${key}-container`).append(HTML)
    }
  }
  renderUserSelect = storedUsers => {
    $('.saved-users').empty()
    $('.saved-users').append($(`<option value="0">Select user</option>`))
    for(let storedUser of storedUsers){
      $('.saved-users').append($(`<option value="${storedUser.username}">${storedUser.username}</option>`))
    }
  }
}