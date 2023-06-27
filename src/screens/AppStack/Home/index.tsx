import { useInfiniteQuery } from '@tanstack/react-query'
import { SafeAreaView, ActivityIndicator, StyleSheet, FlatList, View } from 'react-native'

import FeedCard from '../../../components/FeedCard'
import useUserStore from '../../../store/userStore'
import graphqlRequestClient from '../../../services/api'
import { resetTokens } from '../../../utils/tokenHelper'
import { WHITE_COLOR } from '../../../styles/colorConstants'
import { getErrorMessageAndCode } from '../../../utils/helpers'
import { GetPostType, GetPostsQuery, useGetPostsQuery, useMeQuery } from '../../../services/api/fifoServer'

const Home = ({ postType = GetPostType.PostAndRoom }) => {
  const { setIsLoggedIn } = useUserStore()

  const { data: currentUserDetails, isLoading: loadingUserDetails } = useMeQuery(graphqlRequestClient(), undefined, {
    onError: async (error) => {
      const { code } = getErrorMessageAndCode(error)

      if (code === 'UNAUTHENTICATED') {
        setIsLoggedIn(false)
        await resetTokens()
      }
    },
  })

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

  if (isInitialLoading || loadingUserDetails) {
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
      {postsData ? (
        <FlatList
          style={{ paddingTop: 8 }}
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
