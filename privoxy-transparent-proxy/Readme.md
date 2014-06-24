## Configure privoxy
* listen-address :8118
* accept-intercepted-requests 1
* enable-remote-toggle 1
* enable-remote-http-toggle 1
* enable-edit-actions 1
* debug 1            <- remove when done
* debug 1024         <- remove when done

## remove too aggressive actions
* /etc/privoxy/match-all.action
* Edit and unset everything (too agressive)

## Privoxy Blocklist
* Get privoxy-blocklist.sh and put somewhere /usr/local/privoxy-blocklist
* Edit the shell file
* SCRIPTCONF=/etc/privoxy-blacklist/config
* Run the script to make the config file
* edit the config file and add the following easylist
* http://adblockplus.mozdev.org/easylist/easylist.txt
* /usr/local/privoxy-blocklist/privoxy-blocklist.sh
* Setup a cron job to run at midnight *	0	*	*	*	/usr/local/privoxy-blocklist/privoxy-blocklist.sh

* Setup proxy in Firefox/Chrome to privoxy manually 
* If all works, use below to setup transparent proxy

## Router and Privoxy server configuration
* Add this to privoxy server so port 80 is redirected to port 8118
* iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8118

# Add this script under to TomatoUSB > Administration > Scripts > Firewall
iptables -t mangle -A PREROUTING -p tcp --dport 80 -s 192.168.1.102 -j ACCEPT
iptables -t mangle -A PREROUTING -p tcp --dport 80 -j MARK --set-mark 3
ip rule add fwmark 3 table 2
ip route add default via 192.168.1.102 dev br0 table 2
