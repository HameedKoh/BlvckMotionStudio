import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="blvckmotionstudio home"><span>blvck</span>motion<span class="mark">.</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span>+</span></button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      <a href="#services">Services</a><a href="#systems">Systems</a><a href="#about">About</a>
      <a class="nav-cta" href="#contact">Start a project <span>↗</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-wrap">
      <div class="hero-copy">
        <p class="eyebrow">Content production studio / Kaduna, NG</p>
        <h1>Your entire<br><em>content team.</em><br>Under one roof.</h1>
        <p class="hero-intro">We make the content that keeps ambitious brands moving, from first frame to final post</p>
        <a class="button button-light" href="#contact">Start a project <span>↗</span></a>
      </div>
      <div class="hero-visual"><div class="hero-image"></div><span class="image-label">01 / The work is the proof</span><span class="hero-stamp">BMS<br><b>24</b></span></div>
      <div class="hero-meta mono"><span>EST. 2024</span><span>EDIT / SHOOT / DESIGN / MOTION</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section class="ticker" aria-label="Studio disciplines"><div>VIDEO EDITING <i>✳</i> VIDEOGRAPHY <i>✳</i> GRAPHIC DESIGN <i>✳</i> MOTION GRAPHICS <i>✳</i> VIDEO EDITING <i>✳</i> VIDEOGRAPHY</div></section>

    <section id="services" class="services section-wrap section-space">
      <div class="section-heading"><p class="eyebrow">What we do</p><h2>One creative<br><em>language.</em></h2></div>
      <div class="service-grid">
        <article class="service"><span class="service-number mono">01</span><h3>Video<br>editing</h3><p>Short-form that stops the scroll. Long-form that holds attention.</p><a href="/portfolio/video-editing/" target="_blank" rel="noreferrer" aria-label="Explore video editing">↗</a></article>
        <article class="service"><span class="service-number mono">02</span><h3>Video-<br>graphy</h3><p>On-location capture built around your brand, people, and place.</p><a href="/portfolio/videography/" target="_blank" rel="noreferrer" aria-label="Explore videography">↗</a></article>
        <article class="service"><span class="service-number mono">03</span><h3>Graphic<br>design</h3><p>Visual systems that make every detail feel unmistakably yours.</p><a href="/portfolio/graphic-design/" target="_blank" rel="noreferrer" aria-label="Explore graphic design">↗</a></article>
        <article class="service"><span class="service-number mono">04</span><h3>Motion<br>graphics</h3><p>Bringing life to your brand's message in fun ways.</p><a href="/portfolio/motion-graphics/" target="_blank" rel="noreferrer" aria-label="Explore motion graphics">↗</a></article>
      </div>
    </section>

    <section id="systems" class="systems section-space"><div class="section-wrap systems-inner"><div class="section-heading"><p class="eyebrow">Monthly content systems</p><h2>Consistency is<br><em>a strategy.</em></h2></div><div class="system-content"><p class="large-copy">Stop piecing your content together. Choose a rhythm, get a dedicated creative partner, and give your audience something to always come back to.</p><div class="package-tabs" role="tablist"><button class="active" data-package="Lite" role="tab">Lite</button><button data-package="Standard" role="tab">Standard</button><button data-package="Pro" role="tab">Pro</button></div><div class="package-detail"><div><span class="mono package-label">MONTHLY PACKAGE / <b id="package-name">LITE</b></span><h3 id="package-title">A sharp start.</h3><p id="package-copy">For businesses ready to show up with intention. A focused monthly flow of edits and design assets.</p></div><ul id="package-list"><li>4 short-form edits</li><li>8 graphic design</li><li>1 design package</li></ul></div><a class="text-link" href="#contact">See what's included <span>↗</span></a></div></div></section>

    <section id="about" class="about section-wrap section-space"><div class="about-mark">B<span>/</span>M</div><div><p class="eyebrow">The studio</p><h2>Built for brands<br>that are <em>going places.</em></h2><p class="about-copy">blvckmotionstudio is your full content department, without the overhead. Founded by DevHameed in Kaduna, we bring four creative disciplines into one clear workflow and one point of contact.</p><a class="text-link" href="#contact">Meet the studio <span>↗</span></a></div></section>

    <section id="contact" class="contact section-wrap"><p class="eyebrow">Have a brief in mind?</p><h2>Let's make<br>something <em>move.</em></h2><a class="button button-outline js-project-cta" href="#project-modal">Start a project <span>↗</span></a><div class="contact-footer mono"><span>KADUNA / NIGERIA</span><span>INSTAGRAM ↗ &nbsp; WHATSAPP ↗</span></div></section>
  </main>

  <div class="modal" id="project-modal" aria-hidden="true">
    <div class="modal-backdrop" data-close-modal></div>
    <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" type="button" aria-label="Close project form" data-close-modal>×</button>
      <p class="eyebrow">Start a project</p>
      <h2 id="modal-title">Tell us what<br><em>you have in mind.</em></h2>
      <form id="project-form">
        <label>Name or brand<input name="name" type="text" autocomplete="name" placeholder="Your name or brand" required></label>
        <label>Email<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required></label>
        <label>What would you love to work on?<textarea name="project" rows="4" placeholder="Tell us a little about the project" required></textarea></label>
        <button class="button button-light form-submit" type="submit"><span>Send enquiry</span><span>↗</span></button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
    </section>
  </div>
