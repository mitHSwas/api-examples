const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = "";
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        mealDiv.innerHTML = ``;
        mealDiv.innerHTML = `
        <div  onClick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv)
    })
}

const searchMeals = () => {
    const mealName = document.getElementById("search-field");
    loadMeals(mealName.value);
    mealName.value = "";
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (detail) => {
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = ``;
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("card");
    containerDiv.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${detail.strInstructions}</p>
    </div>
    `;
    detailContainer.appendChild(containerDiv);
}

loadMeals("");

