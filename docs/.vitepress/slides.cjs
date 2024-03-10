const fs = require('fs')
const { execSync } = require('child_process')
const { resolve } = require('path')

const slidesDir = resolve(__dirname, '../slides')
const distDir = resolve(__dirname, './dist/slides')

const files = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

files.forEach(file => {
  const fileName = file.replace('.md', '')
  const outDir = `${distDir}/${fileName}`
  const base = `/slides/${fileName}/`

  fs.mkdirSync(outDir, { recursive: true })

  const command = `slidev build ${slidesDir}/${file} --out=${outDir} --base=${base}`
  execSync(command, { stdio: 'inherit' })
})

// locales

const loadLocale = (localeCode) => {
  const slidesDir = resolve(__dirname, `../${localeCode}/slides`)
  const distDir = resolve(__dirname, `./dist/${localeCode}/slides`)

  const files = fs.readdirSync(slidesDir).filter(file => file.endsWith('.md'))

  files.forEach(file => {
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
