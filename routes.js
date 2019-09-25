var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
var fs=require('fs-extra');

var html = require('html');

// var fs = require('fs-extra');
var path = require('path')
// var mega = require('mega');
// for async functioning
// var async =require('async');
// var ProgressBar = require('progress');
// var argv = require('optimist')
//   .demand(1)
//   .usage('USAGE: node example/upload [email] [password] <file>')
//   .argv

// var youtubedl = require('youtube-dl');
// var uploader=require('./UpDld.js');
var upload=require('./upload.js');
var mkdir=require('./mkdir');
var capability=require('./Data/capability.js');

//for file uploading
var fname;
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, 'files/upload');
       
	},
    filename: function (req, file, cb) {
    // let fname = file.originalname.split(".")[0];
    fname = "audio"+Date.now();
    // fs.copySync(__dirname+'/files/upload/'+fname,__dirname+'files/upload/'+command);
     // fs.removeSync(__dirname+'/files/upload/'+fname)   
        cb(null, fname + '.webm');
   }
});
var fileUploader = multer({ storage: storage });
//end_of_file_uploader_configuration

// var upload = multer({ dest: 'files' ,fileFilter :fileController.docxFilter , storage: storage });


//end of file uploading


router.get('/', (req, res) => {
   res.sendFile('index.html', {
     root: '/views'
   });
});

router.post('/d4',function(req,res){
  console.log(req.body);
  var video=req.body.video;
  controller.uploadDownload(req,res,video);
});

router.get('/test',function(req,res){
//  co
  uploader.uploadDownload(req,res);
  // console.log(req.body);
  // var video=req.body.video;
  // controller.uploadDownload(req,res,video);
});
router.get('/mkdir',function(req,res){
  //  co
  mkdir .mkdir(req,res);
    // console.log(req.body);
    // var video=req.body.video;
    // controller.uploadDownload(req,res,video);
  });

  router.get('/upload',function(req,res){
    //  co
    upload.upload(req,res);
      // console.log(req.body);
      // var video=req.body.video;
      // controller.uploadDownload(req,res,video);
  });
  //SSL VERIFIER
  router.get('/.well-known/pki-validation/0030EEB17C7239B0138AD7FC3CDE77B7.txt',function(req,res){
    //  co
    // upload.upload(req,res);
    console.log("came in");
      // console.log(req.body);
      // var video=req.body.video;
      // controller.uploadDownload(req,res,video);
    res.sendFile(path.join(__dirname, '/0030EEB17C7239B0138AD7FC3CDE77B7.txt'));
  });
  //combo logo verifier
  router.get('/comodo_secure_seal_100x85_transp.png',function(req,res){
    res.sendFile(path.join(__dirname, '/comodo_secure_seal_100x85_transp.png'));
  });

router.post('/file', fileUploader .any(), function (req, res, next) {
    let formData = req.body;
    let command =req.body.command;
    let domain =req.body.domain;
    let capability=req.body.capability;
    let files = req.files;
    console.log('form data', formData, 'file' , files);
    console.log("file name is "+fname);
    upload.upload(fname,domain,capability,command,res); //here hardcode fname asa 01_01_001
    res.sendStatus(200);
});
  router.get('/getRadioList',function(req,res){
    
    // capability.findById(req.body.id);
    console.log(req.body)
    console.log("inside the getRadio");
    // var buttons = "sudfo dfdh dfldfdjfkf"
    res.send(['ශේෂය කොපමනද?', 'අවසන් ගනුදෙනු පහ පෙන්වන්න', 'Thrudfdffdster'])
  
  });




module.exports = router;
