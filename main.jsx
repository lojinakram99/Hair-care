import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';


const products = [
  { name: 'Nourishing Shampoo', type: 'THE DAILY RITUAL', price: 'EGP 650', image: '/images/shampoo.jpg', note: 'A gentle reset for your hair.' },
  { name: 'Hydrating Conditioner', type: 'SOFTNESS, RESTORED', price: 'EGP 720', image: '/images/conditioner.jpg', note: 'Comforting moisture, easy detangling.' },
  { name: 'Leave-In Conditioner', type: 'CARE THAT STAYS', price: 'EGP 680', image: '/images/leave-in.jpg', note: 'Lightweight care beyond the shower.' },
  { name: 'Botanical Hair Oil', type: 'THE FINISHING TOUCH', price: 'EGP 890', image: '/images/hair-oil.jpg', note: 'A soft glow for your finishing ritual.' },
];

function App() {
  const [bagCount, setBagCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <div className="announcement">A quieter ritual for healthier-looking hair <span>✦</span></div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Laven home">LAVEN<span>HAIRCARE</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a onClick={() => setMenuOpen(false)} href="#collection">The collection</a>
          <a onClick={() => setMenuOpen(false)} href="#philosophy">Our philosophy</a>
          <a onClick={() => setMenuOpen(false)} href="#ritual">The ritual</a>
        </nav>
        <button className="bag" aria-label={`Shopping bag, ${bagCount} items`} onClick={() => alert(bagCount ? `You have ${bagCount} item(s) in your bag.` : 'Your bag is currently empty.')}>BAG <span>{bagCount}</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
      </header>

      <main id="top">
        <section className="hero">
          <img src="/images/leave-in.jpg" alt="LAVEN leave-in conditioner in a calm botanical setting" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">CARE, ROOTED IN NATURE</p>
            <h1>Make room<br />for your <em>ritual.</em></h1>
            <p className="hero-copy">Thoughtful formulas. A softer routine.<br />Care that feels like coming back to yourself.</p>
            <a className="button button-light" href="#collection">DISCOVER THE COLLECTION <span>↗</span></a>
          </div>
          <div className="hero-caption">01 — THE LAVEN EDIT</div>
        </section>


        <section className="intro" id="philosophy">
          <p className="eyebrow">A LITTLE LESS, A LITTLE BETTER</p>
          <h2>Everyday care.<br /><span>Intentionally made.</span></h2>
          <p>Haircare is more than a routine. It’s a moment to slow down, reconnect, and give your hair the care it deserves.</p>
        </section>


        <section className="collection" id="collection">
          <div className="section-head">
            <div><p className="eyebrow">MEET YOUR ROUTINE</p><h2>The essentials</h2></div>
            <p>Four simple steps.<br />A ritual made yours.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-number">0{index + 1}</span></div>
                <div className="product-meta"><span>{product.type}</span><span>{product.price}</span></div>
                <h3>{product.name}</h3>
                <p>{product.note}</p>
                <button className="add-button" onClick={() => setBagCount((count) => count + 1)}>ADD TO BAG <span>＋</span></button>
              </article>
            ))}
          </div>
        </section>


        <section className="ritual" id="ritual">
          <div className="ritual-image"><img src="/images/hair-oil.jpg" alt="LAVEN botanical hair oil" loading="lazy" /></div>
          <div className="ritual-copy"><p className="eyebrow">THE LAVEN WAY</p><h2>Find beauty<br />in the <em>in-between.</em></h2><p>From wash day to the final touch, build a routine that feels simple, considered, and uniquely yours.</p><a href="#collection" className="text-link">EXPLORE YOUR ROUTINE <span>↗</span></a></div>
        </section>


        <section className="closing"><p className="eyebrow">LAVEN HAIRCARE</p><h2>Care that comes<br />naturally.</h2><a href="#collection" className="button button-outline">SHOP THE COLLECTION <span>↗</span></a></section>
      </main>
      <footer className="footer"><a className="brand brand-footer" href="#top">LAVEN<span>HAIRCARE</span></a><p>Thoughtfully yours, naturally.</p><span className="copyright">© 2026 LAVEN HAIRCARE</span></footer>
    </div>
  );
}


createRoot(document.getElementById('root')).render(<App />);
