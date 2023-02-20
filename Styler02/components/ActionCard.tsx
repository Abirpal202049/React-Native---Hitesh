import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ActionSingleCard from './ActionSingleCard';

export default function ActionCard() {
  const blogData = [
    {
      heading: 'Tutorial On Prisma and Next.js',
      description:
        "This tutorial is the first part of a course where we build a fullstack app with Next.js, GraphQL, TypeScript,Prisma and PostgreSQL. In this tutorial, we'll create the data model and explore the different components of Prisma.",
      imageUrl:
        'https://velog.velcdn.com/images/sinclairr/post/fb146ca7-654e-41df-8b26-33e01ffffe7b/image.png',
      readMoreLink:
        'https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw',
      cardColor: '#16A394',
      textColor: '#fff',
    },
    {
      heading: 'Chat app using Prisma and React',
      description:
        'In this YouTube video, we will walk you through the process of building a chat app using Prisma and React. We will start by setting up the backend with Prisma, then build a real-time chat interface with React, and finally connect the two to create a fully functional chat app. This video is perfect for anyone looking to build a chat app with modern web technologies.',
      imageUrl: 'https://i.morioh.com/2022/08/08/f27325a8.webp',
      readMoreLink: 'https://morioh.com/p/c036c0dc8ba6',
      cardColor: '#00D8FF',
      textColor: '#1f1f1f',
    },
    {
      heading: 'Tutorial On Strapi and Next.js',
      description:
        'A Strapi and Next.js tutorial guides developers through building a web app, setting up a Strapi backend, configuring content types, and using it in a Next.js frontend. This enables them to build scalable web apps with an efficient and user-friendly experience.',
      imageUrl: 'https://assets.strapi.io/uploads/strapi_nextjs_9d80ba530a.png',
      readMoreLink:
        'https://strapi.io/blog/build-a-blog-with-next-react-js-strapi',
      cardColor: '#4945FF',
      textColor: '#fff',
    },
    {
      heading: 'Directus',
      description:
        'In this YouTube video, we will introduce you to Directus, an open-source headless CMS that allows you to manage content across all your platforms and channels. We will show you how to set up Directus and use its powerful features, such as role-based access control, custom APIs, and more, to streamline your content management process. This video is perfect for anyone looking for a flexible and customizable CMS solution.',
      imageUrl:
        'https://repository-images.githubusercontent.com/7122594/7e5b1d59-0bc8-47c3-8a94-c63db5a9c9de',
      readMoreLink: 'https://morioh.com/p/c036c0dc8ba6',
      cardColor: '#8555F8',
      textColor: '#fff',
    },
    {
      heading: 'ChatGPT',
      description:
        'In this YouTube video, we will explore ChatGPT, a large language model trained by OpenAI. We will discuss how ChatGPT works, its capabilities, and its potential applications in various fields. This video is perfect for anyone interested in artificial intelligence, natural language processing, or chatbots.',
      imageUrl:
        'https://ainewsbase.com/wp-content/uploads/2023/01/0RCoGXO_400x400.jpg',
      readMoreLink: 'https://morioh.com/p/c036c0dc8ba6',
      cardColor: '#0EA982',
      textColor: '#fff',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Upcoming Videos</Text>
      <ScrollView horizontal style={styles.cardContainer} scrollEnabled={true}>
        {blogData.map((blog, i) => {
          return <ActionSingleCard data={blog} key={i} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cardContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});
