import { Drama, genres } from './dramas';

export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'es' | 'pt-BR';

export const localeOptions: Array<{ value: Locale; label: string; shortLabel: string }> = [
  { value: 'en', label: 'English', shortLabel: 'EN' },
  { value: 'zh-CN', label: '简体中文', shortLabel: '简中' },
  { value: 'zh-TW', label: '繁體中文', shortLabel: '繁中' },
  { value: 'es', label: 'Español', shortLabel: 'ES' },
  { value: 'pt-BR', label: 'Português (Brasil)', shortLabel: 'PT' },
];

export const localeStorageKey = 'fable-demo-locale';

export type Messages = {
  localeName: string;
  worldwideStories: string;
  storyKicker: string;
  storyTitleLineOne: string;
  storyTitleLineTwo: string;
  storyDescription: string;
  audienceScore: string;
  newStories: string;
  visualCaption: string;
  authKicker: string;
  signupTitle: string;
  loginTitle: string;
  signupSubtitle: string;
  loginSubtitle: string;
  createAccount: string;
  signIn: string;
  emailAddress: string;
  password: string;
  passwordMinimum: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  invalidEmail: string;
  passwordLength: string;
  createFreeAccount: string;
  termsLead: string;
  terms: string;
  privacy: string;
  termsNotice: string;
  authDivider: string;
  benefitEpisodes: string;
  benefitTime: string;
  prototypeAccess: string;
  helpSupport: string;
  copyright: string;
  watch: string;
  discover: string;
  myLibrary: string;
  genres: string;
  fablePlus: string;
  goFablePlus: string;
  unlocked: string;
  noInterruptions: string;
  membershipDetails: string;
  exploreMembership: string;
  freeAccount: string;
  searchPlaceholder: string;
  searchAria: string;
  getPlus: string;
  thisWeeksStory: string;
  heroDescriptionSuffix: string;
  exploreSeries: string;
  catalogEyebrow: string;
  libraryTitle: string;
  discoverTitle: string;
  genreTitle: (genre: string) => string;
  librarySubtitle: string;
  discoverSubtitle: string;
  seriesCount: string;
  popular: string;
  popularToast: string;
  genreFilter: string;
  noStories: string;
  libraryWaiting: string;
  saveSeries: string;
  removeSeries: string;
  tryAnother: string;
  browseAll: string;
  footerTagline: string;
  footerSubtitle: string;
  closeDetails: string;
  closePlayer: string;
  closeMembership: string;
  viewDrama: (title: string) => string;
  episodes: string;
  episodeRange: (count: string) => string;
  episodeTitle: (episode: number) => string;
  episodeNoteMember: string;
  episodeNoteGuest: string;
  previewPlayer: string;
  episodePreview: string;
  playPreview: string;
  videoNotConnected: string;
  unlockAllEpisodes: string;
  membershipEyebrow: string;
  membershipTitleLineOne: string;
  membershipTitleLineTwo: string;
  membershipDescription: string;
  monthly: string;
  monthlyDescription: string;
  annual: string;
  annualDescription: string;
  save50: string;
  unlockEveryEpisode: string;
  newSeriesWeekly: string;
  watchWithoutInterruptions: string;
  membershipActive: string;
  continueWith: (price: string) => string;
  checkoutNote: string;
  membershipPreviewToast: string;
  accountTier: string;
  freeAccess: string;
  freeAccessDetails: string;
  vipAccess: string;
  vipAccessDetails: string;
  vipRegistration: string;
  rechargeVip: string;
  paymentMethod: string;
  visa: string;
  mastercard: string;
  wechatPay: string;
  alipay: string;
  paymentDemoNote: string;
  orderCreated: (orderId: string) => string;
  orderIdLabel: string;
  paymentProcessing: string;
  paymentSuccess: string;
  lockedEpisode: string;
  unlockWithVip: string;
  freeEpisodeNote: string;
  savedToast: string;
  removedToast: string;
  videoToast: string;
  number: (value: number) => string;
  money: (value: number) => string;
  genreLabel: (genre: string) => string;
};

const numberFor = (locale: Locale, value: number) => new Intl.NumberFormat(locale).format(value);
const moneyFor = (locale: Locale, value: number) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(value);

const genreLabels: Record<Locale, Record<string, string>> = {
  en: { 'For you': 'For you', Romance: 'Romance', Revenge: 'Revenge', Billionaire: 'Billionaire', Fantasy: 'Fantasy', Mystery: 'Mystery', Werewolf: 'Werewolf', Office: 'Office' },
  'zh-CN': { 'For you': '为你推荐', Romance: '浪漫爱情', Revenge: '复仇爽剧', Billionaire: '豪门总裁', Fantasy: '奇幻世界', Mystery: '悬疑推理', Werewolf: '狼人传说', Office: '职场故事' },
  'zh-TW': { 'For you': '為你推薦', Romance: '浪漫愛情', Revenge: '復仇爽劇', Billionaire: '豪門總裁', Fantasy: '奇幻世界', Mystery: '懸疑推理', Werewolf: '狼人傳說', Office: '職場故事' },
  es: { 'For you': 'Para ti', Romance: 'Romance', Revenge: 'Venganza', Billionaire: 'Millonarios', Fantasy: 'Fantasía', Mystery: 'Misterio', Werewolf: 'Hombres lobo', Office: 'Oficina' },
  'pt-BR': { 'For you': 'Para você', Romance: 'Romance', Revenge: 'Vingança', Billionaire: 'Milionários', Fantasy: 'Fantasia', Mystery: 'Mistério', Werewolf: 'Lobisomens', Office: 'Escritório' },
};

