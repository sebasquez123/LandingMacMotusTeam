


const error = (req, res, message = 'Error interno del servidor', state= 500) => {
    
    res.status(state).send({
        error: true,
        status: state,
        body: message
})

}
const success = (req, res, message='', state=200) => {
    res.status(state).send({
        error: false,
        status: state,
        body: message
    
    })
}

const reply = (req, res, message = '', state = 200) => { 
    res.status(state).send({
        error: false,
        status: state,
        reply: message
    })
}
module.exports = {
    error,
    success,
    reply
}