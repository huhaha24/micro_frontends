const Page2 = props => {
  return <div>
    <h2>iframe的问题</h2>
    <ul>
      <li>内部有弹窗或全局提示的情况，遮罩层无法覆盖主应用的部分</li>
      <li>浏览器前进/回退的时候，需要通知子应用进行页面的切换</li>
      <li>iframe加载的时候比较慢，会有卡顿的感觉</li>
      <li>对于登陆才能访问的页面，同步cookie和token比较麻烦</li>
    </ul>
  </div>
}

export default Page2