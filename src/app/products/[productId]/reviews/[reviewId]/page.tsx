import React from 'react'
import { notFound } from 'next/navigation'

const ReviewDetails = ({ params }: {
    params: { 
        reviewId: string,
        productId: string,
    }
}) => {
  if (parseInt(params.reviewId)>1000) {
    return notFound();
  }

  return (
    <>
        <h1>Review {params.reviewId} for product {params?.productId}</h1>
    </>
  )
}

export default ReviewDetails;