`

const packages = {
  Lite: { title: 'A sharp start.', copy: 'For businesses ready to show up with intention. A focused monthly flow of edits and design assets.', list: ['4 short-form edits', '8 graphic design', '1 design package'] },
  Standard: { title: 'Your content engine.', copy: 'A dependable creative rhythm for brands ready to publish consistently and grow their presence.', list: ['8 short-form edits', '2 long-form edits', '10 graphic design', '1 design package'] },
  Pro: { title: 'Full creative department.', copy: 'The complete system for teams who want content handled end-to-end, every month.', list: ['8 short-form edits', '4 long-form edits', '1 brand-film', '15 graphic design', 'Motion-graphics embedded', '1 design package'] },
}

document.querySelectorAll('.package-tabs button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.package-tabs button').forEach((tab) => tab.classList.remove('active'))
  button.classList.add('active')
  const selected = packages[button.dataset.package]
  document.querySelector('#package-name').textContent = button.dataset.package.toUpperCase()
  document.querySelector('#package-title').textContent = selected.title
  document.querySelector('#package-copy').textContent = selected.copy
  document.querySelector('#package-list').innerHTML = selected.list.map((item) => `<li>${item}</li>`).join('')
}))

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const open = event.currentTarget.getAttribute('aria-expanded') === 'true'
  event.currentTarget.setAttribute('aria-expanded', String(!open))
  document.querySelector('.site-nav').classList.toggle('open', !open)
})

const modal = document.querySelector('#project-modal')
const projectForm = document.querySelector('#project-form')
const formStatus = document.querySelector('.form-status')

const closeModal = () => {
  modal.classList.remove('open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
}

document.querySelectorAll('a[href="#contact"], .js-project-cta').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault()
  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  window.setTimeout(() => modal.querySelector('input').focus(), 100)
}))

modal.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal))
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal()
})

projectForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const submitButton = projectForm.querySelector('.form-submit')
  submitButton.disabled = true
  formStatus.textContent = 'Sending...'
  formStatus.className = 'form-status'

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(projectForm))),
    })
    const result = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(result.error || 'Request failed')
    projectForm.reset()
    formStatus.textContent = 'Thanks. Your enquiry is on its way.'
    formStatus.classList.add('success')
  } catch (error) {
    formStatus.textContent = error.message || 'Something went wrong. Please try again or email us directly.'
    formStatus.classList.add('error')
  } finally {
    submitButton.disabled = false
  }
})
