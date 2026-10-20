export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeProfile {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  resumeUrl: string;
  introduction: string;
  location: string;
  skillGroups: SkillGroup[];
}

export const profile: ResumeProfile = {
  fullName: 'Rohan Reddy Rapol',
  email: 'rohanreddyrapol@gmail.com',
  phone: '+91 93461 32929',
  linkedinUrl: 'https://linkedin.com/in/rohan-reddy/',
  resumeUrl: '/Rohan_resume.pdf',
  location: 'Hyderabad, India',
  introduction: 'Cloud Engineer 1 at Insight with a computer science foundation and interests in cloud platforms, applied AI, and practical software. I enjoy building tools that turn complex information into useful experiences.',
  skillGroups: [
    { category: 'Languages', skills: ['Java', 'HTML/CSS', 'JavaScript', 'Python (basic)'] },
    { category: 'Technical skills', skills: ['Cloud computing', 'AWS', 'Linux', 'Computer networking', 'Operating systems', 'Machine learning fundamentals', 'SQL', 'MongoDB (basic)'] },
    { category: 'Soft skills', skills: ['Adaptability', 'Critical thinking', 'Teamwork', 'Presentation', 'Problem solving'] },
  ],
};
