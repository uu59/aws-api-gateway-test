#!/usr/bin/env coffee

require('shelljs/make')

entry_point = "entry.js"
pkgfile = "entry.zip"
destDir = "./lib/"

pkg = require("./package")
node_modules = Object.keys(pkg.dependencies).map (module) -> "node_modules/" + module
dependencies = node_modules.concat([entry_point, destDir])

target.build = ->
  rm "-rf", destDir
  mkdir "-p", destDir
  tmp = tempdir() + "/envify.js"
  exec "babel ./src -d #{destDir}"
  exec "envify #{destDir}/env.js > #{tmp} && mv #{tmp} #{destDir}/env.js"
  exec "rm -f #{pkgfile} && zip -r #{pkgfile} #{dependencies.join(" ")}"
  console.log "#{pkgfile} created."
