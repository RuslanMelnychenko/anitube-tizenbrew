'use strict';

// This service runs in TizenBrew's Node.js VM context (part of the TizenBrew app),
// where tizen.websetting is available. Setting the UA here changes the HTTP
// User-Agent header for the TizenBrew WebView before the next page request.
var ANDROID_UA = 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36';

try {
    if (typeof tizen !== 'undefined' &&
        tizen.websetting &&
        typeof tizen.websetting.setUserAgentString === 'function') {
        tizen.websetting.setUserAgentString(ANDROID_UA);
    }
} catch (e) {}
