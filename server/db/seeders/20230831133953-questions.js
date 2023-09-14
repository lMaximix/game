'use strict';
const { Question, Theme } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate(
      [
        {
          title: 'Тема 1',
          Questions: [
            {
              name: 'Вопрос 1',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 2',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 3',
              answer: 'Классный вопрос',
              points: 100,
            },
          ],
        },
        {
          title: 'Тема 2',
          Questions: [
            {
              name: 'Вопрос 1',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 2',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 3',
              answer: 'Классный вопрос',
              points: 100,
            },
          ],
        },
        {
          title: 'Тема 3',
          Questions: [
            {
              name: 'Вопрос 1',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 2',
              answer: 'Классный вопрос',
              points: 100,
            },
            {
              name: 'Вопрос 3',
              answer: 'Классный вопрос',
              points: 100,
            },
          ],
        },
      ],

      {
        include: [Question],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
