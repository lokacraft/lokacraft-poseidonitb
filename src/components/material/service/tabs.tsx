"use client"
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import Core2 from './core2';
import ProjectCards from './projectCards';

type Post = {
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

type Categories = {
  [key: string]: Post[];
};

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs1: React.FC = () => {
  const [categories] = useState<Categories>({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-[90vw] mx-auto px-2 py-16 sm:px-0">
                  <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-orange-400 p-1">
                              {/* header 1 */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              header 1
                              </Tab>
                              {/* header 2 */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              header 2
                              </Tab>
                              {/* header 3 */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              header 3
                              </Tab>
                              {/* header 4 */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              header 4
                              </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-[40px] w-[100%] mx-auto">
                        {/* banner panel */}
                              <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3 flex flex-col space-y-5',
                              ' focus:outline-none'
                              )}
                              >
                                    <ProjectCards />
                        </Tab.Panel>
                        {/* gallery panel */}
                        <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3 flex flex-col space-y-5',
                              ' focus:outline-none'
                              )}
                              >
                              {/* <ProjectCards /> */}
                              {/* <GalleryPaginatedItems itemsPerPage={5} /> */}
                        </Tab.Panel>
                        {/* gallery panel */}
                        <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3 flex flex-col space-y-5',
                              ' focus:outline-none'
                              )}
                              >
                              <ProjectCards />
                              {/* <StrukturPaginatedItems itemsPerPage={5} /> */}
                        </Tab.Panel>
                        {/* gallery panel */}
                        <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3 flex flex-col space-y-5',
                              ' focus:outline-none'
                              )}
                              >
                              {/* <ProjectCards /> */}
                              {/* <StrukturPaginatedItems itemsPerPage={5} /> */}
                        </Tab.Panel>
                        </Tab.Panels>
                  </Tab.Group>
    </div>
  );
};

export default Tabs1;