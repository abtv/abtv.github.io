function createMenu(currentPage){
  var navbar = $('<div />').appendTo('body');
  navbar.attr("class", "navbar-inverse navbar-fixed-top");
  navbar.attr("role", "navigation");

  var container = $('<div />').appendTo(navbar);
  container.attr("class", "container");

  var navbarHeader = $('<div />').appendTo(container);
  navbarHeader.attr("class", "navbar-header");

  var navbarBrand = $('<div />').appendTo(navbarHeader);
  navbarBrand.attr("class", "navbar-brand");
  navbarBrand.text("abtv's blog");

  var navbarCollapse = $('<div />').appendTo(container);
  navbarCollapse.attr("class", "collapse navbar-collapse");

  var navbarNav = $('<ul />').appendTo(navbarCollapse);
  navbarNav.attr("class", "nav navbar-nav");

  var liEnglish = createMenuItem("index.html", "English", currentPage);
  liEnglish.appendTo(navbarNav);
  var liUbuntu = createMenuItem("ubuntu.html", "Ubuntu", currentPage);
  liUbuntu.appendTo(navbarNav);
  var liWindows = createMenuItem("windows.html", "Windows", currentPage);
  liWindows.appendTo(navbarNav);
  var liTrainer = createMenuItem("trainer.html", "English trainer", currentPage);
  liTrainer.appendTo(navbarNav);
  $('<br />').appendTo('navbar');
  $('<br />').appendTo('navbar');
}

function createMenuItem(href, title, currentPage){
  var li = $('<li />');
  if (href == currentPage){
    li.attr("class", "active");
  }
    var a = $('<a />').appendTo(li);
    a.attr("href", href);
    a.text(title);
  return li;
}