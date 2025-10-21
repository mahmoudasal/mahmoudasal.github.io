'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3db227c80c906dad4aae9c7acedef23d",
"assets/AssetManifest.bin.json": "205cdee46fb0bb0bfe735acac9e06825",
"assets/AssetManifest.json": "165efaec1700323411e31ca4d6ac56fd",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/MA_Logo.png": "b48851d7fb1a98e928ae1cd47a4a944d",
"assets/assets/images/profile.png": "6dc2795b061ea5b87ed40aea1369e5ef",
"assets/assets/screenshots/ala_elsarea/1.png": "6d94727afc410abd1bf836c4df314fc1",
"assets/assets/screenshots/ala_elsarea/2.png": "246072c256aa51a418e80cf5e71820e7",
"assets/assets/screenshots/ala_elsarea/3.png": "1ff7c310bd71da2f267c21f992ad604b",
"assets/assets/screenshots/ala_elsarea/4.png": "606c3463f62dfa3dac7561df9477ea2f",
"assets/assets/screenshots/ala_elsarea/6.png": "92101e7c815a7387b14faffaf085966a",
"assets/assets/screenshots/ala_elsarea/A11.png": "7fd23066c97621934fc9f95331911b2e",
"assets/assets/screenshots/ala_elsarea/A12.png": "37270de2e595f46f159f1c838d82e97f",
"assets/assets/screenshots/ala_elsarea/A13.png": "1ff7c310bd71da2f267c21f992ad604b",
"assets/assets/screenshots/ala_elsarea/A14.png": "606c3463f62dfa3dac7561df9477ea2f",
"assets/assets/screenshots/ala_elsarea/accountEdit.png": "740f8a2cdc7125359af7b61b3b6752e3",
"assets/assets/screenshots/ala_elsarea/logo.png": "de94f3f5753d623d8dbdfd21fba3b98a",
"assets/assets/screenshots/ala_elsarea/selectAccount.png": "db06a69b025f2c044ffb06be69ba7677",
"assets/assets/screenshots/desktop_teacher_helper/1.png": "2bc3ba813f45fb0a8c6618227d521088",
"assets/assets/screenshots/desktop_teacher_helper/2.png": "f9c8248e45c4d505d5b7d1eca8f0e243",
"assets/assets/screenshots/desktop_teacher_helper/3.png": "b80e322a02c79d02c58065b161d7149d",
"assets/assets/screenshots/desktop_teacher_helper/4.png": "58b55e7b9d169922360adcf5a6bea3e8",
"assets/assets/screenshots/desktop_teacher_helper/5.png": "92bea278decb7bac29ff89f704c5da45",
"assets/assets/screenshots/desktop_teacher_helper/6.png": "266b7056eacc88b4949202289ab07eda",
"assets/assets/screenshots/desktop_teacher_helper/7.png": "6ce53670377c09456891c07da6d7b6de",
"assets/assets/screenshots/desktop_teacher_helper/8.png": "bdfad2293a8bbb533a009446a3647dbc",
"assets/assets/screenshots/desktop_teacher_helper/9.png": "de207229fd88d6ef8fad581d69898677",
"assets/assets/screenshots/desktop_teacher_helper/attendance_logo.png": "055e29f705318e860ee5ed4c3b72f62e",
"assets/assets/screenshots/favorite_places/add_place.png": "0fd5da01798c34f60034a97f10d8df0c",
"assets/assets/screenshots/favorite_places/add_place_filled.png": "882e3e8e1eb027e16b01debf71c26995",
"assets/assets/screenshots/favorite_places/empty_state.png": "d0e8b54bfd6fa9d67cdeab432cd5af29",
"assets/assets/screenshots/favorite_places/image_picker.png": "df6b877bf2b3f11450f0c0c057722a19",
"assets/assets/screenshots/favorite_places/location_picker.png": "983f5dfbd2208c41ad52ecc5445b69c0",
"assets/assets/screenshots/favorite_places/logo.png": "b3ac02863ddaf9472a3d15ff8f317ad2",
"assets/assets/screenshots/favorite_places/places_list.png": "b32e94eb5db384111b7956ca73a41c04",
"assets/assets/screenshots/favorite_places/place_detail.png": "1ba2334dd24cf3de4cdaded634be99f9",
"assets/assets/screenshots/favorite_places/Screenshot_1759601520.png": "b0f049980228b0f9b124593de79cc620",
"assets/assets/screenshots/flutter_expense_tracker/1.png": "f84c7ddf1a0bd65f61595388ded137c7",
"assets/assets/screenshots/flutter_expense_tracker/2.png": "fa8b6da88a7c47a7adf5cca7a3f63ae4",
"assets/assets/screenshots/flutter_expense_tracker/3.png": "ef951fb4791337325e2f2afb7bf57c55",
"assets/assets/screenshots/flutter_expense_tracker/4.png": "77f51bddf9d8c755cbd73d9782e29e25",
"assets/assets/screenshots/flutter_expense_tracker/5.png": "039f0782b3f0b0282b333ca24a6c5f8c",
"assets/assets/screenshots/flutter_expense_tracker/6.png": "dae6574ddc91714dfe1d542c8ff8c158",
"assets/assets/screenshots/flutter_expense_tracker/7.png": "3cf686cea3df1c9075e40a9a9e64cbcd",
"assets/assets/screenshots/flutter_expense_tracker/logo.png": "3e576d35fbafefad00886221e2e43d39",
"assets/assets/screenshots/islamex/1.png": "0b86d0f59b75c4440f8adfa71963236e",
"assets/assets/screenshots/islamex/10.png": "05b7fa320d1e11919ea497dc0f8b9892",
"assets/assets/screenshots/islamex/11.png": "b992d6aa2e47da5f69435745e978e633",
"assets/assets/screenshots/islamex/12.png": "dea0c2824ce8fba4925ab3501522cc2a",
"assets/assets/screenshots/islamex/13.png": "d75041f8e3c8e844f774ccb8c200d121",
"assets/assets/screenshots/islamex/2.png": "3d0bceed94882e65f08e7b827ae651df",
"assets/assets/screenshots/islamex/3.png": "66b44317f30056f9b0cb16a61dbd0879",
"assets/assets/screenshots/islamex/4.png": "a80085643ac7f181efc2f0b356ac1a50",
"assets/assets/screenshots/islamex/5.png": "0d7d5eb9ace5517f80cc485978b03ee6",
"assets/assets/screenshots/islamex/6.png": "d596489decde95591d8503f3dbde484b",
"assets/assets/screenshots/islamex/7.png": "f7a0c600fce9e38d63cc974ec0ed93eb",
"assets/assets/screenshots/islamex/8.png": "e88ec2a8143ec8250800f5328582c66d",
"assets/assets/screenshots/islamex/9.png": "e0bf9f987425a88b5e4a56bc80a90f8b",
"assets/assets/screenshots/islamex/Logo.png": "3466a94af1709c6b9b1d03fae792e67c",
"assets/FontManifest.json": "1a5cd219969f67a595124c1bbb0bd5f6",
"assets/fonts/MaterialIcons-Regular.otf": "0372363176d5976904a19771660c2e8b",
"assets/NOTICES": "32ccbd299dc3b637f417f6b37521a918",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "00f63634abc6bb4e0a8ad6fc1fccf332",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "67516112146307b7f39dd6b4ec90b536",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c078813813553f825df15a31f3c236de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7179d596fd281a395745ad657ba83044",
"/": "7179d596fd281a395745ad657ba83044",
"main.dart.js": "e5529952805c95129aaa3ba17d5200f7",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
