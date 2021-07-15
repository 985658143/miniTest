// components/my-style/my-style.js
Component({
  options: {
    // 默认是isolated 样式不会相互影响
    // styleIsolation: "isolated"
    // apply-shared只有组件受到影响
    // styleIsolation: "apply-shared"
    // shared 都受到影响
    styleIsolation: "shared"

  }
 
})
