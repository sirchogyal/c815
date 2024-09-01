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

//CustomsRobertTxt
function generateRobotsTxt() {
    let websiteUrl = document.getElementById("websiteInput").value.trim();

    // Check if the URL starts with "http://" or "https://"
    if (!websiteUrl.startsWith("http://") && !websiteUrl.startsWith("https://")) {
        alert("Please enter a valid URL starting with 'http://' or 'https://'.");
        return;
    }

    // Remove the trailing slash if it exists
    if (websiteUrl.endsWith("/")) {
        websiteUrl = websiteUrl.slice(0, -1);
    }

    const robotsTxt = `
User-agent: *
Disallow: /search
Disallow: /category/
Disallow: /tag/
Disallow: /*?m=1
Allow: /
Sitemap: ${websiteUrl}/sitemap.xml
Sitemap: ${websiteUrl}/sitemap-pages.xml
    `.trim();

    document.getElementById("output").textContent = robotsTxt;
    document.getElementById("copyButton").style.display = "inline-block";
}

function copyToClipboard() {
    const output = document.getElementById("output");
    const text = output.textContent;

    navigator.clipboard.writeText(text).then(() => {
        // Create a temporary message element
        const message = document.createElement("div");
        message.textContent = "Robots.txt code copied to clipboard!";
        message.className = "copy-message";

        // Append the message to the output container
        output.parentElement.appendChild(message);

        // Remove the message after 2 seconds
        setTimeout(() => {
            message.remove();
        }, 2000);

        // Highlight effect to show text has been copied
        output.classList.add("highlight");
        setTimeout(() => output.classList.remove("highlight"), 500);
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
}
