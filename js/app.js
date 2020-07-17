
//Instanciate both class
const eventbrite = new EventBrite()
const ui = new UI()



document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const eventName = document.getElementById('event-name').value
    const category = document.getElementById('category').value

    // console.log(eventName + ':' + category)

    if(eventName !== ''){
        eventbrite.queryAPI(eventName)
    }else {
        ui.printMessage('Add an Event or City', 'text-center alert alert-danger mt-4')
    }
})