const baseMessages = (locale: Locale): Omit<Messages, 'genreLabel' | 'number' | 'money'> => ({
  localeName: localeOptions.find(option => option.value === locale)?.label || 'English',
  worldwideStories: 'WORLDWIDE STORIES',
  storyKicker: 'STORIES MADE TO BINGE',
  storyTitleLineOne: 'One more episode.',
  storyTitleLineTwo: 'Then one more.',
  storyDescription: 'Big feelings. Sharp turns. Stories in your pocket.',
  audienceScore: '4.9 audience score',
  newStories: 'New stories every week',
  visualCaption: 'THE HEIRESS RETURNS · ORIGINAL SERIES',
  authKicker: 'YOUR NEXT OBSESSION STARTS HERE',
  signupTitle: 'Get into the story',
  loginTitle: 'Welcome back',
  signupSubtitle: 'Create an account to save your place and find your next favorite.',
  loginSubtitle: 'Sign in to pick up exactly where you left off.',
  createAccount: 'Create account',
  signIn: 'Sign in',
  emailAddress: 'Email address',
  password: 'Password',
  passwordMinimum: '8 characters minimum',
  emailPlaceholder: 'you@example.com',
  passwordPlaceholder: 'Enter your password',
  invalidEmail: 'Enter a valid email address.',
  passwordLength: 'Use at least 8 characters for your password.',
  createFreeAccount: 'Create free account',
  termsLead: 'By continuing, you agree to our',
  terms: 'Terms',
  privacy: 'Privacy Policy',
  termsNotice: 'Terms and privacy documents will be added before launch.',
  authDivider: 'MADE FOR YOUR NEXT BREAK',
  benefitEpisodes: 'New episodes weekly',
  benefitTime: 'Watch on your own time',
  prototypeAccess: 'Prototype access · account state stays on this device',
  helpSupport: 'Help & support',
  copyright: '© 2026 Fable Stories',
  watch: 'WATCH',
  discover: 'Discover',
  myLibrary: 'My library',
  genres: 'GENRES',
  fablePlus: 'Fable Plus',
  goFablePlus: 'Go Fable Plus',
  unlocked: 'Your stories are all unlocked.',
  noInterruptions: 'Every episode. No interruptions.',
  membershipDetails: 'Membership details',
  exploreMembership: 'Explore membership',
  freeAccount: 'Free account',
  searchPlaceholder: 'Search stories, genres, moods...',
  searchAria: 'Search dramas',
  getPlus: 'Get Plus',
  thisWeeksStory: "THIS WEEK'S STORY",
  heroDescriptionSuffix: 'When the past calls, she answers on her own terms.',
  exploreSeries: 'Explore series',
  catalogEyebrow: 'THE FABLE COLLECTION',
  libraryTitle: 'Your library',
  discoverTitle: 'Short dramas made for you',
  genreTitle: genre => `${genre} dramas`,
  librarySubtitle: 'Stories you saved for later.',
  discoverSubtitle: 'Short-form stories. Full-size feelings.',
  seriesCount: 'SERIES',
  popular: 'Popular',
  popularToast: 'Showing our most-loved stories first.',
  genreFilter: 'Filter by genre',
  noStories: 'No stories found',
  libraryWaiting: 'Your library is waiting',
  saveSeries: 'Save',
  removeSeries: 'Remove from library',
  tryAnother: 'Try another title or genre.',
  browseAll: 'Browse all stories',
  footerTagline: 'Fable · Stories made to binge',
  footerSubtitle: 'Original stories, made for everywhere.',
  closeDetails: 'Close details',
  closePlayer: 'Close player',
  closeMembership: 'Close membership',
  viewDrama: title => `View ${title}`,
  episodes: 'episodes',
  episodeRange: count => `1-${count} · 1 min each`,
  episodeTitle: episode => episode === 1 ? 'The day everything changed' : episode === 2 ? 'A familiar face returns' : episode === 3 ? 'Nothing stays buried' : 'The story continues',
  episodeNoteMember: 'Fable Plus unlocks every episode.',
  episodeNoteGuest: 'First 3 episodes are open. Unlock the rest with Fable Plus.',
  previewPlayer: 'PREVIEW PLAYER',
  episodePreview: 'Episode 01 · preview',
  playPreview: 'Play preview',
  videoNotConnected: 'Video delivery is not connected in this prototype.',
  unlockAllEpisodes: 'Unlock all episodes',
  membershipEyebrow: 'FABLE PLUS',
  membershipTitleLineOne: 'Every story,',
  membershipTitleLineTwo: 'every episode.',
  membershipDescription: 'Keep the cliffhangers coming with full access to the Fable collection.',
  monthly: 'Monthly',
  monthlyDescription: 'Flexible, cancel anytime',
  annual: 'Annual',
  annualDescription: 'Best value for story lovers',
  save50: 'SAVE 50%',
  unlockEveryEpisode: 'Unlock every episode',
  newSeriesWeekly: 'New series added each week',
  watchWithoutInterruptions: 'Watch without interruptions',
  membershipActive: 'Membership active',
  continueWith: price => `Continue · ${price}`,
  checkoutNote: 'Preview checkout · no payment is collected. Connect a payment provider before launch.',
  membershipPreviewToast: 'Membership preview enabled on this device',
  accountTier: 'ACCOUNT ACCESS',
  freeAccess: 'Free account',
  freeAccessDetails: 'Browse the catalogue and watch the first 3 episodes of every series.',
  vipAccess: 'VIP access',
  vipAccessDetails: 'All episodes, new series weekly, and uninterrupted viewing.',
  vipRegistration: 'Register for VIP',
  rechargeVip: 'Renew VIP',
  paymentMethod: 'Payment method',
  visa: 'Visa',
  mastercard: 'Mastercard',
  wechatPay: 'WeChat Pay',
  alipay: 'Alipay',
  paymentDemoNote: 'Demo checkout · no card details or real payment are collected.',
  orderCreated: orderId => `VIP order ${orderId} created`,
  orderIdLabel: 'Order ID',
  paymentProcessing: 'Creating secure order...',
  paymentSuccess: 'VIP access is active on this device.',
  lockedEpisode: 'VIP episode',
  unlockWithVip: 'Unlock with VIP',
  freeEpisodeNote: 'Free account · first 3 episodes are available.',
  savedToast: 'Added to your library',
  removedToast: 'Removed from your library',
  videoToast: 'Episode video will play when media is connected.',
});

