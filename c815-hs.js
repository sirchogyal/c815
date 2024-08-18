//URL Redirections
if (window.location.href === "https://v815.blogspot.com/2019/12/html-code-for-creating-stylish-moving.html?m=yes") {
  window.location.href = "https://www.youtube.com/watch?v=iS0wSGtXkUU";
}

//Copy to clipboard
function copyCode(id) {
  var copyText = document.getElementById("copy" + id);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
   
  var copyMsg = document.createElement("div");
  copyMsg.innerHTML = "Copied to clipboard";
  copyMsg.style.backgroundColor = "darkgreen";
  copyMsg.style.color = "#fff";
  copyMsg.style.position = "fixed";
  copyMsg.style.bottom = "10px";
  copyMsg.style.left = "50%";
  copyMsg.style.transform = "translate(-50%, -50%)";
  copyMsg.style.bottom = "50%";
  copyMsg.style.padding = "10px";
  copyMsg.style.borderRadius = "5px";
  document.body.appendChild(copyMsg);

  setTimeout(function() {
    copyMsg.remove();
  }, 2000);
}
