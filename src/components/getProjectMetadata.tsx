import fs from 'fs';
import matter from 'gray-matter';
import { ProjectMetadata } from './ProjectMetadata';

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = 'src/projects/';
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`src/projects/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      date: matterResult.data.date,
      description: matterResult.data.description,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return projects;
};

export default getProjectMetadata;