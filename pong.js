




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>javascript-pong/part5/pong.js at master · jakesgordon/javascript-pong</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jakesgordon/javascript-pong" name="twitter:title" /><meta content="javascript-pong - A javascript version of the classic 1972 arcade game Pong!" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/a6800694337088d85603c2968ca214af?d=https%3A%2F%2Fidenticons.github.com%2Faba861b67cae9cb84b5d42f3eafde1de.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/a6800694337088d85603c2968ca214af?d=https%3A%2F%2Fidenticons.github.com%2Faba861b67cae9cb84b5d42f3eafde1de.png&amp;r=x&amp;s=400" property="og:image" /><meta content="jakesgordon/javascript-pong" property="og:title" /><meta content="https://github.com/jakesgordon/javascript-pong" property="og:url" /><meta content="javascript-pong - A javascript version of the classic 1972 arcade game Pong!" property="og:description" />

    <meta name="hostname" content="github-fe131-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4081FE0C:5645:6C5DDD:530926C8" name="octolytics-dimension-request_id" /><meta content="207710" name="octolytics-actor-id" /><meta content="gadauto" name="octolytics-actor-login" /><meta content="f25bef6b32af2457ab796f81894667d8a4914998294563a2b8bae6bd358a898d" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Jb1Cl7zwJ0F4zljehopUivEHW5uha8U8w7x3QgmcpV4=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-22cc6aa8138609ccbf0c65025e153af581662ef6.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-dd234c178c0a2e0769bab2b5c636ce8f3fc1f02a.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-01ab94ef47d6293597922a1fab60e274e1d8f37e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a8a26802e0e7283b39ee4507af78950399f2a5d1.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="df411d3c97b15f5ab1e253f83d14f069">

        <link data-pjax-transient rel='permalink' href='/jakesgordon/javascript-pong/blob/4d6ff5c03116c1f89dbaaac52e734c225a16c29d/part5/pong.js'>

  <meta name="description" content="javascript-pong - A javascript version of the classic 1972 arcade game Pong!" />

  <meta content="738109" name="octolytics-dimension-user_id" /><meta content="jakesgordon" name="octolytics-dimension-user_login" /><meta content="1749969" name="octolytics-dimension-repository_id" /><meta content="jakesgordon/javascript-pong" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1749969" name="octolytics-dimension-repository_network_root_id" /><meta content="jakesgordon/javascript-pong" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jakesgordon/javascript-pong/commits/master.atom" rel="alternate" title="Recent Commits to javascript-pong:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="gadauto"
      data-repo="jakesgordon/javascript-pong"
      data-branch="master"
      data-sha="17665c4098ee304a243c854dd42f3c84901e29a6"
  >

    <input type="hidden" name="nwo" value="jakesgordon/javascript-pong" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/gadauto" class="name">
        <img alt="Gabriel Adauto" class=" js-avatar" data-user="207710" height="20" src="https://2.gravatar.com/avatar/15c4f811f1dbff6042c789135c14ee30?d=https%3A%2F%2Fidenticons.github.com%2Fc794aeeadd3e6188b014b76865f098bf.png&amp;r=x&amp;s=140" width="20" /> gadauto
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jakesgordon/javascript-pong">This repository</span>
    </li>
      <li>
        <a href="/jakesgordon/javascript-pong/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Jb1Cl7zwJ0F4zljehopUivEHW5uha8U8w7x3QgmcpV4=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1749969" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jakesgordon/javascript-pong/watchers">
        6
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/jakesgordon/javascript-pong/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/jakesgordon/javascript-pong/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/jakesgordon/javascript-pong/stargazers">
        36
      </a>
  </div>

  </li>


        <li>
          <a href="/jakesgordon/javascript-pong/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/jakesgordon/javascript-pong/network" class="social-count">24</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/jakesgordon" class="url fn" itemprop="url" rel="author"><span itemprop="title">jakesgordon</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/jakesgordon/javascript-pong" class="js-current-repository js-repo-home-link">javascript-pong</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jakesgordon/javascript-pong" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jakesgordon/javascript-pong">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jakesgordon/javascript-pong/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /jakesgordon/javascript-pong/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jakesgordon/javascript-pong/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /jakesgordon/javascript-pong/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jakesgordon/javascript-pong/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /jakesgordon/javascript-pong/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jakesgordon/javascript-pong/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jakesgordon/javascript-pong/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jakesgordon/javascript-pong/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jakesgordon/javascript-pong/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jakesgordon/javascript-pong/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jakesgordon/javascript-pong/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jakesgordon/javascript-pong.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jakesgordon/javascript-pong.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:jakesgordon/javascript-pong.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jakesgordon/javascript-pong.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jakesgordon/javascript-pong" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jakesgordon/javascript-pong" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/jakesgordon/javascript-pong" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/jakesgordon/javascript-pong/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:62909940546aea7c6e7f4b6e8db9e08e -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jakesgordon/javascript-pong/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jakesgordon/javascript-pong/blob/master/part5/pong.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jakesgordon/javascript-pong/tree/1.2.0/part5/pong.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jakesgordon/javascript-pong/tree/1.0.0/part5/pong.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jakesgordon/javascript-pong" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">javascript-pong</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jakesgordon/javascript-pong/tree/master/part5" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">part5</span></a></span><span class="separator"> / </span><strong class="final-path">pong.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="part5/pong.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Jake Gordon" class="main-avatar js-avatar" data-user="738109" height="24" src="https://1.gravatar.com/avatar/a6800694337088d85603c2968ca214af?d=https%3A%2F%2Fidenticons.github.com%2Faba861b67cae9cb84b5d42f3eafde1de.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/jakesgordon" rel="author">jakesgordon</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2011-05-14T14:05:20-07:00" title="2011-05-14 14:05:20">May 14, 2011</time>
    <div class="commit-title">
        <a href="/jakesgordon/javascript-pong/commit/748bd19c8c261bb1837c04d4d896cfda34eb7413" class="message" data-pjax="true" title="added part5">added part5</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jake Gordon" class=" js-avatar" data-user="738109" height="24" src="https://1.gravatar.com/avatar/a6800694337088d85603c2968ca214af?d=https%3A%2F%2Fidenticons.github.com%2Faba861b67cae9cb84b5d42f3eafde1de.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jakesgordon">jakesgordon</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>573 lines (499 sloc)</span>
          <span class="meta-divider"></span>
        <span>19.569 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/jakesgordon/javascript-pong?branch=master&amp;filepath=part5%2Fpong.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/jakesgordon/javascript-pong/edit/master/part5/pong.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/jakesgordon/javascript-pong/raw/master/part5/pong.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jakesgordon/javascript-pong/blame/master/part5/pong.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jakesgordon/javascript-pong/commits/master/part5/pong.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped tooltipped-s"
             href="/jakesgordon/javascript-pong/delete/master/part5/pong.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">//=============================================================================</span></div><div class='line' id='LC2'><span class="c1">// PONG</span></div><div class='line' id='LC3'><span class="c1">//=============================================================================</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="nx">Pong</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="nx">Defaults</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span>        <span class="mi">640</span><span class="p">,</span>   <span class="c1">// logical canvas width (browser will scale to physical canvas size - which is controlled by @media css queries)</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span>       <span class="mi">480</span><span class="p">,</span>   <span class="c1">// logical canvas height (ditto)</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wallWidth</span><span class="o">:</span>    <span class="mi">12</span><span class="p">,</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">paddleWidth</span><span class="o">:</span>  <span class="mi">12</span><span class="p">,</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">paddleHeight</span><span class="o">:</span> <span class="mi">60</span><span class="p">,</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">paddleSpeed</span><span class="o">:</span>  <span class="mi">2</span><span class="p">,</span>     <span class="c1">// should be able to cross court vertically   in 2 seconds</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ballSpeed</span><span class="o">:</span>    <span class="mi">4</span><span class="p">,</span>     <span class="c1">// should be able to cross court horizontally in 4 seconds, at starting speed ...</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ballAccel</span><span class="o">:</span>    <span class="mi">8</span><span class="p">,</span>     <span class="c1">// ... but accelerate as time passes</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ballRadius</span><span class="o">:</span>   <span class="mi">5</span><span class="p">,</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stats</span><span class="o">:</span>        <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predictions</span><span class="o">:</span>  <span class="kc">true</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="nx">Colors</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">walls</span><span class="o">:</span>           <span class="s1">&#39;white&#39;</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ball</span><span class="o">:</span>            <span class="s1">&#39;white&#39;</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">score</span><span class="o">:</span>           <span class="s1">&#39;white&#39;</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predictionGuess</span><span class="o">:</span> <span class="s1">&#39;yellow&#39;</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predictionExact</span><span class="o">:</span> <span class="s1">&#39;red&#39;</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="nx">Images</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;images/press1.png&quot;</span><span class="p">,</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;images/press2.png&quot;</span><span class="p">,</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;images/winner.png&quot;</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="nx">Levels</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.2</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">40</span><span class="p">},</span> <span class="c1">// 0:  ai is losing by 8</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.3</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">50</span><span class="p">},</span> <span class="c1">// 1:  ai is losing by 7</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.4</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">60</span><span class="p">},</span> <span class="c1">// 2:  ai is losing by 6</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.5</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">70</span><span class="p">},</span> <span class="c1">// 3:  ai is losing by 5</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.6</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">80</span><span class="p">},</span> <span class="c1">// 4:  ai is losing by 4</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.7</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span>  <span class="mi">90</span><span class="p">},</span> <span class="c1">// 5:  ai is losing by 3</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.8</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">100</span><span class="p">},</span> <span class="c1">// 6:  ai is losing by 2</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">0.9</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">110</span><span class="p">},</span> <span class="c1">// 7:  ai is losing by 1</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.0</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">120</span><span class="p">},</span> <span class="c1">// 8:  tie</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.1</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">130</span><span class="p">},</span> <span class="c1">// 9:  ai is winning by 1</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.2</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">140</span><span class="p">},</span> <span class="c1">// 10: ai is winning by 2</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.3</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">150</span><span class="p">},</span> <span class="c1">// 11: ai is winning by 3</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.4</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">160</span><span class="p">},</span> <span class="c1">// 12: ai is winning by 4</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.5</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">170</span><span class="p">},</span> <span class="c1">// 13: ai is winning by 5</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.6</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">180</span><span class="p">},</span> <span class="c1">// 14: ai is winning by 6</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.7</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">190</span><span class="p">},</span> <span class="c1">// 15: ai is winning by 7</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">aiReaction</span><span class="o">:</span> <span class="mf">1.8</span><span class="p">,</span> <span class="nx">aiError</span><span class="o">:</span> <span class="mi">200</span><span class="p">}</span>  <span class="c1">// 16: ai is winning by 8</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="c1">//-----------------------------------------------------------------------------</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">runner</span><span class="p">,</span> <span class="nx">cfg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Game</span><span class="p">.</span><span class="nx">loadImages</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Images</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">images</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cfg</span>         <span class="o">=</span> <span class="nx">cfg</span><span class="p">;</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">runner</span>      <span class="o">=</span> <span class="nx">runner</span><span class="p">;</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">width</span>       <span class="o">=</span> <span class="nx">runner</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">height</span>      <span class="o">=</span> <span class="nx">runner</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">images</span>      <span class="o">=</span> <span class="nx">images</span><span class="p">;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">playing</span>     <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">scores</span>      <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">menu</span>        <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">construct</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Menu</span><span class="p">,</span>   <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">court</span>       <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">construct</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Court</span><span class="p">,</span>  <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span>  <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">construct</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Paddle</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">construct</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Paddle</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ball</span>        <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">construct</span><span class="p">(</span><span class="nx">Pong</span><span class="p">.</span><span class="nx">Ball</span><span class="p">,</span>   <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">runner</span><span class="p">.</span><span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="nx">startDemo</span><span class="o">:</span>         <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="nx">startSinglePlayer</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="nx">startDoublePlayer</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="nx">start</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">numPlayers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">playing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">scores</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">playing</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">setAuto</span><span class="p">(</span><span class="nx">numPlayers</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">setAuto</span><span class="p">(</span><span class="nx">numPlayers</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">(</span><span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">runner</span><span class="p">.</span><span class="nx">hideCursor</span><span class="p">();</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="nx">stop</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ask</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">playing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ask</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">runner</span><span class="p">.</span><span class="nx">confirm</span><span class="p">(</span><span class="s1">&#39;Abandon game in progress ?&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">playing</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">setAuto</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">setAuto</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">runner</span><span class="p">.</span><span class="nx">showCursor</span><span class="p">();</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="nx">level</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">8</span> <span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="nx">playerNo</span><span class="p">]</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="nx">playerNo</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="nx">goal</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="nx">playerNo</span><span class="p">]</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="nx">playerNo</span><span class="p">]</span> <span class="o">==</span> <span class="mi">9</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">declareWinner</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">reset</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">setLevel</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">setLevel</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">(</span><span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">playing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dx</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span><span class="p">;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dy</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">left</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">goal</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">right</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">goal</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">court</span><span class="p">.</span><span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="k">this</span><span class="p">.</span><span class="nx">scores</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">playing</span><span class="p">)</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ball</span><span class="p">.</span><span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>&nbsp;&nbsp;<span class="nx">onkeydown</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">ZERO</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">startDemo</span><span class="p">();</span>            <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">ONE</span><span class="o">:</span>  <span class="k">this</span><span class="p">.</span><span class="nx">startSinglePlayer</span><span class="p">();</span>    <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">TWO</span><span class="o">:</span>  <span class="k">this</span><span class="p">.</span><span class="nx">startDoublePlayer</span><span class="p">();</span>    <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">ESC</span><span class="o">:</span>  <span class="k">this</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>             <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">Q</span><span class="o">:</span>    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span>  <span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">moveUp</span><span class="p">();</span>    <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">A</span><span class="o">:</span>    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span>  <span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">moveDown</span><span class="p">();</span>  <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">P</span><span class="o">:</span>    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">moveUp</span><span class="p">();</span>   <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">L</span><span class="o">:</span>    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">moveDown</span><span class="p">();</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="nx">onkeyup</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">keyCode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">Q</span><span class="o">:</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span>  <span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">stopMovingUp</span><span class="p">();</span>    <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">A</span><span class="o">:</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span>  <span class="k">this</span><span class="p">.</span><span class="nx">leftPaddle</span><span class="p">.</span><span class="nx">stopMovingDown</span><span class="p">();</span>  <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">P</span><span class="o">:</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">stopMovingUp</span><span class="p">();</span>   <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">KEY</span><span class="p">.</span><span class="nx">L</span><span class="o">:</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">rightPaddle</span><span class="p">.</span><span class="nx">stopMovingDown</span><span class="p">();</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="c1">// MENU</span></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="nx">Menu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pong</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">press1</span> <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">images</span><span class="p">[</span><span class="s2">&quot;images/press1.png&quot;</span><span class="p">];</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">press2</span> <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">images</span><span class="p">[</span><span class="s2">&quot;images/press2.png&quot;</span><span class="p">];</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">winner</span> <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">images</span><span class="p">[</span><span class="s2">&quot;images/winner.png&quot;</span><span class="p">];</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">press1</span>  <span class="o">=</span> <span class="p">{</span> <span class="nx">image</span><span class="o">:</span> <span class="nx">press1</span><span class="p">,</span> <span class="nx">x</span><span class="o">:</span> <span class="mi">10</span><span class="p">,</span>                                                 <span class="nx">y</span><span class="o">:</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span>     <span class="p">};</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">press2</span>  <span class="o">=</span> <span class="p">{</span> <span class="nx">image</span><span class="o">:</span> <span class="nx">press2</span><span class="p">,</span> <span class="nx">x</span><span class="o">:</span> <span class="p">(</span><span class="nx">pong</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">press2</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="mi">10</span><span class="p">),</span>                   <span class="nx">y</span><span class="o">:</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span>     <span class="p">};</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">winner1</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">image</span><span class="o">:</span> <span class="nx">winner</span><span class="p">,</span> <span class="nx">x</span><span class="o">:</span> <span class="p">(</span><span class="nx">pong</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="nx">winner</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">6</span> <span class="o">*</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span> <span class="p">};</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">winner2</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">image</span><span class="o">:</span> <span class="nx">winner</span><span class="p">,</span> <span class="nx">x</span><span class="o">:</span> <span class="p">(</span><span class="nx">pong</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span>                <span class="o">+</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">6</span> <span class="o">*</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span> <span class="p">};</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">declareWinner</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">winner</span> <span class="o">=</span> <span class="nx">playerNo</span><span class="p">;</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">press1</span><span class="p">.</span><span class="nx">image</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">press1</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">press1</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">press2</span><span class="p">.</span><span class="nx">image</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">press2</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">press2</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">winner</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">winner1</span><span class="p">.</span><span class="nx">image</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">winner1</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">winner1</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">winner</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">winner2</span><span class="p">.</span><span class="nx">image</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">winner2</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">winner2</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="c1">// COURT</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="nx">Court</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pong</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">w</span>  <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">h</span>  <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ww</span> <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span><span class="p">;</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ww</span>    <span class="o">=</span> <span class="nx">ww</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">walls</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span>      <span class="nx">width</span><span class="o">:</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">ww</span><span class="p">});</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="nx">h</span> <span class="o">-</span> <span class="nx">ww</span><span class="p">,</span> <span class="nx">width</span><span class="o">:</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">ww</span><span class="p">});</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nMax</span> <span class="o">=</span> <span class="p">(</span><span class="nx">h</span> <span class="o">/</span> <span class="p">(</span><span class="nx">ww</span><span class="o">*</span><span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span> <span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">nMax</span> <span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// draw dashed halfway line</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">x</span><span class="o">:</span> <span class="p">(</span><span class="nx">w</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">ww</span> <span class="o">/</span> <span class="mi">2</span><span class="p">),</span> </div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span><span class="o">:</span> <span class="p">(</span><span class="nx">ww</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">ww</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">n</span><span class="p">),</span> </div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span> <span class="nx">ww</span><span class="p">,</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">ww</span><span class="p">});</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sw</span> <span class="o">=</span> <span class="mi">3</span><span class="o">*</span><span class="nx">ww</span><span class="p">;</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sh</span> <span class="o">=</span> <span class="mi">4</span><span class="o">*</span><span class="nx">ww</span><span class="p">;</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">score1</span> <span class="o">=</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mf">0.5</span> <span class="o">+</span> <span class="p">(</span><span class="nx">w</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="mf">1.5</span><span class="o">*</span><span class="nx">ww</span> <span class="o">-</span> <span class="nx">sw</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">2</span><span class="o">*</span><span class="nx">ww</span><span class="p">,</span> <span class="nx">w</span><span class="o">:</span> <span class="nx">sw</span><span class="p">,</span> <span class="nx">h</span><span class="o">:</span> <span class="nx">sh</span><span class="p">};</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">score2</span> <span class="o">=</span> <span class="p">{</span><span class="nx">x</span><span class="o">:</span> <span class="mf">0.5</span> <span class="o">+</span> <span class="p">(</span><span class="nx">w</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="mf">1.5</span><span class="o">*</span><span class="nx">ww</span><span class="p">,</span>      <span class="nx">y</span><span class="o">:</span> <span class="mi">2</span><span class="o">*</span><span class="nx">ww</span><span class="p">,</span> <span class="nx">w</span><span class="o">:</span> <span class="nx">sw</span><span class="p">,</span> <span class="nx">h</span><span class="o">:</span> <span class="nx">sh</span><span class="p">};</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">scorePlayer1</span><span class="p">,</span> <span class="nx">scorePlayer2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">walls</span><span class="p">;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span> <span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">.</span><span class="nx">length</span> <span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">[</span><span class="nx">n</span><span class="p">].</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">[</span><span class="nx">n</span><span class="p">].</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">[</span><span class="nx">n</span><span class="p">].</span><span class="nx">width</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">walls</span><span class="p">[</span><span class="nx">n</span><span class="p">].</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">drawDigit</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">scorePlayer1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score1</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score1</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score1</span><span class="p">.</span><span class="nx">w</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score1</span><span class="p">.</span><span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">drawDigit</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">scorePlayer2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score2</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score2</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score2</span><span class="p">.</span><span class="nx">w</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">score2</span><span class="p">.</span><span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">drawDigit</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">score</span><span class="p">;</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dw</span> <span class="o">=</span> <span class="nx">dh</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ww</span><span class="o">*</span><span class="mi">4</span><span class="o">/</span><span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">blocks</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Court</span><span class="p">.</span><span class="nx">DIGITS</span><span class="p">[</span><span class="nx">n</span><span class="p">];</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">dh</span><span class="p">);</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">dw</span><span class="p">,</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="o">+</span><span class="nx">w</span><span class="o">-</span><span class="nx">dw</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">dw</span><span class="p">,</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="nx">dh</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">dh</span><span class="p">);</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">4</span><span class="p">])</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span> <span class="nx">dw</span><span class="p">,</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">5</span><span class="p">])</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="o">+</span><span class="nx">w</span><span class="o">-</span><span class="nx">dw</span><span class="p">,</span> <span class="nx">y</span> <span class="o">+</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span> <span class="nx">dw</span><span class="p">,</span> <span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blocks</span><span class="p">[</span><span class="mi">6</span><span class="p">])</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="o">+</span><span class="nx">h</span><span class="o">-</span><span class="nx">dh</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">dh</span><span class="p">);</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">DIGITS</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 0</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="c1">// 1</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 2</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 3</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="c1">// 4</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 5</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 6</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span> <span class="c1">// 7</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="c1">// 8</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span>  <span class="c1">// 9</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC267'>&nbsp;&nbsp;<span class="c1">// PADDLE</span></div><div class='line' id='LC268'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>&nbsp;&nbsp;<span class="nx">Paddle</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pong</span><span class="p">,</span> <span class="nx">rhs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pong</span>   <span class="o">=</span> <span class="nx">pong</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">width</span>  <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">paddleWidth</span><span class="p">;</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">paddleHeight</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">minY</span>   <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span><span class="p">;</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxY</span>   <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">speed</span>  <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">maxY</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">)</span> <span class="o">/</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">paddleSpeed</span><span class="p">;</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setpos</span><span class="p">(</span><span class="nx">rhs</span> <span class="o">?</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span> <span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">maxY</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setdir</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setpos</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span>      <span class="o">=</span> <span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span>      <span class="o">=</span> <span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">left</span>   <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">right</span>  <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">top</span>    <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setdir</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dy</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">up</span>   <span class="o">=</span> <span class="p">(</span><span class="nx">dy</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="o">-</span><span class="nx">dy</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">down</span> <span class="o">=</span> <span class="p">(</span><span class="nx">dy</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span>  <span class="nx">dy</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setAuto</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">on</span><span class="p">,</span> <span class="nx">level</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">on</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">auto</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setLevel</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">on</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">auto</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setdir</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setLevel</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">level</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">level</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Levels</span><span class="p">[</span><span class="nx">level</span><span class="p">];</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="nx">ball</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ai</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="nx">ball</span><span class="p">);</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">amount</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">down</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">up</span><span class="p">;</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">amount</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="p">(</span><span class="nx">amount</span> <span class="o">*</span> <span class="nx">dt</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">speed</span><span class="p">);</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">)</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">;</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span><span class="p">)</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span><span class="p">;</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setpos</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ai</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="nx">ball</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(((</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">left</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">))</span> <span class="o">||</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">((</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">right</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingUp</span><span class="p">();</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingDown</span><span class="p">();</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">predict</span><span class="p">(</span><span class="nx">ball</span><span class="p">,</span> <span class="nx">dt</span><span class="p">);</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="mi">5</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingDown</span><span class="p">();</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">moveUp</span><span class="p">();</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="mi">5</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingUp</span><span class="p">();</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">moveDown</span><span class="p">();</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingUp</span><span class="p">();</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stopMovingDown</span><span class="p">();</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predict</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ball</span><span class="p">,</span> <span class="nx">dt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// only re-predict if the ball changed direction, or its been some amount of time since last prediction</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">dx</span> <span class="o">*</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">dy</span> <span class="o">*</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dy</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">since</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">.</span><span class="nx">aiReaction</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">since</span> <span class="o">+=</span> <span class="nx">dt</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pt</span>  <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">ballIntercept</span><span class="p">(</span><span class="nx">ball</span><span class="p">,</span> <span class="p">{</span><span class="nx">left</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">right</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">right</span><span class="p">,</span> <span class="nx">top</span><span class="o">:</span> <span class="o">-</span><span class="mi">10000</span><span class="p">,</span> <span class="nx">bottom</span><span class="o">:</span> <span class="mi">10000</span><span class="p">},</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span> <span class="o">*</span> <span class="mi">10</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dy</span> <span class="o">*</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span> <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">((</span><span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">b</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">t</span> <span class="o">+</span> <span class="p">(</span><span class="nx">t</span> <span class="o">-</span> <span class="nx">pt</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">t</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span> <span class="o">-</span> <span class="nx">t</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nx">pt</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span> <span class="o">=</span> <span class="nx">pt</span><span class="p">;</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">since</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">dx</span> <span class="o">=</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span><span class="p">;</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span> <span class="o">=</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">exactX</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">exactY</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">closeness</span> <span class="o">=</span> <span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">dx</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">right</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span><span class="p">)</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">pong</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">level</span><span class="p">.</span><span class="nx">aiError</span> <span class="o">*</span> <span class="nx">closeness</span><span class="p">;</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">Game</span><span class="p">.</span><span class="nx">random</span><span class="p">(</span><span class="o">-</span><span class="nx">error</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">walls</span><span class="p">;</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">predictions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">predictionExact</span><span class="p">;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeRect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">exactY</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="o">*</span><span class="mi">2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="o">*</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">predictionGuess</span><span class="p">;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">strokeRect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="o">*</span><span class="mi">2</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prediction</span><span class="p">.</span><span class="nx">radius</span><span class="o">*</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">moveUp</span><span class="o">:</span>         <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">up</span>   <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">moveDown</span><span class="o">:</span>       <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">down</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopMovingUp</span><span class="o">:</span>   <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">up</span>   <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopMovingDown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">down</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC415'>&nbsp;&nbsp;<span class="c1">// BALL</span></div><div class='line' id='LC416'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>&nbsp;&nbsp;<span class="nx">Ball</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pong</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pong</span>    <span class="o">=</span> <span class="nx">pong</span><span class="p">;</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">radius</span>  <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">ballRadius</span><span class="p">;</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">minX</span>    <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxX</span>    <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">minY</span>    <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">maxY</span>    <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">wallWidth</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">speed</span>   <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">maxX</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">minX</span><span class="p">)</span> <span class="o">/</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">ballSpeed</span><span class="p">;</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">accel</span>   <span class="o">=</span> <span class="nx">pong</span><span class="p">.</span><span class="nx">cfg</span><span class="p">.</span><span class="nx">ballAccel</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC430'><br/></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">playerNo</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setpos</span><span class="p">(</span><span class="nx">playerNo</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">?</span>   <span class="k">this</span><span class="p">.</span><span class="nx">maxX</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">minX</span><span class="p">,</span>  <span class="nx">Game</span><span class="p">.</span><span class="nx">random</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span><span class="p">));</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setdir</span><span class="p">(</span><span class="nx">playerNo</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">?</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">speed</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">speed</span><span class="p">);</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setpos</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span>      <span class="o">=</span> <span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span>      <span class="o">=</span> <span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">left</span>   <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">top</span>    <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">right</span>  <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">;</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setdir</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dx</span><span class="p">,</span> <span class="nx">dy</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">dx</span> <span class="o">=</span> <span class="nx">dx</span><span class="p">;</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dt</span><span class="p">,</span> <span class="nx">leftPaddle</span><span class="p">,</span> <span class="nx">rightPaddle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">accelerate</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dx</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">dy</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">accel</span><span class="p">,</span> <span class="nx">dt</span><span class="p">);</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxY</span><span class="p">;</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minY</span><span class="p">;</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">paddle</span> <span class="o">=</span> <span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dx</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">?</span> <span class="nx">leftPaddle</span> <span class="o">:</span> <span class="nx">rightPaddle</span><span class="p">;</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pt</span>     <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">ballIntercept</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">paddle</span><span class="p">,</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">nx</span><span class="p">,</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">ny</span><span class="p">);</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">pt</span><span class="p">.</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;left&#39;</span><span class="o">:</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;right&#39;</span><span class="o">:</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">pt</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dx</span> <span class="o">=</span> <span class="o">-</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dx</span><span class="p">;</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;top&#39;</span><span class="o">:</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;bottom&#39;</span><span class="o">:</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">pt</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="o">-</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC479'><br/></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// add/remove spin based on paddle direction</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">paddle</span><span class="p">.</span><span class="nx">up</span><span class="p">)</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">*</span> <span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mf">0.5</span> <span class="o">:</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">paddle</span><span class="p">.</span><span class="nx">down</span><span class="p">)</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">=</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">*</span> <span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mf">0.5</span> <span class="o">:</span> <span class="mf">1.5</span><span class="p">);</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC486'><br/></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setpos</span><span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span>  <span class="nx">pos</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setdir</span><span class="p">(</span><span class="nx">pos</span><span class="p">.</span><span class="nx">dx</span><span class="p">,</span> <span class="nx">pos</span><span class="p">.</span><span class="nx">dy</span><span class="p">);</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC490'><br/></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">draw</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Colors</span><span class="p">.</span><span class="nx">ball</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC496'><br/></div><div class='line' id='LC497'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC498'><br/></div><div class='line' id='LC499'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC500'>&nbsp;&nbsp;<span class="c1">// HELPER</span></div><div class='line' id='LC501'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="nx">Helper</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC504'><br/></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">accelerate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">dx</span><span class="p">,</span> <span class="nx">dy</span><span class="p">,</span> <span class="nx">accel</span><span class="p">,</span> <span class="nx">dt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">x2</span>  <span class="o">=</span> <span class="nx">x</span> <span class="o">+</span> <span class="p">(</span><span class="nx">dt</span> <span class="o">*</span> <span class="nx">dx</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">accel</span> <span class="o">*</span> <span class="nx">dt</span> <span class="o">*</span> <span class="nx">dt</span> <span class="o">*</span> <span class="mf">0.5</span><span class="p">);</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y2</span>  <span class="o">=</span> <span class="nx">y</span> <span class="o">+</span> <span class="p">(</span><span class="nx">dt</span> <span class="o">*</span> <span class="nx">dy</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">accel</span> <span class="o">*</span> <span class="nx">dt</span> <span class="o">*</span> <span class="nx">dt</span> <span class="o">*</span> <span class="mf">0.5</span><span class="p">);</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dx2</span> <span class="o">=</span> <span class="nx">dx</span> <span class="o">+</span> <span class="p">(</span><span class="nx">accel</span> <span class="o">*</span> <span class="nx">dt</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">dx</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dy2</span> <span class="o">=</span> <span class="nx">dy</span> <span class="o">+</span> <span class="p">(</span><span class="nx">accel</span> <span class="o">*</span> <span class="nx">dt</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">dy</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span> <span class="nx">nx</span><span class="o">:</span> <span class="p">(</span><span class="nx">x2</span><span class="o">-</span><span class="nx">x</span><span class="p">),</span> <span class="nx">ny</span><span class="o">:</span> <span class="p">(</span><span class="nx">y2</span><span class="o">-</span><span class="nx">y</span><span class="p">),</span> <span class="nx">x</span><span class="o">:</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="nx">y2</span><span class="p">,</span> <span class="nx">dx</span><span class="o">:</span> <span class="nx">dx2</span><span class="p">,</span> <span class="nx">dy</span><span class="o">:</span> <span class="nx">dy2</span> <span class="p">};</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">intercept</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">y1</span><span class="p">,</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y2</span><span class="p">,</span> <span class="nx">x3</span><span class="p">,</span> <span class="nx">y3</span><span class="p">,</span> <span class="nx">x4</span><span class="p">,</span> <span class="nx">y4</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">denom</span> <span class="o">=</span> <span class="p">((</span><span class="nx">y4</span><span class="o">-</span><span class="nx">y3</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">x2</span><span class="o">-</span><span class="nx">x1</span><span class="p">))</span> <span class="o">-</span> <span class="p">((</span><span class="nx">x4</span><span class="o">-</span><span class="nx">x3</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">y2</span><span class="o">-</span><span class="nx">y1</span><span class="p">));</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">denom</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">x4</span><span class="o">-</span><span class="nx">x3</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">y1</span><span class="o">-</span><span class="nx">y3</span><span class="p">))</span> <span class="o">-</span> <span class="p">((</span><span class="nx">y4</span><span class="o">-</span><span class="nx">y3</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">x1</span><span class="o">-</span><span class="nx">x3</span><span class="p">)))</span> <span class="o">/</span> <span class="nx">denom</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">ua</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ua</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ub</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">x2</span><span class="o">-</span><span class="nx">x1</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">y1</span><span class="o">-</span><span class="nx">y3</span><span class="p">))</span> <span class="o">-</span> <span class="p">((</span><span class="nx">y2</span><span class="o">-</span><span class="nx">y1</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">x1</span><span class="o">-</span><span class="nx">x3</span><span class="p">)))</span> <span class="o">/</span> <span class="nx">denom</span><span class="p">;</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">ub</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ub</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">x1</span> <span class="o">+</span> <span class="p">(</span><span class="nx">ua</span> <span class="o">*</span> <span class="p">(</span><span class="nx">x2</span><span class="o">-</span><span class="nx">x1</span><span class="p">));</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">y1</span> <span class="o">+</span> <span class="p">(</span><span class="nx">ua</span> <span class="o">*</span> <span class="p">(</span><span class="nx">y2</span><span class="o">-</span><span class="nx">y1</span><span class="p">));</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">d</span><span class="o">:</span> <span class="nx">d</span><span class="p">};</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ballIntercept</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ball</span><span class="p">,</span> <span class="nx">rect</span><span class="p">,</span> <span class="nx">nx</span><span class="p">,</span> <span class="nx">ny</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pt</span><span class="p">;</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nx</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">intercept</span><span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">nx</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">ny</span><span class="p">,</span> </div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">right</span>  <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">top</span>    <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">right</span>  <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;right&quot;</span><span class="p">);</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">nx</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">intercept</span><span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">nx</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">ny</span><span class="p">,</span> </div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">left</span>   <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">top</span>    <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">left</span>   <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;left&quot;</span><span class="p">);</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">pt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ny</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">intercept</span><span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">nx</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">ny</span><span class="p">,</span> </div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">left</span>   <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">right</span>  <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;bottom&quot;</span><span class="p">);</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ny</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pt</span> <span class="o">=</span> <span class="nx">Pong</span><span class="p">.</span><span class="nx">Helper</span><span class="p">.</span><span class="nx">intercept</span><span class="p">(</span><span class="nx">ball</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">nx</span><span class="p">,</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">ny</span><span class="p">,</span> </div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">left</span>   <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">top</span>    <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">right</span>  <span class="o">+</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> </div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rect</span><span class="p">.</span><span class="nx">top</span>    <span class="o">-</span> <span class="nx">ball</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;top&quot;</span><span class="p">);</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pt</span><span class="p">;</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>&nbsp;&nbsp;<span class="c1">//=============================================================================</span></div><div class='line' id='LC571'><br/></div><div class='line' id='LC572'><span class="p">};</span> <span class="c1">// Pong</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.08927s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

      <div class="hidden" id="js-avatars" data-url="https://avatars.github.com"></div>
  </body>
</html>

