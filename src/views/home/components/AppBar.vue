<template>
  <div class="app-bar">
    <svg>
      <defs>
        <g id="chat">
          <ellipse cx="50" cy="50" rx="50" ry="40"></ellipse>
          <polygon points="10 80, 5 95, 15 90"></polygon>
          <line x1="30" y1="30" x2="30" y2="35"></line>
          <line x1="65" y1="40" x2="70" y2="40"></line>
          <ellipse cx="50" cy="70" rx="10" ry="5"></ellipse>
        </g>
        <g id="leftalign">
          <line x1="10" y1="10" x2="20" y2="10" />
          <line x1="10" y1="20" x2="30" y2="20" />
          <line x1="10" y1="30" x2="20" y2="30" />
          <line x1="10" y1="40" x2="30" y2="40" />
        </g>

        <g id="browser">
          <rect x="10" y="10" width="100" height="60" />
          <line x1="10" y1="30" x2="110" y2="30" />
          <line x1="40" y1="10" x2="40" y2="30" />
        </g>

        <!-- <g id="important">
          <ellipse cx="40" cy="40" rx="30" ry="30" />
          <line x1="40" y1="20" x2="40" y2="50" />
          <ellipse cx="40" cy="60" rx="1" ry="1" style="fill: black" />
        </g>-->

        <symbol id="important" viewbox="0 0 70 70">
          <ellipse cx="40" cy="40" rx="30" ry="30" />
          <line x1="40" y1="20" x2="40" y2="50" />
          <ellipse cx="40" cy="60" rx="1" ry="1" style="fill: black" />
        </symbol>

        <!-- <polyline points="10 10, 30 30, 10 50"></polyline> -->
        <g id="play">
          <ellipse cx="40" cy="40" rx="30" ry="30" />
          <polygon points="30 30, 30 50, 47 40" />
        </g>

        <path d="M 10 10 L 20 10 L 20 40 L 30 40 L 15 50 L 0 40 L 10 40 Z" />
      </defs>
      <use href="#chat" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'app-bar'
}
</script>

<style lang="scss" scoped>
.app-bar {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 80px;
  transform: translateX(-50%);
  box-shadow: $--box-shadow-light;
  border-radius: 8px;
}
svg {
  stroke: #000;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
