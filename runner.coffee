#!/usr/bin/env coffee

require('shelljs/make')

pkg = require("./package")
node_modules = Object.keys(pkg.dependencies).map (module) -> "node_modules/" + module
dependencies = node_modules.concat(["app.js", "lib/"])

entry_point = "app.js"
pkgfile = "app.zip"

target.build = ->
  exec "babel ./src -d ./lib"
  exec "rm -f #{pkgfile} && zip -r #{pkgfile} #{dependencies.join(" ")}"
  console.log "#{pkgfile} created."
