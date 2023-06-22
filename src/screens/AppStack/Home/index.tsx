import { SafeAreaView, ActivityIndicator, StyleSheet, FlatList, View } from 'react-native'

import FeedCard from '../../../components/FeedCard'
import graphqlRequestClient from '../../../services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { GetPostType, GetPostsQuery, useGetPostsQuery } from '../../../services/api/fifoServer'
import TopBar from '../../../components/TopBar'
import { WHITE_COLOR } from '../../../styles/colorConstants'

const Home = ({ postType = GetPostType.PostAndRoom }) => {
  const {
    data: postsData,
    isInitialLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    useGetPostsQuery.getKey({ type: postType }),

    async ({ pageParam = new Date().toISOString() }) =>
      useGetPostsQuery.fetcher(graphqlRequestClient(), {
        limit: 10,
        timestamp: pageParam,
        type: postType,
      })(),
    {
      getNextPageParam: (lastPage) => {
        let fetchMoreTimestamp = new Date().toISOString()

        if (!lastPage.getPosts.posts[0]) return undefined

        if (lastPage.getPosts.posts.length > 0) {
          fetchMoreTimestamp = new Date(
            Number(lastPage.getPosts.posts[lastPage.getPosts.posts.length - 1].createdAt),
          ).toISOString()
        }

        return fetchMoreTimestamp
      },
    },
  )

  const feedItemKeyExtractor = (item: GetPostsQuery['getPosts']['posts'][0]) => {
    return item.id
  }

  if (isInitialLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  const loadNextPageData = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  return (
    <SafeAreaView style={styles.feedContainer}>
      <TopBar />
      {postsData ? (
        <FlatList
          data={postsData.pages.map((page) => page.getPosts.posts).flat()}
          keyExtractor={feedItemKeyExtractor}
          renderItem={({ item }) => <FeedCard post={item} />}
          onEndReached={loadNextPageData}
        />
      ) : null}

      {isFetchingNextPage ? (
        <View style={{ paddingTop: 16, paddingBottom: 16 }}>
          <ActivityIndicator />
        </View>
      ) : null}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedContainer: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
})
