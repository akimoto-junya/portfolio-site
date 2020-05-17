type PathName = 'app' | 'about' | 'works' | 'skills' | 'links';
export interface PathInfo {
  value: string;
  name: string;
}

type PathDictionary = { [key in PathName]: PathInfo };

const Path: PathDictionary = {
  app: { value: '/', name: 'Top' },
  about: { value: '/about', name: 'About' },
  works: { value: '/works', name: 'Works' },
  skills: { value: '/skills', name: 'Skills' },
  links: { value: '/links', name: 'Links' }
};

export default Path;
