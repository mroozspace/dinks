/* eslint-disable no-restricted-syntax */
const fs = require('fs')
const path = require('path')

const directory = 'dist'

fs.readdir(directory, (error, files) => {
  if (error) throw error

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (err) throw err
    })
  }
})
