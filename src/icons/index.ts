import { ReactComponent as AnonymIcon } from './anonym.svg'
import { ReactComponent as LoginIcon } from './login.svg'
import { ReactComponent as LogoutIcon } from './logout.svg'
import { ReactComponent as MenuIcon } from './menu.svg'
import { ReactComponent as SearchIcon } from './search.svg'
import { ReactComponent as SignUpIcon } from './signup.svg'
import { ReactComponent as UserIcon } from './user.svg'

export const IconMap = {
  anonym: AnonymIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  menu: MenuIcon,
  search: SearchIcon,
  signup: SignUpIcon,
  user: UserIcon,
}

export type IconName = keyof typeof IconMap

export {
  AnonymIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  SignUpIcon,
  UserIcon,
}
