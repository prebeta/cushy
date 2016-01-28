// Called when the user types "ctrl + q"
document.onkeydown = function(e){
  if (e.ctrlKey && e.keyCode == 81){
    //chrome.runtime.sendMessage({"message": "ctrl z"});
    alert("ctrl + q");
    e.preventDefault();
  }
}