import compassLogo from '../assets/compass-logo-white.png'
import { navigation } from '../data/siteData'
import { ButtonLink, Icon } from './UI'

export function Header({ activeView, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="nav container">
        <button className="brand" onClick={() => onNavigate('home')} aria-label="COMPASS home">
          <span className="brand-content"><img className="brand-logo" src={compassLogo} alt="" /><span className="brand-name"><strong>COMPASS</strong><small>FINDING DIRECTION</small></span></span>
        </button>
        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => <button key={item.id} className={activeView === item.id ? 'nav-link nav-link--active' : 'nav-link'} aria-current={activeView === item.id ? 'page' : undefined} onClick={() => onNavigate(item.id)}>{item.label}</button>)}
        </nav>
        <div className="nav-actions"><ButtonLink small onClick={() => onNavigate('contact')}>Get in Touch</ButtonLink><button type="button" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={onToggleMenu}><Icon name={menuOpen ? 'close' : 'menu'} size={20} /></button></div>
      </div>
    </header>
  )
}
