<template>
  <div class="col-12 single-line d-flex justify-content-between">
    <div class="searchbar d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        v-model="searchTerm"
        v-on:keyup="submitSearch"
        type="text"
        name="query"
        class="query"
        id="query"
        placeholder="Search tracks..."
      />
    </div>
    <div class="actionbar d-flex align-items-center">
      <div class="dark-mode">
        <button type="button" class="action-btn" @click="toggleDarkMode()">
          <span class="iconify" data-icon="ion:sunny-outline" data-inline="false"></span>
        </button>
      </div>
      <div class="settings">
        <button
          type="button"
          class="action-btn btn-settings"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="iconify" data-icon="ion:settings-outline" data-inline="false"></span>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" data-toggle="modal" data-target="#shortcutModal">Soundsky</button>
          <a class="dropdown-item" href="https://github.com/iamsahebgiri" target="_blank">Github</a>
          <a class="dropdown-item" href="https://instagram.com/iamsahebgiri" target="_blank">Instagram</a>
          <a class="dropdown-item" href="https://facebook.com/iamsahebgiri" target="_blank">Facebook</a>
          <a class="dropdown-item" href="https://iamsahebgiri.now.sh" target="_blank">About</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Function for smooth trasitioning in Dark and Light Mode
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    submitSearch: function(e) {
      if (e.keyCode === 13) {
        const term = this.searchTerm;
        this.$router.push({ path: `/search/${term}` });
      }
    },
    toggleDarkMode: function() {
      if ($(".container-fluid").hasClass("dark")) {
        trans();
        $(".container-fluid").removeClass("dark");
        $(".bottom-bar").removeClass("dark");
        $(".topbox").removeClass("dark");

        $(".container-fluid").addClass("light");
        $(".bottom-bar").addClass("light");
        $(".topbox").addClass("light");
      } else {
        trans();
        $(".container-fluid").addClass("dark");
        $(".bottom-bar").addClass("dark");
        $(".topbox").addClass("dark");
      }
    }
  }
};
</script>

<style>
.searchbar {
  height: 36px;
  width: 360px;
  background-color: var(--sidebar-gray-6);
  padding: 0 10px;
  border-radius: 6px;
}
.searchbar .feather-search {
  height: 18px;
  width: 18px;
  margin-right: 10px;
  color: var(--grey-text);
}
.searchbar .query {
  width: 300px;
  border: none;
  outline: none;
  background: none;
  color: var(--grey-text);
}
.actionbar div {
  padding: 6px;
  border-radius: 6px;
}
.actionbar .iconify {
  color: var(--icons-color);
}
.actionbar .action-btn {
  height: 32px;
  width: 32px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background: none;
  padding: 4px;
  outline: none;
  border-radius: 10px;
  user-select: none;
}
.actionbar .action-btn:focus {
  outline: 0;
}
.actionbar .action-btn:hover {
  background-color: var(--light-gray);
}
.dropdown-menu {
  margin-top: 5px !important;
  box-shadow: 2px 2px 4px var(--light-gray);
}
.dropdown-menu:before {
  position: absolute;
  top: -7px;
  right: 9px;
  display: inline-block;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ccc;
  border-left: 7px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  content: "";
}
.dropdown-menu:after {
  position: absolute;
  top: -6px;
  right: 10px;
  display: inline-block;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  border-left: 6px solid transparent;
  content: "";
}
</style>
