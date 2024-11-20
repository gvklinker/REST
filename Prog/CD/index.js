const baseUrl = "https://jg-cdrest.azurewebsites.net/api/record"

Vue.createApp({
    data(){
        return{
            records: []
        }

    },
    methods:{
        getAllRecords() {
            this.getRecords(baseUrl)
        },async getRecords(url) {
            try {
                const response = await axios.get(url)
                this.records = response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")