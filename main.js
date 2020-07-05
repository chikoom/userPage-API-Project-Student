const apiManager = new APIManager()
const renderer = new Renderer()

$('#btn-load').on('click', function(){
  apiManager.loadAllData()
})

$('#btn-display').on('click', function(){
  renderer.renderScreen(apiManager.getData())
})