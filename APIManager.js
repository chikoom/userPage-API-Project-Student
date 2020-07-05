const urls = {
  headerImage: 'https://api.unsplash.com/photos/random/?client_id=wuE6t4HAHT4qH39Fo3q9Ewf_kw_9Dy_ppVrRWffOflU'
}

class APIManager {
    constructor() {
        this.data = {}
    }

    loadAllimages(){
      this.data.headerImage = this.loadHeaderImage()
    }

    loadHeaderImage(){
      $.ajax({
        method: "GET",
        url: urls.headerImage,
        success: function(data){
          return data.urls.regular
        },
        error: function (xhr, text, error){
          console.log(`Error loading header image - ${text}`)
        }
      })
    }
}
