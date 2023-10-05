const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
  removeBorder()
  removeShow();
  //Add border to current tab content
  this.classList.add('tab-border')
  
  console.log(this.id);
 
  //add show class
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
// Remove show class from all content items
function removeShow(){
 tabContentItems.forEach(item => item.classList.remove('show'))
}
function removeBorder() {
tabItems.forEach(item => item.classList.remove('tab-border'))
}
//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))