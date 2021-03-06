Package.describe({
  name: 'bootstrap',
  summary: "Bootstrap 3.2. HTML, CSS and JS framework for developing responsive, mobile-first web projects.",
  version: '1.0.3',
  git: 'https://github.com/ianmartorell/meteor-bootstrap-3'
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('mrt:jquery-ui', 'client');

  api.add_files('css/bootstrap.min.css', 'client');
  api.add_files('js/bootstrap.min.js', 'client');

  // Fonts
  api.add_files('fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.ttf', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.woff', 'client');
});
