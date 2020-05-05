import {
  Home as HomeIcon,
  Code as CodeIcon,
  Info as InfoIcon,
  SignOut as SignOutIcon,
} from '../core/icons'
import { ABOUT_ROUTE, CODES_HOME, HOME_ROUTE, LOGOUT_ROUTE } from './castanea.routes'

const CastaneaMenu = {
  top: [
    { label: HOME_ROUTE.label, icon: HomeIcon, url: HOME_ROUTE.url },
    { label: CODES_HOME.label, icon: CodeIcon, url: CODES_HOME.url },
  ],
  bottom: [
    { label: ABOUT_ROUTE.label, icon: InfoIcon, url: ABOUT_ROUTE.url },
    { label: LOGOUT_ROUTE.label, icon: SignOutIcon, url: LOGOUT_ROUTE.url },
  ]
}

export default CastaneaMenu
