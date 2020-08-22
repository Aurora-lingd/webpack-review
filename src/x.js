import css from './style.css'

import png from './assets/weiguang.png'
const div = document.getElementById('img')

const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = () => {
  //如何实现懒加载 把import 当成一个函数，去加载这个文件，然后会得到一个promise ，promise.then 前面写成功做什么 后面写失败做什么
  const promise = import('./lazy')
  promise.then((module) => {
    module.default()
  }, (err) => { console.log(err) })
}
