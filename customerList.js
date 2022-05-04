/** Challange - Customer List 
 * 
 * Implement the showCustomers function so that it renders customers as list items. The first argument to the function, customers, is an array of objects with the name and email properties. The second argument to the function, targetList, is an unordered HTML list to which each customer should be added as a separate list item.

The name and email properties should be added as two paragraphs inside the list item. At first, the email paragraph element should not be present in the DOM. The email paragraph element should be added to the DOM after the name is clicked, and it should be removed from the DOM when the name is clicked again.

For example, the following code:

document.body.innerHTML = `
<div>
  <ul id="customers">
  </ul>
</div>
`;
let customers = [{name: "John", email: "john@example.com"},
                 {name: "Mary", email: "mary@example.com"}];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if(customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);
Should render:

<div>
  <ul id="customers">
    <li>
      <p>John</p>
      <p>john@example.com</p>
    </li>
    <li>
      <p>Mary</p>
    </li>
  </ul>
</div>
*/


function showCustomers(customers, targetList) {
    customers.forEach(customer => {
        let li = document.createElement("li");
        targetList.appendChild(li);
        
        let namep = document.createElement("p");
        namep.onclick = function(){
            let emailp = document.createElement("p");
            emailp.append(customer.email);
            emailp.remove();
            li.appendChild(emailp);
        }
        namep.append(customer.name);
        li.appendChild(namep);
        
        return false;
    });
  }
  
  document.body.innerHTML = `
  <div>
    <ul id="customers">
    </ul>
  </div>
  `;
  let customers = [{name: "John", email: "john@example.com"},
                   {name: "Mary", email: "mary@example.com"}];
  showCustomers(customers, document.getElementById("customers"));
  
  let customerParagraph = document.querySelectorAll("li > p")[0];
  if(customerParagraph) {
    customerParagraph.click();
  }
  console.log(document.body.innerHTML);

  /** Test - Result
   * 
   * <div>
   * <ul id="customers">
   * <li><p>John</p><p>john@example.com</p></li><li><p>Mary</p></li></ul>
   * </div>
   * 
   *   Example case: Correct answer 
   * Customer names are rendered correctly: Correct answer 
   * Clicking customer names shows email: Correct answer 
   * Clicking customer names again hides email: 
   */