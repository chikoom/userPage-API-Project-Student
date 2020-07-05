
class Renderer {
  constructor(){

  }
  renderScreen = (siteData) => {

    this.renderHeaderImage(siteData.headerImage)

  }

  renderHeaderImage = (imageUrl) => {
    $(`.header-container`).empty()
    $(`.header-container`).append(`<img src="${imageUrl}" alt="Header Image" />`)
  }

}