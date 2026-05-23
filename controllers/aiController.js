import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY})

export const getAiAnswer = async (req,res) => {
    try {
        const { question } = req.body;
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: question
        })
        res.status(200).json({ aiAnswer: response.text })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
