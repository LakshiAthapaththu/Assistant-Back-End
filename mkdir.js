// var mega = require('mega')
// // var argv = require('optimist')
// //   .demand(1)
// //   .usage('USAGE: node example/mkdir [email] [password] name [parent-nodeid]')
// //   .argv

// // var email = argv._[0]
// // var password = argv._[1]
// // var name = argv._[2]
// // var target = argv._[3]

// var email = 'n.m.nadeeshan@gmail.com'
// var password = 'tuktictec1'
// var target = 'new_foler'
// var name = 'new_folder'

// exports.mkdir=function(req,res){

// var storage = mega({email: email, password: password, keepalive: false})

// storage.mkdir({
//     name: name,
//     target: target
//   },
//   function(err, file) {
//     if (err) throw err
//     console.log('\nCreated', file.name)
//   }
// )
// }