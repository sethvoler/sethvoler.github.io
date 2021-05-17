(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{509:function(e,v,_){e.exports=_.p+"assets/img/ho1.f2d31ab7.jpeg"},510:function(e,v,_){e.exports=_.p+"assets/img/ho3.cbd634cd.jpeg"},511:function(e,v,_){e.exports=_.p+"assets/img/ho4.1c302182.png"},512:function(e,v,_){e.exports=_.p+"assets/img/ho5.69698696.png"},544:function(e,v,_){"use strict";_.r(v);var s=_(2),t=Object(s.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("RanLan"),e._v(" "),s("h2",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[e._v("#")]),e._v(" 环境")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MacOS Mojave v10.14.1")])]),e._v(" "),s("li",[s("code",[e._v("VMware Fusion v11.0.2")])]),e._v(" "),s("li",[s("code",[e._v("Ubuntu 20.04LTS")])])]),e._v(" "),s("h2",{attrs:{id:"引导流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引导流程"}},[e._v("#")]),e._v(" 引导流程")]),e._v(" "),s("p",[s("code",[e._v("HelloOS")]),e._v(" 操作系统的引导程序基于 "),s("code",[e._v("Ubuntu")]),e._v(" 已有的 "),s("code",[e._v("GRUB")]),e._v("，引导流程如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:_(509),alt:"引导流程"}})]),e._v(" "),s("p",[s("code",[e._v("PC")]),e._v(" 机 "),s("code",[e._v("BIOS")]),e._v(" 固件是固化在 "),s("code",[e._v("PC")]),e._v(" 机主板上的 "),s("code",[e._v("ROM")]),e._v(" 芯片中的，掉电也能保存，"),s("code",[e._v("PC")]),e._v(" 机上电后的第一条指令就是 "),s("code",[e._v("BIOS")]),e._v(" 固件中的，它负责检测和初始化 "),s("code",[e._v("CPU")]),e._v("、内存及主板平台，然后加载引导设备（大概率是硬盘）中的第一个扇区数据，到 "),s("code",[e._v("0x7c00")]),e._v(" 地址开始的内存空间，再接着跳转到 "),s("code",[e._v("0x7c00")]),e._v(" 处执行指令，在这里的情况下就是 GRUB 引导程序。")]),e._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),s("p",[e._v("系统在安装之前需要进行编译，即把每个代码模块编译最后链接成可执行的二进制文件。编译过程如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:_(510),alt:"编译"}})]),e._v(" "),s("h2",{attrs:{id:"编译工具安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译工具安装"}},[e._v("#")]),e._v(" 编译工具安装")]),e._v(" "),s("ul",[s("li",[e._v("在 "),s("code",[e._v("Ubuntu")]),e._v(" 中安装 "),s("code",[e._v("make")]),e._v("，"),s("code",[e._v("sudo apt install make")])]),e._v(" "),s("li",[e._v("在 "),s("code",[e._v("Ubuntu")]),e._v(" 中安装 "),s("code",[e._v("nasm")]),e._v("，"),s("code",[e._v("sudo apt-get install nasm")])]),e._v(" "),s("li",[e._v("在 "),s("code",[e._v("Ubuntu")]),e._v(" 中安装 "),s("code",[e._v("gcc")]),e._v("，"),s("code",[e._v("sudo apt-get install gcc")])])]),e._v(" "),s("h2",{attrs:{id:"编译过程涉及文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译过程涉及文件"}},[e._v("#")]),e._v(" 编译过程涉及文件")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entry.asm")]),e._v(": 使用汇编代码来处理 "),s("code",[e._v("C")]),e._v(" 语言的工作环境并调用 "),s("code",[e._v("C")])]),e._v(" "),s("li",[s("code",[e._v("main.c")]),e._v(": 供 "),s("code",[e._v("entry.asm")]),e._v(" 调用的入口文件")]),e._v(" "),s("li",[s("code",[e._v("vgastr.c")]),e._v(": 屏幕打印方法实现，由 "),s("code",[e._v("vgastr.h")]),e._v(" 提供方法声明")]),e._v(" "),s("li",[s("code",[e._v("hello.lds")]),e._v(": 控制链接过程的链接脚本")]),e._v(" "),s("li",[s("code",[e._v("makefile")]),e._v(": "),s("code",[e._v("make")]),e._v(" 工具编译脚本")])]),e._v(" "),s("p",[e._v("最终在项目根目录下打开终端，执行 "),s("code",[e._v("make")]),e._v(" 命令，由 "),s("code",[e._v("nasm")]),e._v(" 和 "),s("code",[e._v("GCC")]),e._v(" 编译成可链接模块，由 "),s("code",[e._v("LD")]),e._v(" 链接器链接在一起，形成可执行的程序文件 "),s("code",[e._v("HelloOS.bin")])]),e._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("ul",[s("li",[e._v("要让 "),s("code",[e._v("GRUB")]),e._v(" 能够找到 "),s("code",[e._v("HelloOS.bin")]),e._v("，才能在计算机启动时加载它。")]),e._v(" "),s("li",[s("code",[e._v("GRUB")]),e._v(" 在启动时会加载一个 "),s("code",[e._v("grub.cfg")]),e._v(" 的文本文件，根据其中的内容执行相应的操作，其中一部分内容就是启动项。")]),e._v(" "),s("li",[s("code",[e._v("GRUB")]),e._v(" 首先会显示启动项到屏幕，然后让我们选择启动项，最后 "),s("code",[e._v("GRUB")]),e._v(" 根据启动项对应的信息，加载 "),s("code",[e._v("OS")]),e._v(" 文件到内存。")]),e._v(" "),s("li",[e._v("终端输入 "),s("code",[e._v("df /boot/")]),e._v("，查找启动目录挂载的分区")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Filesystem     1K-blocks    Used Available Use% Mounted on\n/dev/sda5       "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19992176")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7590744")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11362840")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("41")]),e._v("% /\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("启动配置代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("menuentry 'HelloOS' {\n  insmod part_msdos #GRUB加载分区模块识别分区\n  insmod ext2 #GRUB加载ext文件系统模块识别ext文件系统\n  #注意boot目录挂载的分区，这里需要根据自己的机器目录修改\n  set root='hd0,msdos5'\n  multiboot2 /boot/HelloOS.bin #GRUB以multiboot2协议加载HelloOS.bin\n  boot #GRUB启动HelloOS.bin\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("其中的 "),s("code",[e._v("sda5")]),e._v(" 就是硬盘的第五个分区，但是 "),s("code",[e._v("GRUB")]),e._v(" 的 "),s("code",[e._v("menuentry")]),e._v(" 中不能写 "),s("code",[e._v("sda5")]),e._v("，而是要写 "),s("code",[e._v("hd0,msdos5")]),e._v("，这是 "),s("code",[e._v("GRUB")]),e._v(" 的命名方式，"),s("code",[e._v("hd0")]),e._v(" 表示第一块硬盘，结合起来就是第一块硬盘的第五个分区。")])]),e._v(" "),s("li",[s("p",[e._v("把上面启动项的代码写入 "),s("code",[e._v("/boot/grub/grub.cfg")]),e._v(" 文件中，")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("sudo chmod +w /boot/grub/grub.cfg")]),e._v(" 设置写入权限")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("sudo gedit /boot/grub/grub.cfg")]),e._v(" 对文件进行编辑后保存")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("sudo chmod -w /boot/grub/grub.cfg")]),e._v(" 将文件的权限改回只读")])]),e._v(" "),s("li",[s("p",[e._v("然后把 "),s("code",[e._v("HelloOS.bin")]),e._v(" 文件复制到 "),s("code",[e._v("/boot/")]),e._v(" 目录下，"),s("code",[e._v("sudo cp HelloOS.bin /boot/")])])]),e._v(" "),s("li",[s("p",[e._v("为了每次开机都进入引导程序，修改 "),s("code",[e._v("/etc/default/grub")])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# GRUB_TIMEOUT_STYLE=hidden\nGRUB_TIMEOUT=10\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("更新 "),s("code",[e._v("GRUB")]),e._v("，"),s("code",[e._v("sudo update-grub")])]),e._v(" "),s("li",[e._v("最后重启计算机，就可以看到 "),s("code",[e._v("HelloOS")]),e._v(" 的启动选项了。")])]),e._v(" "),s("p",[s("img",{attrs:{src:_(511),alt:"引导界面"}})]),e._v(" "),s("ul",[s("li",[e._v("选择 "),s("code",[e._v("HelloOS")]),e._v("，按下 "),s("code",[e._v("Enter")]),e._v(" 键，这样就可以成功启动我们自己的 "),s("code",[e._v("HelloOS")]),e._v(" 了。")])]),e._v(" "),s("p",[s("img",{attrs:{src:_(512),alt:"启动打印"}})]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/sethvoler/helloOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码地址 "),s("code",[e._v("https://github.com/sethvoler/helloOS")]),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);v.default=t.exports}}]);