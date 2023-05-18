#!/usr/bin/node

const urlParams = new URLSearchParams(window.location.search);
const cacheId = urlParams.get('cache_id');
const scriptTag = document.createElement('script');
scriptTag.innerHTML = `const cacheId = '${cacheId}';`;
document.head.appendChild(scriptTag);
