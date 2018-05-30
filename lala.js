let originData = 'window.baidu.sug({q:"vue",p:false,s:["vue.js","vue.js 教程","vue.js 视频教程","vuex","vuejs","vue-cli","vue-router","vue router","vue computed","vue axios"]})';
let parseData = JSON.parse(originData.replace(/window.baidu.sug\(/, '').replace(/\)/, '').replace(/q/, '"$&"').replace(/p/, '"$&"').replace(/,s/, ',"s"'));
console.log(JSON.parse(parseData));