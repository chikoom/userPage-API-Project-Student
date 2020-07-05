
const userSource = $("#user-template").html();
const template = Handlebars.compile(userSource);


class Renderer {
  constructor(){

  }
  renderScreen = (siteData) => {

    this.renderHeaderImage(siteData.headerImage)
    this.renderUserContainer(siteData.mainUser)

  }

  renderHeaderImage = (imageUrl) => {
    $(`.header-container`).empty()
    $(`.header-container`).append(`<img src="${imageUrl}" alt="Header Image" />`)
  }
  
  renderUserContainer = (mainUser) => {
    $(`.user-container`).empty()
    const userHTML = template({ mainUser })
    $(`.user-container`).append(userHTML)
  }
}