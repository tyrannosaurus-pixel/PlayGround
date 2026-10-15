#!/usr/bin/env bash
# Capture desktop and mobile screenshots of CAPTURE_URL into CAPTURE_DIR.
# Leaves the app server running; capture evidence goes outside the source tree.
# Exit 75: temporary navigation/browser infrastructure failure.
# Exit 1: script usage error or rendering defect.
set -euo pipefail
cd "$(dirname "$0")"

/usr/bin/time -p test -n "${CAPTURE_URL:?Set CAPTURE_URL to the page to capture.}"
/usr/bin/time -p test -n "${CAPTURE_DIR:?Set CAPTURE_DIR to the output directory.}"
/usr/bin/time -p mkdir -p "$CAPTURE_DIR"

set +e
/usr/bin/time -p node "${RUNTIME_DIR:?}/scripts/default-capture.mjs"
RC=$?
set -e
if [ "$RC" -ne 0 ]; then
  echo "capture backend exited $RC" >&2
  exit "$RC"
fi

/usr/bin/time -p test -s "$CAPTURE_DIR/final-desktop.png"
/usr/bin/time -p test -s "$CAPTURE_DIR/final-mobile.png"
echo "captures ready in $CAPTURE_DIR"
