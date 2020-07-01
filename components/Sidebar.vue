<template>
  <div class="col-2 pr-0 pl-0 left-panel position-fixed">
    <img src="~/assets/meetwits.svg" alt="Meetwits" class="logo" />
    <div class="menu">
      <p class="nav-group-title">Library</p>
      <ul class="my-nav">
        <nuxt-link to="/" class="my-nav-item" exact>
          <li>
            <span class="iconify" data-icon="ion:home-outline" data-inline="true"></span>Home
          </li>
        </nuxt-link>
        <nuxt-link to="/artist" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:people-outline" data-inline="false"></span>Artists
          </li>
        </nuxt-link>
        <nuxt-link to="/category" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:musical-notes-outline" data-inline="false"></span>Category
          </li>
        </nuxt-link>
        <nuxt-link to="/playlist/37i9dQZEVXbMDoHDwVN2tF" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:flash-outline" data-inline="false"></span>Trendings
          </li>
        </nuxt-link>

        <a href="#" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:heart-outline" data-inline="false"></span>Liked Song
          </li>
        </a>
      </ul>
    </div>
    <div class="menu">
      <p class="nav-group-title">Playlists</p>
      <ul class="my-nav playlists">
        <a href="#" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:folder-outline" data-inline="false"></span>Top 50
          </li>
        </a>
        <a href="#" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:folder-outline" data-inline="false"></span>Viral Hits
          </li>
        </a>
        <a href="#" class="my-nav-item">
          <li>
            <span class="iconify" data-icon="ion:folder-outline" data-inline="false"></span>Bollywood
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<style>
.left-panel {
  background: var(--sidebar-gray-6);
}
.left-panel {
  height: 100%;
}
.logo {
  height: 35px;
  margin:20px 10px;
}

.my-nav {
  list-style-type: none;
  padding: 0;
}

.my-nav li {
  height: 32px;
  margin: 0 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.my-nav a {
  text-decoration: none;
  color: var(--text-color);
}

.my-nav li:hover {
  background: var(--navigation-gray-4);
}
.my-nav .iconify {
  font-size: 18px;
  margin-left: 12px;
  margin-right: 6px;
  color: var(--brand-color);
}
.nav-group-title {
  font-size: 13px;
  color: #6b778c !important;
  margin: 3px 13px;
  font-weight: 500;
}
.my-nav .nuxt-link-active li {
  background: var(--navigation-gray-4);
}
.playlists a li .iconify {
  color: var(--gray-1);
}
</style>
