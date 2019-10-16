<template>
  <div>
    <ul class="listing">
      <div v-for="year in years()" :key="year">
        <h3 class="rainbow">{{ year }}</h3>
        <li>
          <router-link
            v-for="post in posts"
            v-if="post.frontmatter.year == year"
            :to="post.path"
          >{{ post.frontmatter.title}} <span class="post__date">{{ postDate(post.frontmatter.date) }}</span></router-link>
          
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  import {
    compact,
    flatMap,
    uniq
  } from "lodash";
  import dayjs from 'dayjs'

  export default {
    name: "BlogIndex",
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
          .sort(
            (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
    },
    methods: {
      years() {
        return compact(uniq(flatMap(this.$site.pages, "frontmatter.year")))
          .sort()
          .reverse();
      },

      postDate(date) {
        return dayjs(date).format('MMMM D, YYYY')
      }
    }
  };
</script>

<style lang="scss">
.rainbow {
  display: inline-block;
  background-image: linear-gradient(
    90deg,
    #f79533 0%,
    #f37055 15%,
    #ef4e7b 30%,
    #a166ab 44%,
    #5073b8 58%,
    #1098ad 72%,
    #07b39b 86%,
    #6dba82 100%
  );
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

ul.listing {
  list-style: none;
  margin-left: 0;

  h3 {
    color: #333;
    font-weight: 900;
    border-left: 8px solid #ff487a;
    padding-left: 10px;
  }

  li a {
    color: #333;
    border-bottom: 1px dotted #ddd;

    &:hover {
      -webkit-animation: zomg 3s infinite;
      -moz-animation: zomg 3s infinite;
      animation: zomg 3s infinite;
      text-decoration: none !important;
    }

    .post__date {
      color: hsla(0, 0%, 0%, .4) !important;
      cursor: default;
      float: right;

      &:hover {
        color: hsla(0, 0%, 0%, .4) !important;
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