# shellcheck disable=SC2164
cd src/front_end
npm run build
rsync -av build/static/* ../server/static
rsync -av build/index.html ../server/static
# cp -a build/* ../server