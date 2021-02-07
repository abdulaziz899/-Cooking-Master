
//start 
const showFoodDetailsSection=document.getElementById('showFoodDetailsSection');
const searchFood=async()=>{ 
        const foodNames=document.getElementById('foodName').value;
        if (foodNames==='' ) {
            const foodContainer=document.getElementById('foodContainer');
            errorMessage.style.display='block';
            errorMessage.value='you are wrong please enter any key';
            foodContainer.style.display='none'
        }
        else{
            const response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodNames}`);
            const data = await response.json();
            foodDetailsDisplay(data)
            .catch(error=>displayError(error))
        }
}
// show food in display
const foodDetailsDisplay=data=>{
    const foodDetails=data['meals'];
    console.log(foodDetails);
    const foodContainer=document.getElementById('foodContainer');
    foodContainer.innerHTML='';
    foodDetails.forEach(foods => {
        const foodDiv=document.createElement('div');
        foodDiv.className="foodDetailsSection col-sm-12";
        foodDiv.id="foodShowDetails"
        const foodInfo=`<div>
            <img class="imageControl" src="${foods.strMealThumb}">
            <h2>${foods.strMeal}</h2>
            </div> `
            foodDiv.innerHTML=foodInfo; 
            foodContainer.appendChild(foodDiv);
            //food details show section
            foodDiv.addEventListener('click',()=>{
                showFoodDetailsSection.style.display='block'
                foodDetailsInfo(foods) ;
                })
                displayError();
    });
}
//food details show function
const foodDetailsInfo= foods =>{
    const showFoodDetailsSection=document.getElementById('showFoodDetailsSection');
    showFoodDetailsSection.style.display='block';
    const showFoodInfo=` <img class="imageControl" src="${foods.strMealThumb}">
        <h2>food Name         : ${foods.strMeal}</h2>
        <P>food Category      : ${foods.strCategory}</P>
        <P>food Tags          : ${foods.strTags}</P>
        <P>food Measure1      : ${foods.strCategory}</P>
        <P>food Measure9      : ${foods.strMeasure9}</P>
        <P>             food Ingredient                </P>
        <P>food Ingredient1   : ${foods.strIngredient1}</P>
        <P>food Ingredient2   : ${foods.strIngredient2}</P>
        <P>food Ingredient3   : ${foods.strIngredient3}</P>
        <P>food Ingredient4   : ${foods.strIngredient4}</P>
        <P>food Ingredient5   : ${foods.strIngredient5}</P>
        <P>food Ingredient6   : ${foods.strIngredient6}</P>
        <P>food Ingredient7   : ${foods.strIngredient7}</P>
        <P>food Ingredient8   : ${foods.strIngredient8}</P>
        <P>food Ingredient9   : ${foods.strIngredient9}</P>
        <P>food Ingredient10  : ${foods.strIngredient10}</P>
        <P>food Ingredient11  : ${foods.strIngredient11}</P>
        <P>food Ingredient12  : ${foods.strIngredient12}</P>
        <P>food Ingredient13  : ${foods.strIngredient13}</P>
        <P>food Ingredient14  : ${foods.strIngredient14}</P>
        <P> <span class="foodNode">food Instructions</span> : ${foods.strInstructions}</P>`
        showFoodDetailsSection.innerHTML=showFoodInfo;
}
// show in error section
const displayError=()=>{
   const errorMessage=document.getElementById('errorMessage');
    const foodNames=document.getElementById('foodName').value;
    const foodContainer=document.getElementById('foodContainer');
    if (foodNames==='' || foodNames===null ) {
        errorMessage.style.display='block';
        errorMessage.value='you are wrong please enter any key';
        foodContainer.style.display='hidden'
    }
    else{
        errorMessage.value=' ';
        errorMessage.style.display='none';
        foodContainer.style.display=''
        
    }
}

// thank you
