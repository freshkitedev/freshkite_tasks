#!/bin/sh
#!/bin/sh
envsubst < /usr/share/nginx/html/env-config.js > /usr/share/nginx/html/env.js
exec "$@"