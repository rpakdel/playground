## Configure Privoxy
```
listen-address :8118
accept-intercepted-requests 1
enable-remote-toggle 1
enable-remote-http-toggle 1
enable-edit-actions 1
debug 1            <- remove when done
debug 1024         <- remove when done
```

## remove too aggressive actions
* `/etc/privoxy/match-all.action`
* Edit and unset everything

## Privoxy Blocklist
* Get [privoxy-blocklist.sh](https://github.com/Andrwe/privoxy-blocklist) and put somewhere e.g. `/usr/local/privoxy-blocklist`
* Edit the shell file
```
SCRIPTCONF=/etc/privoxy-blacklist/config
```
* Run the script to make the config file
* edit the config file and add the following [easylist](https://easylist.adblockplus.org/en/)
```
http://adblockplus.mozdev.org/easylist/easylist.txt
```
* Run `privoxy-blocklist.sh`
* Setup a cron job to run at midnight 
```
* 0	*	*	*	/usr/local/privoxy-blocklist/privoxy-blocklist.sh
```

## Verify
* Setup proxy in Firefox/Chrome to privoxy manually 
* Go to [http://config.privoxy.org/](http://config.privoxy.org)
* If all works, use below to setup transparent proxy

## Router and Privoxy server configuration
Add this to privoxy server so port 80 is redirected to port 8118
```
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8118
```
Put above line somewhere to be called when server boots (e.g. /etc/rc.local in Debian)

Add this script under to TomatoUSB > Administration > Scripts > Firewall
* ACCEPT anything going to privoxy IP (192.168.1.102)
```
iptables -t mangle -A PREROUTING -p tcp --dport 80 -s 192.168.1.102 -j ACCEPT
```
* MARK everything else with 3
```
iptables -t mangle -A PREROUTING -p tcp --dport 80 -j MARK --set-mark 3
```
* Create fwmark 3 in table 2
```
ip rule add fwmark 3 table 2
```
* Add route via table 2
```
ip route add default via 192.168.1.102 dev br0 table 2
```
