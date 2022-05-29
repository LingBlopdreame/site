---
title: Jetson Nano 之 Hello AI World
date: '2021-02-26'
sidebar: 'auto'
categories:
  - Jetson系列
tags: 
  - Jetson Nano
publish: true
---

# Jetson Nano 之 Hello AI World

## 简介

这里直接从配置 Jetson-Inference 项目的环境开始, 需要从头开始配置[点这里](./jetson-nano-zhe.md)。首先，Jetson-Inference 的 github 项目链接：https://github.com/dusty-nv/jetson-inference 。

## 硬件配置

运行本项目，需要用到的硬件：

- Jetson nano Developer Kit
- Wireless-AC 8265无线网卡（也可以选择其他网络连接方式）
- IMX219-77 Camera  (这个就是树莓派 v2 摄像头)  (或者其他 CSI 摄像头)  (或者其他 USB 摄像头）
- 5V 4A DC电源
- HDMI 屏幕     (也可以远程连接)

## 安装

- 软件上需要 `cmake` ,  `python3` ,  `numpy` ，安装如下：(其中 `cmake` 请参考之前文章)

```bash
sudo apt-get update
sudo apt-get install libpython3-dev python3-numpy
```

- 正式安装：

```bash
cd ~/
git clone https://github.com/dusty-nv/jetson-inference
cd jetson-inference
git submodule update --init    
sudo mkdir build
cd build
sudo cmake ../   
make
sudo make install
```

- 权重文件的导入：

解压后直接放在 `build/aarch64/bin/network` 目录下

## 使用

请参考官方教程