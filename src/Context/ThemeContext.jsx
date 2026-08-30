import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const themes = [
  { id: 'dark', name: 'Cyber Dark', icon: '🌙', desc: 'Electric Indigo & Slate' },
  { id: 'synthwave', name: 'Neon Synth', icon: '🌆', desc: 'Vibrant Cyberpunk' },
  { id: 'night', name: 'Midnight', icon: '🌌', desc: 'Deep Ocean & Sapphire' },
  { id: 'light', name: 'Clean Light', icon: '☀️', desc: 'Crisp & Modern Light' },
  { id: 'luxury', name: 'Luxury Gold', icon: '✨', desc: 'Black & Gold Obsidian' },
]

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('techstore_theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('techstore_theme', theme)
  }, [theme])

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  const toggleLightDark = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, toggleLightDark, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

