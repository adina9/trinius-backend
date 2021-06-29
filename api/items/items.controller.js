const itemService = require('./items.service')
const logger = require('../../services/logger.service')

async function getItems(req, res) {
    try {
        const items = await itemService.query()
        res.send(items)
    } catch (err) {
        logger.error('Failed to get items', err)
        res.status(500).send({ err: 'Failed to get items' })
    }
}

async function updateItems(req, res) {
    try {
        const items = req.body
        const savedItems = await itemService.update(items)
        res.send(savedItems)
    } catch (err) {
        logger.error('Failed to update items', err)
        res.status(500).send({ err: 'Failed to update items' })
    }
}

module.exports = {
    getItems,
    updateItems
}
