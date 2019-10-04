import loadScript from "load-script";

let initialized = false;
let queue = [];

export function fb(callback) {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: 2456726451314362,
          autoLogAppEvents: true,
          status: true,
          cookie: true,
          xfbml: false,
          version: "v4.0"
        });
        initialized = true;
        queue.forEach(cb => cb(window.FB));
        queue = null;
      };
      loadScript(`https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`, {
        async: true
      });
    }
  }
}
