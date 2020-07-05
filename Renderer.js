class Renderer {

  renderScreen = siteData => {
    for(let key of Object.keys(siteData)){
      $(`.${key}-container`).empty()
      const template = Handlebars.compile($(`#${key}-template`).html());
      const HTML = template({ data:siteData[key] })
      $(`.${key}-container`).append(HTML)
    }

    // const circleType = new CircleType(document.getElementById('simpsons-header'))
    // circleType.radius(200)

    // const circleType2 = new CircleType(document.getElementById('pokemon-header'))
    // circleType2.radius(200)
  }
  renderUserSelect = storedUsers => {
    $('.saved-users').empty()
    $('.saved-users').append($(`<option value="0">Select user</option>`))
    for(let storedUser of storedUsers){
      $('.saved-users').append($(`<option value="${storedUser.username}">${storedUser.username}</option>`))
    }
  }
}