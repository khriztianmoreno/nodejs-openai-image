import React from 'react'

type ImageProps = {
  image?: string
  error?: string
}

const ImageResult = ({ image, error }: ImageProps) => {
  return(
    <section className="image">
      <div className="image-container">
        {error ? <h2 className="msg">{error}</h2> : null}
        {
          image
            ? <img src={image} alt="Generated Image" id="image" />
            : null
        }
      </div>
    </section>
  )
}

export default ImageResult
