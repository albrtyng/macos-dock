import React from 'react'
import Dock from './components/Dock'

import chrome from './assets/chrome.svg'
import docs from './assets/docs.svg'
import excel from './assets/excel.svg'
import gmail from './assets/gmail.svg'
import photoshop from './assets/photoshop.svg'
import powerpoint from './assets/powerpoint.svg'
import safari from './assets/safari.svg'
import slack from './assets/slack.svg'
import spotify from './assets/spotify.svg'
import steam from './assets/steam.svg'
import vlc from './assets/vlc.svg'

import './styles/App.scss'

const images = [
  chrome,
  docs,
  excel,
  gmail,
  photoshop,
  powerpoint,
  safari,
  slack,
  spotify,
  steam,
  vlc,
]

function App() {
  return (
    <div className="App">
      <Dock images={images}/>
    </div>
  )
}

export default App
