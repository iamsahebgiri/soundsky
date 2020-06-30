<template>
  <div
    class="modal fade"
    id="shortcutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="shortcutModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h4>Shortcuts</h4>
          <br>
          <p>The player will bind the following keyboard shortcuts when it is focused.</p>
          <table class="table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>space</code>
                </td>
                <td>Toggle playback</td>
              </tr>
              <tr>
                <td>
                  <code>K</code>
                </td>
                <td>Toggle playback</td>
              </tr>
              <tr>
                <td>←</td>
                <td>
                  Seek backward by the
                  <code>seekTime</code> option
                </td>
              </tr>
              <tr>
                <td>→</td>
                <td>
                  Seek forward by the
                  <code>seekTime</code> option
                </td>
              </tr>
              <tr>
                <td>↑</td>
                <td>Increase volume</td>
              </tr>
              <tr>
                <td>↓</td>
                <td>Decrease volume</td>
              </tr>
              <tr>
                <td>
                  <code>M</code>
                </td>
                <td>Toggle mute</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-close" data-dismiss="modal">Dismiss</button>
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
