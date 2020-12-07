let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好,我叫小彭
*接下来,我要演示一下我的前端功底
*首先我要准备一个div
*/
#div1 {
  width:200px;
  height:200px;
}

/* 接下来我要把div变成一个八卦图
* 注意看好了
* 首先,把div变成一个圆
*/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*
八卦是阴阳形成的
一黑一白
**/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加两个神秘的小球
**/
#div1::before {
  width:100px;
  height:100px;
  border-radius: 50%;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  border-radius: 50%;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = "";
let n = -1;
let step = () => {
  n++;
  setTimeout(() => {
    if (string[n] === "\n") {
      // 如果是回车,就不照搬
      string2 += "</br>"
    } else if (string[n] === " ") {
      string2 += "&nbsp;"

    } else {
      // 如果不是回车,就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n + 1);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    console.log(style.innerHTML);
    if (n + 1 < string.length) {
      step();
    }
  }, 50)
}
step();