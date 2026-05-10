(function () {
    'use strict';

    var ANDROID_UA = 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36';
    var RELOAD_FLAG = '__anitube_mobile_loaded';

    // Override navigator.userAgent for any JavaScript-based mobile detection on the page.
    try {
        Object.defineProperty(navigator, 'userAgent', {
            get: function () { return ANDROID_UA; },
            configurable: true
        });
    } catch (e) {}

    try {
        Object.defineProperty(navigator, 'platform', {
            get: function () { return 'Linux armv8l'; },
            configurable: true
        });
    } catch (e) {}

    // On the first injection the page was fetched with the Samsung TV User-Agent
    // (server returned the desktop version). service.js is simultaneously setting
    // Android UA via tizen.websetting.setUserAgentString. After a short delay —
    // enough for service.js to download and run — we reload so the next HTTP
    // request carries the Android UA and the server returns the mobile version.
    if (!sessionStorage.getItem(RELOAD_FLAG)) {
        sessionStorage.setItem(RELOAD_FLAG, '1');
        setTimeout(function () {
            window.location.reload();
        }, 1200);
    }
})();
