/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async() =>{
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1CifTbIUJTmbTtm9aGcRICEhDgkZ51BtE/view?usp=sharing',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
