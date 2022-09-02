const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById("users-container")
    console.log(users[0].email)
    console.log(users)
    for (const user of users) {
        const userDiv = document.createElement("div");
        userDiv.classList.add("userStyle")
        userDiv.innerHTML = `
            <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Country: ${user.location.country}</p>
            <img src=${user.picture.large} />
        `
        usersContainer.appendChild(userDiv);
    }
}

loadUsers()