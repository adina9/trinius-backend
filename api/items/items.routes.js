const express = require('express')
const { getItems, updateItems } = require('./items.controller')
const router = express.Router()

router.get('/', getItems)
router.put('/:id', updateItems)


module.exports = router