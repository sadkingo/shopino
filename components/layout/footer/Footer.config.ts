export const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_NAME}. All Rights Reserved.`,
  author: {
    name: process.env.NEXT_PUBLIC_NAME || 'SaDKinG',
    github: process.env.NEXT_PUBLIC_GITHUB_LINK || 'https://github.com/sadkingo',
    twitter: process.env.NEXT_PUBLIC_X_LINK || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || 'https://www.linkedin.com/in/mohammed-zakaria-dhiab-50168a283/',
    quora: '#',
    dev: '#',
    email: process.env.NEXT_PUBLIC_EMAIL || 'DhiabMohammedZakaria@gmail.com',
  },
};
