function getTestDocument(e){var t=document.createElement("iframe");t.style.display="none",document.body.appendChild(t);var n=t.contentDocument||t.contentWindow.document;return n.open(),n.write(e||"<!doctype html><html><meta charset=utf-8><title>test doc</title>"),n.close(),t.parentNode.removeChild(t),n}module.exports=getTestDocument;
//# sourceMappingURL=getTestDocument.js.map