var ldap = require('ldapjs');
/*var client = ldap.createClient({
  url: 'ldap://10.0.0.10:666'
});
console.log(client);*/
/*client.bind('cn=admin,dc=zarafa,dc=local', 'a', function(err) {
  assert.ifError(err);
    console.log('matched');
});*/

var server = ldap.createServer();
 server.listen(666, '10.0.0.10', function() {
   console.log('LDAP server listening at: ' + server.url);
 });

