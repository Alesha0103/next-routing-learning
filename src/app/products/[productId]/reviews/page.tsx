import React from 'react'

const ReviewList = ({ params }: {
    params: { 
        reviewId: string,
        productId: string,
    }
}) => {
  return (
    <>
        <h1>Reviews list</h1>
        <h2>Review 1</h2>
        <h2>Review 2</h2>
    </>
  )
}

export default ReviewList;