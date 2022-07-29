import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

export const siteConfig: Site.Config = {
  url: 'http://localhost:3000',
  title: 'Svelte-QWER',
  subtitle: 'QWER QWER',
  description: 'Learning Svelte',
  lang: 'en',
  author: {
    name: 'kwchang0831',
    avator: 'https://www.kwchang0831.dev/assets/maskable@192.webp',
    website: 'https://kwchang0831.dev',
  },
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei',
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei',
    },
  },
};

export const commentConfig: Giscus.Config = {
  id: 'giscus-comment',
  repo: 'kwchang0831/svelte-QWER',
  repoId: 'R_kgDOHiLP-g',
  category: 'Comments',
  categoryId: 'DIC_kwDOHiLP-s4CQgDm',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    orientation: 2,
    links: [
      {
        name: 'QWER',
        orientation: 1,
        links: [
          {
            name: 'Svelte',
            url: '/qwer-Svelte',
          },
          {
            name: 'Introduction',
            url: '/qwer-introduction',
          },
        ],
      },
      {
        name: 'Me',
        orientation: 3,
        links: [
          {
            name: 'Left',
            url: '/me-left',
          },
        ],
      },
    ],
  },
  {
    name: 'Post#1',
    url: '/p/1',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About Me',
      orientation: 1,
      links: [
        {
          name: 'first',
          orientation: 1,
          links: [
            {
              name: 'first-byte',
            },
            {
              name: 'first-second-byte',
            },
          ],
        },
        {
          name: 'second',
          orientation: 1,
          links: [
            {
              name: 'first-byte',
            },
            {
              name: 'first-second-byte',
            },
          ],
        },
      ],
    },
    {
      name: 'Post#1',
      url: '/p/1',
      target: '_self',
      prefetch: true,
    },
  ],
};
