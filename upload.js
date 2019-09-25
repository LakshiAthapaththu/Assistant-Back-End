var fs=require('fs-extra');
var YandexDisk = require('yandex-disk').YandexDisk;
var Sync=require('sync');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var sync = require('synchronize')


exports.upload=function(fname,domain,capability,command,res){
// print("COME TO THE UPLOAD,JS FILE");
console.log("COME TO THE UPLOAD JS");
var fname=fname+".webm"  //added the file type

//file manipulation - placing files where should be

// fs.copySync(__dirname+'/files/upload/'+fname,__dirname+'files/upload/'+command);
// fs.removeSync(__dirname+'/files/upload/'+fname)

//yandex uploading

var disk = new YandexDisk('brainiacsfyp', 'Brainiacs123');
//sequrity what is the car - hucar

console.log("disk is "+disk);

sync(disk, 'exists', 'mkdir', 'uploadFile','cd')

function domainChecker() {
        console.log('domain checker');

        // setTimeout(() => resolve('☕'), 2000); // it takes 2 seconds to make coffee
        disk.exists("./"+domain, function(err, exists) {
            console.log("checking for the domain folder");
            if(!exists){
                console.log("creating the domain folder");
                disk.mkdir(domain, function(err, status) {
                        if (err){
                            console.log(err);
                        }
                })
                console.log("outside");
            }
            else{
            console.log("domain folder exists");}
            
        });
        // callback;

}
function commandChecker(){
    console.log("command checker")
    
    disk.exists("./"+domain+"/"+command, function(err, exists) {
        console.log("checking for the command folder");
        consolo.log(command);
        if(!exists){
            console.log("creating a sub folder with command's name");
            disk.mkdir("./"+domain+"/"+command, function(err, status) {
                if (err){
                    console.log(err);
                }
        })
        }
        else{
            console.log("command folder exists")
        }
    
    });
    // callback;
    
}   
function changeDirectory(){
    console.log("before uploading");
    return new Promise((resolve, reject) => {
        var cap=parseInt(capability)+1;
        var com=parseInt(command)+1;
        console.log("./"+domain+"/"+cap+"/"+com+"/"+fname);

        //copy the captured command to the audio folder and rename as 01_01_001.webm

        fs.copyFile(__dirname+'/files/upload/'+fname, __dirname+'/audio/01_01_001.webm', (err) => {
            if (err) throw err;
            console.log('captured audio was copied to audio folder');
          });

        const exec = require('child_process').exec;
        const decoding_script = exec('sh run.sh /audio');
        decoding_script.stdout.on('data', (data)=>{
        console.log(data); 
              // do whatever you want here with data
        });
        decoding_script.stderr.on('data', (data)=>{
            console.error(data);
        });

        disk.uploadFile(__dirname + '/files/upload/'+fname,"./"+domain+"/"+cap+"/"+com+"/"+fname, function(err) {
            if (err) {
                console.log(err)
                return reject(err);
            }
            disk.exists(fname, function(err, exists) {
                return reject(err);
            });
            // res.send("sdudeepa");
            console.log("done uploading")
            resolve(err);
            // res.sendStatus(200);
        });
    });
    
}
async function upload2(){
    var cap=parseInt(capability)+1;
    var com=parseInt(command)+1;
    fs.copySync(__dirname+'/files/upload/'+fname,__dirname+"/files/"+domain+"/"+cap+"/"+com+"/"+fname);
// fs.removeSync(__dirname+'/files/upload/'+fname)
    let error= await changeDirectory();
    res.sendStatus(200);
}

upload2();
}
