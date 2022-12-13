import { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Form from '../components/Form'
import ImageResult from '../components/ImageResult'

function Home() {
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const form = new FormData(e.currentTarget)
    const prompt = form.get('prompt')
    const size = form.get('size')

    try {
      const res = await fetch('/api/generateimage', {
        method: 'POST',
        body: JSON.stringify({
          prompt: prompt,
          size: size
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)
      setImage(data.data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>OpenAI Image Genrator</title>
        <meta name="description" content="OpenAI Image Genrator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Form onHandleSubmit={handleSubmit} />
        <ImageResult image={image} error={error} />
      </main>

      <div className={`spinner ${loading ? 'show' : ''}`} />
    </>
  )
}

export default Home
