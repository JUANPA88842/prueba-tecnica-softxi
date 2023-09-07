const { Router } = require('express')

const router = Router()

router.get('/login', (req, res) => {
    res.send('retrieving a list')
})

module.exports = router