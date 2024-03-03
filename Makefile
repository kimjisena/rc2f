rc2f: index.ts 
	bun build --compile --minify --sourcemap ./index.ts --outfile ./bin/rc2f

watch:
	while true; do $(MAKE) -q || $(MAKE); sleep 0.5; done
