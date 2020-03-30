const GeneralApiService = {
    mainURL: 'http://portfoliobackend-env.eba-zw93kw4e.us-east-1.elasticbeanstalk.com',
    
    getChallenges: () => {
        return fetch(GeneralApiService.mainURL + '/index')
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch(console.log)
    }

}

export default GeneralApiService;