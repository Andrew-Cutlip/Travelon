# shellcheck disable=SC2164
cd src/front_end
npm run build
cp -a build ../server/static