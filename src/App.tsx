import { FormEvent, MouseEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  Clapperboard,
  Crown,
  LockKeyhole,
  LogOut,
  Play,
  Search,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { Drama, dramas, genres } from './dramas';
import { getLocaleFromStorage, getLocalizedDrama, getMessages, localeOptions, localeStorageKey, Locale, Messages } from './i18n';

type AuthMode = 'login' | 'signup';
type SubscriptionPlan = 'monthly' | 'annual';
type Page = 'discover' | 'library';

const DEMO_USER_KEY = 'fable-demo-user';
const DEMO_MEMBER_KEY = 'fable-demo-member';
const DEMO_SAVED_KEY = 'fable-demo-saved';

function readSaved(): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem(DEMO_SAVED_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function LanguageSelect({ locale, onChange, compact = false }: { locale: Locale; onChange: (locale: Locale) => void; compact?: boolean }) {
  return (
    <label className={`language-control ${compact ? 'compact' : ''}`}>
      <span className="sr-only">Language</span>
      <select aria-label="Language" value={locale} onChange={event => onChange(event.target.value as Locale)}>
        {localeOptions.map(option => <option key={option.value} value={option.value}>{compact ? option.shortLabel : option.label}</option>)}
      </select>
      <ChevronRight size={13} aria-hidden="true" />
    </label>
  );
}

function AuthScreen({ locale, onLocaleChange, onEnter }: { locale: Locale; onLocaleChange: (locale: Locale) => void; onEnter: (email: string) => void }) {
  const copy = getMessages(locale);
  const [mode, setMode] = useState<AuthMode>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(copy.invalidEmail);
      return;
    }
    if (password.length < 8) {
      setMessage(copy.passwordLength);
      return;
    }
    localStorage.setItem(DEMO_USER_KEY, email);
    onEnter(email);
  }

  return (
    <main className="auth-screen">
      <section className="auth-visual" aria-label={copy.visualCaption}>
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=90" alt="" />
        <div className="auth-visual-shade" />
        <div className="auth-brand"><span className="brand-symbol"><Play size={13} fill="currentColor" /></span><span>fable</span></div>
        <div className="auth-story-copy">
          <span className="eyebrow"><Sparkles size={13} /> {copy.storyKicker}</span>
          <h1>{copy.storyTitleLineOne}<br /><em>{copy.storyTitleLineTwo}</em></h1>
          <p>{copy.storyDescription}</p>
          <div className="story-meta"><span><Star size={13} fill="currentColor" /> {copy.audienceScore}</span><i /><span>{copy.newStories}</span></div>
        </div>
        <span className="visual-caption">{copy.visualCaption}</span>
      </section>

      <section className="auth-panel">
        <div className="auth-panel-top"><span className="mobile-brand"><span className="brand-symbol"><Play size={12} fill="currentColor" /></span>fable</span><span className="region-label">{copy.worldwideStories} <span>·</span> <LanguageSelect locale={locale} onChange={onLocaleChange} /></span></div>
        <div className="auth-form-wrap">
          <div className="auth-heading">
            <span className="eyebrow">{copy.authKicker}</span>
            <h2>{mode === 'signup' ? copy.signupTitle : copy.loginTitle}</h2>
            <p>{mode === 'signup' ? copy.signupSubtitle : copy.loginSubtitle}</p>
          </div>
          <div className="auth-tabs" role="tablist" aria-label={copy.worldwideStories}>
            <button type="button" role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setMessage(''); }}>{copy.createAccount}</button>
            <button type="button" role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setMessage(''); }}>{copy.signIn}</button>
          </div>
          <form className="auth-form" onSubmit={submit}>
            <label htmlFor="email">{copy.emailAddress}</label>
            <input id="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} value={email} onChange={event => setEmail(event.target.value)} required />
            <div className="password-label"><label htmlFor="password">{copy.password}</label>{mode === 'login' && <span>{copy.passwordMinimum}</span>}</div>
            <input id="password" type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} placeholder={copy.passwordPlaceholder} value={password} onChange={event => setPassword(event.target.value)} minLength={8} required />
            {message && <p className="form-message" role="alert">{message}</p>}
            <button className="button-primary auth-submit" type="submit">{mode === 'signup' ? copy.createFreeAccount : copy.signIn}<ArrowRight size={16} /></button>
          </form>
          <p className="auth-terms">{copy.termsLead} <button type="button" onClick={() => setMessage(copy.termsNotice)}>{copy.terms}</button> <button type="button" onClick={() => setMessage(copy.termsNotice)}>{copy.privacy}</button>.</p>
          <div className="auth-divider"><span>{copy.authDivider}</span></div>
          <div className="auth-benefits"><span><Check size={14} /> {copy.benefitEpisodes}</span><span><Check size={14} /> {copy.benefitTime}</span></div>
          <p className="demo-note">{copy.prototypeAccess}</p>
        </div>
        <div className="auth-panel-footer"><span>{copy.copyright}</span><span>{copy.helpSupport}</span></div>
      </section>
    </main>
  );
}

