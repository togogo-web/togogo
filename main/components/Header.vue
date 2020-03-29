<template>
	<div class="tgg-nav-bar">
        <div class="tgg-nav-bar-logo">
          <a>Togogo</a>
        </div>
        <div class="tgg-nav-bar-search" v-show="showSearch">
          <input type="text" placeholder="搜索高质量图片">
        </div>
        <ul class="tgg-nav-bar-sub-nav">
          <li><a>Collection</a></li>
          <li><a>Explore</a></li>
          <li>
            <div><a>...</a></div>
            <ul class="tgg-nav-bar-sub-nav-more">
              <li>About us</li>
              <li>Linsence</li>
              <li>Language</li>
              <li>Help</li>
            </ul>
          </li>
          <li>
            <div class="tgg-nav-bar-login">
              <div><a>Login</a></div>
              <div><a>Join Free</a></div>
            </div>
          </li>
        </ul>
        
	</div>
</template>

<script>
export default {
  name: "Header",
  props: ["showSearch"],
  data() {
    return {

    };
  },
  mounted() {
    console.log(this.showSearch)
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
ul{
  list-style: none;
}
.tgg-nav-bar{
  width: 100%;
  height: 66px;
  background: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 66px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 1.15rem;
  z-index: 30;
}

.tgg-nav-bar-logo{
    font-size: 19px;
    line-height: 1;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
    color: #232a34;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
}

.tgg-nav-bar-search {
  max-width: 750px;
  width: 100%;
  margin-left: 2.15rem;
  border-radius: 24px;
  background-color: #eee;
  font-size: 14px;
  border: 1px solid transparent;
  display: -webkit-box;
  display: flex;
  border: none;
  border-radius: 25px;
  z-index: 1;
}
.tgg-nav-bar-search>input{
  display: block;
  font-size: 17px;
  line-height: 22px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  -webkit-box-flex: 1;
  flex: 1;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #111;
  padding: .7rem 1.25rem;
  padding-top: .625rem;
  padding-bottom: .625rem;
  font-weight: 500;
  width: 0;
  z-index: 1;
  font-size: 14px;
  letter-spacing: 2px;
}
.tgg-nav-bar-search>input:focus{
  outline: none;
}
.tgg-nav-bar-sub-nav {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: -2.15rem;
  color: #767676;
}
.tgg-nav-bar-sub-nav a{
  cursor: pointer;
}
.tgg-nav-bar-sub-nav a:hover {
  color: #111;
}
.tgg-nav-bar-sub-nav-more{
  display: none;
  position: absolute;
  left: 0;
  top: calc(100% + 0.75rem);
  min-width: 175px;
  cursor: default;
  text-shadow: none;
  z-index: 28;
}
.tgg-nav-bar-sub-nav>li{
  margin-right: 2.15rem;
}
.tgg-nav-bar-login{
  display: flex;
  width: 12rem;
  height: 32px;
  line-height: 32px;
  border-left: 1px solid #d1d1d1;
}
.tgg-nav-bar-login>div{
  width: 5rem;
  text-align: center;
}
</style>
