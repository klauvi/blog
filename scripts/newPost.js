const fs = require('fs')

const title = process.argv[2]

if (!title) {
  throw 'Title required'
}

const dir = `./content/blog/${title.toLowerCase().replace(' ', '-')}`

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
} else {
  throw 'That post already exists'
}

fs.writeFile(
  `${dir}/index.md`,
  `---
date: ${new Date().toISOString()}
title: ${title}
published: false
---
`,
  err => {
    if (err) {
      return console.log(err)
    }
    console.log(`${title} was created!`)
  }
)
