const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById("country-container");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("countryStyle");
        countryDiv.innerHTML = `
            <h1>Name: ${country.name.common}</h1>
            <p>Capital: ${country.capital}</p>
            <button onClick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetails = code => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}


const displayCountryDetails = country => {
    const countryDetail = document.getElementById("country-details");
    countryDetail.innerHTML = `
        <h2>${country.name.official}</h2>
        <p>Population: ${country.population}</p>
        <img src=${country.flags.png}>
    `;
}

loadCountries()