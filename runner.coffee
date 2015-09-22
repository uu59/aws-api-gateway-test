#!/usr/bin/env coffee

require('shelljs/make')

entry_point = "entry.js"
pkgfile = "entry.zip"

pkg = require("./package")
node_modules = Object.keys(pkg.dependencies).map (module) -> "node_modules/" + module
dependencies = node_modules.concat([entry_point, "lib/"])


target.build = ->
  exec "babel ./src -d ./lib"
  exec "rm -f #{pkgfile} && zip -r #{pkgfile} #{dependencies.join(" ")}"
  console.log "#{pkgfile} created."
