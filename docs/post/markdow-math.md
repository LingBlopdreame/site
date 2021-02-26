---
title: Markdown math 常用公式语法整理(基于LaTeX)
date: '2021-02-05'
sidebar: 'auto'
categories: 
  - 笔记/整理
tags: 
  - Markdown
publish: true
---

# Markdown 公式语法整理

## 添加公式

### 1.行内公式

```markdown
$ (需要输入的公式) $
```

### 2. 单行公式

```markdown
$$
(需要输入的公式)
$$
```

## 常用算式

| 序号 | 名称   | 语法                               | 效果                           |
| ---- | ------ | ---------------------------------- | ------------------------------ |
| 1    | 分式   | \$\frac{a}{b}\$                    | $\frac{a}{b}$                  |
| 2    | 根式   | \$\sqrt{a}\$                       | $\sqrt{a}$                     |
| 3    | 上角标 | \$x^2\$       \$x^{2n}\$           | $x^2$       $x^{2n}$           |
| 4    | 下角标 | \$x_2\$        \$x_{2n}\$          | $x_2$        $x_{2n}$          |
| 5    | 向量   | \$\vec{a}\$                        | $\vec{a}$                      |
| 7    | 均值   | \$\over{x}\$      \$\overline{X}\$ | $\over{x}$      $\overline{X}$ |
| 8    | 极限   | \$\lim_{n \to + \infty}\$          | $\lim_{n \to + \infty}$        |
| 9    | 积分   | \$\int_0^n f(x)dx\$                | $\int_0^n f(x)dx$              |
| 10   | 累加   | \$\sum_{i=1}^n a_i\$               | $\sum_{i=1}^n a_i$             |
| 11   | 累乘   | \$\prod_{i=1}^n x_i\$              | $\prod_{i=1}^n x_i$            |



## 矩阵

### 1. 简单矩阵

语法：

```markdown
$$
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{matrix}
$$
```

效果：

$$
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{matrix}
$$


### 2. 带大括号

语法：

```markdown
$$
\left\{
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9\\
\end{matrix}
\right\}
$$
```

效果：

$$
\left\{
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{matrix}
\right\} 
$$

### 3. 带中括号

语法：

```markdown
$$
\left[
\begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
\end{matrix}
\right]
$$
```

效果：

$$\left[ 
  \begin{matrix}
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9 
  \end{matrix}
\right]
$$

### 4. 带参数

比如写增广矩阵，可能需要最右边一列单独考虑。可以用 `array` 命令来处理：

```markdown
$$
\left[
    \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      7 & 8 & 9
    \end{array}
\right]
$$
```

效果：

$$
\left[
    \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      7 & 8 & 9
    \end{array}
\right]
$$

## 运算符

| 运算符            | 语法                |
| ----------------- | ------------------- |
| $\pm$             | \$\pm\$             |
| $\times$          | \$\times\$          |
| $\cdot$           | \$\cdot\$           |
| $\div$            | \$\div\$            |
| $\leq$            | \$\leq\$            |
| $\geq$            | \$\ge\$             |
| $\neq$            | \$\neq\$            |
| $\Rightarrow$     | \$\Rightarrow\$     |
| $\Leftrightarrow$ | \$\Leftrightarrow\$ |
| $\subset$         | \$\subset\$         |
| $\subseteq$       | \$\subseteq\$       |
| $\in$             | \$\in\$             |
| $\notin$          | \$\notin\$          |
| $\cup$            | \$\cup\$            |
| $\cap$            | \$\cap\$            |
| $\mathbb{R}$      | \$\mathbb{R}\$      |



## 函数

### 1. 三角函数与对数函数

| 函数       | 语法       |
| ---------- | ---------- |
| $\sin(x)$  | `\sin(x)`  |
| $cos(x)$   | `\cons(x)` |
| $\tan(x)$  | `\tan(x)`  |
| $\log_2 x$ | `\log_2 x` |
| $\ln x$    | `\ln x`    |
| $\lg x$    | `\lg x`    |



### 2. 分段函数

语法：

```markdown
$$
f(x)=
\begin{cases}
1 & x\geq 0\\
0 & x<0
\end{cases}
$$
```

效果：

$$
f(x)=
\begin{cases}
1 & x \geq 0\\
0 & x<0 
\end{cases}
$$

## 古希腊字母

| 大写 | 语法          | 小写 | 语法        |
| ---- | ------------- | ---- | ----------- |
| A    | A or \Alpha   | α    | \alpha      |
| B    | B or \Beta    | β    | \beta       |
| Γ    | \Gamma        | γ    | \gamma      |
| Δ    | \Delta        | δ    | \delta      |
| E    | E or \Epsilon | ϵ    | \epsilon    |
|      |               | ε    | \varepsilon |
| Z    | Z or \Zeta    | ζ    | \zeta       |
| H    | H or \Eta     | η    | \eta        |
| Θ    | \Theta        | θ    | \theta      |
| I    | I or \Iota    | ι    | \iota       |
| K    | K or \Kappa   | κ    | \kappa      |
| Λ    | \Lambda       | λ    | \lambda     |
| M    | M or \Mu      | μ    | \mu         |
| N    | N or \Nu      | ν    | \nu         |
| Ξ    | \Xi           | ξ    | \xi         |
| O    | O or \Omicron | ο    | \omicron    |
| Π    | \Pi           | π    | \pi         |
| P    | P or \Rho     | ρ    | \rho        |
| Σ    | \Sigma        | σ    | \sigma      |
| T    | T or \Tau     | τ    | \tau        |
| Υ    | Y or \Upsilon | υ    | \upsilon    |
| Φ    | \Phi          | ϕ    | \phi        |
| X    | X or \Chi     | χ    | \chi        |
| Ψ    | \Psi          | ψ    | \psi        |
| Ω    | \Omega        | ω    | \omega      |