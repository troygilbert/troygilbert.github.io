const VERSION = "bb0b253712f0e419edeff2e3c7df44b3f4571afdef5e12ba6aa06884a8c96ffb"
const FILES = ["art/backgrounds/board.png","art/backgrounds/sidebar.png","art/brand/city.png","art/cursor-arrow.svg","art/events/corporate.png","art/events/legal.png","art/events/medical.png","art/events/repairs.png","art/events/solidarity.png","art/events/transport.png","art/events/windfall.png","art/hud/calendar.png","art/hud/cash.png","art/icons/restart.png","art/icons/settings.png","art/portfolio/family.png","art/portfolio/payday.png","art/properties/birch-street.png","art/properties/cedar-row.png","art/properties/crown-plaza.png","art/properties/foundry-lane.png","art/properties/garden-walk.png","art/properties/harbor-way.png","art/properties/hill-terrace.png","art/properties/lake-drive.png","art/properties/maple-court.png","art/properties/market-street.png","art/properties/park-avenue.png","art/properties/station-road.png","art/properties/summit-place.png","art/properties/willow-lane.png","art/screens/bankrupt.png","art/screens/detention-bankrupt-v2.png","art/screens/detention-bankrupt-v3.png","art/screens/detention-bankrupt.png","art/screens/new-game.png","art/spaces/assessment.png","art/spaces/detention.png","art/spaces/enforcement.png","art/spaces/event.png","art/spaces/income-tax.png","art/spaces/payday.png","art/spaces/windfall.png","art/tokens/big-data.png","art/tokens/forrest.png","art/tokens/player.png","art/tokens/social.png","assets/index-B54a5ECT.js","assets/index-C7RBNNl0.css","audio/sfx/action-negative.wav","audio/sfx/action-positive.wav","audio/sfx/balance-flutter.wav","audio/sfx/bankruptcy.wav","audio/sfx/button-tick.wav","audio/sfx/cash-decrease.wav","audio/sfx/cash-increase.wav","audio/sfx/chord-01.wav","audio/sfx/chord-02.wav","audio/sfx/chord-03.wav","audio/sfx/chord-04.wav","audio/sfx/chord-05.wav","audio/sfx/chord-06.wav","audio/sfx/chord-07.wav","audio/sfx/chord-08.wav","audio/sfx/chord-09.wav","audio/sfx/chord-10.wav","audio/sfx/chord-11.wav","audio/sfx/chord-12.wav","audio/sfx/chord-13.wav","audio/sfx/chord-14.wav","audio/sfx/chord-15.wav","audio/sfx/chord-16.wav","audio/sfx/chord-17.wav","audio/sfx/chord-18.wav","audio/sfx/chord-19.wav","audio/sfx/chord-20.wav","audio/sfx/chord-21.wav","audio/sfx/chord-22.wav","audio/sfx/chord-23.wav","audio/sfx/chord-24.wav","audio/sfx/event-bad-sting.wav","audio/sfx/event-good-sting.wav","audio/sfx/event-negative.wav","audio/sfx/event-positive.wav","audio/sfx/footstep1.wav","audio/sfx/footstep10.wav","audio/sfx/footstep11.wav","audio/sfx/footstep12.wav","audio/sfx/footstep13.wav","audio/sfx/footstep14.wav","audio/sfx/footstep15.wav","audio/sfx/footstep16.wav","audio/sfx/footstep17.wav","audio/sfx/footstep18.wav","audio/sfx/footstep19.wav","audio/sfx/footstep2.wav","audio/sfx/footstep20.wav","audio/sfx/footstep3.wav","audio/sfx/footstep4.wav","audio/sfx/footstep5.wav","audio/sfx/footstep6.wav","audio/sfx/footstep7.wav","audio/sfx/footstep8.wav","audio/sfx/footstep9.wav","audio/sfx/good-news-piano.wav","audio/sfx/good-news.wav","audio/sfx/heavy-footstep1.wav","audio/sfx/heavy-footstep2.wav","audio/sfx/heavy-footstep3.wav","audio/sfx/heavy-footstep4.wav","audio/sfx/heavy-footstep5.wav","audio/sfx/heavy-footstep6.wav","audio/sfx/heavy-footstep7.wav","audio/sfx/heavy-footstep8.wav","audio/sfx/news-bad-808-bass.wav","audio/sfx/news-bad-808-c.wav","audio/sfx/news-bad-analog-snare.wav","audio/sfx/news-bad-hyper-snare.wav","audio/sfx/news-bad-kick.wav","audio/sfx/news-bad-riot-snare.wav","audio/sfx/news-bad-timpani.wav","audio/sfx/news-good-clap.wav","audio/sfx/news-good-guitar-pluck.wav","audio/sfx/news-good-harmonica.wav","audio/sfx/news-good-metal-bars.wav","audio/sfx/news-good-open-hat.wav","audio/sfx/news-good-pizzicato.wav","audio/sfx/private-eye-1.wav","audio/sfx/private-eye-2.wav","audio/sfx/private-eye-3.wav","audio/sfx/tax-assessment.wav","audio/sfx/war-drum1.wav","audio/sfx/war-drum2.wav","audio/sfx/war-drum3.wav","audio/sfx/war-drum4.wav","audio/sfx/war-drum5.wav","audio/sfx/war-drum6.wav","audio/sfx/war-drum7.wav","audio/sfx/war-drum8.wav","favicon.png","favicon.svg","fonts/Jersey10-Regular.ttf","fonts/LICENSE-m6x11plus.txt","fonts/OFL-Jersey10.txt","fonts/m6x11plus.ttf","icons/app-192.png","icons/app-512.png","index.html","manifest.webmanifest"]
const BASE = self.registration.scope
const PREFIX = `solvent-green:${BASE}:`
const CACHE = PREFIX + VERSION
const URLS = new Set(FILES.map(file => new URL(file, BASE).href))
const INDEX = new URL('index.html', BASE).href

self.addEventListener('install', event => {
  // A failed download leaves the current release running; never activate a
  // partially cached game. No automatic skipWaiting during a live run.
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE)
    await cache.addAll([...URLS].map(url => new Request(url, { cache: 'reload' })))
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(PREFIX) && name !== CACHE) await caches.delete(name)
    }
  })())
})

self.addEventListener('message', event => {
  if (event.data?.type !== 'APPLY_UPDATE') return
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    // Exclude archives, which have their own registration and app identity.
    const sameRelease = windows.filter(client => {
      const url = new URL(client.url)
      return url.origin + url.pathname === BASE || url.origin + url.pathname === INDEX
    })
    if (sameRelease.some(client => client.id !== event.source?.id)) {
      event.source?.postMessage({ type: 'UPDATE_BLOCKED' })
      return
    }
    await self.skipWaiting()
  })())
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  url.search = ''
  url.hash = ''
  const href = url.href
  const key = href === BASE || href === INDEX ? INDEX : href
  // Exact build inventory only: never intercept a numbered archive, the blog,
  // or an asset belonging to another release.
  if (!URLS.has(key)) return
  event.respondWith((async () => {
    const cache = await caches.open(CACHE)
    return await cache.match(key) || fetch(event.request)
  })())
})
