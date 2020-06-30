<template>
  <div class="col-2 pr-0 pl-0 left-panel position-fixed">
    <img src="~/assets/meetwits.svg" alt="Meetwits" class="logo mt-3 ml-1" />
    <div class="menu">
      <ul class="my-nav">
        <nuxt-link to="/" class="my-nav-item" exact>
          <li>
            <i class="material-icons md-24">home</i>Home
          </li>
        </nuxt-link>
       <nuxt-link to="/artist" class="my-nav-item ">
          <li>
            <i class="material-icons">supervised_user_circle</i>Artists
          </li>
       </nuxt-link>
        <nuxt-link to="/category" class="my-nav-item ">
          <li>
            <i class="material-icons">category</i>Category
          </li>
        </nuxt-link>
        <nuxt-link to="/playlist/37i9dQZEVXbMDoHDwVN2tF" class="my-nav-item">
          <li>
            <i class="material-icons">whatshot</i>Trendings
          </li>
        </nuxt-link>

        <a href="#" class="my-nav-item">
          <li>
            <i class="material-icons">favorite</i>Favourites
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<style>
.left-panel {
  background: var(--bg);
}
.left-panel {
  height: 100%;
}
.logo {
  height: 30px;
}

.my-nav {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

.my-nav li {
  padding: 6px 0;
}

.my-nav a {
  text-decoration: none;
  color: var(--text-color);
}

.my-nav li:hover {
  background: var(--light-gray);
}
.my-nav-item i {
  margin-left: 15px;
  margin-right: 15px;
  vertical-align: middle;
}

.my-nav .nuxt-link-active li {
  color: var(--dodger-blue);
  font-weight: 500;
  border-left: 4px solid;
}
</style>
