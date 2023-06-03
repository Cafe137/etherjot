export function createStyle() {
    return `
@font-face {
    font-family: 'FontNormal';
    font-display: swap;
    src: url('font-variant-1.ttf');
}
@font-face {
    font-family: 'FontBranding';
    font-display: swap;
    src: url('font-variant-2.woff2');
}
@font-face {
    font-family: 'FontArticle';
    font-display: swap;
    src: url('font-variant-3.ttf');
}
body {
    background-color: #f6f6f6;
    margin: 0 auto;
    font-family: FontNormal, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
}
header {
    background-color: #f6f6f6;
    padding: 30px;
    padding-bottom: 28px;
}
main {
    padding-top: 88px;
    padding-bottom: 32px;
    background-color: #fff;
}
footer {
    background-color: #f6f6f6;
    padding: 32px;
    padding-top: 85px;
    padding-bottom: 85px;
}
.footer-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #626262;
}
nav {
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    column-gap: 2px;
    align-items: center;
}
header svg {
    height: 32px;
}
footer svg {
    height: 32px;
}
h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 64px;
    font-weight: normal;
}
h2 {
    margin-top: 64px;
    margin-bottom: 32px;
}
p {
    margin: 0;
    padding: 0;
}
article p {
    font-family: FontArticle, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    margin-bottom: 32px;
    font-weight: 300;
    line-height: 1.6;
}
article h1 {
    font-size: 53px;
    font-weight: bold;
}
article h2 {
    font-size: 32px;
}
a {
    text-decoration: none;
}
.header-top-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.blog-description a {
    text-decoration: underline;
    color: #111111;
}
.blog-link {
    border: 1.5px solid #626262;
    border-radius: 32px;
    padding-top: 4px;
    padding-bottom: 6px;
    padding-left: 13px;
    padding-right: 13px;
}
.blog-link a {
    color: #626262;
    font-size: 14px;
}
img {
    max-width: 100%;
}
code {
    display: inline-block;
    background: #f4f4f4;
    font-weight: bold;
    padding: 2px 6px;
    margin: 4px 0;
    border-radius: 8px;
}
pre {
    padding: 8px;
    background: #f4f4f4;
    border-radius: 8px;
    overflow-x: scroll;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
}
pre code {
    background: none;
    border: none;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
}
.content-area {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
}
.article-area {
    max-width: 626px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
}
.post-container {
    display: grid;
    max-width: 1280px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 30px;
    padding-left: 32px;
    padding-right: 32px;
}
.post-container-h1 {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
}
.post-container-h2 {
    grid-template-columns: repeat(2, 1fr);
}
.highlight {
    background: #e9f4ff;
    padding-top: 100px;
    padding-bottom: 50px;
    margin-bottom: 80px;
}
.highlight h2 {
    font-size: 32px;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
}
.article-container {
    width: 100%;
    margin-bottom: 32px;
}
.article-container-h1 {
    width: 100%;
    position: relative;
    margin-bottom: 84px;
}
.article-container-h1 img, .article-container-h2 img {
    aspect-ratio: 16 / 9;
    object-fit: cover;
    width: 100%;
}
.article-container-h1 > .article-body {
    background: #fff;
    position: absolute;
    bottom: 34px;
    left: 30px;
    padding: 24px;
    padding-left: 30px;
    padding-right: 30px;
    width: 40%;
    line-height: 26px;
}
.article-container-h1 .article-title {
    font-size: 32px;
    line-height: 40px;
}
.article-container-h1 .article-preview {
    font-size: 18px;
    font-weight: 300;
}
.article-title {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 8px;
    margin-bottom: 16px;
}
.article-preview {
    color: #626262;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.article-timestamp, .article-word-count {
    color: #626262;
    font-size: 12px;
}
.article-meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    margin-top: 16px;
}
.blog-name {
    font-family: FontBranding;
    font-size: 24px;
    display: inline;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: -1px;
}
.blog-name-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 16px;
}
.blog-description {
    margin-top: 122px;
    font-size: 32px;
    max-width: 60%;
    font-weight: 300;
    line-height: 1.25;
}
.footer-description {
    font-size: 12px;
    margin-top: 32px;
}
.nav-item {
    font-size: 14px;
    padding: 7px;
    padding-left: 12px;
    padding-right: 12px;
    color: #111;
}
.nav-item:hover {
    color: #fff;
    background-color: #111;
}
.nav-item-active {
    color: #fff;
    background-color: #111;
}
.tag {
    display: inline-block;
    background-color: #f6f6f6;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 12px;
    color: #626262;
    text-decoration: none;
}
.tag:hover {
    background-color: #666;
}
.footer-info {
    max-width: 300px;
    line-height: 1.33;
}
.footer-links {
    max-width: 220px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 60px;
}
.footer-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #626262;
    margin-bottom: 22px;
    font-size: 14px;
}
.footer-link > svg {
    height: 16px;
    margin-right: 8px;
}
@media screen and (max-width: 992px) {
    .post-container {
        grid-template-columns: repeat(2, 1fr);
    }
    .article-container-h1 > .article-body {
        position: initial;
        bottom: initial;
        left: initial;
        padding: 24px;
        padding-left: 0;
        padding-right: 0;
        width: initial;
        line-height: 26px;
    }
}
@media screen and (max-width: 600px) {
    .post-container {
        grid-template-columns: repeat(1, 1fr);
    }
    .post-container-h2 {
        grid-template-columns: repeat(1, 1fr);
    }
}`
}
