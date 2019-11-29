const InvalidTriangleException = require('./InvalidTriangleException')

const areaOfTriangle = (side1, side2, side3) => {
  if (isNaN(side1) || isNaN(side2) || isNaN(side3))
    throw new InvalidTriangleException('Inputs must be numbers')

  if (side1 <= 0 || side2 <= 0 || side3 <= 0)
    throw new InvalidTriangleException('Inputs cannot be negative')

  const [hypotenuse, otherSide1, otherSide2] = [side1, side2, side3].sort(
    (a, b) => b - a
  )
  if (hypotenuse >= otherSide1 + otherSide2) {
    throw new InvalidTriangleException('Inputs cannot form a valid triangle')
  }

  // Area	=	 √	 s	 (	s	−	side1	) 	(	s	−	side2	)	 (	s	−	side3	)
  const s = (side1 + side2 + side3) / 2
  return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
}

module.exports = areaOfTriangle
