<template>
	<div class="tgg_homepage">
    <Header :show-search="showSearch"></Header>
    <div class="tgg-home-header">
      <picture class="tgg-home-header-picture">
        <img class="tgg-home-header-picture-img" role="presentation" src="https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;fit=crop&amp;w=1000&amp;h=1000&amp;q=80">
      </picture>
      <Search></Search>
    </div>
    <div class="tgg-home-content"></div>
		<div class="tgg-home-footer"></div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Header from "../../components/Header";
import Search from "../../components/Search";

export default {
  name: "home",
  components: {
    Header,
    Search
  },
  data() {
    return {
      showSearch: true
    };
  },
  mounted() {
    this.initWelcomeText();
    this.initLinks();
  },
  computed: {
    ...mapState("home", ["welcomeText","supportLinks"]),
    ...mapGetters("home", ["dateText"])
  },
  methods: {
    ...mapActions("home", {
      initWelcomeText: "getWelcomeText",
      initLinks: "getSupportLinks"
    })
  }
};
</script>

<style scoped>
h1,
h2,
div {
  font-weight: normal;
  font-family: "微软雅黑", sans-serif;
}
.tgg-home-header{
  height: 600px;
  background-color: #111;
  color: #fff;
  margin-top: 66px;
  margin-bottom: 48px;
}
.tgg-home-header-picture{
  display: block;
  width: 100%;
  height: 100%;
}
.tgg-home-header-picture-img{
  font-family: "object-fit:cover";
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

</style>
