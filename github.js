class Github{
    constructor(){
        this.client_id='a64fc261b3ad5a25504d';
        this.client_secret='88ca54b981091a3d71276ce6e6eb0aaa9792212d';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repo = await repoResponse.json();

        return{
            profile,repo
        }
    }
}