const fs = require('fs')

const path = require('path')

const dir = path.resolve(process.cwd(), './rename')

const targetDir = name => path.resolve(process.cwd(), './rename', name)

fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err)
  }
  files.forEach(file => {
    const newFile = file.replace(/\.json$/, '.hjson')
    fs.rename(targetDir(file), targetDir(newFile), function(err) {
      if (err) {
        console.log(err)
      }
    })
  })
})
