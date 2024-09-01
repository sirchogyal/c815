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
