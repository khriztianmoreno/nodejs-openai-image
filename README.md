# OpenAI Image Generator

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/screen.png" width="500">

## Usage

Rename the `.env.example` file to `.env.local`.

Generate an API KEY at [OpenAI](https://beta.openai.com/account/api-keys) and add it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

The endpoint is at `POST http://localhost:3000/api/generateimage`.
