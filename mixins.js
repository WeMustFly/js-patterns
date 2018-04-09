'use strict'

const _ = require('underscore')

const myMixins = {
  moveUp: () => console.log('move up'),
  moveDown: () => console.log('move down'),
  stop: () => console.log('stop! in the name of love!')
}

function CarAnimator () {
  this.moveLeft = () => console.log('move left')
}

function PersonAnimator () {
  this.moveRandomly = () => console.log('move randomly')
}

_.extend(CarAnimator.prototype, myMixins)
_.extend(PersonAnimator.prototype, myMixins)

const myAnimator = new CarAnimator()
myAnimator.moveLeft()
myAnimator.moveDown()
myAnimator.stop()