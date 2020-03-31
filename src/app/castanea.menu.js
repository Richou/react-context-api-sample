import SignOutIcon from '@atlaskit/icon/glyph/sign-out'
import HomeIcon from '@atlaskit/icon/glyph/home'
import CodeIcon from '@atlaskit/icon/glyph/code'
import { CODES_HOME, HOME_ROUTE, LOGOUT_ROUTE } from './castanea.routes'

const CastaneaMenu = {
  top: [
    { label: HOME_ROUTE.label, icon: HomeIcon, url: HOME_ROUTE.url },
    { label: CODES_HOME.label, icon: CodeIcon, url: CODES_HOME.url },
  ],
  bottom: [
    { label: LOGOUT_ROUTE.label, icon: SignOutIcon, url: LOGOUT_ROUTE.url },
  ]
}

export default CastaneaMenu
