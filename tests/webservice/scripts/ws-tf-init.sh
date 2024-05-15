export JETTY_HOME=/jetty-home-11.0.15

sudo /usr/bin/filebeat -e -c filebeat.yml -d "publish" &

cd /jetty-base
java -jar $JETTY_HOME/start.ja