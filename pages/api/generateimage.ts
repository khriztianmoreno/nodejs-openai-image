import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';
import { AxiosError } from 'axios';

import { imageSizes, ImageSize } from '../../model/imageSize';
import { isCreateImageRequestDto } from '../../model/types';

const configuration = new Configuration({
  apiKey: process.env?.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!isCreateImageRequestDto(req.body)) {
    throw new Error("Expected field(s) 'prompt' and 'size' with proper values.")
  }
  const { prompt, size } = req.body;

  const imageSize = imageSizes.get(ImageSize[size] ?? ImageSize.small);

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({success: true, data: imageUrl});
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.status);
      console.log(error.response?.data);
    } else {
      console.log((error as any)?.message);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
}
