#!/usr/bin/env bash
# Serve the built static game (PROJECT_DIR/dist) in the foreground.
# Writes worker metadata (deployment-output.json) to OPENCODE_WEB_DIR only;
# source and built output stay inside the project directory.
set -euo pipefail
cd "$(dirname "$0")"

/usr/bin/time -p test -f package.json
PORT="${PORT:-3000}"
WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
DIST="$PWD/dist"

# Install dependencies when node_modules is missing or package.json changed.
if [ ! -d node_modules ] || [ package.json -nt node_modules ]; then
  if [ -f package-lock.json ]; then
    /usr/bin/time -p npm ci --no-audit --no-fund
  else
    /usr/bin/time -p npm install --no-audit --no-fund
  fi
fi

# Build when dist is missing or any source file is newer than dist/index.html.
NEED_BUILD=0
if [ ! -f "$DIST/index.html" ]; then
  NEED_BUILD=1
elif [ -n "$(find package.json vite.config.js index.html src public -newer "$DIST/index.html" -print -quit 2>/dev/null)" ]; then
  NEED_BUILD=1
fi
if [ "$NEED_BUILD" = 1 ]; then
  /usr/bin/time -p npm run build
fi
/usr/bin/time -p test -f "$DIST/index.html"

/usr/bin/time -p mkdir -p "$WEB_DIR"
/usr/bin/time -p node -e "var fs=require('fs');fs.writeFileSync(process.argv[1],JSON.stringify({project:process.argv[2],directory:process.argv[3]}));" "$WEB_DIR/deployment-output.json" "$PWD" "$DIST"
/usr/bin/time -p test -s "$WEB_DIR/deployment-output.json"

# Serve the built directory in the foreground.
exec /usr/bin/time -p ./node_modules/.bin/vite preview --host 0.0.0.0 --strictPort --port "$PORT" --outDir dist
