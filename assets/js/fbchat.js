var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute('page_id', '100870702762488');
chatbox.setAttribute('attribution', 'biz_inbox');

window.fbAsyncInit = function () { FB.init({ xfbml: true, version: 'v16.0' }); };

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/ms_MY/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));