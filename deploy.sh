WEB_PATH = '/home/ubuntu/project/music'

echo "Start deployment"
cd $WEB_PATH
echo "pull source code..."
git reset --hard origin/master
git clean -f
git pull origin master
git checkout master
cnpm install
yarn serve
echo "Finished"