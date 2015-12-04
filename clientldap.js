var ldap = require('ldapjs');
var client = ldap.createClient({
  url: 'ldap://10.0.0.10:666'
});

var opts = {
  filter: '(objectclass= organizationalRole)',
  scope: 'sub'
};

client.search('cn=admin,dc=zarafa,dc=local', opts, function(err, res) {
  console.log(err);
  res.on('searchEntry', function(entry) {
    console.log('entry: ' + JSON.stringify(entry.object));
  });
  res.on('searchReference', function(referral) {
    console.log('referral: ' + referral.uris.join());
  });
  res.on('error', function(err) {
    console.error('error: ' + err.message);
  });
  res.on('end', function(result) {
    console.log('status: ' + result.status);
  });
});
