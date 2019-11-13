function appendScript(content, pathName) {
    var scriptNode = document.createElement('script');
    scriptNode.src = '../js/' + pathName + '.js';
    content.appendChild(scriptNode);
}