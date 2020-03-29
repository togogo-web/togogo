====
togogo-web项目说明
----

## 脚手架目录
| 目录名称 | 作用|备注|
| ---- | ---- | -----|
|config|webpack配置文件||
|build|webpack脚本文件|可运行相应脚本进行打包、启动开发服务器等操作|
|main| 项目开发源码|业务逻辑在此进行开发|
|main/assets|样式、图片等静态文件|全局样式、字体图标库等|
|main/common|公共服务| 对ajax等公共服务进行二次封装与拦截处理|
|main/components|vue公共组件|页面之间重复使用的组件|
|main/config|公共配置|目前项目公共配置放到根目录static目录下，此处备用|
|main/lang|语言包|前端页面中可进行语言更换的所有文本键值对|
|main/router|vue路由|页面跳转逻辑|
|main/service|数据服务|通过axios提供的ajax获取数据服务|
|main/store|全局状态管理|vuex|
|main/utils|工具类函数|项目全局可通用的工具类函数|
|main/view|页面视图|根据实际项目需要进行开发的页面逻辑|
|main/App.vue|vue组件入口|可进行布局、路由入口等配置|
|main/main.js|项目入口文件|加载初始化数据、加载依赖等|
|static|静态引入|不参与打包的第三方插件，通过script标签引入入口index.html中|
|test|单元测试相关||
|index.html|html入口文件|webpack打包模板|
|package.json|项目配置文件|npm安装依赖时会根据这个文件进行查找需要的依赖|
|.babelrc|es版本转换配置||
|.editorconfig|编辑器配置||
|.eslintignore|eslint忽略文件或目录||
|.eslintrc.js|eslint配置||
|.gitignore|git忽略的文件或目录||
|.postcssrc.js|css自动补全配置||

*注意，项目全局，比如后端接口地址等信息，在static/global-config.json中配置*
*/build /config /.babelrc /.editorconfig /.eslintignore /.eslintrc.js /.gitignore /.postcssrc.js /package.json
以上目录和文件属于项目配置文件，不需要改动*
