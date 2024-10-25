const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")


function setUserData(username, name, joinDetail, bio, repo, followers, following, location, avatar){
    let cardBody = document.querySelector(".card-body")
    cardBody.innerHTML = `
    <div class="card-text">
                <h3 class="username">${username}</h3>
                <div class="name-info d-flex">
                    <p class="name">${name}</p>
                    <span class="join-details">${joinDetail}</span>
                </div>
                <p class="bio">${bio}</p>
                <div class="row repo-info d-flex">
                    <div class="col">
                        <h6 class="repos-header">Repos</h6>
                        <p class="repo-count">${repo}</p>
                    </div>
                    <div class="col">
                        <h6 class="followers-header">followers</h6>
                        <p class="followers-count">${followers}</p>
                    </div>
                    <div class="col">
                        <h6 class="following-header">following</h6>
                        <p class="following-count">${following}</p>
                    </div>
                </div>
                <div class="d-flex location-info">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="location">${location}</p>
                </div>
            </div>
            <img src="${avatar}" alt="user image">
        </div>
    `


}


function getUserData(){

    inputText = searchInput.value
    const url = `https://api.github.com/users/${inputText}`

    if(inputText.length === 0){
        console.log('write something in it')
    } 
    else if(!inputText){
        console.log('user does not exits')
    }
    else{
        fetch(url)
        .then(function(response){
            return  response.json()
        })
        .then(function(data){
            let userInfo = data
            setUserData(userInfo["login"], userInfo["name"], userInfo["created_at"], userInfo["bio"], userInfo["public_repos"], userInfo["followers"], userInfo["following"], userInfo["location"], userInfo["avatar_url"])
        })
        .catch(function(error){
            console.log(error)
        })
    }


    // fetch(url)
    //     .then(function(response){
    //         return  response.json()
    //     })
    //     .then(function(data){
    //         let userInfo = data
    //         setUserData(userInfo["login"], userInfo["name"], userInfo["created_at"], userInfo["bio"], userInfo["public_repos"], userInfo["followers"], userInfo["following"], userInfo["location"], userInfo["avatar_url"])
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
}

searchBtn.addEventListener("click", getUserData)