const translatedMessages: Record<Locale, Partial<typeof baseMessages extends (...args: never[]) => infer R ? R : never>> = {
  en: {},
  'zh-CN': {
    worldwideStories: '全球短剧', storyKicker: '让人停不下来的故事', storyTitleLineOne: '再看一集。', storyTitleLineTwo: '然后再来一集。', storyDescription: '浓烈情绪，反转不断，随时装进口袋。', audienceScore: '观众评分 4.9', newStories: '每周上新故事', visualCaption: '《归来的继承人》· 原创剧集', authKicker: '下一部上头短剧，从这里开始', signupTitle: '进入故事世界', loginTitle: '欢迎回来', signupSubtitle: '创建账户，保存进度，找到你的下一部心动剧集。', loginSubtitle: '登录后从上次停下的地方继续观看。', createAccount: '创建账户', signIn: '登录', emailAddress: '邮箱地址', password: '密码', passwordMinimum: '至少 8 个字符', emailPlaceholder: 'you@example.com', passwordPlaceholder: '输入密码', invalidEmail: '请输入有效的邮箱地址。', passwordLength: '密码至少需要 8 个字符。', createFreeAccount: '创建免费账户', termsLead: '继续即表示你同意我们的', terms: '服务条款', privacy: '隐私政策', termsNotice: '服务条款和隐私文件将在上线前补充。', authDivider: '为你的下一段休息时光而作', benefitEpisodes: '每周更新剧集', benefitTime: '按你的节奏观看', prototypeAccess: '原型体验 · 账户状态仅保存在本设备', helpSupport: '帮助与支持', copyright: '© 2026 Fable Stories', watch: '观看', discover: '发现', myLibrary: '我的收藏', genres: '分类', fablePlus: 'Fable Plus', goFablePlus: '开通 Fable Plus', unlocked: '全部故事已解锁。', noInterruptions: '每一集都能看，不被打断。', membershipDetails: '会员详情', exploreMembership: '了解会员', freeAccount: '免费账户', searchPlaceholder: '搜索剧名、分类或情绪...', searchAria: '搜索短剧', getPlus: '开通 Plus', thisWeeksStory: '本周主推', heroDescriptionSuffix: '当过去再次呼唤，她决定按自己的方式回应。', exploreSeries: '查看剧集', catalogEyebrow: 'FABLE 短剧精选', libraryTitle: '我的收藏', discoverTitle: '为你推荐的短剧', genreTitle: genre => `${genre}短剧`, librarySubtitle: '把喜欢的故事留到以后继续。', discoverSubtitle: '短篇幅，大情绪。', seriesCount: '部剧集', popular: '热门', popularToast: '正在优先展示大家最喜欢的故事。', genreFilter: '按分类筛选', noStories: '没有找到短剧', libraryWaiting: '收藏夹还在等你', saveSeries: '收藏', removeSeries: '移出收藏', tryAnother: '换个剧名或分类试试。', browseAll: '浏览全部短剧', footerTagline: 'Fable · 让人停不下来的故事', footerSubtitle: '为世界各地观众创作的原创故事。', closeDetails: '关闭详情', closePlayer: '关闭播放器', closeMembership: '关闭会员窗口', viewDrama: title => `查看${title}`, episodes: '集', episodeRange: count => `1-${count} · 每集 1 分钟`, episodeTitle: episode => episode === 1 ? '一切改变的那一天' : episode === 2 ? '熟悉的面孔再次出现' : episode === 3 ? '被掩埋的真相浮出水面' : '故事仍在继续', episodeNoteMember: 'Fable Plus 已解锁全部剧集。', episodeNoteGuest: '前 3 集免费，开通 Fable Plus 解锁后续内容。', previewPlayer: '试看播放器', episodePreview: '第 01 集 · 试看', playPreview: '播放试看', videoNotConnected: '原型暂未连接视频分发服务。', unlockAllEpisodes: '解锁全部剧集', membershipEyebrow: 'FABLE PLUS 会员', membershipTitleLineOne: '每个故事，', membershipTitleLineTwo: '每一集都不错过。', membershipDescription: '完整观看 Fable 短剧精选，让每个悬念都继续下去。', monthly: '月度会员', monthlyDescription: '灵活订阅，随时取消', annual: '年度会员', annualDescription: '短剧爱好者的高性价比选择', save50: '节省 50%', unlockEveryEpisode: '解锁全部剧集', newSeriesWeekly: '每周新增短剧', watchWithoutInterruptions: '观看过程无广告打断', membershipActive: '会员已生效', continueWith: price => `继续 · ${price}`, checkoutNote: '结算预览 · 不会收取真实费用。上线前请接入支付服务。', membershipPreviewToast: '会员预览已在本设备启用', savedToast: '已加入收藏', removedToast: '已移出收藏', videoToast: '接入视频后即可播放该集。',
    accountTier: '账户权限', freeAccess: '免费账户', freeAccessDetails: '浏览短剧库，每部剧可观看前 3 集。', vipAccess: 'VIP 权限', vipAccessDetails: '全剧集、每周上新，并享受无打扰观看。', vipRegistration: '注册 VIP', rechargeVip: '续费 VIP', paymentMethod: '支付方式', visa: 'Visa', mastercard: 'Mastercard', wechatPay: '微信支付', alipay: '支付宝', paymentDemoNote: '演示结算 · 不会收集银行卡信息或真实付款。', orderCreated: orderId => `VIP 订单 ${orderId} 已创建`, orderIdLabel: '订单号', paymentProcessing: '正在创建安全订单...', paymentSuccess: 'VIP 权限已在本设备生效。', lockedEpisode: 'VIP 剧集', unlockWithVip: '开通 VIP 解锁', freeEpisodeNote: '免费账户 · 前 3 集可观看。',
  },
  'zh-TW': {
    worldwideStories: '全球短劇', storyKicker: '讓人停不下來的故事', storyTitleLineOne: '再看一集。', storyTitleLineTwo: '然後再來一集。', storyDescription: '濃烈情緒，反轉不斷，隨時裝進口袋。', audienceScore: '觀眾評分 4.9', newStories: '每週上新故事', visualCaption: '《歸來的繼承人》· 原創劇集', authKicker: '下一部上頭短劇，從這裡開始', signupTitle: '進入故事世界', loginTitle: '歡迎回來', signupSubtitle: '建立帳戶，保存進度，找到你的下一部心動劇集。', loginSubtitle: '登入後從上次停下的地方繼續觀看。', createAccount: '建立帳戶', signIn: '登入', emailAddress: '電子郵件', password: '密碼', passwordMinimum: '至少 8 個字元', emailPlaceholder: 'you@example.com', passwordPlaceholder: '輸入密碼', invalidEmail: '請輸入有效的電子郵件地址。', passwordLength: '密碼至少需要 8 個字元。', createFreeAccount: '建立免費帳戶', termsLead: '繼續即表示你同意我們的', terms: '服務條款', privacy: '隱私權政策', termsNotice: '服務條款和隱私權文件將在上線前補充。', authDivider: '為你的下一段休息時光而作', benefitEpisodes: '每週更新劇集', benefitTime: '按照你的節奏觀看', prototypeAccess: '原型體驗 · 帳戶狀態僅保存在本裝置', helpSupport: '幫助與支援', copyright: '© 2026 Fable Stories', watch: '觀看', discover: '探索', myLibrary: '我的收藏', genres: '分類', fablePlus: 'Fable Plus', goFablePlus: '開通 Fable Plus', unlocked: '全部故事已解鎖。', noInterruptions: '每一集都能看，不被打斷。', membershipDetails: '會員詳情', exploreMembership: '了解會員', freeAccount: '免費帳戶', searchPlaceholder: '搜尋劇名、分類或情緒...', searchAria: '搜尋短劇', getPlus: '開通 Plus', thisWeeksStory: '本週主推', heroDescriptionSuffix: '當過去再次呼喚，她決定按自己的方式回應。', exploreSeries: '查看劇集', catalogEyebrow: 'FABLE 短劇精選', libraryTitle: '我的收藏', discoverTitle: '為你推薦的短劇', genreTitle: genre => `${genre}短劇`, librarySubtitle: '把喜歡的故事留到以後繼續。', discoverSubtitle: '短篇幅，大情緒。', seriesCount: '部劇集', popular: '熱門', popularToast: '正在優先展示大家最喜歡的故事。', genreFilter: '按分類篩選', noStories: '找不到短劇', libraryWaiting: '收藏夾還在等你', saveSeries: '收藏', removeSeries: '移出收藏', tryAnother: '換個劇名或分類試試。', browseAll: '瀏覽全部短劇', footerTagline: 'Fable · 讓人停不下來的故事', footerSubtitle: '為世界各地觀眾創作的原創故事。', closeDetails: '關閉詳情', closePlayer: '關閉播放器', closeMembership: '關閉會員視窗', viewDrama: title => `查看${title}`, episodes: '集', episodeRange: count => `1-${count} · 每集 1 分鐘`, episodeTitle: episode => episode === 1 ? '一切改變的那一天' : episode === 2 ? '熟悉的面孔再次出現' : episode === 3 ? '被掩埋的真相浮出水面' : '故事仍在繼續', episodeNoteMember: 'Fable Plus 已解鎖全部劇集。', episodeNoteGuest: '前 3 集免費，開通 Fable Plus 解鎖後續內容。', previewPlayer: '試看播放器', episodePreview: '第 01 集 · 試看', playPreview: '播放試看', videoNotConnected: '原型尚未連接影片分發服務。', unlockAllEpisodes: '解鎖全部劇集', membershipEyebrow: 'FABLE PLUS 會員', membershipTitleLineOne: '每個故事，', membershipTitleLineTwo: '每一集都不錯過。', membershipDescription: '完整觀看 Fable 短劇精選，讓每個懸念都繼續下去。', monthly: '月度會員', monthlyDescription: '靈活訂閱，隨時取消', annual: '年度會員', annualDescription: '短劇愛好者的高性價比選擇', save50: '節省 50%', unlockEveryEpisode: '解鎖全部劇集', newSeriesWeekly: '每週新增短劇', watchWithoutInterruptions: '觀看過程無廣告打斷', membershipActive: '會員已生效', continueWith: price => `繼續 · ${price}`, checkoutNote: '結算預覽 · 不會收取真實費用。上線前請接入支付服務。', membershipPreviewToast: '會員預覽已在本裝置啟用', savedToast: '已加入收藏', removedToast: '已移出收藏', videoToast: '接入影片後即可播放該集。',
    accountTier: '帳戶權限', freeAccess: '免費帳戶', freeAccessDetails: '瀏覽短劇庫，每部劇可觀看前 3 集。', vipAccess: 'VIP 權限', vipAccessDetails: '全劇集、每週上新，並享受無打擾觀看。', vipRegistration: '註冊 VIP', rechargeVip: '續費 VIP', paymentMethod: '付款方式', visa: 'Visa', mastercard: 'Mastercard', wechatPay: '微信支付', alipay: '支付寶', paymentDemoNote: '示範結算 · 不會收集銀行卡資訊或真實付款。', orderCreated: orderId => `VIP 訂單 ${orderId} 已建立`, orderIdLabel: '訂單編號', paymentProcessing: '正在建立安全訂單...', paymentSuccess: 'VIP 權限已在本裝置啟用。', lockedEpisode: 'VIP 劇集', unlockWithVip: '開通 VIP 解鎖', freeEpisodeNote: '免費帳戶 · 前 3 集可觀看。',
  },
  es: {
    worldwideStories: 'HISTORIAS DE TODO EL MUNDO', storyKicker: 'HISTORIAS PARA DEVORAR', storyTitleLineOne: 'Un episodio más.', storyTitleLineTwo: 'Y luego otro.', storyDescription: 'Emociones intensas. Giros inesperados. Historias en tu bolsillo.', audienceScore: 'Puntuación del público 4,9', newStories: 'Historias nuevas cada semana', visualCaption: 'THE HEIRESS RETURNS · SERIE ORIGINAL', authKicker: 'TU PRÓXIMA OBSESIÓN EMPIEZA AQUÍ', signupTitle: 'Entra en la historia', loginTitle: 'Qué bueno verte', signupSubtitle: 'Crea una cuenta para guardar tu progreso y descubrir tu próxima favorita.', loginSubtitle: 'Inicia sesión para continuar justo donde lo dejaste.', createAccount: 'Crear cuenta', signIn: 'Iniciar sesión', emailAddress: 'Correo electrónico', password: 'Contraseña', passwordMinimum: 'Mínimo 8 caracteres', emailPlaceholder: 'tu@ejemplo.com', passwordPlaceholder: 'Escribe tu contraseña', invalidEmail: 'Escribe un correo electrónico válido.', passwordLength: 'Usa al menos 8 caracteres para tu contraseña.', createFreeAccount: 'Crear cuenta gratis', termsLead: 'Al continuar, aceptas nuestros', terms: 'Términos', privacy: 'Aviso de privacidad', termsNotice: 'Los documentos legales estarán disponibles antes del lanzamiento.', authDivider: 'HECHO PARA TU PRÓXIMO DESCANSO', benefitEpisodes: 'Episodios nuevos cada semana', benefitTime: 'Mira cuando quieras', prototypeAccess: 'Acceso de prototipo · la cuenta se guarda en este dispositivo', helpSupport: 'Ayuda y soporte', copyright: '© 2026 Fable Stories', watch: 'VER', discover: 'Descubrir', myLibrary: 'Mi biblioteca', genres: 'GÉNEROS', fablePlus: 'Fable Plus', goFablePlus: 'Pásate a Fable Plus', unlocked: 'Todas tus historias están desbloqueadas.', noInterruptions: 'Cada episodio. Sin interrupciones.', membershipDetails: 'Detalles de la membresía', exploreMembership: 'Ver membresía', freeAccount: 'Cuenta gratuita', searchPlaceholder: 'Busca historias, géneros o estados de ánimo...', searchAria: 'Buscar dramas', getPlus: 'Obtener Plus', thisWeeksStory: 'HISTORIA DE LA SEMANA', heroDescriptionSuffix: 'Cuando el pasado la llama, ella responde a su manera.', exploreSeries: 'Explorar serie', catalogEyebrow: 'LA COLECCIÓN FABLE', libraryTitle: 'Tu biblioteca', discoverTitle: 'Dramas para ti', genreTitle: genre => `Dramas de ${genre}`, librarySubtitle: 'Historias que guardaste para después.', discoverSubtitle: 'Historias breves. Emociones enormes.', seriesCount: 'SERIES', popular: 'Popular', popularToast: 'Mostrando primero nuestras historias más queridas.', genreFilter: 'Filtrar por género', noStories: 'No encontramos historias', libraryWaiting: 'Tu biblioteca te espera', saveSeries: 'Guardar', removeSeries: 'Quitar de la biblioteca', tryAnother: 'Prueba con otro título o género.', browseAll: 'Ver todas las historias', footerTagline: 'Fable · Historias para devorar', footerSubtitle: 'Historias originales para todas partes.', closeDetails: 'Cerrar detalles', closePlayer: 'Cerrar reproductor', closeMembership: 'Cerrar membresía', viewDrama: title => `Ver ${title}`, episodes: 'episodios', episodeRange: count => `1-${count} · 1 min cada uno`, episodeTitle: episode => episode === 1 ? 'El día que todo cambió' : episode === 2 ? 'Regresa un rostro conocido' : episode === 3 ? 'Nada queda enterrado' : 'La historia continúa', episodeNoteMember: 'Fable Plus desbloquea todos los episodios.', episodeNoteGuest: 'Los 3 primeros episodios son gratis. Desbloquea el resto con Fable Plus.', previewPlayer: 'REPRODUCTOR DE PRUEBA', episodePreview: 'Episodio 01 · prueba', playPreview: 'Reproducir prueba', videoNotConnected: 'El vídeo todavía no está conectado en este prototipo.', unlockAllEpisodes: 'Desbloquear episodios', membershipEyebrow: 'FABLE PLUS', membershipTitleLineOne: 'Cada historia,', membershipTitleLineTwo: 'cada episodio.', membershipDescription: 'Sigue disfrutando de los giros con acceso completo a la colección Fable.', monthly: 'Mensual', monthlyDescription: 'Flexible, cancela cuando quieras', annual: 'Anual', annualDescription: 'La mejor opción para amantes de las historias', save50: 'AHORRA 50%', unlockEveryEpisode: 'Desbloquea todos los episodios', newSeriesWeekly: 'Nuevas series cada semana', watchWithoutInterruptions: 'Mira sin interrupciones', membershipActive: 'Membresía activa', continueWith: price => `Continuar · ${price}`, checkoutNote: 'Vista previa del pago · no se cobrará nada. Conecta un proveedor de pagos antes del lanzamiento.', membershipPreviewToast: 'La vista previa de membresía está activa en este dispositivo', savedToast: 'Añadido a tu biblioteca', removedToast: 'Quitado de tu biblioteca', videoToast: 'El episodio se reproducirá cuando conectemos el vídeo.',
    accountTier: 'ACCESO DE LA CUENTA', freeAccess: 'Cuenta gratuita', freeAccessDetails: 'Explora el catálogo y mira los 3 primeros episodios de cada serie.', vipAccess: 'Acceso VIP', vipAccessDetails: 'Todos los episodios, series nuevas cada semana y reproducción sin interrupciones.', vipRegistration: 'Registrarse para VIP', rechargeVip: 'Renovar VIP', paymentMethod: 'Método de pago', visa: 'Visa', mastercard: 'Mastercard', wechatPay: 'WeChat Pay', alipay: 'Alipay', paymentDemoNote: 'Pago de prueba · no se recopilan datos de tarjeta ni se realiza ningún cobro real.', orderCreated: orderId => `Pedido VIP ${orderId} creado`, orderIdLabel: 'ID del pedido', paymentProcessing: 'Creando un pedido seguro...', paymentSuccess: 'El acceso VIP está activo en este dispositivo.', lockedEpisode: 'Episodio VIP', unlockWithVip: 'Desbloquear con VIP', freeEpisodeNote: 'Cuenta gratuita · los 3 primeros episodios están disponibles.',
  },
  'pt-BR': {
    worldwideStories: 'HISTÓRIAS DO MUNDO TODO', storyKicker: 'HISTÓRIAS PARA MARATONAR', storyTitleLineOne: 'Mais um episódio.', storyTitleLineTwo: 'Depois, mais um.', storyDescription: 'Sentimentos à flor da pele. Reviravoltas. Histórias no seu bolso.', audienceScore: 'Nota do público 4,9', newStories: 'Histórias novas toda semana', visualCaption: 'THE HEIRESS RETURNS · SÉRIE ORIGINAL', authKicker: 'SUA PRÓXIMA OBSESSÃO COMEÇA AQUI', signupTitle: 'Entre na história', loginTitle: 'Que bom ter você de volta', signupSubtitle: 'Crie uma conta para salvar seu progresso e encontrar sua próxima favorita.', loginSubtitle: 'Entre para continuar exatamente de onde parou.', createAccount: 'Criar conta', signIn: 'Entrar', emailAddress: 'E-mail', password: 'Senha', passwordMinimum: 'Mínimo de 8 caracteres', emailPlaceholder: 'voce@exemplo.com', passwordPlaceholder: 'Digite sua senha', invalidEmail: 'Digite um e-mail válido.', passwordLength: 'Use pelo menos 8 caracteres na senha.', createFreeAccount: 'Criar conta grátis', termsLead: 'Ao continuar, você aceita nossos', terms: 'Termos', privacy: 'Aviso de privacidade', termsNotice: 'Os documentos legais estarão disponíveis antes do lançamento.', authDivider: 'FEITO PARA A SUA PRÓXIMA PAUSA', benefitEpisodes: 'Episódios novos toda semana', benefitTime: 'Assista no seu ritmo', prototypeAccess: 'Acesso de protótipo · a conta fica neste dispositivo', helpSupport: 'Ajuda e suporte', copyright: '© 2026 Fable Stories', watch: 'ASSISTIR', discover: 'Descobrir', myLibrary: 'Minha biblioteca', genres: 'GÊNEROS', fablePlus: 'Fable Plus', goFablePlus: 'Assine o Fable Plus', unlocked: 'Todas as histórias estão liberadas.', noInterruptions: 'Cada episódio. Sem interrupções.', membershipDetails: 'Detalhes da assinatura', exploreMembership: 'Conhecer assinatura', freeAccount: 'Conta gratuita', searchPlaceholder: 'Busque histórias, gêneros ou humores...', searchAria: 'Buscar dramas', getPlus: 'Obter Plus', thisWeeksStory: 'HISTÓRIA DA SEMANA', heroDescriptionSuffix: 'Quando o passado chama, ela responde do jeito dela.', exploreSeries: 'Explorar série', catalogEyebrow: 'A COLEÇÃO FABLE', libraryTitle: 'Sua biblioteca', discoverTitle: 'Dramas para você', genreTitle: genre => `Dramas de ${genre}`, librarySubtitle: 'Histórias que você guardou para depois.', discoverSubtitle: 'Histórias curtas. Sentimentos gigantes.', seriesCount: 'SÉRIES', popular: 'Popular', popularToast: 'Mostrando primeiro nossas histórias mais queridas.', genreFilter: 'Filtrar por gênero', noStories: 'Nenhuma história encontrada', libraryWaiting: 'Sua biblioteca está esperando', saveSeries: 'Salvar', removeSeries: 'Remover da biblioteca', tryAnother: 'Tente outro título ou gênero.', browseAll: 'Ver todas as histórias', footerTagline: 'Fable · Histórias para maratonar', footerSubtitle: 'Histórias originais feitas para todos os lugares.', closeDetails: 'Fechar detalhes', closePlayer: 'Fechar player', closeMembership: 'Fechar assinatura', viewDrama: title => `Ver ${title}`, episodes: 'episódios', episodeRange: count => `1-${count} · 1 min cada`, episodeTitle: episode => episode === 1 ? 'O dia em que tudo mudou' : episode === 2 ? 'Um rosto conhecido retorna' : episode === 3 ? 'Nada fica enterrado' : 'A história continua', episodeNoteMember: 'O Fable Plus libera todos os episódios.', episodeNoteGuest: 'Os 3 primeiros episódios são grátis. Libere o restante com o Fable Plus.', previewPlayer: 'PLAYER DE PRÉVIA', episodePreview: 'Episódio 01 · prévia', playPreview: 'Reproduzir prévia', videoNotConnected: 'O vídeo ainda não está conectado neste protótipo.', unlockAllEpisodes: 'Liberar todos os episódios', membershipEyebrow: 'FABLE PLUS', membershipTitleLineOne: 'Toda história,', membershipTitleLineTwo: 'todo episódio.', membershipDescription: 'Continue acompanhando as reviravoltas com acesso completo à coleção Fable.', monthly: 'Mensal', monthlyDescription: 'Flexível, cancele quando quiser', annual: 'Anual', annualDescription: 'Melhor valor para quem ama histórias', save50: 'ECONOMIZE 50%', unlockEveryEpisode: 'Libere todos os episódios', newSeriesWeekly: 'Novas séries toda semana', watchWithoutInterruptions: 'Assista sem interrupções', membershipActive: 'Assinatura ativa', continueWith: price => `Continuar · ${price}`, checkoutNote: 'Prévia do checkout · nenhuma cobrança será feita. Conecte um provedor de pagamentos antes do lançamento.', membershipPreviewToast: 'A prévia da assinatura foi ativada neste dispositivo', savedToast: 'Adicionado à sua biblioteca', removedToast: 'Removido da sua biblioteca', videoToast: 'O episódio será reproduzido quando o vídeo estiver conectado.',
    accountTier: 'ACESSO DA CONTA', freeAccess: 'Conta gratuita', freeAccessDetails: 'Explore o catálogo e assista aos 3 primeiros episódios de cada série.', vipAccess: 'Acesso VIP', vipAccessDetails: 'Todos os episódios, séries novas toda semana e reprodução sem interrupções.', vipRegistration: 'Cadastrar para VIP', rechargeVip: 'Renovar VIP', paymentMethod: 'Forma de pagamento', visa: 'Visa', mastercard: 'Mastercard', wechatPay: 'WeChat Pay', alipay: 'Alipay', paymentDemoNote: 'Checkout de demonstração · nenhum dado de cartão ou pagamento real será coletado.', orderCreated: orderId => `Pedido VIP ${orderId} criado`, orderIdLabel: 'ID do pedido', paymentProcessing: 'Criando pedido seguro...', paymentSuccess: 'O acesso VIP está ativo neste dispositivo.', lockedEpisode: 'Episódio VIP', unlockWithVip: 'Liberar com VIP', freeEpisodeNote: 'Conta gratuita · os 3 primeiros episódios estão disponíveis.',
  },
};

