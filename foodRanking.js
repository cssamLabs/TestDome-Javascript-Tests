/** Challange - Food Ranking
 * 
 * A website needs a list where users can rank their favorite foods. Write the setup function, which should register click handlers on all Up! and Down! buttons. The Up! button should move the list item one place up in the list, while Down! button should move the list item one place down in the list.

 *   For example, consider this code:

 * document.body.innerHTML = `<ol>
 * <li><button>Up!</button>Taco<button>Down!</button></li>
 * <li><button>Up!</button>Pizza<button>Down!</button></li>
 * <li><button>Up!</button>Eggs<button>Down!</button></li>
 * </ol>`;

 * setup();
 * If the button Up! button in Pizza list item is clicked, Pizza should be the first item in the list, while Taco should be the second item.
 */

 function setup() {
    let lis = document.getElementsByTagName('li');
    Array.prototype.forEach.call(lis, function (li, index) {
        let childern = li.querySelectorAll("li > button");
        childern.forEach((child)=>{
          console.log('child ', child)
            if(child.textContent == 'Up!'){
                let itemRemoved = lis.removeChild(li);
                child.parentNode.insertBefore(index-1, 0, itemSpliced);
            } else if(child.textContent == 'Down!'){
                let itemSpliced = lis.splice(index, 1);
                lis.splice(index+1, 0, itemSpliced);
            } 
        })
    })
  }
  
  // Example case
  document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;


  setup();
  document.getElementsByTagName('button')[2].click();
  
  console.log(document.body.innerHTML);

