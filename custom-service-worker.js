importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
    /\.(?:js|html|css|jpg|jpeg)$/,
    new workbox.strategies.NetworkFirst()
  );
  /*
workbox.routing.registerRoute(
    'http://localhost:3000/',
    new workbox.strategies.NetworkFirst()
  );
*/
 

  workbox.routing.registerRoute(
    'https://natanaelgssilva.github.io/Pwa5/',
    new workbox.strategies.NetworkFirst()
  );