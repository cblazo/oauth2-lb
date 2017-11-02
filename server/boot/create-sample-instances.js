//     module.exports = function(app) {
// // UNCOMMENT IF YOU WANT TO AUTOMIGRATE
//       // app.dataSources.backendDB.automigrate('Machine', function(err) {
//       //   if (err) throw err;
//
// // UNCOMMENT IF YOU WANT TO INITIALIZE SOME INSTANCES AT STARTUP
//         app.models.Product.create([{
//           "name": "Coffee beans (1 kg)",
//           "price": 6.50,
//           "stock": 105
//         }, {
//           "name": "Sugar (1 kg)",
//           "price": 1.50,
//           "stock": 892
//         }, {
//           "name": "Water (2.5 L)",
//           "price": 1.05,
//           "stock": 15
//         }, ], function(err, products) {
//           if (err) throw err;
//           console.log('Products created: \n', products);
//         });
//
//         app.models.User.create([{
//           "name": "bob",
//           "username": "bob",
//           "password": "secret",
//           "email": "foo@bar.com",
//           "emailVerified": true
//         }, ], function(err, users) {
//           if (err) throw err;
//           console.log('User created: \n', users);
//         });
//
//         app.models.Application.create([{
//           "id": 123,
//           "name": "demo-app",
//           "owner": "bob",
//           "clientSecret": "secret"
//         }, ], function(err, apps) {
//           if (err) throw err;
//           console.log('Application created: \n', apps);
//         });
//
//       // });
//     };
