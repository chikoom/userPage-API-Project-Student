const apiManager = new APIManager()



apiManager.loadAllData()


$('button').on('click', function(){
  console.log(apiManager.getData())
})