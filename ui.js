class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        // console.log(user)
        // console.log("con")
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge text-bg-primary m-1">Public Repos: ${user.public_repos}</span>
            <span class="badge text-bg-warning m-1">Public Gists: ${user.public_gists}</span>
            <span class="badge text-bg-success m-1">Followers: ${user.followers}</span>
            <span class="badge text-bg-info m-1">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
             <li class="list-group-item">Bio: ${user.bio}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        
      `;
    }
    showRepo(repos) {
        let output = "";
        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge text-bg-primary m-1">Stars: ${repo.stargazers_count}</span>
                        <span class="badge text-bg-warning m-1"> Watchers: ${repo.watchers_count}</span>
                        <span class="badge text-bg-success m-1">Forks: ${repo.forks_count}</span>
                        <span class="badge text-bg-info m-1">Private:${repo.private} </span>

                        </div>
                        <p>${repo.description}</p>
                    
                    </div>
                
                
                </div>
            `
        });

        document.getElementById('repos').innerHTML=output;
    }

    showAlert(message, classname) {
        //clear alert message
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        //add class name
        div.className = classname;
        // add text
        div.appendChild(document.createTextNode(message));
        //get paretn
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');

        container.insertBefore(div, search);


        //timeout alfer 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

        // this.clearProfile();
    }

    //clear alert message

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}