  var language = (navigator.userLanguage || navigator.language).toLowerCase();
  
  if(language === 'zh-cn') {
    showContent('zh');
    display('en');
    if(is_weixin()) {
      showTip('zh');
    }
  } else {
    showContent('en');
    display('zh');
    if(is_weixin()) {
      showTip('en');
    }
  }

  function is_weixin() {
      var ua = navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) === "micromessenger"; 
  }
  
  function showContent (language){
    var content = document.getElementById(language + '-content');
    content.style.display = 'block';
  }

  function hideContent (language){
    var content = document.getElementById(language + '-content');
    content.style.display = 'none';
  }

  function showTip (language) {
    var weixinTip = document.getElementById(language + '-tip');
    weixinTip.style.display = 'block';
  }

  function closeTip (language) {
    var weixinTip = document.getElementById(language + '-tip');
    weixinTip.style.display = 'none';
  }