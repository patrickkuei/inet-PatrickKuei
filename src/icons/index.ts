import { ReactComponent as AnonymIcon } from './anonym.svg'
import { ReactComponent as BookmarkIcon } from './bookmark.svg'
import { ReactComponent as EditIcon } from './edit.svg'
import { ReactComponent as EyeIcon } from './eye.svg'
import { ReactComponent as HeartIcon } from './heart.svg'
import { ReactComponent as HistoryIcon } from './history.svg'
import { ReactComponent as LoginIcon } from './login.svg'
import { ReactComponent as LogOutIcon } from './logout.svg'
import { ReactComponent as MenuIcon } from './menu.svg'
import { ReactComponent as SearchIcon } from './search.svg'
import { ReactComponent as SettingIcon } from './setting.svg'
import { ReactComponent as SignUpIcon } from './signup.svg'
import { ReactComponent as UserIcon } from './user.svg'

export const IconMap = {
  anonym: AnonymIcon,
  bookmark: BookmarkIcon,
  edit: EditIcon,
  history: HistoryIcon,
  login: LoginIcon,
  logOut: LogOutIcon,
  menu: MenuIcon,
  search: SearchIcon,
  setting: SettingIcon,
  signup: SignUpIcon,
  user: UserIcon,
}

export type IconName = keyof typeof IconMap

export {
  AnonymIcon,
  BookmarkIcon,
  EditIcon,
  HistoryIcon,
  LoginIcon,
  LogOutIcon,
  MenuIcon,
  SearchIcon,
  SettingIcon,
  SignUpIcon,
  UserIcon,
  EyeIcon,
  HeartIcon,
}
