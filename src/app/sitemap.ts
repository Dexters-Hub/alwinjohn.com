import getPostMetadata from '@/components/getPostMetadata';
import getProjectMetadata from '@/components/getProjectMetadata';

export default async function sitemap() {
  const baseUrl = 'https://www.alwinjohn.com';
  const postMetadata = await getPostMetadata();
  const projectMetadata = await getProjectMetadata();

  const postUrls = postMetadata.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const projectUrls = projectMetadata.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
  }));
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/posts`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },


    ...postUrls,
    ...projectUrls,

  ];
}