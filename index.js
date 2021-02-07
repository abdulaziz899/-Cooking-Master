
const submit=document.getElementById('submit');
submit.addEventListener('click',function(e){ 
    const foodNames=document.getElementById('foodName').value;
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodNames}`)
        .then(response=>response.json())
        .then(data=>{ 
            const foodDetails=data['meals'];
            const foodContainer=document.getElementById('foodContainer');
            // forEach 
            foodDetails.forEach(foods => {
                    const foodDiv=document.createElement('div');
                    foodDiv.className="foodDetailsSection col-sm-12";
                    foodDiv.id="foodShowDetails"
                    const foodInfo=`<img class="imageControl" src="${foods.strMealThumb}">
                                    <h2>${foods.strMeal}</h2> `
                                    foodDiv.innerHTML=foodInfo; 
                                    foodContainer.appendChild(foodDiv);
                                    foodDiv.addEventListener('click',function(){
                                    const showFoodDetailsSection=document.getElementById('showFoodDetailsSection');
                                    showFoodDetailsSection.style.display='block'
                                    showFoodInfo=`  <img class="imageControl" src="${foods.strMealThumb}">
                                                    <h2>food Name        : ${foods.strMeal}</h2>
                                                    <P>food Category     : ${foods.strCategory}</P>
                                                    <P>food Tags         : ${foods.strTags}</P>
                                                    <P>food Measure1     : ${foods.strCategory}</P>
                                                    <P>food Measure9     : ${foods.strMeasure9}</P>
                                                    <P>food Ingredient1  : ${foods.strIngredient1}</P>
                                                    <P>food Ingredient4  : ${foods.strIngredient4}</P>
                                                    <P>food Ingredient6  : ${foods.strIngredient6}</P>
                                                    <P>food Ingredient7  : ${foods.strIngredient7}</P>
                                                    <P>food Ingredient8  : ${foods.strIngredient8}</P>
                                                    <P>food Ingredient13 : ${foods.strIngredient13}</P>
                                                    <P> <span class="foodNode">food Instructions</span> : ${foods.strInstructions}</P>`
                                        showFoodDetailsSection.innerHTML=showFoodInfo;
                                    })
            });
        })
})

