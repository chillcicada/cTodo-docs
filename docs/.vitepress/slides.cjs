const fs = require('node:fs')
const { execSync } = require('node:child_process')
const { resolve } = require('node:path')

const slidesDir = resolve(__dirname, '../slides')
const distDir = resolve(__dirname, './dist/slides')

const files = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

files.forEach((file) => {
  const fileName = file.replace('.md', '')
  const outDir = `${distDir}/${fileName}`
  const base = `/slides/${fileName}/`

  fs.mkdirSync(outDir, { recursive: true })

  const command = `slidev build ${slidesDir}/${file} --out=${outDir} --base=${base}`
  execSync(command, { stdio: 'inherit' })
})

// locales

function loadLocale(localeCode) {
  const slidesDir = resolve(__dirname, `../${localeCode}/slides`)
  const distDir = resolve(__dirname, `./dist/${localeCode}/slides`)

  const files = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

  files.forEach((file) => {
    const fileName = file.replace('.md', '')
    const outDir = `${distDir}/${fileName}`
    const base = `/${localeCode}/slides/${fileName}/`

    fs.mkdirSync(outDir, { recursive: true })

    const command = `slidev build ${slidesDir}/${file} --out=${outDir} --base=${base}`
    execSync(command, { stdio: 'inherit' })
  })
}

const locales = ['zh']

locales.forEach(loadLocale)
