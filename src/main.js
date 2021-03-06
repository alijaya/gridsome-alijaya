// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// 3rd party
import VueMq from 'vue-mq'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleLeft, faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faYoutube, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global Reusable Component
import Content from "~/components/Content"
import DisplayBlog from "~/components/DisplayBlog"
import ContactMeButton from "~/components/ContactMeButton"

// FB SDK
const registerFBSDK = (head, appId, version = 'v7.0', id = 'facebook-jssdk') => {
  head.meta.push({
    key: 'fb:app_id',
    property: 'fb:app_id',
    content: appId,
  })

  head.script.push({
    id: id,
    async: true,
    defer: true,
    src: `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=${version}&appId=${appId}&autoLogAppEvents=1`
  })
}

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.config.devtools = true
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // 3rd party
  library.add(faAngleDown)
  library.add(faAngleLeft)
  library.add(faAngleRight)
  library.add(faEnvelope)
  library.add(faLinkedin)
  library.add(faYoutube)
  library.add(faGithub)
  library.add(faFacebook)
  library.add(faInstagram)
  Vue.component('FAIcon', FontAwesomeIcon)

  Vue.use(VueMq, {
    breakpoints: {
      phone: 600 + 1,
      portrait: 900 + 1,
      landscape: 1200 + 1,
      desktop: 1800 + 1,
      'hd-desktop': Infinity,
    },
    defaultBreakpoint: 'phone'
  })

  Vue.prototype.$mqExact = function (breakpoint) {
    return this.$mq === breakpoint
  }

  Vue.prototype.$mqTo = function (breakpoint) {
    return this.$mqAvailableBreakpoints[breakpoint] >= this.$mqAvailableBreakpoints[this.$mq];
  }

  Vue.prototype.$mqFrom = function (breakpoint) {
    return this.$mqAvailableBreakpoints[breakpoint] <= this.$mqAvailableBreakpoints[this.$mq];
  }

  // VueDragscroll
  if (process.isClient) {
    const VueDragscroll = require('vue-dragscroll').default
    Vue.use(VueDragscroll)
  }

  registerFBSDK(head, '612722629432510')

  // Global Re-Usable Component
  Vue.component('Content', Content)
  Vue.component('DisplayBlog', DisplayBlog)
  Vue.component("ContactMeButton", ContactMeButton)
}