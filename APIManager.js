class APIManager {
    constructor() {
        this.data = {}
    }

    loadAllData(renderCallback){
      this.loadHeaderImage()
      this.loadUsersData()
      this.loadQuote()
      this.loadAbout()
      this.loadPokemon()
      this.loadSimpsons() 
    }

    loadHeaderImage = () => {
      $.ajax({
        method: "GET",
        url: 'https://api.unsplash.com/photos/random/?collections=139396&client_id=wuE6t4HAHT4qH39Fo3q9Ewf_kw_9Dy_ppVrRWffOflU',
        dataType: 'json',
        success: data => {
          this.data.headerImage = data.urls.regular
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Header Image - ${text}`)
        }
      })
    }

    loadUsersData = () => {
      $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=7&inc=picture,name,location&nat=nl',
        dataType: 'json',
        success: data => {

          const resultsArray = data.results
          const firstUserInfo = resultsArray.splice(0,1)

          this.data.user = {
            firstName: firstUserInfo.name.first,
            lastName: firstUserInfo.name.last,
            city: firstUserInfo.location.city,
            state: firstUserInfo.location.state,
            image: firstUserInfo.picture.large
          }
          
          this.data.friends = []
          resultsArray.forEach(user => {
            this.data.friends.push({
              firstName:user.name.first,
              lastName:user.name.last,
              image:user.picture.medium
            })
          });
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Users Data - ${text}`)
        }
      });
    }

    loadQuote = () => {
      $.ajax({
        method: "GET",
        url: 'https://api.kanye.rest',
        dataType: 'json',
        success: data => {
          this.data.quote = data.quote
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Quote - ${text}`)
        }
      })
    }

    loadAbout = () => {
      $.ajax({
        method: "GET",
        url: 'https://baconipsum.com/api/?type=all-meat&paras=1',
        dataType: 'json',
        success: data => {
          this.data.about = data[0]
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Quote - ${text}`)
        }
      })
    }

    loadPokemon = () => {
      $.ajax({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100)+1}`,
        dataType: 'json',
        success: data => {
          this.data.pokemon = {
            name: data.name,
            image: data.sprites.front_shiny
          }
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Quote - ${text}`)
        }
      })
    }

    loadSimpsons = () => {
      $.ajax({
        method: "GET",
        url: `https://thesimpsonsquoteapi.glitch.me/quotes`,
        dataType: 'json',
        success: data => {
          this.data.simpsons = {
            name: data[0].character,
            image: data[0].image
          }
        },
        error: (xhr, text, error) => {
          console.log(`Error loading Quote - ${text}`)
        }
      })
    }

    getData(){
      return this.data
    }
}
