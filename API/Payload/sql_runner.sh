#!/usr/bin/env sh

cd /usercode/
sudo service mysql start
echo "----BEGIN-----"
mysql  mysql< create_user.sql -u'root' 
mysql  ri_db < $1 -u'test' -p'test123'
mysql  mysql< destroy_user.sql -u'root'
echo "----END----"

