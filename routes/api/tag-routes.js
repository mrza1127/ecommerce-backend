const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
  }).then(tags => res.json(tags)).catch(err => {
    res.status(404).json()
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then(tag => res.json(tag)).catch(err => {
    res.status(404).json({message: 'No tag found with that id'})
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(createdData => res.json(createdData)).catch(err => {
    res.status(404).json()
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedData => res.json(updatedData)).catch(err => {
    res.status(404).json()
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(deletedData => res.json(deletedData)).catch(err => {
    res.status(404).json()
  })
});

module.exports = router;
