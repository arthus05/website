import { ThemeContext } from '@/providers/theme'
import { useContext } from 'react'

import { MdLightMode, MdModeNight } from 'react-icons/md'

const ThemeToggle = () => {
  const { theme, updateTheme } = useContext(ThemeContext)

  return (
    <>
      <label className='cursor-pointer'>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={e => updateTheme && updateTheme(e.target.checked ? 'dark' : 'light')}
          className="hidden"
          />
          { theme === 'dark' ? <MdModeNight size={32} /> : <MdLightMode size={32} /> }
      </label>
    </>
  )
}

export default ThemeToggle