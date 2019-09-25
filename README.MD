**How to restart the server**  
Go to 
  &nbsp;&nbsp;&nbsp;/MobileApp  
  &nbsp;&nbsp;&nbsp;screen  
  &nbsp;&nbsp;&nbsp;sudo PORT=80 node server.js  
  &nbsp;&nbsp;&nbsp;CTRL + a + d  
After a Change in code? - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;killall node  
                    if "Error: listen EACCES 0.0.0.0:80" -->https://stackoverflow.com/questions/9346211/how-to-kill-a-process-on-a-port-on-ubuntu   

Addd all this shits here the repo is private

db : sinhalaassistant
dbUsername : helaya
pw : vijaya
db String : mongodb://helaya:vijaya@ds125288.mlab.com:25288/sinhalaassistant


importing the data from a json file - mongoimport -d mydb -c mycollection D:\projects\voiceCollector\server\files\DBScripts\capabilities.json


capablity.json file format ,

{ "domain" :"Bank", "cap_id":"0010","main_capability":"balance enquery","sub_capability":"tell me the fucking balance"}
{ "domain" :"Bank", "cap_id":"0010","main_capability":"balance enquery","sub_capability":"tell me the fucking baladfdnce"}


importing fies to Mongo Lab

mongoimport --host ds125288.mlab.com  --port 25288 --username helaya --password vijaya --collection contacts --db sinhalaassistant --file D:\projects\voiceCollector\server\files\DBScripts\capabilities.json


