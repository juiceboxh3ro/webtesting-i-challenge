const { succeed, fail, repair } = require('./enhancer.js');

let damagedAxe = {
  name: "axe",
  enhancement: 0,
  durability: 50
}

let axe = {
  name: "axe",
  enhancement: 20,
  durability: 100
}

describe('enhancer.js', function() {

  describe('.repair()', () => {
    it('should return the item i give it', () => {
      expect(repair(axe)).toEqual(axe);
    })
  })

  describe('.repair()', () => {
    it('should repair my axe', () => {
      expect(repair(damagedAxe)).toHaveProperty("durability", 100);
    })
  })

  describe('.succeed()', () => {
    let axe = {
      name: "axe",
      enhancement: 0
    }
    
    it('should add 1 enhancement to my axe', () => {
      expect(succeed(axe)).toHaveProperty("enhancement", 1)
    })
  })

  describe('.fail()', () => {
    let lesserAxe = {
      name: "axe",
      enhancement: 10,
      durability: 80
    }
    let decentAxe = {
      name: "axe",
      enhancement: 15,
      durability: 60
    }
    let betterAxe = {
      name: "axe",
      enhancement: 17,
      durability: 40
    }

    it('when enhancement less than 15, durability decrease by 5', () => {
      expect(fail(lesserAxe)).toHaveProperty("durability", 75)
    })

    it('when enhancement >= 15, durability decrease by 10', () => {
      expect(fail(decentAxe)).toHaveProperty("durability", 50)
    })

    it('when enhancement > 16,  enhancement decrease by 1', () => {
      expect(fail(betterAxe)).toHaveProperty("durability", 30)
      expect(fail(betterAxe)).toHaveProperty("enhancement", 16)
    })
  })

})