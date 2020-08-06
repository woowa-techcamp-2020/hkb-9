cd ~/hkb-9

local_git=$(git rev-parse dev)
remote_git=$(git rev-parse origin/dev)

if [ ${local_git} != ${remote_git} ];then
	git pull && pm2 delete 0 && npm run production
fi