function DramaCard({ drama, saved, copy, onOpen, onSave }: { drama: Drama; saved: boolean; copy: Messages; onOpen: () => void; onSave: (event: MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <article className="drama-card">
      <button type="button" className="poster-button" onClick={onOpen} aria-label={copy.viewDrama(drama.title)}>
        <img src={drama.image} alt="" loading="lazy" style={{ objectPosition: drama.imagePosition }} />
        <span className="poster-vignette" />
        <span className="poster-label">{copy.genreLabel(drama.genre).toUpperCase()}</span>
        <span className="poster-score"><Star size={11} fill="currentColor" /> {drama.rating}</span>
        <span className="poster-play"><Play size={17} fill="currentColor" /></span>
      </button>
      <div className="drama-card-info">
        <div className="card-title-row"><button type="button" className="card-title" onClick={onOpen}>{drama.title}</button><button type="button" className={`save-button ${saved ? 'saved' : ''}`} aria-label={saved ? copy.removeSeries : `${copy.saveSeries} ${drama.title}`} title={saved ? copy.removeSeries : copy.saveSeries} onClick={onSave}><Bookmark size={15} fill={saved ? 'currentColor' : 'none'} /></button></div>
        <p>{copy.number(drama.episodes)} {copy.episodes} <span>·</span> {copy.genreLabel(drama.genre)}</p>
      </div>
    </article>
  );
}

function Dialog({ children, onClose, className = '' }: { children: ReactNode; onClose: () => void; className?: string }) {
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return <div className="dialog-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}><section className={`dialog ${className}`} role="dialog" aria-modal="true">{children}</section></div>;
}

function App() {
  const [locale, setLocale] = useState<Locale>(getLocaleFromStorage);
  const [user, setUser] = useState(() => localStorage.getItem(DEMO_USER_KEY) || '');
  const [isMember, setIsMember] = useState(() => localStorage.getItem(DEMO_MEMBER_KEY) === 'true');
  const [savedIds, setSavedIds] = useState<string[]>(readSaved);
  const [page, setPage] = useState<Page>('discover');
  const [genre, setGenre] = useState('For you');
  const [query, setQuery] = useState('');
  const [showMembership, setShowMembership] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>('annual');
  const [activeDrama, setActiveDrama] = useState<Drama | null>(null);
  const [playingDrama, setPlayingDrama] = useState<Drama | null>(null);
  const [toast, setToast] = useState('');

  const copy = getMessages(locale);
  const localizedDramas = useMemo(() => dramas.map(drama => getLocalizedDrama(drama, locale)), [locale]);

  useEffect(() => {
    localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
    document.title = `Fable · ${copy.discover}`;
  }, [copy.discover, locale]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const visibleDramas = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return localizedDramas.filter(drama => {
      const matchesGenre = genre === genres[0] || drama.genre === genre;
      const searchFields = `${drama.title} ${drama.genre} ${copy.genreLabel(drama.genre)} ${drama.tags.join(' ')}`.toLowerCase();
      const matchesQuery = !needle || searchFields.includes(needle);
      const matchesPage = page === 'discover' || savedIds.includes(drama.id);
      return matchesGenre && matchesQuery && matchesPage;
    });
  }, [copy, genre, localizedDramas, page, query, savedIds]);

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
  }

  function toggleSaved(event: MouseEvent<HTMLButtonElement>, drama: Drama) {
    event.stopPropagation();
    const next = savedIds.includes(drama.id) ? savedIds.filter(id => id !== drama.id) : [...savedIds, drama.id];
    setSavedIds(next);
    localStorage.setItem(DEMO_SAVED_KEY, JSON.stringify(next));
    setToast(next.includes(drama.id) ? copy.savedToast : copy.removedToast);
  }

  function activateMembership() {
    localStorage.setItem(DEMO_MEMBER_KEY, 'true');
    setIsMember(true);
    setShowMembership(false);
    setToast(copy.membershipPreviewToast);
  }

  function watch(drama: Drama) {
    setActiveDrama(null);
    setPlayingDrama(drama);
  }

  if (!user) return <AuthScreen locale={locale} onLocaleChange={changeLocale} onEnter={setUser} />;

  const featured = localizedDramas[0];
  const sectionTitle = page === 'library' ? copy.libraryTitle : genre === genres[0] ? copy.discoverTitle : copy.genreTitle(copy.genreLabel(genre));
  const monthlyPrice = copy.money(9.99);
  const annualPrice = copy.money(59.99);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="app-brand" type="button" onClick={() => { setPage('discover'); setGenre(genres[0]); }}><span className="brand-symbol"><Play size={12} fill="currentColor" /></span><span>fable</span></button>
        <div className="sidebar-label">{copy.watch}</div>
        <nav className="side-nav" aria-label={copy.watch}>
          <button className={page === 'discover' && genre === genres[0] ? 'selected' : ''} type="button" onClick={() => { setPage('discover'); setGenre(genres[0]); }}><Clapperboard size={17} />{copy.discover}</button>
          <button className={page === 'library' ? 'selected' : ''} type="button" onClick={() => { setPage('library'); setGenre(genres[0]); }}><Bookmark size={17} />{copy.myLibrary}{savedIds.length > 0 && <span className="nav-count">{copy.number(savedIds.length)}</span>}</button>
        </nav>
        <div className="sidebar-label genre-label">{copy.genres}</div>
        <nav className="genre-nav" aria-label={copy.genreFilter}>
          {genres.slice(1).map(item => <button type="button" key={item} className={genre === item && page === 'discover' ? 'selected' : ''} onClick={() => { setPage('discover'); setGenre(item); }}><span className={`genre-dot genre-${item.toLowerCase()}`} />{copy.genreLabel(item)}</button>)}
        </nav>
        <div className={`membership-side ${isMember ? 'member-active' : ''}`}>
          <span className="member-icon"><Crown size={15} /></span>
          <strong>{isMember ? copy.fablePlus : copy.goFablePlus}</strong>
          <p>{isMember ? copy.unlocked : copy.noInterruptions}</p>
          <button type="button" onClick={() => setShowMembership(true)}>{isMember ? copy.membershipDetails : copy.exploreMembership}<ArrowRight size={13} /></button>
        </div>
        <div className="sidebar-user"><span className="avatar">{user.slice(0, 1).toUpperCase()}</span><span className="user-copy"><strong>{user.split('@')[0]}</strong><small>{isMember ? copy.fablePlus : copy.freeAccount}</small></span><button type="button" title={copy.signIn} aria-label={copy.signIn} onClick={() => { localStorage.removeItem(DEMO_USER_KEY); setUser(''); }}><LogOut size={16} /></button></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span className="mobile-brand"><span className="brand-symbol"><Play size={12} fill="currentColor" /></span>fable</span>
          <label className="search-field"><Search size={17} /><input aria-label={copy.searchAria} placeholder={copy.searchPlaceholder} value={query} onChange={event => setQuery(event.target.value)} /><kbd>⌘ K</kbd></label>
          <div className="top-actions"><LanguageSelect locale={locale} onChange={changeLocale} compact /><button className={`member-button ${isMember ? 'member-on' : ''}`} type="button" onClick={() => setShowMembership(true)}><Crown size={15} />{isMember ? copy.fablePlus : copy.getPlus}</button><span className="avatar top-avatar">{user.slice(0, 1).toUpperCase()}</span></div>
        </header>

        {page === 'discover' && genre === genres[0] && !query && <section className="featured-hero" aria-label={copy.viewDrama(featured.title)}>
          <img className="featured-image" src={featured.image} alt="" />
          <div className="featured-overlay" />
          <div className="featured-copy"><span className="featured-kicker"><Sparkles size={13} /> {copy.thisWeeksStory}</span><h1>{featured.title}</h1><p>{featured.tagline} {copy.heroDescriptionSuffix}</p><div className="featured-meta"><span><Star size={13} fill="currentColor" /> {featured.rating}</span><span>{copy.number(featured.episodes)} {copy.episodes}</span><span>{copy.genreLabel('Romance')} · {copy.genreLabel('Revenge')}</span></div><div className="featured-actions"><button className="button-light" type="button" onClick={() => setActiveDrama(featured)}><Play size={15} fill="currentColor" />{copy.exploreSeries}</button><button className="button-outline" type="button" aria-label={savedIds.includes(featured.id) ? copy.removeSeries : `${copy.saveSeries} ${featured.title}`} onClick={event => toggleSaved(event, featured)}><Bookmark size={16} fill={savedIds.includes(featured.id) ? 'currentColor' : 'none'} /></button></div></div>
          <span className="hero-index">01 <i /> 04</span>
        </section>}

        <section className="catalog-section">
          <div className="catalog-heading"><div><span className="eyebrow">{copy.catalogEyebrow}</span><h2>{sectionTitle}</h2><p>{page === 'library' ? copy.librarySubtitle : copy.discoverSubtitle}</p></div><div className="catalog-controls"><span>{copy.number(visibleDramas.length)} {copy.seriesCount}</span><button className="sort-button" type="button" onClick={() => setToast(copy.popularToast)}>{copy.popular} <ChevronRight size={14} /></button></div></div>
          {page === 'discover' && <div className="genre-strip" aria-label={copy.genreFilter}>{genres.map(item => <button type="button" key={item} className={genre === item ? 'active' : ''} onClick={() => setGenre(item)}>{copy.genreLabel(item)}</button>)}</div>}
          {visibleDramas.length > 0 ? <div className="drama-grid">{visibleDramas.map(drama => <DramaCard key={drama.id} drama={drama} copy={copy} saved={savedIds.includes(drama.id)} onOpen={() => setActiveDrama(drama)} onSave={event => toggleSaved(event, drama)} />)}</div> : <div className="empty-state"><Search size={25} /><strong>{page === 'library' ? copy.libraryWaiting : copy.noStories}</strong><p>{page === 'library' ? copy.saveSeries : copy.tryAnother}</p><button type="button" onClick={() => { setPage('discover'); setGenre(genres[0]); setQuery(''); }}>{copy.browseAll}</button></div>}
        </section>
        <footer className="app-footer"><span>{copy.footerTagline}</span><span>{copy.footerSubtitle}</span></footer>
      </main>

      {activeDrama && <Dialog className="story-dialog" onClose={() => setActiveDrama(null)}><button className="dialog-close" type="button" aria-label={copy.closeDetails} onClick={() => setActiveDrama(null)}><X size={19} /></button><div className="story-dialog-image"><img src={activeDrama.image} alt="" style={{ objectPosition: activeDrama.imagePosition }} /><div className="story-image-shade" /><div className="story-dialog-title"><span className="eyebrow">{copy.genreLabel(activeDrama.genre).toUpperCase()} · {copy.number(activeDrama.episodes)} {copy.episodes}</span><h2>{activeDrama.title}</h2><p>{activeDrama.tagline}</p></div></div><div className="story-dialog-body"><p className="story-description">{activeDrama.description}</p><div className="story-tag-list">{activeDrama.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="episode-heading"><h3>{copy.episodes}</h3><span>{copy.episodeRange(copy.number(activeDrama.episodes))}</span></div><div className="episode-list">{[1, 2, 3, 4, 5, 6].map(episode => { const locked = episode > 3 && !isMember; return <button type="button" key={episode} onClick={() => locked ? setShowMembership(true) : watch(activeDrama)}><span className="episode-number">{copy.number(episode).padStart(2, '0')}</span><span className="episode-copy"><strong>{copy.episodes} {copy.number(episode)}</strong><small>{copy.episodeTitle(episode)}</small></span><span className="episode-action">{locked ? <LockKeyhole size={15} /> : <Play size={15} fill="currentColor" />}</span></button>; })}</div><p className="episode-note">{isMember ? copy.episodeNoteMember : copy.episodeNoteGuest}</p></div></Dialog>}

      {playingDrama && <Dialog className="player-dialog" onClose={() => setPlayingDrama(null)}><button className="dialog-close player-close" type="button" aria-label={copy.closePlayer} onClick={() => setPlayingDrama(null)}><X size={19} /></button><div className="player-screen" style={{ backgroundImage: `linear-gradient(180deg, #09090933, #090909e8), url("${playingDrama.image}")` }}><span className="player-preview-label">{copy.previewPlayer}</span><div className="player-center"><button type="button" aria-label={copy.playPreview} onClick={() => setToast(copy.videoToast)}><Play size={25} fill="currentColor" /></button><strong>{playingDrama.title}</strong><span>{copy.episodePreview}</span></div><div className="player-controls"><span>00:00</span><div className="player-track"><i /></div><span>00:00</span></div></div><div className="player-caption"><span><Clapperboard size={16} /> {copy.videoNotConnected}</span><button type="button" onClick={() => { setPlayingDrama(null); setShowMembership(true); }}>{copy.unlockAllEpisodes} <Crown size={14} /></button></div></Dialog>}

      {showMembership && <Dialog className="membership-dialog" onClose={() => setShowMembership(false)}><button className="dialog-close" type="button" aria-label={copy.closeMembership} onClick={() => setShowMembership(false)}><X size={19} /></button><div className="membership-header"><span className="crown-orbit"><Crown size={20} /></span><span className="eyebrow">{copy.membershipEyebrow}</span><h2>{copy.membershipTitleLineOne}<br /><em>{copy.membershipTitleLineTwo}</em></h2><p>{copy.membershipDescription}</p></div><div className="plan-options"><button type="button" className={`plan-option ${selectedPlan === 'monthly' ? 'selected' : ''}`} onClick={() => setSelectedPlan('monthly')}><span className="plan-radio" /><span className="plan-copy"><strong>{copy.monthly}</strong><small>{copy.monthlyDescription}</small></span><span className="plan-price"><strong>{monthlyPrice}</strong><small>/ {copy.monthly.toLowerCase()}</small></span></button><button type="button" className={`plan-option ${selectedPlan === 'annual' ? 'selected' : ''}`} onClick={() => setSelectedPlan('annual')}><span className="plan-radio" /><span className="plan-copy"><strong>{copy.annual}</strong><small>{copy.annualDescription}</small></span><span className="plan-price"><strong>{annualPrice}</strong><small>/ {copy.annual.toLowerCase()}</small></span><span className="plan-savings">{copy.save50}</span></button></div><ul className="membership-benefits"><li><Check size={15} /> {copy.unlockEveryEpisode}</li><li><Check size={15} /> {copy.newSeriesWeekly}</li><li><Check size={15} /> {copy.watchWithoutInterruptions}</li></ul><button className="button-primary membership-cta" type="button" onClick={activateMembership}>{isMember ? copy.membershipActive : copy.continueWith(selectedPlan === 'annual' ? annualPrice : monthlyPrice)}<ArrowRight size={16} /></button><p className="checkout-note">{copy.checkoutNote}</p></Dialog>}

      {toast && <div className="toast" role="status"><Check size={15} />{toast}</div>}
    </div>
  );
}

export default App;
