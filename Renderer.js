
class Renderer {
  constructor(){

  }
  renderScreen = (siteData) => {

    this.renderHeaderImage(siteData)

  }

  renderHeaderImage = (siteData) => {
    $(`.header-container`).append(`<img src="${siteData.headerImage}" />`)
  }
}