export const messages: Record<Locale, Messages> = Object.fromEntries(
  (Object.keys(genreLabels) as Locale[]).map(locale => {
    const base = { ...baseMessages(locale), ...translatedMessages[locale] };
    return [locale, {
      ...base,
      genreLabel: (genre: string) => genreLabels[locale][genre] || genre,
      number: (value: number) => numberFor(locale, value),
      money: (value: number) => moneyFor(locale, value),
    }];
  }),
) as Record<Locale, Messages>;

type DramaCopy = Pick<Drama, 'title' | 'tagline' | 'genre' | 'description' | 'tags'>;
type DramaTranslationMap = Partial<Record<Locale, Partial<Record<string, DramaCopy>>>>;

const translatedDramaCopies: DramaTranslationMap = {
  'zh-CN': {
    'heiress-returns': { title: '归来的继承人', tagline: '她为夺回一切而归。', genre: 'Revenge', description: '离开五年后，继承人改名归来，夺回家族帝国，也向背叛她的男人清算旧账。', tags: ['复仇', '家族秘密', '大女主'] },
    'under-protection': { title: '他的守护', tagline: '她最不该信任的男人。', genre: 'Romance', description: '冷峻保镖与逃婚新娘被迫同行，家族恩怨一路追着他们穿过整座城市。', tags: ['爱情', '保镖', '慢热'] },
    'second-chance': { title: '破晓后的重生', tagline: '全新人生，一个旧约定。', genre: 'Romance', description: '她在婚姻破裂的清晨醒来。这一次，她选择自己的未来，也选择那个从未离开的朋友。', tags: ['爱情', '重来一次', '重生'] },
    'crown-in-ashes': { title: '灰烬王冠', tagline: '王座从来不属于他。', genre: 'Fantasy', description: '被流放的继承人回到风雨飘摇的王国，带着能拯救王冠、也能彻底毁掉它的秘密。', tags: ['奇幻', '王室', '冒险'] },
    'rival-hearts': { title: '爱上竞争对手', tagline: '董事会只是开始。', genre: 'Billionaire', description: '两位野心继承人展开残酷的收购战，却发现最危险的失去竟然是彼此。', tags: ['豪门', '职场', '欢喜冤家'] },
    'midnight-alibi': { title: '午夜不在场证明', tagline: '每个证人都有秘密。', genre: 'Mystery', description: '敏锐记者重启一桩旧案，却被知道她过去的嫌疑人和无人愿意刊出的真相困住。', tags: ['悬疑', '犯罪', '惊险'] },
    'secret-heiress': { title: '隐秘的豪门继承人', tagline: '他签下契约，她改写规则。', genre: 'Billionaire', description: '一纸现实协议让普通艺术家走进隐秘富豪的世界，而他们划下的界线很快就失守。', tags: ['豪门', '契约婚姻', '爱情'] },
    'moonbound-promise': { title: '月下誓言', tagline: '她的命运写在星辰之间。', genre: 'Werewolf', description: '局外人发现自己与神秘狼族首领命运相连，而一则预言正将两个世界推向危机。', tags: ['狼人', '奇幻', '命中注定'] },
    'storm-bride': { title: '风暴新娘', tagline: '一场婚礼，两大家族开战。', genre: 'Romance', description: '敌对家族的孩子临时结婚，本该带来和平的誓言，却被围绕婚姻的秘密推向相反方向。', tags: ['爱情', '婚姻', '家庭纷争'] },
    'after-midnight': { title: '午夜之后的爱', tagline: '有些故事从人群散尽后开始。', genre: 'Office', description: '夜班制片人与强势创意总监在下班后一次次相遇，规则也变得不再确定。', tags: ['职场', '爱情', '深夜'] },
  },
  'zh-TW': {
    'heiress-returns': { title: '歸來的繼承人', tagline: '她為奪回一切而歸。', genre: 'Revenge', description: '離開五年後，繼承人改名歸來，奪回家族帝國，也向背叛她的男人清算舊帳。', tags: ['復仇', '家族秘密', '大女主'] },
    'under-protection': { title: '他的守護', tagline: '她最不該信任的男人。', genre: 'Romance', description: '冷峻保鑣與逃婚新娘被迫同行，家族恩怨一路追著他們穿過整座城市。', tags: ['愛情', '保鑣', '慢熱'] },
    'second-chance': { title: '破曉後的重生', tagline: '全新人生，一個舊約定。', genre: 'Romance', description: '她在婚姻破裂的清晨醒來。這一次，她選擇自己的未來，也選擇那個從未離開的朋友。', tags: ['愛情', '再來一次', '重生'] },
    'crown-in-ashes': { title: '灰燼王冠', tagline: '王座從來不屬於他。', genre: 'Fantasy', description: '被流放的繼承人回到風雨飄搖的王國，帶著能拯救王冠、也能徹底毀掉它的秘密。', tags: ['奇幻', '王室', '冒險'] },
    'rival-hearts': { title: '愛上競爭對手', tagline: '董事會只是開始。', genre: 'Billionaire', description: '兩位野心繼承人展開殘酷的收購戰，卻發現最危險的失去竟然是彼此。', tags: ['豪門', '職場', '歡喜冤家'] },
    'midnight-alibi': { title: '午夜不在場證明', tagline: '每個證人都有秘密。', genre: 'Mystery', description: '敏銳記者重啟一宗舊案，卻被知道她過去的嫌疑人和無人願意刊出的真相困住。', tags: ['懸疑', '犯罪', '驚險'] },
    'secret-heiress': { title: '隱秘的豪門繼承人', tagline: '他簽下契約，她改寫規則。', genre: 'Billionaire', description: '一紙現實協議讓普通藝術家走進隱秘富豪的世界，而他們劃下的界線很快就失守。', tags: ['豪門', '契約婚姻', '愛情'] },
    'moonbound-promise': { title: '月下誓言', tagline: '她的命運寫在星辰之間。', genre: 'Werewolf', description: '局外人發現自己與神秘狼族首領命運相連，而一則預言正將兩個世界推向危機。', tags: ['狼人', '奇幻', '命中注定'] },
    'storm-bride': { title: '風暴新娘', tagline: '一場婚禮，兩大家族開戰。', genre: 'Romance', description: '敵對家族的孩子臨時結婚，本該帶來和平的誓言，卻被圍繞婚姻的秘密推向相反方向。', tags: ['愛情', '婚姻', '家庭紛爭'] },
    'after-midnight': { title: '午夜之後的愛', tagline: '有些故事從人群散盡後開始。', genre: 'Office', description: '夜班製片人與強勢創意總監在下班後一次次相遇，規則也變得不再確定。', tags: ['職場', '愛情', '深夜'] },
  },
  es: {
    'heiress-returns': { title: 'La heredera regresa', tagline: 'Volvió para recuperar todo lo que le quitaron.', genre: 'Revenge', description: 'Tras cinco años fuera, una heredera vuelve con otro nombre para recuperar el imperio familiar y ajustar cuentas con quien la traicionó.', tags: ['Venganza', 'Secretos familiares', 'Protagonista fuerte'] },
    'under-protection': { title: 'Bajo su protección', tagline: 'El hombre en quien no debería confiar.', genre: 'Romance', description: 'Un guardaespaldas reservado y una novia fugitiva deben viajar juntos mientras una disputa familiar los persigue por la ciudad.', tags: ['Romance', 'Guardaespaldas', 'A fuego lento'] },
    'second-chance': { title: 'Una segunda oportunidad', tagline: 'Una vida nueva. Una promesa antigua.', genre: 'Romance', description: 'Una mujer despierta la mañana en que su matrimonio se rompió y esta vez elige su propio futuro.', tags: ['Romance', 'Segunda oportunidad', 'Renacer'] },
    'crown-in-ashes': { title: 'Una corona entre cenizas', tagline: 'El trono nunca fue suyo.', genre: 'Fantasy', description: 'El heredero exiliado regresa a un reino al borde del abismo con un secreto que puede salvar o destruir la corona.', tags: ['Fantasía', 'Realeza', 'Aventura'] },
    'rival-hearts': { title: 'Enamorada de mi rival', tagline: 'La sala de juntas es solo el principio.', genre: 'Billionaire', description: 'Dos herederos se enfrentan en una batalla empresarial y descubren que lo más peligroso que pueden perder es al otro.', tags: ['Millonarios', 'Trabajo', 'Rivales que se enamoran'] },
    'midnight-alibi': { title: 'La coartada de medianoche', tagline: 'Cada testigo oculta algo.', genre: 'Mystery', description: 'Una periodista reabre un caso cerrado y queda atrapada entre un sospechoso que conoce su pasado y una verdad que nadie quiere publicar.', tags: ['Misterio', 'Crimen', 'Suspense'] },
    'secret-heiress': { title: 'Mi millonario secreto', tagline: 'Él firmó el contrato. Ella cambió las reglas.', genre: 'Billionaire', description: 'Un acuerdo práctico lleva a una artista al mundo de un millonario reservado, pero sus límites no duran mucho.', tags: ['Millonarios', 'Matrimonio pactado', 'Romance'] },
    'moonbound-promise': { title: 'Una promesa bajo la luna', tagline: 'Su destino estaba escrito en las estrellas.', genre: 'Werewolf', description: 'Una forastera descubre el vínculo que la une al líder de una manada oculta y la profecía que amenaza sus mundos.', tags: ['Hombres lobo', 'Fantasía', 'Almas destinadas'] },
    'storm-bride': { title: 'La novia de la tormenta', tagline: 'Una boda. Dos familias en guerra.', genre: 'Romance', description: 'Una boda de última hora une a dos familias rivales, pero los secretos que la rodean amenazan con separarlas.', tags: ['Romance', 'Matrimonio', 'Drama familiar'] },
    'after-midnight': { title: 'Amor después de medianoche', tagline: 'Algunas historias empiezan cuando todos se van.', genre: 'Office', description: 'Una productora nocturna y un director creativo se cruzan después de hora, cuando las reglas parecen menos claras.', tags: ['Oficina', 'Romance', 'Después de hora'] },
  },
  'pt-BR': {
    'heiress-returns': { title: 'A herdeira retorna', tagline: 'Ela voltou para recuperar tudo o que tiraram dela.', genre: 'Revenge', description: 'Depois de cinco anos, uma herdeira retorna com outro nome para recuperar o império da família e acertar as contas com quem a traiu.', tags: ['Vingança', 'Segredos de família', 'Protagonista forte'] },
    'under-protection': { title: 'Sob a proteção dele', tagline: 'O homem em quem ela não deveria confiar.', genre: 'Romance', description: 'Um guarda-costas reservado e uma noiva fugitiva são obrigados a ficar juntos enquanto uma briga familiar os persegue pela cidade.', tags: ['Romance', 'Guarda-costas', 'Slow burn'] },
    'second-chance': { title: 'Uma segunda chance', tagline: 'Uma vida nova. Uma promessa antiga.', genre: 'Romance', description: 'Uma mulher acorda na manhã em que seu casamento desmoronou e, desta vez, escolhe o próprio futuro.', tags: ['Romance', 'Segunda chance', 'Recomeço'] },
    'crown-in-ashes': { title: 'Uma coroa em cinzas', tagline: 'O trono nunca foi dele.', genre: 'Fantasy', description: 'O herdeiro exilado retorna a um reino à beira do caos com um segredo capaz de salvar ou destruir a coroa.', tags: ['Fantasia', 'Realeza', 'Aventura'] },
    'rival-hearts': { title: 'Apaixonada pelo rival', tagline: 'A sala de reunião é só o começo.', genre: 'Billionaire', description: 'Dois herdeiros travam uma disputa empresarial e descobrem que a coisa mais perigosa que podem perder é um ao outro.', tags: ['Milionários', 'Trabalho', 'Rivais que se apaixonam'] },
    'midnight-alibi': { title: 'O álibi da meia-noite', tagline: 'Toda testemunha esconde algo.', genre: 'Mystery', description: 'Uma jornalista reabre um caso arquivado e fica presa entre um suspeito que conhece seu passado e uma verdade que ninguém quer publicar.', tags: ['Mistério', 'Crime', 'Suspense'] },
    'secret-heiress': { title: 'Meu milionário secreto', tagline: 'Ele assinou o contrato. Ela mudou as regras.', genre: 'Billionaire', description: 'Um acordo prático leva uma artista ao mundo de um milionário recluso, mas os limites dos dois não duram muito.', tags: ['Milionários', 'Casamento por contrato', 'Romance'] },
    'moonbound-promise': { title: 'Uma promessa ao luar', tagline: 'O destino dela estava escrito nas estrelas.', genre: 'Werewolf', description: 'Uma forasteira descobre o vínculo que a liga ao líder de uma alcateia escondida e a profecia que ameaça os dois mundos.', tags: ['Lobisomens', 'Fantasia', 'Almas destinadas'] },
    'storm-bride': { title: 'A noiva da tempestade', tagline: 'Um casamento. Duas famílias em guerra.', genre: 'Romance', description: 'Um casamento de última hora une duas famílias rivais, mas os segredos ao redor da cerimônia ameaçam fazer o oposto.', tags: ['Romance', 'Casamento', 'Drama familiar'] },
    'after-midnight': { title: 'Amor depois da meia-noite', tagline: 'Algumas histórias começam quando todos vão embora.', genre: 'Office', description: 'Uma produtora do turno da noite e um diretor criativo se encontram depois do expediente, quando as regras parecem menos certas.', tags: ['Escritório', 'Romance', 'Depois do expediente'] },
  },
};

export function getLocalizedDrama(drama: Drama, locale: Locale): Drama {
  const copy = translatedDramaCopies[locale]?.[drama.id] || translatedDramaCopies.en?.[drama.id];
  if (!copy) return drama;
  return { ...drama, ...copy };
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] || messages.en;
}

export function getLocaleFromStorage(): Locale {
  const stored = localStorage.getItem(localeStorageKey) as Locale | null;
  if (stored && localeOptions.some(option => option.value === stored)) return stored;
  const browserLocale = navigator.language.toLowerCase();
  if (browserLocale.startsWith('zh-tw') || browserLocale.startsWith('zh-hk')) return 'zh-TW';
  if (browserLocale.startsWith('zh')) return 'zh-CN';
  if (browserLocale.startsWith('es')) return 'es';
  if (browserLocale.startsWith('pt')) return 'pt-BR';
  return 'en';
}

export function localizeGenre(genre: string, locale: Locale): string {
  return genreLabels[locale]?.[genre] || genre;
}

export { genres };
