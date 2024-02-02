// 切换tab
let attrTabs = (a) => {
  let active = a.toString();
  let $tabs = document.querySelectorAll('.photos-btn-wrap .photos-tab');
  for (let i = 0, len = $tabs.length; i < len; i++) {
    let $tab = $tabs[i];
    $tab.classList.remove('active');
    if (!active && i === 0) {
      $tab.classList.add('active');
    } else if (active === $tab.getAttribute('attr_name')) {
      $tab.classList.add('active');
    }
  }
  let $albums = document.querySelectorAll('.photos .tabs-album');
  for (let i = 0, len = $albums.length; i < len; i++) {
    let $album = $albums[i];
    $album.classList.remove('active');
    if (!active && i === 0) {
      $album.classList.add('active');
    } else if (active === $album.getAttribute('attr_name')) {
      $album.classList.add('active');
    }
  }
};
