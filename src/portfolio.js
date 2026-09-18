import './portfolio.css'

const imageSources = [
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1558655146-2f9e2a6f0b5a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1561070791-2c5b4b0f7c7b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1561070791-2c5b4b0f7c7b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1559028012-48c04fa702d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=85',
]

const videoSources = [
  'https://cdn.coverr.co/videos/coverr-a-man-drawing-with-a-pencil-1573/1080p.mp4',
  'https://cdn.coverr.co/videos/coverr-woman-working-on-a-laptop-1572/1080p.mp4',
  'https://cdn.coverr.co/videos/coverr-working-at-a-desk-1574/1080p.mp4',
]

const reelSources = [...videoSources, ...videoSources, ...videoSources, ...videoSources].slice(0, 10)
const path = window.location.pathname
const page = path.includes('graphic-design') ? 'Graphic design' : path.includes('videography') ? 'Videography' : path.includes('video-editing') ? 'Video editing' : 'Motion graphics'
const description = page === 'Graphic design' ? 'A visual archive of identities, systems, and small details made to stay with you.' : page === 'Videography' ? 'Selected frames from shoots built around people, places, and a point of view.' : page === 'Video editing' ? 'A moving shelf of cuts, rhythm, and stories made for the scroll.' : 'This collection is currently being assembled.'

const renderMedia = () => {
  if (page === 'Graphic design') return `<div class="pin-grid">${imageSources.map((source, index) => `<button class="pin" type="button"><img src="${source}" alt="Graphic design project ${index + 1}" loading="lazy"><span class="pin-index">${String(index + 1).padStart(2, '0')}</span></button>`).join('')}</div>`
  if (page === 'Videography') return `<div class="video-grid">${videoSources.map((source, index) => `<button class="video-card" type="button"><video src="${source}" muted loop playsinline preload="metadata"></video><span>Shot ${String(index + 1).padStart(2, '0')} <b>↗</b></span></button>`).join('')}</div>`
  if (page === 'Video editing') return `<div class="reel-grid">${reelSources.map((source, index) => `<button class="reel-card" type="button"><video src="${source}" muted loop autoplay playsinline preload="metadata"></video><span>Cut ${String(index + 1).padStart(2, '0')}</span></button>`).join('')}</div>`
  return '<div class="empty-work"><span>Coming soon</span><p>The motion archive is in progress.</p></div>'
}

document.querySelector('#app').innerHTML = `<header class="portfolio-header"><a class="portfolio-back" href="/">← Back to studio</a><span class="portfolio-count mono">BMS / ARCHIVE</span></header><main class="portfolio-main"><div class="portfolio-intro"><p class="eyebrow">Selected work / ${page}</p><h1>${page}<em>.</em></h1><p>${description}</p></div>${renderMedia()}</main>`

document.querySelectorAll('.pin').forEach((pin) => pin.addEventListener('click', () => pin.classList.toggle('selected')))
document.querySelectorAll('.video-card').forEach((card) => card.addEventListener('click', () => {
  const video = card.querySelector('video')
  video.controls = true
  video.play()
  card.classList.add('expanded')
}))
document.querySelectorAll('.reel-card').forEach((card) => card.addEventListener('click', () => {
  const video = card.querySelector('video')
  document.querySelectorAll('.reel-card video').forEach((otherVideo) => { if (otherVideo !== video) otherVideo.pause() })
  card.classList.toggle('expanded')
  if (card.classList.contains('expanded')) video.play()
  else video.pause()
}))