Package.describe({
  name: 'embed',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['widget', 'mongo', 'underscore']);
  api.use(['templating'], 'client');

  api.addFiles('embed.js');
  api.addFiles(['server.js'], 'server');
  api.addFiles([
    'client/widget.html',
    'client/widget.css',
    'client/settings.html',
    'client/settings.js'
    ], 'client');
  api.export('Embed');
});

Npm.depends({ 'sanitize-html': '1.7.2' });
