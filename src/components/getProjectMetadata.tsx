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
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return projects;
};

export default getProjectMetadata;