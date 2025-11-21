const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

// Example POST route for career suggestions
app.post('/api/career', async (req, res) => {
  const userAnswers = req.body;
  const { industry, skills, role } = userAnswers;

  // Call OpenAI API to generate career suggestions and advice
  try {
    const gptResponse = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Career advice based on the following answers: Industry: ${industry}, Skills: ${skills}, Role: ${role}`,
      max_tokens: 100,
    }, {
      headers: { 'Authorization': `Bearer YOUR_OPENAI_API_KEY` },
    });

    const careerAdvice = gptResponse.data.choices[0].text;

    // Example career suggestions and learning paths (these could be dynamically generated from other APIs)
    const careerSuggestions = ["Software Engineer", "Data Scientist", "Product Manager"];
    const learningPaths = ["Learn React", "Learn Python for Data Science", "Build a portfolio with personal projects"];

    res.json({ 
      careerSuggestions, 
      learningPaths, 
      careerAdvice 
    });
  } catch (error) {
    res.status(500).send('Error generating career suggestions');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});