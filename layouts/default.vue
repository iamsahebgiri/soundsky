<template>
  <div class="container-fluid pl-0 pr-0 light">
    <Sidebar />
    <BottomPlayer />
    <div class="col-10 right-panel">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from "~/components/Sidebar";
import BottomPlayer from "~/components/BottomPlayer";

export default {
  components: {
    Sidebar,
    BottomPlayer
  },
};
</script>

<style>
html,
body {
  font-family: -apple-system, "Inter","Segoe UI", Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
:root {
  --dodger-blue: #1377ff;
  --radical-red: #f62459;
  --brand-color: #1377ff;
}
.container-fluid.light {
  --bg: #ffffff;
  --light-gray: #ebebeb;
  --grey-text: #848484;
  --text-color: #000000;
  --icons-color: #000000;
  --navigation-gray-4: rgb(209, 209, 214);
  --sidebar-gray-6: #f2f2f7;
  --gray-1: #8e8e93;
}

.container-fluid.dark {
  --bg: #000;
  --light-gray: #424242;
  --text-color: #ffffff;
  --icons-color: #ffffff;
  --navigation-gray-4: rgb(58, 58, 60);
  --sidebar-gray-6: #1c1c1e;
  --gray-1: #8e8e93;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  color: var(--text-color) !important;
}
.song-name,
.category-name,
.album-name {
  color: var(--text-color) !important;
  font-size: 15px;
}
.bottom-bar.light {
  background: rgba(255, 255, 255, 0.7);
}
.bottom-bar.dark {
  background: rgba(28, 28, 28, 0.7);
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
*:focus {
  outline: 0 !important;
}
.right-panel {
  background: var(--bg);
}
.right-panel {
  margin-left: 16.6666667%;
}
/* Rules for sizing the icon. */
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}

/* Rules for using icons as black on a light background. */
.material-icons.md-dark {
  color: rgba(0, 0, 0, 0.54);
}
.material-icons.md-dark.md-inactive {
  color: rgba(0, 0, 0, 0.26);
}

/* Rules for using icons as white on a dark background. */
.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
.material-icons.md-light.md-inactive {
  color: rgba(255, 255, 255, 0.3);
}
html.transition,
html.transition *,
html.transition *:before,
html.transition *:after {
  transition: background 750ms !important;
  transition-delay: 0s !important;
}
</style>
