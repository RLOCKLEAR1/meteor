Package.describe({
  summary: "Meetup OAuth flow",
  version: "1.6.5-beta.5"
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating@1.2.13', 'client');
  api.use('underscore', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Meetup');

  api.addFiles(
    ['meetup_configure.html', 'meetup_configure.js'],
    'client');

  api.addFiles('meetup_server.js', 'server');
  api.addFiles('meetup_client.js', 'client');
});
