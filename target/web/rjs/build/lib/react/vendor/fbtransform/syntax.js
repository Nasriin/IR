function transformAll(e,s,t){t=t||[];var r=visitors.getAllVisitors(t.concat("typechecker"));return e=transform(r,e,s),-1==t.indexOf("typechecks")&&/@typechecks/.test(e.code)&&(e=transform(visitors.transformVisitors.typechecker,e.code,s)),e}function runCli(e){var s={};for(var t in e)"_"!==t&&"$0"!==t&&(s[t]=optimist.argv[t]);s.help&&(optimist.showHelp(),process.exit(0));var r=s.excludes;delete s.excludes;var o="";process.stdin.resume(),process.stdin.setEncoding("utf8"),process.stdin.on("data",function(e){o+=e}),process.stdin.on("end",function(){try{o=transformAll(o,s,r)}catch(e){console.error(e.stack),process.exit(1)}process.stdout.write(o.code)})}var transform=require("jstransform").transform,visitors=require("./visitors");if(require.main===module){var optimist=require("optimist");optimist=optimist.usage("Usage: $0 [options]").default("exclude",[]).boolean("help").alias("h","help").boolean("minify").describe("minify","Best-effort minification of the output source (when possible)").describe("exclude","A list of transformNames to exclude"),runCli(optimist.argv)}else exports.transformAll=transformAll;
//# sourceMappingURL=syntax.js.map