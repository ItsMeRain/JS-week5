let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];
//初始設定
const list = document.querySelector(".ticketCard-area")
const searchText = document.querySelector("#searchResult-text")
function render(area) {
  let str = ""
  let num = 0
  const newData = data.filter(function (item) {
    if(area==item.area){
      return item
    }
    else if(!area){
      return item
    }
  })
  newData.forEach(function (item) {
    str+=`<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
        ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
  </li>`
  num++
  })
  // console.log(newData);
  list.innerHTML = str
  searchText.textContent = `本次搜尋共 ${num} 筆資料`
}
render()

//新增功能
  const addBtn = document.querySelector(".addTicket-btn")

function addCard() {
  const ticketName=document.querySelector("#ticketName")
  const ticketImgUrl=document.querySelector("#ticketImgUrl")
  const ticketRegion=document.querySelector("#ticketRegion")
  const ticketPrice=document.querySelector("#ticketPrice")
  const ticketNum=document.querySelector("#ticketNum")
  const ticketRate=document.querySelector("#ticketRate")
  const ticketDescription=document.querySelector("#ticketDescription")
  
  const ticketNameMessage=document.querySelector("#ticketName-message")
  const ticketImgUrlMessage=document.querySelector("#ticketImgUrl-message")
  const ticketRegionMessage=document.querySelector("#ticketRegion-message")
  const ticketPriceMessage=document.querySelector("#ticketPrice-message")
  const ticketNumMessage=document.querySelector("#ticketNum-message")
  const ticketRateMessage=document.querySelector("#ticketRate-message")
  const ticketDescriptionMessage=document.querySelector("#ticketDescription-message")
  let warn =`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`
  let obj = {};
  obj.name = ticketName.value
  obj.imgUrl = ticketImgUrl.value
  obj.area = ticketRegion.value
  obj.description = ticketDescription.value
  obj.group = ticketNum.value
  obj.price = ticketPrice.value
  obj.rate = ticketRate.value
  function resetWarn() {
    ticketNameMessage.innerHTML =""
    ticketImgUrlMessage.innerHTML =""
    ticketRegionMessage.innerHTML =""
    ticketPriceMessage.innerHTML =""
    ticketNumMessage.innerHTML =""
    ticketRateMessage.innerHTML =""
    ticketDescriptionMessage.innerHTML =""
  }
  if(obj.name===""){
    resetWarn()
    ticketNameMessage.innerHTML =warn;
    return}
  if(obj.imgUrl===""){
    resetWarn()
    ticketImgUrlMessage.innerHTML =warn;
    return
  }
  if(obj.area===""){
    resetWarn()
    ticketRegionMessage.innerHTML =warn;
    return
  }
  if(obj.price===""){
    resetWarn()
    ticketPriceMessage.innerHTML =warn;
    return
  }
  if(obj.group===""){
    resetWarn()
    ticketNumMessage.innerHTML =warn;
    return
  }
  if(obj.rate===""||obj.rate==0){
    resetWarn()
    ticketRateMessage.innerHTML =warn;
    return
  }
  if(obj.description===""){
    resetWarn()
    ticketDescriptionMessage.innerHTML =warn;
    return
  }
  obj.group = Number(ticketNum.value)
  obj.price = Number(ticketPrice.value)
  obj.rate = Number(ticketRate.value)
  if(obj.rate>10){
    obj.rate=10
  }
  else if(obj.rate<1){
    obj.rate=1
  }
  //新增資料
  data.unshift(obj)
  //清空 from 資料
  resetWarn()
  const from = document.querySelector(".addTicket-form")
  from.reset()
  //重新渲染
  render()
}
addBtn.addEventListener("click",addCard)
//篩選功能
const areaSelect = document.querySelector(".regionSearch")

areaSelect.addEventListener("change",function () {
  render(areaSelect.value)
})
