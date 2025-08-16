// This is a Vercel serverless function that will be used as the entry point
// It imports the Express app from your server.ts file

// Use dynamic import for ES modules
import('./dist/ngxpress/server/server.mjs')
  .then(module => {
    // The default export from server.mjs is the reqHandler
    const handler = module.reqHandler;
    module.exports = async (req, res) => {
      // Convert Vercel's request/response to Express-like objects if needed
      return handler(req, res);
    };
  })
  .catch(error => {
    console.error('Failed to load server module:', error);
    process.exit(1);
  });
