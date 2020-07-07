class StorageManager {
  constructor(){
    this.usersStorage = JSON.parse(localStorage.getItem('users')) || []
  }
  addToStorage = (userData) => {
    const user = userData.user
    if(user){
      const username = `${user.firstName} ${user.lastName}`
      for(let storedUser of this.usersStorage)
        if(storedUser.username === username) return     
      this.usersStorage.push({username,userData})
      localStorage.setItem('users', JSON.stringify(this.usersStorage))
    }
  }
  removeFromStorage = (username) => {
    for(let storedUserIndex in this.usersStorage)
      if(this.usersStorage[storedUserIndex].username === username)
        this.usersStorage.splice(storedUserIndex,1)
    localStorage.setItem('users', JSON.stringify(this.usersStorage))
  }
  getStoredItems(){
    return this.usersStorage
  }
  getUserData(username){
    for(let storedUser of this.usersStorage)
      if(storedUser.username === username) return storedUser.userData
  }
}