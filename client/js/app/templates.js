module.exports = (function() {
    var Hogan = require('hogan');
    var templates = {};
    templates['chat/input'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"form-group\"><input id=\"textbox\" type=\"text\" size=\"50\" placeholder=\"Say something...\" autocomplete=\"off\" autofocus=\"autofocus\" class=\"form-control\"/></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['chat/message'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"chat-message ");t.b(t.v(t.f("css_classes",c,p,0)));t.b("\"><img src=\"");t.b(t.v(t.f("avatar_url",c,p,0)));t.b("\" class=\"img-circle avatar\"/><span>");t.b(t.t(t.f("message",c,p,0)));t.b("</span></div><div class=\"clear\"></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['landing/guest_login_modal'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"modal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>What's your name?</h4></div><div class=\"modal-body\"><p><input id=\"username\" type=\"text\" placeholder=\"A username without spaces\" autofocus=\"true\" class=\"form-control\"/></p><p><button id=\"login\" type=\"submit\" class=\"btn btn-success\">Login</button></p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout/home'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"bgvideo\"><video id=\"loopback\" autoplay=\"autoplay\" muted=\"muted\"></video></div><div id=\"wrapper\"><div id=\"background\"></div><div id=\"container\"><div id=\"navbar\"></div>");if(t.s(t.d("user.guest",c,p,1),c,p,0,190,323,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<div class=\"guest-notice\"><p>To receive a call, send this link: <a href=\"");t.b(t.v(t.f("host",c,p,0)));t.b("/");t.b(t.v(t.d("user.uuid",c,p,0)));t.b("\">");t.b(t.v(t.f("host",c,p,0)));t.b("/");t.b(t.v(t.d("user.uuid",c,p,0)));t.b("</a></p></div>");});c.pop();}t.b("<div id=\"roster\"></div><div id=\"placeholder\">");if(!t.s(t.d("user.guest",c,p,1),c,p,1,0,0,"")){t.b("<p>None of your friends are online.</p>");};t.b("</div></div><div id=\"conversation\"></div></div><div id=\"notification\"></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout/landing'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"homepage\"><div class=\"logo\"><img src=\"/vmux.png\"/><p>video calls in your browser</p></div><div class=\"login\"><p>Goodbye Skype.</p><a id=\"twitter-login\" href=\"/auth/twitter\" class=\"btn btn-primary btn-lg\">Login with Twitter</a><a id=\"guest-login\" href=\"#\" class=\"btn btn-primary btn-lg\">Login as Guest</a></div><div class=\"about\"><p>LINGO is a Skype™ alternative that runs in the browser. It's built on top of WebRTC so you don't need to install any plugins or use Flash. You can do one-to-one or multi-party video calls and all the communications and P2P are encrypted.</p></div></div><div id=\"github\"><a href=\"https://github.com/lingoapp/lingo\" target=\"_blank\"><small>LINGO is open-source, fork it on GitHub.</small></a></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout/profile'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"bgvideo\"><video id=\"loopback\" autoplay=\"autoplay\" muted=\"muted\"></video></div><div id=\"wrapper\"><div id=\"background\"></div><div id=\"container\"><div id=\"navbar\"></div><div id=\"singleuser\"><p><img src=\"");t.b(t.v(t.f("profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle\"/></p><p><small>");t.b(t.v(t.f("screen_name",c,p,0)));t.b("</small></p><p><button class=\"call btn btn-info\">Call</button></p></div></div><div id=\"conversation\"></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout/room'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"navbar\"></div><div id=\"chat\"><div id=\"chat-messages-container\"><div id=\"chat-messages\"></div></div><div id=\"chat-input\"></div></div><div id=\"streams\"></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['sidebar/info_modal'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"modal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><a href=\"https://github.com/lingoapp/lingo\" target=\"_blank\"><img src=\"/vmux_logo.png\" style=\"width: 100px;\"/></a></div><div class=\"modal-body\"><p>LINGO is open-source software, you can fork it on <a href=\"https://github.com/lingoapp/lingo\" target=\"_blank\">GitHub.</a></p><p>If you have any questions, join the conversation on <a href=\"https://gitter.im/Lingoapp/Lobby\" target=\"_blank\">Gitter.</a></p><p>~</p><p>Thanks for using LINGO!</p><p><i class=\"fa fa-heart\"></i></p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['sidebar/room_modal'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"modal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>Join a room</h4></div><div class=\"modal-body\"><p><input id=\"room\" type=\"text\" placeholder=\"Room name\" autofocus=\"true\" class=\"form-control\"/></p><p><button id=\"join\" class=\"btn btn-success\">Join</button></p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/call_request'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"call-request modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><p><img src=\"");t.b(t.v(t.d("user.profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle\"/></p><p>Accept ");t.b(t.v(t.f("type",c,p,0)));t.b(" call from ");t.b(t.v(t.d("user.screen_name",c,p,0)));t.b("?</p><p><small>Grant access to your ");t.b(t.v(t.f("type",c,p,0)));t.b(" input first</small></p><p><button class=\"reject btn btn-danger donotdisplay\"> Decline</button><button class=\"accept btn btn-success donotdisplay\">Accept</button><audio src=\"/ringtone.mp3\" autoplay=\"autoplay\" loop=\"loop\"></audio></p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/detail'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<img src=\"");t.b(t.v(t.f("profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle\"/><p><small>");t.b(t.v(t.f("screen_name",c,p,0)));t.b("</small></p><p class=\"actions\"><i data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Chat\" class=\"show-chat fa fa-comment tip\"></i><span class=\"unreadCount\"></span><i data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Audiocall\" class=\"audiocall fa fa-phone tip\"></i><i data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Videocall\" class=\"videocall fa fa-video-camera tip\"></i></p><div class=\"chat modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close hide-chat\">&times;</button><span>Chat with ");t.b(t.v(t.f("screen_name",c,p,0)));t.b("</span></div><div class=\"modal-body\"><div class=\"chat-messages\"></div><div class=\"chat-input\"></div></div></div></div></div><div class=\"audio modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><span>Audio call with ");t.b(t.v(t.f("screen_name",c,p,0)));t.b("</span></div><div class=\"modal-body\"><div class=\"one-to-one-audio\"></div></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/localvideo'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<video muted=\"muted\" autoplay=\"autoplay\"></video><div id=\"controls\"><i id=\"toggle-audio\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Microphone is ON\" class=\"fa fa-microphone tip\"></i><i id=\"toggle-video\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Camera is ON\" class=\"fa fa-video-camera tip\"></i></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/one_to_one'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"controls\"><i id=\"toggle-fullscreen\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Go full-screen\" class=\"fa fa-arrows-alt tip\"></i><i id=\"toggle-audio\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Microphone is ON\" class=\"fa fa-microphone tip\"></i><i id=\"toggle-video\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Camera is ON\" class=\"fa fa-video-camera tip\"></i><i id=\"hangup\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Hangup\" class=\"fa fa-sign-out tip\"></i></div><div id=\"chat\"><div id=\"chat-messages\"></div><div id=\"chat-input\"></div></div><video id=\"remote\" autoplay=\"autoplay\"></video><video id=\"local\" autoplay=\"autoplay\" muted=\"muted\"></video>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/one_to_one_audio'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<img src=\"");t.b(t.v(t.f("profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle\"/><p><a href=\"#\" class=\"hangup\">Hangup</a></p><audio autoplay=\"autoplay\" class=\"stream donotdisplay\"></audio>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/sidebar'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!--#content--><!--  #user--><!--    img.img-circle(src=\"");t.b(t.v(t.f("avatar",c,p,0)));t.b("\")--><!----><!--  #menu--><!--    ul--><!--      li--><!--        a#home(href='#')--><!--          img(src='/home.png')--><!--      li--><!--        a#group(href='#')--><!--          img(src='/group.png')--><!--      li--><!--        a#info(href='#')--><!--          img(src='/info.png')--><!----><!----><!--  #logo--><!--    a(href='https://github.com/lingoapp/lingo', target='_blank')--><!--      img(src='/vmux.png')--><div role=\"navigation\" class=\"navbar navbar-inverse\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-icons\" class=\"navbar-toggle\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><div class=\"navbar-brand\"><img src=\"");t.b(t.v(t.f("profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle\"/></div></div><div id=\"nav-icons\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav\"><li><a id=\"home\" href=\"#\">HOME</a></li><li><a id=\"group\" href=\"#\">JOIN ROOM</a></li><li><a id=\"info\" href=\"#\">ABOUT</a></li></ul></div></div></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['user/video'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<video autoplay=\"autoplay\" poster=\"/video-poster.jpg\"></video><div class=\"screen_name\"><img src=\"");t.b(t.v(t.f("profile_image_url_https",c,p,0)));t.b("\" class=\"img-circle avatar\"/><span>");t.b(t.v(t.f("screen_name",c,p,0)));t.b("</span></div><!--");if(t.s(t.f("local",c,p,1),c,p,0,201,452,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("--><!--#controls--><!--  i#toggle-audio.fa.fa-microphone.tip(data-toggle=\"tooltip\", data-placement=\"top\", title=\"Microphone is ON\")--><!--  i#toggle-video.fa.fa-video-camera.tip(data-toggle=\"tooltip\", data-placement=\"top\", title=\"Camera is ON\")--><!--");});c.pop();}t.b("-->");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();
