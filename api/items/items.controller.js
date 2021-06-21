const itemService = require('./items.service')
const logger = require('../../services/logger.service')

async function getItems(req, res) {
    try {
        const items = await itemService.query()
        // console.log('items', items);
        res.send(items)
    } catch (err) {
        logger.error('Failed to get items', err)
        res.status(500).send({ err: 'Failed to get items' })
    }
}

async function updateItems(req, res) {
    console.log('&^&^&', req.body);
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
    // getUser,
    // getUsers,
    // deleteUser,
    // updateUser
}

// async function getUsers(req, res) {
//     try {
//         const filterBy = {
//             txt: req.query?.txt || '',
//             minBalance: +req.query?.minBalance || 0
//         }
//         const users = await itemService.query(filterBy)
//         res.send(users)
//     } catch (err) {
//         logger.error('Failed to get users', err)
//         res.status(500).send({ err: 'Failed to get users' })
//     }
// }

// async function deleteUser(req, res) {
//     try {
//         await itemService.remove(req.params.id)
//         res.send({ msg: 'Deleted successfully' })
//     } catch (err) {
//         logger.error('Failed to delete user', err)
//         res.status(500).send({ err: 'Failed to delete user' })
//     }
// }