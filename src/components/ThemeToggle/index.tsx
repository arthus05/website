import { ThemeContext } from '@/providers/theme'
import { useContext } from 'react'

const ThemeToggle = () => {
  const { theme, updateTheme } = useContext(ThemeContext)

  // if (!theme) {
  //   return null
  // }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={e => updateTheme && updateTheme(e.target.checked ? 'dark' : 'light')}
          />
        toggle
      </label>
    </>
  )
}

export default ThemeToggle