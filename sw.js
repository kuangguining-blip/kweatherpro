// KWeatherPro Service Worker - 缓存策略：网络优先，离线回退缓存
const CACHE_NAME = 'kweatherpro-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json'
];

// 安装：预缓存静态资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// 请求策略：网络优先，失败回退缓存
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // API 请求：仅网络，不缓存（天气数据需要实时）
    if (url.hostname === 'api.open-meteo.com' || url.pathname.startsWith('/api/')) {
        event.respondWith(
            fetch(event.request).catch(() => {
                return new Response(JSON.stringify({ error: 'offline' }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
        return;
    }

    // 静态资源：网络优先，离线回退缓存
    event.respondWith(
        fetch(event.request).then(response => {
            // 成功获取网络响应，存入缓存
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
        }).catch(() => {
            // 网络失败，回退缓存
            return caches.match(event.request);
        })
    );
});
