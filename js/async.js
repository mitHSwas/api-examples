const desplayInfoByFetch = () => {
    const url = "https://randomuser.me/api/?gender=female";
    fetch(url)
        .then(res => res.json())
        .then(data => displayUserDetails(data.results[0]))
        .catch(error => console.log(error))
}

const loadInfoByAsync = async () => {
    try {
        const url = "https://randomuser.me/api/?gender=female";
        const res = await fetch(url);
        const data = await res.json();
        displayUserDetails(data.results[0]);
    }
    catch (error) {
        console.log(error)
    }
}

const displayUserDetails = (details) => {
    console.log(details);
}