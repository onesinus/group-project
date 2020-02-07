const { Favorite } = require('../models')

class FavoriteController {
    static delete(req, res, next) {
        Favorite.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findAll(req, res, next) {
        Favorite.findAll({ where: { UserId: 1 } })
            .then(datas => {
                res.status(200).json(datas)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = FavoriteController