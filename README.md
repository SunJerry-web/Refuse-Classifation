# Refuse-Classifation
## 前端实现垃圾分类查询

### first.html（第一个页面）
1.使用Canvas画布和JS脚本做了一个动画（类似雪碧图），并且使用浮动让它一直浮在左上角的位置
2.使用CSS的@keyframes做了一个动画，按钮震动效果
3.<pre><h1></pre>大标题使用了阿里字体库
4.使用了阿里的图标库
5.响应式布局：可以分别适应iphone6等手机的竖屏，ipad，PC端

### Home.html
1.采用了两种不同的方式使用阿里的图标库（搜索栏的图标和中间的图标）
2.使用了ajax调用了外部的API来提供数据（老师，请仔细看这里，我认为这里比较难做）
3.使用cookie把每次查询得到的结果存储下来
4.中间的图标绑定了onclick事件，点击跳转页面（width>=1024，跳出弹窗）
5.搜索成功后中间出来的表格，采用ul,li等列表元素实现
6.页脚部分使用CSS画了一个栅格
7.响应式布局：可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端
8.按钮那里的“搜索”使用CSS的伪元素实现

### result.html（点击图标后跳转的那个界面）
1.使用ejs简单的做了一个模版(result.tpl)
2.使用ajax请求了json文件，然后又重构了一个json数据
3.使用bootstrap框架实现了一个简单的响应式布局，可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端

### introduction.html
1.响应式布局：可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端
2.使用CSS里的transition属性，做了一个动态效果
3.使用了阿里图标
