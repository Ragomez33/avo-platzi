module.exports = {
    rewrites: async () =>{
        return [
            {
              source: '/avocado/:path*',
              destination: '/product/:path*',
            }
        ]
    }
}