<template>
  <div class="blog__footer">
    <ul>
      <li>
        <a href="https://twitter.com/jebkor_" target="_blank">twitter</a>
      </li>
      <li>•</li>
      <li>
        <a href="https://jebkor.dk" target="_blank">website</a>
      </li>
      <li>•</li>
      <li>
        <a href="https://github.com/jebkor" target="_blank">github</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
.blog__footer {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    align-items: center;

    li {
      & + li {
        margin-left: 10px;
      }

      a {
        color: #333;

        &:hover {
          -webkit-animation: zomg 3s infinite;
          -moz-animation: zomg 3s infinite;
          animation: zomg 3s infinite;
        }
      }
    }
  }
}

@keyframes zomg {
  0%,
  100% {
    color: #7ccdea;
  }
  16% {
    color: #0074d9;
  }
  32% {
    color: #2ecc40;
  }
  48% {
    color: #ffdc00;
  }
  64% {
    color: #b10dc9;
  }
  80% {
    color: #ff4136;
  }
}
</style>