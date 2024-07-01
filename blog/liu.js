//获取节点
let artEle = document.querySelector("article");
let secEle = document.getElementsByTagName("section")[0];

//创建数组
let arr = [
    {time: "2020-01-01", content: "今天星期五，明天星期六！" },
    {time: "2020-02-01", content: "中秋节快乐！" },
    {time: "2020-03-01", content: "明天不上课！爽翻！！！" },
    {time: "2020-04-01", content: "今晚做个好梦哦~" },
]

//将数据渲染到页面上
function render() {
    let str = "";
    arr.forEach((item, index) => {
        str += `
        <div>
           <p>
              <span>${item.content}</span>
              <span>${item.time}</span>
           </p>
        </div>
        `;
    });
    secEle.innerHTML = str;
}

//给祖先元素article绑定一个事件监听器（事件代理）
artEle.addEventListener("click", function (e) {
    let index = e.target.dataset.index - 0;
    if (e.target.value == "留言") {
        let textAreaEle = document.getElementsByTagName("textarea")[0];

        //获取本地时间
        let date = new Date();
        let localTime = date.toLocaleString();//年月日、时分秒同时获取
        //将原本的/ 换成-
        //replace该方法主要用于将字符串中符合匹配条件的字串替换成其他的字符串，
        //返回替换后的字符串，且原字符串不变。
        let gang = localTime.replace(/\//g, "-");
        //将用户输入的内容容作为对象存进数组
        arr.push(
            { name: "", time: gang, content: textAreaEle.value }
        )
        //清空输入框，方便下次输入
        textAreaEle.value = "";
        //再次渲染
        render();
    }
})
render();