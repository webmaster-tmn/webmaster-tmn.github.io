  
function affLink() {
      var url = "http://affsnetwork.com/partner928/registration";
      var curUrl = window.location.href;
      var affID = curUrl.match(/\d+$/);
      var regUrl = url + "?wm=" + affID;
      window.location.href = affID ? regUrl : url;
  }