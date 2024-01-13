### mojo && base
This is a project spun off from chromium. you can use mojo and base outside of chromium projects.
- stripped from chromium 103.0.5060.114
- is only verified to compile on windows and mac
- windows support clang and msvc build
### how to build
As you know, this project needs [depot\_tools](https://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/depot_tools_tutorial.html#_setting_up) to compile, and make sure it's in your PATH.

```
mkdir chromium-mojo && cd chromium-mojo
touch .gclient
```
and then copy [.gclient_default](https://github.com/Drecc/chromium-mojo/blob/103.0.5060.114/.gclient_default) content to .gclient
```
gclient sync
```
It will automatically download the relevant dependencies of the project, after executing gclient sync, you can use gn related commands to compile the project
```
cd src
gn args out/debug
```
You can enter compile parameters as simple as：
```
is_debug = true
```
Then use the ninja tool to start compiling
```
ninja -C out/debug mojo
```


分支修改的内容：
https://github.com/brunoduan/mojo-strip/
0. 对比修改的代码
mojo/public/cpp/platform/named_platform_channel_posix.cc



1.缺少文件 
git clone https://chromium.googlesource.com/linux-syscall-support chromium-mojo/third_party/lss

2.制定参数文件
通过执行 
gn args out/debug
根据提示配置参数
cat debug/args.gn 

is_debug=false  

declare_args() {
  complete_static_lib = false
}

参数说明：
is_debug=false  关闭tests
complete_static_lib 指定编译静态库