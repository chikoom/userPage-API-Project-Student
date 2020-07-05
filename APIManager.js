class APIManager {
    constructor() {
        this.data = {}
    }

    loadAllData(){

      this.loadHeaderImage()
      this.loadUsersData()
      this.loadQuote()
      this.loadAbout()
      
    }

    loadHeaderImage = () => {
      $.ajax({
        method: "GET",
        url: 'https://api.unsplash.com/photos/random/?client_id=wuE6t4HAHT4qH39Fo3q9Ewf_kw_9Dy_ppVrRWffOflU',
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

          this.data.mainUser = resultsArray.splice(0,1).reduce((newUser, oUser) => {
            newUser.firstName = oUser.name.first;
            newUser.lastName = oUser.name.last;
            newUser.city = oUser.location.city;
            newUser.state = oUser.location.state;
            newUser.image = oUser.picture.thumbnail;
            return newUser;
          }, {});
          
          this.data.friends = []
          resultsArray.forEach(user => {
            this.data.friends.push({
              firstName:user.name.first,
              lastName:user.name.last,
              image:user.picture.thumbnail
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
          console.log(data)
          this.data.about = data[0]
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
