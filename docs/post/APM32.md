---
title: 
date: '2021-03-20'
sidebar: 'auto'
categories: 
  - APM32
tags: 
  - APM32
publish: true
---
# STM32 完美迁移到 APM32

## 起因

大部分人做控制时首选芯片应该大部分都是 `STM32` 系列芯片，但是，因为部分原因，`ST` 的芯片价格暴涨，故为保障成本，急需一种可以代替 ST 的芯片，因此便得到消息说国产的 `APM32` 的芯片可以完美替代 STM32 ， 因此便决定进行尝试。

## 工具

由于APM32的各种配置与引脚均与STM32一样，这里使用ST官方的工具进行开发：

### 硬件准备

- STLink-v2，没有STLink的，或者不想用STLink的，如果板子支持UART烧录(串口芯片)，可串口烧录

- APM32F1 开发板， 笔者这里是使用的自己绘制的 APM32F103RET6 最小系统板

### 软件准备

- STM32CubeMX，用于代码生成
- STM32CubeProgramer，用于烧录
- VSCode，用于编辑代码
- gcc-arm-none-eabi，用于编译工程

目前暂不支持STM32CubeIDE，原因是芯片型号匹配不上

## 创建工程

使用STM32CubeMX生成代码，该过程与STM32芯片配置一样，选型是只需注意F1xx之后的型号即可，这里选择生成 `Makefile` 工程(生成其他工程也是一样的)

![MX](/site/assets/img/MX.png)

在 `main.c` 的 while 中添加用户逻辑(简单的小灯闪烁)：

```c
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    HAL_GPIO_TogglePin(LED_GPIO_Port, LED_Pin);
    HAL_Delay(200);
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */
```

在命令行中编译工程，生成 elf，bin，hex文件，这三个文件任意那个都可以烧录：

```shell
lingblopdreame@lbd:~/stm32_template/STM32F103RETx_Core$ make
arm-none-eabi-gcc -c -mcpu=cortex-m3 -mthumb   -DUSE_HAL_DRIVER -DSTM32F103xE -ICore/Inc -IDrivers/STM32F1xx_HAL_Driver/Inc -IDrivers/STM32F1xx_HAL_Driver/Inc/Legacy -IDrivers/CMSIS/Device/ST/STM32F1xx/Include -IDrivers/CMSIS/Include -IDrivers/CMSIS/Include -Og -Wall -fdata-sections -ffunction-sections -g -gdwarf-2 -MMD -MP -MF"build/main.d" -Wa,-a,-ad,-alms=build/main.lst Core/Src/main.c -o build/main.o
...
...
arm-none-eabi-size build/STM32F103RETx_Core.elf
   text    data     bss     dec     hex filename
   3688      20    1572    5280    14a0 build/STM32F103RETx_Core.elf
arm-none-eabi-objcopy -O ihex build/STM32F103RETx_Core.elf build/STM32F103RETx_Core.hex
arm-none-eabi-objcopy -O binary -S build/STM32F103RETx_Core.elf build/STM32F103RETx_Core.bin
```

使用STM32CubeProgramer进行烧录：

![pr](/site/assets/img/pr.png)

![pr](/site/assets/img/st.jpg)

最终效果：

<video src="/site/assets/video/end.mp4"></video>

## 结语

总体来说，APM32的开发可以完美移植到APM32上，其实使用其他工具如 keil 开发的工程一样可以使用上述的方法，其本质是不变的，但是还是建议使用不会直接匹配芯片型号的开发工具。下一步性能检测。