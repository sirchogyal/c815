// Redirection Functionality
const redirects = [
  // URLs without /p/, year, month, or .html redirect to URLs with /p/, year, month, and .html
  ["https://www.code8home.com/privacy-policy", "https://www.code8home.com/p/privacy-policy.html"],
  ["https://www.code8home.com/disclaimer", "https://www.code8home.com/p/disclaimer.html"],
  ["https://www.code8home.com/about-us", "https://www.code8home.com/p/about-us.html"],
  ["https://www.code8home.com/submit-your-files-questions", "https://www.code8home.com/p/submit-your-files-questions.html"],
  ["https://www.code8home.com/contact-us", "https://www.code8home.com/p/contact-us.html"],
  ["https://www.code8home.com/transfor-orgin-of-transform-property-in", "https://www.code8home.com/2024/08/transfor-orgin-of-transform-property-in.html"],
  ["https://www.code8home.com/link-favicon", "https://www.code8home.com/2024/02/link-favicon.html"],
  ["https://www.code8home.com/how-to-reduce-height-of-br-tag-in-html", "https://www.code8home.com/2024/01/how-to-reduce-height-of-br-tag-in-html.html"],
  ["https://www.code8home.com/address-tag-in-html", "https://www.code8home.com/2023/12/address-tag-in-html.html"],
  ["https://www.code8home.com/and-tags-in-html", "https://www.code8home.com/2023/12/and-tags-in-html.html"],
  ["https://www.code8home.com/declaration", "https://www.code8home.com/2023/12/declaration.html"],
  ["https://www.code8home.com/html-code-for-creating-stylish-moving", "https://www.code8home.com/2023/12/html-code-for-creating-stylish-moving.html"],
  ["https://www.code8home.com/code-for-basic-bloggers-themetemplate", "https://www.code8home.com/2023/12/code-for-basic-bloggers-themetemplate.html"],
  ["https://www.code8home.com/calculation-of-rotations-using-matrix", "https://www.code8home.com/2023/12/calculation-of-rotations-using-matrix.html"],
  ["https://www.code8home.com/registry-file-code-for-bitmap-image", "https://www.code8home.com/2023/12/registry-file-code-for-bitmap-image.html"],
  ["https://www.code8home.com/expressing-font-weight-in-different", "https://www.code8home.com/2023/12/expressing-font-weight-in-different.html"],
  ["https://www.code8home.com/get-thumbnail-with-any-youtube-video", "https://www.code8home.com/2024/04/get-thumbnail-with-any-youtube-video.html"],
  ["https://www.code8home.com/hide-widgetgadget-from-specific-url-in", "https://www.code8home.com/2023/05/hide-widgetgadget-from-specific-url-in.html"],
  ["https://www.code8home.com/deleting-post-comments-atom", "https://www.code8home.com/2023/05/deleting-post-comments-atom.html"],
  ["https://www.code8home.com/how-to-create-table-with-scrollbar", "https://www.code8home.com/2023/05/how-to-create-table-with-scrollbar.html"],
  ["https://www.code8home.com/the-matrix-function-in-css", "https://www.code8home.com/2023/04/the-matrix-function-in-css.html"],
  ["https://www.code8home.com/how-to-make-your-blogger-theme-fully", "https://www.code8home.com/2023/04/how-to-make-your-blogger-theme-fully.html"],
  ["https://www.code8home.com/hide-image-url-from-inspection-and-page", "https://www.code8home.com/2023/03/hide-image-url-from-inspection-and-page.html"],
  ["https://www.code8home.com/automatic-date-month-year", "https://www.code8home.com/2023/03/automatic-date-month-year.html"],
  ["https://www.code8home.com/how-we-can-create-vertical-scrollbar-in", "https://www.code8home.com/2023/01/how-we-can-create-vertical-scrollbar-in.html"],
  ["https://www.code8home.com/splitting-or-merging-cells-in-html", "https://www.code8home.com/2022/11/splitting-or-merging-cells-in-html.html"],
  ["https://www.code8home.com/matrix3d-css-function-of-transform", "https://www.code8home.com/2022/11/matrix3d-css-function-of-transform.html"],
  ["https://www.code8home.com/border-css-part-3", "https://www.code8home.com/2022/11/border-css-part-3.html"],
  ["https://www.code8home.com/border-css-part-2", "https://www.code8home.com/2022/11/border-css-part-2.html"],
  ["https://www.code8home.com/border-css-part-1", "https://www.code8home.com/2022/11/border-css-part-1.html"],
  ["https://www.code8home.com/css-for-curved-moon", "https://www.code8home.com/2022/11/css-for-curved-moon.html"],
  ["https://www.code8home.com/css-for-vertical-scroll-bar", "https://www.code8home.com/2022/11/css-for-vertical-scroll-bar.html"],
  ["https://www.code8home.com/scroll-css-with-links", "https://www.code8home.com/2022/11/scroll-css-with-links.html"],
  ["https://www.code8home.com/add-html-document-and-ccs-to-new", "https://www.code8home.com/2022/11/add-html-document-and-ccs-to-new.html"],
  ["https://www.code8home.com/responsive-side-navigation-slider", "https://www.code8home.com/2022/11/responsive-side-navigation-slider.html"],
  ["https://www.code8home.com/css-for-horizontal-scrollbar", "https://www.code8home.com/2022/11/css-for-horizontal-scrollbar.html"],
  ["https://www.code8home.com/css-for-national-flag-of-united-states", "https://www.code8home.com/2022/11/css-for-national-flag-of-united-states.html"],
  ["https://www.code8home.com/the-abbr-tag-and-dfn-tag", "https://www.code8home.com/2022/11/the-abbr-tag-and-dfn-tag.html"],
  ["https://www.code8home.com/hexagon-css", "https://www.code8home.com/2022/11/hexagon-css.html"],
  ["https://www.code8home.com/down-triangle-css", "https://www.code8home.com/2022/11/down-triangle-css.html"],
  ["https://www.code8home.com/right-triangle-css", "https://www.code8home.com/2022/11/right-triangle-css.html"],
  ["https://www.code8home.com/css-for-right-sidebar-responsive-website", "https://www.code8home.com/2022/11/css-for-right-sidebar-responsive-website.html"],
  ["https://www.code8home.com/left-sidebar-responsive-website", "https://www.code8home.com/2022/11/left-sidebar-responsive-website.html"],
  ["https://www.code8home.com/css-for-left-right-sidebars-responsive", "https://www.code8home.com/2022/11/css-for-left-right-sidebars-responsive.html"],
  ["https://www.code8home.com/creating-digital-clock", "https://www.code8home.com/2022/11/creating-digital-clock.html"],
  ["https://www.code8home.com/auto-year-script-css", "https://www.code8home.com/2022/11/auto-year-script-css.html"],
  ["https://www.code8home.com/first-javascript", "https://www.code8home.com/2022/11/first-javascript.html"],
  ["https://www.code8home.com/japanese-flag-css", "https://www.code8home.com/2022/11/japanese-flag-css.html"],
  ["https://www.code8home.com/how-to-turn-off-underline-and-hover", "https://www.code8home.com/2022/11/how-to-turn-off-underline-and-hover.html"],
  ["https://www.code8home.com/show-underlines-only-on-mouse-hover-by", "https://www.code8home.com/2022/11/show-underlines-only-on-mouse-hover-by.html"],
  ["https://www.code8home.com/the-min-width-property-in-css", "https://www.code8home.com/2022/11/the-min-width-property-in-css.html"],
  ["https://www.code8home.com/using-min-height-min-width-in-span-tag", "https://www.code8home.com/2022/11/using-min-height-min-width-in-span-tag.html"],
  ["https://www.code8home.com/position-relative", "https://www.code8home.com/2022/11/position-relative.html"],
  ["https://www.code8home.com/position-static", "https://www.code8home.com/2022/11/position-static.html"],
  ["https://www.code8home.com/position-absolute", "https://www.code8home.com/2022/11/position-absolute.html"],
  ["https://www.code8home.com/fixed-positioning-in-css", "https://www.code8home.com/2022/11/fixed-positioning-in-css.html"],
  ["https://www.code8home.com/code-tag-in-html", "https://www.code8home.com/2022/11/code-tag-in-html.html"],
  ["https://www.code8home.com/label-tag-in-html", "https://www.code8home.com/2022/11/label-tag-in-html.html"],
  ["https://www.code8home.com/transform-skew-in-css", "https://www.code8home.com/2022/11/transform-skew-in-css.html"],
  ["https://www.code8home.com/text-decoration-color-property-in-css", "https://www.code8home.com/2022/11/text-decoration-color-property-in-css.html"],
  ["https://www.code8home.com/different-values-for-text-decoration-in", "https://www.code8home.com/2022/11/different-values-for-text-decoration-in.html"],
  ["https://www.code8home.com/the-text-decoration-shorthand-property", "https://www.code8home.com/2022/11/the-text-decoration-shorthand-property.html"],
  ["https://www.code8home.com/the-text-decoration-skip-ink-css", "https://www.code8home.com/2022/11/the-text-decoration-skip-ink-css.html"],
  ["https://www.code8home.com/display-none-visibility-hidden", "https://www.code8home.com/2022/11/display-none-visibility-hidden.html"],
  ["https://www.code8home.com/the-pre-tag-in-html", "https://www.code8home.com/2022/11/the-pre-tag-in-html.html"],
  ["https://www.code8home.com/the-tag-in-html", "https://www.code8home.com/2022/11/the-tag-in-html.html"],
  ["https://www.code8home.com/the-text-underline-offset-css-property", "https://www.code8home.com/2022/11/the-text-underline-offset-css-property.html"],
  ["https://www.code8home.com/center-horizontally-and-vertically", "https://www.code8home.com/2022/11/center-horizontally-and-vertically.html"],
  ["https://www.code8home.com/rotatey-rotatex-rotate-functions", "https://www.code8home.com/2022/11/rotatey-rotatex-rotate-functions.html"],
  ["https://www.code8home.com/scale3d-css-function", "https://www.code8home.com/2022/11/scale3d-css-function.html"],
  ["https://www.code8home.com/css-scale-scalex-scaley-functions-of", "https://www.code8home.com/2022/11/css-scale-scalex-scaley-functions-of.html"],
  ["https://www.code8home.com/rotate3d-css", "https://www.code8home.com/2022/11/rotate3d-css.html"],
  ["https://www.code8home.com/translate-css-function-of-transform", "https://www.code8home.com/2022/11/translate-css-function-of-transform.html"],
  ["https://www.code8home.com/perspective-css-function-of-transform", "https://www.code8home.com/2022/11/perspective-css-function-of-transform.html"],
  ["https://www.code8home.com/html-editor", "https://www.code8home.com/2022/11/html-editor.html"]
];
const currentUrl = window.location.href;

