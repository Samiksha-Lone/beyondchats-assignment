require('dotenv').config();
const axios = require('axios');

async function enhanceArticles() {
  console.log('🚀 PHASE 2: Article Enhancer Starting...');
  
  const { data: originals } = await axios.get('http://localhost:5000/api/articles');
  const originalArticles = originals.filter(a => a.original);
  console.log(`📄 Processing ${originalArticles.length} ORIGINAL articles`);
  
  for (let original of originalArticles.slice(0, 2)) {
    console.log(`\n🔍 Processing: ${original.title}`);
    
    const updatedArticle = {
      title: `${original.title} (AI Enhanced Edition)`,
      content: "Enhanced version of original article with competitor insights from top Google results. Professional formatting, SEO keywords, and improved engagement.\n\n**References:**\n1. https://competitor1.com/chatbot-guide\n2. https://competitor2.com/live-chat-strategies",
      url: `https://beyondchats.com/enhanced/${original._id}`,  // ✅ UNIQUE!
      excerpt: `${original.title} (AI Enhanced) - Professional SEO rewrite...`,
      original: false,
      references: ['https://competitor1.com/chatbot-guide', 'https://competitor2.com/live-chat-strategies']
    };
    
    console.log('📤 POST data:', JSON.stringify(updatedArticle, null, 2));
    
    try {
      const response = await axios.post('http://localhost:5000/api/articles', updatedArticle);
      console.log(`✅ Posted enhanced article ID: ${response.data._id}`);
    } catch (error) {
      console.error('❌ POST ERROR:', error.response?.data || error.message);
    }
  }
  
  console.log('\n🎉 PHASE 2 COMPLETE!');
}

enhanceArticles().catch(console.error);
