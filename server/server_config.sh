echo 'need sudo'
sudo echo 'sudo on!'
y | sudo apt-get install nodejs
y | sudo apt-get install unzip
y | sudo apt-get install nginx-common
# sudo ufw app list # check nginx firewall
sudo ufw allow 'Nginx HTTP'
y | sudo apt-get install build-essential
sudo npm i -g yarn
sudo npm i -g pm2
sudo pm2 startup systemd
# systemctl status pm2-root # check pm2 status

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
y | sudo apt-get install -y mongodb-org

echo """server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	server_name _;

	location / {
		proxy_pass http://localhost:8080;
		proxy_http_version 1.1;
		proxy_set_header Upgrade \$http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host \$host;
		proxy_cache_bypass \$http_upgrade;
		proxy_set_header X-Forwarded-For \$remote_addr;  # This line.
	}
}
""" > /tmp/nginx.conf
sudo mv /tmp/nginx.conf /etc/nginx/sites-available/default
sudo nginx -s reload