redirects.forEach(redirect => {
  if (currentUrl === redirect[0]) {
    window.location.href = redirect[1];
  }
});

// URL Handling and Blog Fetching
var urlTotal, nextPageToken, postsDatePrefix = !1, accessOnly = !1, useApiV3 = !1, apiKey = "", blogId = "", postsOrPages = ["pages", "posts"], jsonIndex = 1, secondRequest = !0, feedPriority = 0, amp = "&"[0];

function urlVal() {
    var e = window.location.pathname, t = e.length;
    return ".html" === e.substring(t - 5) ? 0 : t > 1 ? 1 : 2;
}

function urlMod() {
    var e = window.location.pathname;
    "p" === e.substring(1, 2) ? (e = (e = e.substring(e.indexOf("/", 1) + 1)).substr(0, e.indexOf(".html")), history.replaceState(null, null, "../" + e)) : (e = (e = postsDatePrefix ? e.substring(1) : e.substring(e.indexOf("/", 7) + 1)).substr(0, e.indexOf(".html")), history.replaceState(null, null, "../../" + e));
}

function urlSearch(e, t) {
    var n = e + ".html";
    t.forEach(function (e) {
        -1 !== e.search(n) && (window.location = e);
    });
}

function urlManager() {
    var e = urlVal();
    0 === e ? accessOnly || urlMod() : 1 === e ? getJSON(postsOrPages[feedPriority], 1) : 2 === e && (accessOnly || history.replaceState(null, null, "/"));
}

