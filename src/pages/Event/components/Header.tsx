import { List } from 'phosphor-react'
import React from 'react'
import Logo from '../../../components/Logo'
const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-around bg-gray-700 border-b border-gray-600">
      <Logo />
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex gap-2 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="text-lg text-white">Aulas</span>
        <List size={40} className="text-blue-500" />
      </button>
    </header>
  )
}

export default Header
