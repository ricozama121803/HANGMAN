export const wordData = {
    'NEXTJS': 'A React framework for production',
    'REACT': 'A JavaScript library for building user interfaces',
    'JAVASCRIPT': 'The programming language of the web',
    'TYPESCRIPT': 'JavaScript with syntax for types',
    'TAILWIND': 'A utility-first CSS framework',
    'VERCEL': 'Platform for deploying Next.js applications',
    'FRAMER': 'Animation library for fluid motion',
    'MONGODB': 'NoSQL database for modern apps',
    'PRISMA': 'Next-generation Node.js ORM',
    'EXPRESS': 'Fast, unopinionated web framework'
  }
  
  export const getRandomWord = () => {
    const words = Object.keys(wordData)
    return words[Math.floor(Math.random() * words.length)]
  }
  
  export const getHint = (word) => {
    return wordData[word]
  }
  