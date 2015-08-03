$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'nWk2LpVpyOT66GGmubfBkoama19kl146e58Xk8xB';
   options.headers['X-Parse-REST-API-Key'] = 'yQIdCLh2erYy2IyT89327r44jnL6nVYmRryl3ZXJ';
  }
});
