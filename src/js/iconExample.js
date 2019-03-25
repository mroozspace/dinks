import iconSrc from '../assets/webpack-icon-url.png'

export default function () {
  const { body } = document
  const div = document.createElement('div')
  const img = document.createElement('img')
  img.src = iconSrc
  img.alt = 'webpackIcon'
  div.appendChild(img)
  body.appendChild(div)
}
