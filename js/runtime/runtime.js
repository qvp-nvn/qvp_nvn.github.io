/*
 * @Author: qvp-nvn 386059889@qq.com
 * @Date: 2023-01-10 14:41:38
 * @LastEditors: qvp-nvn 386059889@qq.com
 * @LastEditTime: 2023-01-10 15:06:09
 * @FilePath: /blog/source/js/runtime/runtime.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var now = new Date;
function createtime() {
    var t = new Date("01/01/2023 00:00:00");
    now.setTime(now.getTime() + 250);
    var e = (now - t) / 1e3 / 60 / 60 / 24,
        a = Math.floor(e), n = (now - t) / 1e3 / 60 / 60 - 24 * a,
        r = Math.floor(n); 1 == String(r).length && (r = "0" + r);
    var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r, i = Math.floor(s);
    1 == String(i).length && (i = "0" + i);
    var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i, l = Math.round(o);
    1 == String(l).length && (l = "0" + l); let g = "";
    g = r < 18 && r >= 9 ? `<img class='boardsign' src='https://img01.anzhiy.cn/useruploads/60/2023/01/10/63bd02a4e2ec4.png' title='想要摆烂~'><span class='textTip'> <br>  本站运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>` : `<img class='boardsign' src='https://img01.anzhiy.cn/useruploads/60/2023/01/10/63bd02a4e2ec4.png' title='接着卷~'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = g)
} setInterval((() => { createtime() }), 250);