// Generated by CoffeeScript 1.3.3

(function($, require) {
  var Instagram, ig, param;
  Instagram = require.Instagram;
  param = {
    client_id: '32226e2c48af49b38109d816616a5369',
    redirect_uri: 'http://localhost/xampp/projects/Instagram-JS-SDK/examples',
    scope: 'basic+comments+relationships+likes',
    response_type: 'token'
  };
  ig = new Instagram();
  if (window.location.hash) {
    ig.setToken(ig.getToken());
  }
  return $('button').click(function() {
    return ig.getPopular(function(res) {
      return console.log(res);
    });
  });
})(jQuery, window);
