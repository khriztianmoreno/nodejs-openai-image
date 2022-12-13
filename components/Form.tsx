import React from 'react'

type FormProps = {
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ onHandleSubmit }: FormProps) => {
  return(
    <section className="showcase">
      <form id="image-form" onSubmit={onHandleSubmit}>
        <h1>Describe An Image</h1>
        <div className="form-control">
          <input type="text" id="prompt" name="prompt" placeholder="Enter Text" />
        </div>
        <div className="form-control">
          <select name="size" id="size" defaultValue="medium">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" className="btn">Generate</button>
      </form>
    </section>
  )
}

export default Form
