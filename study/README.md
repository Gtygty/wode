

# 代码



> `window.getComputedStyle(document.documentElement,null)['fontSize'] `  ***查看浏览器默认字体大小***
____




>`<meta name ="viewport" content ="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">`***手机端头部声明***

```
/* Small screens (default) */
html { font-size: 100%; }

/* Medium screens (640px) */
@media (min-width: 40rem) {
  html { font-size: 112%; }
}

/* Large screens (1024px) */
@media (min-width: 64rem) {
  html { font-size: 120%; }
}

body {
    color: #333;
    margin: 0;
    padding: 0;

    font-family: Verdana, Arial;
    font-size: 0.8rem;
}
```