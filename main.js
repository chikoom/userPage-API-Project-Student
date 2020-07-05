const apiManager = new APIManager()
const renderer = new Renderer()


$('button').on('click', function(){
  console.log(apiManager.getData())
})

$('#btn-load').on('click', function(){
  apiManager.loadAllData()
})

$('#btn-display').on('click', function(){
  renderer.renderScreen(apiManager.getData())
})