function getJSON(e, t) {
    var n = document.createElement("script");
    if (useApiV3) {
        var o = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/" + e + "?key=" + apiKey + "#maxResults=500#fields=nextPageToken%2Citems(url)#callback=bloggerJSON";
        nextPageToken && (o += "#pageToken=" + nextPageToken), nextPageToken = void 0;
    } else o = window.location.protocol + "//" + window.location.hostname + "/feeds/" + e + "/default?start-index=" + t + "#max-results=150#orderby=published#alt=json-in-script#callback=bloggerJSON";
    o = o.replace(/#/g, amp), n.type = "text/javascript", n.src = o, document.getElementsByTagName("head")[0].appendChild(n);
}

function bloggerJSON(e) {
    var t = [];
    if (useApiV3 || void 0 === urlTotal && (urlTotal = parseInt(e.feed.openSearch$totalResults.$t)), useApiV3) {
        try {
            e.items.forEach(function (e, n) {
                t.push(e.url);
            });
        } catch (e) { }
        nextPageToken = e.nextPageToken;
    } else try {
        e.feed.entry.forEach(function (n, o) {
            var r = e.feed.entry[o];
            r.link.forEach(function (e, n) {
                "alternate" === r.link[n].rel && t.push(r.link[n].href);
            });
        });
    } catch (e) { }
    urlSearch(window.location.pathname, t), urlTotal > 150 ? (jsonIndex += 150, urlTotal -= 150, getJSON(postsOrPages[feedPriority], jsonIndex)) : nextPageToken ? getJSON(postsOrPages[feedPriority]) : secondRequest && (nextPageToken = void 0, urlTotal = void 0, jsonIndex = 1, secondRequest = !1, 0 === feedPriority ? (feedPriority = 1, getJSON("posts", 1)) : 1 === feedPriority && (feedPriority = 0, getJSON("pages", 1)));
}

function bloggerJS(e) {
    e && (feedPriority = e), urlManager();
}

bloggerJS();
