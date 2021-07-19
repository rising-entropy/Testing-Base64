
function encodeImageFileAsURL() {
  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      var newImage = document.createElement('img');
      newImage.src = srcData;
      var cssBG =  "url('"+srcData+"')"
      document.getElementById("dase64_img").innerHTML = newImage.outerHTML;
      document.getElementById("dase64_text").innerHTML = srcData;
      document.getElementById("dase64_text2").innerHTML = cssBG;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

var inputFileToLoad = document.getElementById("inputFileToLoad");
inputFileToLoad.addEventListener("change", function(){
  encodeImageFileAsURL()
});


function dase64TextCopy() {
  var copyText = document.getElementById("dase64_text");
  copyText.select();
  copyText.setSelectionRange(0, 9999999999)
  document.execCommand("copy");
  
}
var copyText = document.getElementById("dase64_text_copy");
copyText.addEventListener("click", function(){
  dase64TextCopy()
});


function dase64TextCopy2() {
  var copyText2 = document.getElementById("dase64_text2");
  copyText2.select();
  copyText2.setSelectionRange(0, 9999999999)
  document.execCommand("copy");
  
}
var copyText2 = document.getElementById("dase64_text_copy2");
copyText2.addEventListener("click", function(){
  dase64TextCopy2()
});