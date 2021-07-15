Page({
  data: {
    titles: ['衣服','裤子','鞋子']
  },
  handleBtnClick() {
    console.log('按钮发生点击')
  },
  boxClick() {
    console.log('boxClick')
  },
  boxMove() {
    console.log('boxMove')
  },
  boxEnd() {
    console.log('boxEnd')
  },
  boxTap() {
    console.log('boxTap')
  },
  boxLongpress() {
    console.log('boxLongpress')
  },
  eventClick(event) {
    console.log('eventClick',event)
  },
  handleInner(event) {
    console.log('handleInner',event)
  },
  handleOuter(event) {
    console.log('handleOuter',event)
  },
  itemClick(event) {
    console.log('itemClick',event)

    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index=  dataset.index;
    console.log(title,index)
  },

  // ------------事件冒泡和事件捕获-------------
  handleCapture1(event) {
    console.log('handleCapture1',event)
  },
  handleBind1(event) {
    console.log('handleBind1',event)
  },
  handleCapture2(event) {
    console.log('handleCapture2',event)
  },
  handleBind2(event) {
    console.log('handleBind2',event)
  },
  handleCapture3(event) {
    console.log('handleCapture3',event)
  },
  handleBind3(event) {
    console.log('handleBind3',event)
  },

})