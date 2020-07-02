<template>
  <div
    class="modal fade"
    id="shortcutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="shortcutModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h4>About SoundSky</h4>
          <br>
          <p>
            The only motivation behind soundsky is to have better knowledge of how api works in general and how big companies like Spotify use them on their front end. This project taught me oauth and most of the security stuff. SoundSky is built on top of Nuxt.js, a framework of vue.js.
          </p>
          <p>
            You can download song as ringtone or play 30 seconds track for fun and relax.
          </p>
          <p>
            Do check me out on <a href="http://iamsahebgiri.now.sh" target="_blank">iamsahebgiri.now.sh</a>.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-close" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-content{
  border:none;
  background:var(--bg);
  color:var(--text-color);
}
.modal-content h6,p,th,td{
  color:var(--text-color);
}
.modal-content svg{
  stroke: var(--icons-color);
}

.modal-footer{
  padding-top:0;
  border:none;
}
.btn-close {
  background:var(--bg);
  border: none;
  color: var(--radical-red);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border-radius: 3px;
  padding: 6px 18px;
  user-select: none;
}
.btn-close:focus {
  outline: 0;
}
.btn-close:hover {
  background: var(--radical-red);
  color: var(--bg);
}
</style>
