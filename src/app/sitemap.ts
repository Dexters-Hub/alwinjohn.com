
export default async function sitemap() {
  const baseUrl = 'https://www.alwinjohn.com';


  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ];
}