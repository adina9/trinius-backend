
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    update
}

async function query() {
    try {
        const collection = await dbService.getCollection('trinius')
        var data = await collection.find().toArray()
        return data
    } catch (err) {
        logger.error('cannot find items', err)
        throw err
    }
}


async function update(data) {
    try {
        data._id = ObjectId(data._id)
        const collection = await dbService.getCollection('trinius')
        await collection.updateOne({ "_id": ObjectId(data._id) }, { $set: data })
        return data;
    } catch (err) {
        logger.error(`cannot update data`, err)
        throw err
    }
}



