const router = require('express').Router();
const { Question } = require('../../db/models');

router.route('/').get((req, res) => {
  Question.findAll()
    .then((allRestaurants) => res.json({ restaurants: allQuestions }))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
