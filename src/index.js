// SvgSprite compiler
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/icons/', true, /\.svg$/));

// UTILS
import './utils/utils.js'

// LIBS
// import 'photoswipe/src/css/main.scss'
// import 'photoswipe/src/css/default-skin/default-skin.scss'
// import 'swiper/swiper.scss'
// import 'croppie/croppie.scss'

//------------------------------------------------------------

// Common components
import button from './components/button/button.js'
import mainHeader from './components/main-header/main-header.js'
import mainFooter from './components/main-footer/main-footer.js'
import mainPromo from './components/main-promo/main-promo.js'
import facilities from './components/facilities/facilities.js'
import advantages from './components/advantages/advantages.js'
import modal from './components/modal/modal.js'
import './components/validator/validator.js'
import './components/window/window.js'
