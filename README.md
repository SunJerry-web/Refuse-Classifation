# Refuse-Classifation
## 前端实现垃圾分类查询
Home目录下是html文件

### first.html（第一个页面）<br>
1.使用Canvas画布和JS脚本做了一个动画（类似雪碧图），并且使用浮动让它一直浮在左上角的位置<br>
2.使用CSS的@keyframes做了一个动画，按钮震动效果<br>
3.&lt;h1&gt;大标题使用了阿里字体库<br>
4.使用了阿里的图标库<br>
5.响应式布局：可以分别适应iphone6等手机的竖屏，ipad，PC端<br><br><br>

### Home.html<br>
1.采用了两种不同的方式使用阿里的图标库（搜索栏的图标和中间的图标）<br>
2.使用了ajax调用了外部的API来提供数据（老师，请仔细看这里，我认为这里有些细节比较难做）<br>
3.使用cookie把每次查询得到的结果存储下来<br>
4.中间的图标绑定了onclick事件，点击跳转页面（width>=1024，跳出弹窗）<br>
5.搜索成功后中间出来的表格，采用ul,li等列表元素实现<br>
6.页脚部分使用CSS画了一个栅格<br>
7.响应式布局：可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端<br>
8.按钮那里的“搜索”使用CSS的伪元素实现<br><br><br>

### result.html（点击图标后跳转的那个界面）<br>
1.使用ejs简单的做了一个模版(result.tpl)<br>
2.使用ajax请求了json文件，然后又重构了一个json数据<br>
3.使用bootstrap框架实现了一个简单的响应式布局，可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端<br><br><br>

### introduction.html<br>
1.响应式布局：可以分别适应iphone6等手机的竖屏，横屏，ipad，PC端<br>
2.使用CSS里的transition属性，做了一个动态效果<br>
3.使用了阿里图标<br>


#### 演示地址
<a href="https://sunjerry-web.github.io/Refuse-Classifation/Home/first.html">演示地址</a><br>

### 项目基本功能
1.能实现基本的垃圾分类查询功能<br>
2.对生活中一些常见的垃圾种类进行了归类，点击相应图标即可查看<br>
3.可以展示基本的垃圾分类标准
