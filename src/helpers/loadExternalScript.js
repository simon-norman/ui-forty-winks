const loadExternalScript = function(src, callback) {
  const scriptTag = document.createElement('script');
  scriptTag.async = false;
  scriptTag.src = src;
  scriptTag.onload = callback;
  document.body.appendChild(scriptTag);
}

export default loadExternalScript;