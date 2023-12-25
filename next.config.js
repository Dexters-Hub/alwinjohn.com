/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async() =>{
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/19eT4wYt9W8x9T2U6wM11xwrhsJs4tpKa/view?usp=sharing',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
