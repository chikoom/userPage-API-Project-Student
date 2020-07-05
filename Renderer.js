class Renderer {

  renderScreen = (siteData) => {
    for(let key of Object.keys(siteData)){
      $(`.${key}-container`).empty()
      const template = Handlebars.compile($(`#${key}-template`).html());
      const HTML = template({ data:siteData[key] })
      $(`.${key}-container`).append(HTML)
    }
    
    const circleType = new CircleType(document.getElementById('simpsons-header'))
    circleType.radius(200)

    const circleType2 = new CircleType(document.getElementById('pokemon-header'))
    circleType2.radius(200)

    
  }
}