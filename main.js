const apiManager = new APIManager()
const renderer = new Renderer()
const storageManager = new StorageManager()

renderer.renderUserSelect(storageManager.getStoredItems())

$('#btn-load').on('click', function(){
  apiManager.loadAllData()
})

$('#btn-display').on('click', function(){
  renderer.renderScreen(apiManager.getData())
})

$('#btn-save').on('click', function(){
  storageManager.addToStorage(apiManager.getData())
  renderer.renderUserSelect(storageManager.getStoredItems())
})

$('#btn-remove').on('click', function(){
  storageManager.removeFromStorage($('.saved-users').val())
  renderer.renderUserSelect(storageManager.getStoredItems())
})

$('.saved-users').on('change', function(){
  console.log(storageManager.getUserData($(this).val()))
  renderer.renderScreen(storageManager.getUserData($(this).val()))
})

