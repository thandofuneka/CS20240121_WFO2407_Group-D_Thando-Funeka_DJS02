const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  

  //Check if inputs are provided
  if(!dividend || !divider) {
    result.innerText = "Please enter both values!";
    return;
  }

  //Convert to numbers and check if the divider is 0
  const dividedNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  if(isNaN(dividedNum) || isNaN(dividerNum)) {
    result.innerText = "Please enter valid numbers!";
    return;
  }

  if(dividerNum === 0) {
    result.innerText = "Division can't occur with 0 as the divider!!!!";
    return;
  }

result.innerText = dividedNum / dividerNum;
});