import './style.css'

interface BrandInfo {
  name: string
  tagline: string
  founded: string
  origin: string
  philosophy: string
  collections: string[]
  contact: string
}

const brand: BrandInfo = {
  name: 'EDOM',
  tagline: 'Silence Has a Shape.',
  founded: 'Est. 2024',
  origin: 'Paris · Tokyo · New York',
  philosophy:
    'We believe that true elegance requires no explanation. Each piece is conceived in stillness — crafted for those who need nothing more.',
  collections: ['Void — AW 2025', 'Pale Form — SS 2025', 'Archive — Ongoing'],
  contact: 'studio@edom.world',
}

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header class="header">
    <span class="header__founded">${brand.founded}</span>
    <h1 class="header__title">${brand.name}</h1>
    <span class="header__origin">${brand.origin}</span>
  </header>

  <main class="main">
    <section class="hero">
      <p class="hero__tagline">${brand.tagline}</p>
    </section>

    <section class="section philosophy">
      <h2 class="section__label">Philosophy</h2>
      <p class="section__body">${brand.philosophy}</p>
    </section>

    <section class="section collections">
      <h2 class="section__label">Collections</h2>
      <ul class="collections__list">
        ${brand.collections.map(c => `<li class="collections__item">${c}</li>`).join('')}
      </ul>
    </section>

    <section class="section contact">
      <h2 class="section__label">Contact</h2>
      <a class="contact__link" href="mailto:${brand.contact}">${brand.contact}</a>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; ${new Date().getFullYear()} ${brand.name}. All rights reserved.</p>
  </footer>
`
