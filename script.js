//javascript by johnson
document.addEventListener("DOMContentLoaded", ()=> {

    let lighttheme= document.getElementById('lighttheme');
    let darktheme= document.getElementById('darktheme');
    
    lighttheme.addEventListener('click', changetheme=() => {
        // document.body.classList.remove('dark');
        // document.body.classList.add('light');
        lighttheme.style.display = 'none';
        darktheme.style.display = 'block';
        document.getElementById('darkscreen').style.display = 'none';
        document.getElementById('heads').style.backgroundColor = 'white';
        document.getElementById('lightscreen').style.display = 'block';
        document.getElementById('container').style.backgroundColor = 'white';
    });
    darktheme.addEventListener('click', changetheme=() => {
        // document.body.classList.remove('dark');
        // document.body.classList.add('light');
        lighttheme.style.display = 'block';
        darktheme.style.display = 'none';
        document.getElementById('darkscreen').style.display = 'block';
        document.getElementById('lightscreen').style.display = 'none';
        document.getElementById('heads').style.backgroundColor = 'hsl(233, 14%, 35%)';
        document.getElementById('container').style.backgroundColor = 'darkgray';
        
    });
    
    
    const checkbox = document.getElementById('underline');
    const targetElement = document.getElementById('element');
    
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        targetElement.style.textDecoration = 'line-through';
        targetElement.style.color = 'dimgray';
      } else {
        targetElement.style.textDecoration = 'none';
        targetElement.style.color = 'black';
      }
    });
    
    
    
    
    
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    const remainingItemsContainer = document.getElementById('remaining-items');
    
    itemCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        updateRemainingItems();
      });
    });
    
    function updateRemainingItems() {
      const uncheckedItems = Array.from(itemCheckboxes).filter(checkbox => !checkbox.checked);
      const remainingItems = uncheckedItems.length;
      remainingItemsContainer.textContent = `${remainingItems} items left`;
    }
    
    
    
    let typechange =document.getElementById('typechange');
    
    typechange.addEventListener('change', () => {
        if(input.click)
        typechange.value = 'Currently typing...';
    });
    });