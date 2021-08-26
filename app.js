let parentCards= document.querySelectorAll('.Card');

parentCards.forEach((parentCard)=>{
  let remover=parentCard.querySelector('.remover');
  remover.addEventListener('click',()=>{
      parentCard.remove();
      parentCard.classList.remove('Card');
      parentCard.classList.add('deleted-Card');
      countNewNodeList();
      countNewPrices(parentCard);

  });
});
function countNewNodeList(){
  let parentCards=document.querySelectorAll('.Card');

  if(parentCards.length===0){
    let checkoutBtn=document.querySelector('#checkout-btn');
    checkoutBtn.classList.add('disabled');
  }

}

function countNewPrices(parentCard){

  let totalBag = document.querySelector('.bag-total > h5:nth-child(2) > span');

  let discount=document.querySelector('.bag-discount > h5:nth-child(2)');
  let totalInvoice=document.querySelector('.Total > h5:nth-child(2)>span');


  totalBag.innerText = parseInt(totalBag.innerText) - parseInt(parentCard.querySelector('.item-price>span').innerText);
  totalInvoice.innerText = parseInt(totalInvoice.innerText) - parseInt(parentCard.querySelector('.item-price>span').innerText);
  
  
 
}