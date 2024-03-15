const fs = require('node:fs')
const { execSync } = require('node:child_process')
const { resolve } = require('node:path')

const zhDir = resolve(__dirname, '../zh')

const files = fs.readdirSync(zhDir).filter(file => file.endsWith('.md'))

files.forEach((file) => {
  const command = `zhlint ${file}`
  execSync(command, { stdio: 'inherit' })
})
