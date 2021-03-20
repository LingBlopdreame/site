(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{541:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stm32-完美迁移到-apm32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stm32-完美迁移到-apm32"}},[t._v("#")]),t._v(" STM32 完美迁移到 APM32")]),t._v(" "),s("h2",{attrs:{id:"起因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),s("p",[t._v("大部分人做控制时首选芯片应该大部分都是 "),s("code",[t._v("STM32")]),t._v(" 系列芯片，但是，因为部分原因，"),s("code",[t._v("ST")]),t._v(" 的芯片价格暴涨，故为保障成本，急需一种可以代替 ST 的芯片，因此便得到消息说国产的 "),s("code",[t._v("APM32")]),t._v(" 的芯片可以完美替代 STM32 ， 因此便决定进行尝试。")]),t._v(" "),s("h2",{attrs:{id:"工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),s("p",[t._v("由于APM32的各种配置与引脚均与STM32一样，这里使用ST官方的工具进行开发：")]),t._v(" "),s("h3",{attrs:{id:"硬件准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬件准备"}},[t._v("#")]),t._v(" 硬件准备")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("STLink-v2，没有STLink的，或者不想用STLink的，如果板子支持UART烧录(串口芯片)，可串口烧录")])]),t._v(" "),s("li",[s("p",[t._v("APM32F1 开发板， 笔者这里是使用的自己绘制的 APM32F103RET6 最小系统板")])])]),t._v(" "),s("h3",{attrs:{id:"软件准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件准备"}},[t._v("#")]),t._v(" 软件准备")]),t._v(" "),s("ul",[s("li",[t._v("STM32CubeMX，用于代码生成")]),t._v(" "),s("li",[t._v("STM32CubeProgramer，用于烧录")]),t._v(" "),s("li",[t._v("VSCode，用于编辑代码")]),t._v(" "),s("li",[t._v("gcc-arm-none-eabi，用于编译工程")])]),t._v(" "),s("p",[t._v("目前暂不支持STM32CubeIDE，原因是芯片型号匹配不上")]),t._v(" "),s("h2",{attrs:{id:"创建工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建工程"}},[t._v("#")]),t._v(" 创建工程")]),t._v(" "),s("p",[t._v("使用STM32CubeMX生成代码，该过程与STM32芯片配置一样，选型是只需注意F1xx之后的型号即可，这里选择生成 "),s("code",[t._v("Makefile")]),t._v(" 工程(生成其他工程也是一样的)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/site/assets/img/MX.png",alt:"MX"}})]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("main.c")]),t._v(" 的 while 中添加用户逻辑(简单的小灯闪烁)：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* USER CODE BEGIN WHILE */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_GPIO_TogglePin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LED_GPIO_Port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LED_Pin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_Delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* USER CODE END WHILE */")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* USER CODE BEGIN 3 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* USER CODE END 3 */")]),t._v("\n")])])]),s("p",[t._v("在命令行中编译工程，生成 elf，bin，hex文件，这三个文件任意那个都可以烧录：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("lingblopdreame@lbd:~/stm32_template/STM32F103RETx_Core$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\narm-none-eabi-gcc -c -mcpu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cortex-m3 -mthumb   -DUSE_HAL_DRIVER -DSTM32F103xE -ICore/Inc -IDrivers/STM32F1xx_HAL_Driver/Inc -IDrivers/STM32F1xx_HAL_Driver/Inc/Legacy -IDrivers/CMSIS/Device/ST/STM32F1xx/Include -IDrivers/CMSIS/Include -IDrivers/CMSIS/Include -Og -Wall -fdata-sections -ffunction-sections -g -gdwarf-2 -MMD -MP -MF"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build/main.d"')]),t._v(" -Wa,-a,-ad,-alms"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("build/main.lst Core/Src/main.c -o build/main.o\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\narm-none-eabi-size build/STM32F103RETx_Core.elf\n   text    data     bss     dec     hex filename\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3688")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1572")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5280")]),t._v("    14a0 build/STM32F103RETx_Core.elf\narm-none-eabi-objcopy -O ihex build/STM32F103RETx_Core.elf build/STM32F103RETx_Core.hex\narm-none-eabi-objcopy -O binary -S build/STM32F103RETx_Core.elf build/STM32F103RETx_Core.bin\n")])])]),s("p",[t._v("使用STM32CubeProgramer进行烧录：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/site/assets/img/pr.png",alt:"pr"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/site/assets/img/st.jpg",alt:"pr"}})]),t._v(" "),s("p",[t._v("最终效果：")]),t._v(" "),s("p",[s("video",{attrs:{src:"/site/assets/video/end.mp4"}})]),t._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("总体来说，APM32的开发可以完美移植到APM32上，其实使用其他工具如 keil 开发的工程一样可以使用上述的方法，其本质是不变的，但是还是建议使用不会直接匹配芯片型号的开发工具。下一步性能检测。")])])}),[],!1,null,null,null);a.default=n.exports}}]);