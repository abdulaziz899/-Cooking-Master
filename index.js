//start 
const showFoodDetailsSection=document.getElementById('showFoodDetailsSection');
const submit=document.getElementById('submit');
submit.addEventListener('click',function(){ 
    const errorMessage=document.getElementById('errorMessage');
    const foodNames=document.getElementById('foodName').value;

    // if error condition check
    if (foodNames==='' || foodNames===null ) {
        errorMessage.style.display='block';
        errorMessage.value='you are wrong please enter any key word';
        document.getElementById('foodName').value=' ';
    }
    else{
        // else error condition check
        errorMessage.value=' ';
        errorMessage.style.display='none';
        document.getElementById('foodName').value=' ';

        // https request
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodNames}`)
        .then(response=>response.json())
        .then(data=>  { 
        const foodDetails=data['meals'];
        const foodContainer=document.getElementById('foodContainer');

        //forEach section
        foodDetails.forEach(foods => {
            //create new element
            const foodDiv=document.createElement('div');
            foodDiv.className="foodDetailsSection col-sm-12";
            foodDiv.id="foodShowDetails"
            const foodInfo=`<img class="imageControl" src="${foods.strMealThumb}">
                <h2>${foods.strMeal}</h2> `
                foodDiv.innerHTML=foodInfo; 
                foodContainer.appendChild(foodDiv);
                //food details show section
                foodDiv.addEventListener('click',function(){
                    showFoodDetailsSection.style.display='block'
                    foodDetailsInfo(foods) ;
                    })
        });
        })
    }
})

//food details show function
const foodDetailsInfo=foods =>{
    const showFoodInfo=`  <img class="imageControl" src="${foods.strMealThumb}">
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

// thank you