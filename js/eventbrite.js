class EventBrite {

    constructor(){
        this.auth_token = 'UAMEHEZ2Q6RLTMMQAXKY'
    }

    async queryAPI(eventName, category){
        
    }

  async  getCategoriesAPI(){

        const response = await fetch
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)

        const categories = await response.json()

        return{
            categories
        }
   
    }
}