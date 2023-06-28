//@ts-nocheck
import { GraphQLClient } from 'graphql-request'
import { RequestInit } from 'graphql-request/dist/types.dom'
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers'],
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    })
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  JSON: any
  Upload: any
}

export type AllPaidRoomsResponse = {
  __typename?: 'AllPaidRoomsResponse'
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  paidRooms?: Maybe<Array<Maybe<Room>>>
  total?: Maybe<Scalars['Int']>
}

export type AllTabsResponse = {
  __typename?: 'AllTabsResponse'
  tabs: Array<Tab>
  total: Scalars['Int']
}

export enum AllowedUpdateActions {
  Add = 'ADD',
  Delete = 'DELETE',
  Edit = 'EDIT',
  None = 'NONE',
}

export enum AssignRemoveRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER',
}

export type AttendeeConcent = {
  __typename?: 'AttendeeConcent'
  raisedAt: Scalars['String']
  status?: Maybe<AttendeeConcentStatus>
  user: User
}

export enum AttendeeConcentStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING',
}

export type BadgeInfo = {
  __typename?: 'BadgeInfo'
  badgeName?: Maybe<Scalars['String']>
  isUnlocked?: Maybe<Scalars['Boolean']>
  unlockedAt?: Maybe<Scalars['Date']>
}

export type Balance = {
  __typename?: 'Balance'
  availableBalance?: Maybe<Scalars['Int']>
  pendingBalance?: Maybe<Scalars['Int']>
}

export type BlockUserResponse = {
  __typename?: 'BlockUserResponse'
  blockedUserId: Scalars['String']
  isBlocked: Scalars['Boolean']
  message: Scalars['String']
}

export type CommentAndReplyLikes = {
  __typename?: 'CommentAndReplyLikes'
  createdAt: Scalars['Date']
  likedBy: User
  updatedAt: Scalars['Date']
}

export type CommentLikePaginatedResponse = {
  __typename?: 'CommentLikePaginatedResponse'
  activityType?: Maybe<Scalars['String']>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
  users: Array<CommentAndReplyLikes>
}

export type CommentsPaginatedResponse = {
  __typename?: 'CommentsPaginatedResponse'
  comments: Array<PostComment>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type CreatePostMediaPayload = {
  action?: InputMaybe<AllowedUpdateActions>
  id?: InputMaybe<Scalars['String']>
}

export type CreatePostPayload = {
  content?: InputMaybe<Scalars['String']>
  media?: InputMaybe<Array<InputMaybe<CreatePostMediaPayload>>>
  originalPostId?: InputMaybe<Scalars['String']>
  postJsonContent?: InputMaybe<Scalars['String']>
  postType: PostType
}

export type CurrentUserAction = {
  __typename?: 'CurrentUserAction'
  isInterested: Scalars['Boolean']
  isLiked: Scalars['Boolean']
}

export type DeletePaidRoomNotification = {
  __typename?: 'DeletePaidRoomNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  room: Room
}

export type DeleteResponse = {
  __typename?: 'DeleteResponse'
  message: Scalars['String']
}

export type Domain = {
  __typename?: 'Domain'
  domain: Scalars['String']
  failedReason?: Maybe<FailedReason>
  id: Scalars['ID']
  profileDomainMetaData?: Maybe<User>
  retryCount: Scalars['Int']
  spaceDomainMetaData?: Maybe<Space>
  status: DomainStatus
  targetId: Scalars['String']
  targetType: TargetType
  userId: Scalars['String']
  verificationId?: Maybe<Scalars['String']>
}

export enum DomainStatus {
  Failed = 'FAILED',
  Initialized = 'INITIALIZED',
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
}

export type Draft = {
  __typename?: 'Draft'
  content: Scalars['JSON']
  createdAt: Scalars['String']
  createdBy: User
  id: Scalars['ID']
  type: DraftType
  updatedAt: Scalars['String']
}

export type DraftMedia = {
  __typename?: 'DraftMedia'
  id: Scalars['ID']
  type?: Maybe<MediaTypes>
  url: Scalars['String']
}

export enum DraftType {
  Post = 'POST',
}

export enum FailedReason {
  AddressCheckFailed = 'ADDRESS_CHECK_FAILED',
  AlreadySuccessfulDomainPresent = 'ALREADY_SUCCESSFUL_DOMAIN_PRESENT',
  NsLookupError = 'NS_LOOKUP_ERROR',
  OwnershipCheckFailed = 'OWNERSHIP_CHECK_FAILED',
}

export type FetchFollowerResponse = {
  __typename?: 'FetchFollowerResponse'
  data: Array<User>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type FetchSpaceFollowerQuery = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  tagName: Scalars['String']
}

export type FetchSpaceRoleQuery = {
  filterStatus?: InputMaybe<SpaceRoleFilterStatus>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<SpaceRoles>
  tagName: Scalars['String']
}

export type FetchSpaceRoleResponse = {
  __typename?: 'FetchSpaceRoleResponse'
  data: Array<User>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type FetchUserFollowedSpaces = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type FollowUserNotification = {
  __typename?: 'FollowUserNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  user: User
}

export type GetAllInvitationsResponse = {
  __typename?: 'GetAllInvitationsResponse'
  invitations: Array<InvitationResponse>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type GetBadge = {
  __typename?: 'GetBadge'
  badge?: Maybe<Array<Maybe<UserBadge>>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export enum GetIconType {
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Medium = 'MEDIUM',
  NonSocial = 'NON_SOCIAL',
  Reddit = 'REDDIT',
  Twitter = 'TWITTER',
  Youtube = 'YOUTUBE',
}

export type GetOnboardingLinkResponse = {
  __typename?: 'GetOnboardingLinkResponse'
  accountId: Scalars['String']
  createdAt: Scalars['String']
  expiresAt: Scalars['String']
  onboardingLink: Scalars['String']
  user?: Maybe<User>
}

export enum GetPostType {
  Following = 'FOLLOWING',
  Live = 'LIVE',
  LiveAndScheduled = 'LIVE_AND_SCHEDULED',
  PostAndRoom = 'POST_AND_ROOM',
  Scheduled = 'SCHEDULED',
}

export enum GetRoomType {
  All = 'ALL',
  Live = 'LIVE',
  Past = 'PAST',
  Scheduled = 'SCHEDULED',
}

export enum GetSpacePostType {
  Post = 'POST',
  Room = 'ROOM',
}

export type GetUserBankDetailsResponse = {
  __typename?: 'GetUserBankDetailsResponse'
  account_holder_name?: Maybe<Scalars['String']>
  bank_name?: Maybe<Scalars['String']>
  last4?: Maybe<Scalars['String']>
  routing_number?: Maybe<Scalars['String']>
}

export enum GetUserPostType {
  Post = 'POST',
  Room = 'ROOM',
}

export type InterestAndLikesResponse = {
  __typename?: 'InterestAndLikesResponse'
  lastActionAt: Scalars['String']
  user: User
}

export type InvitationResponse = {
  __typename?: 'InvitationResponse'
  id: Scalars['String']
  role: Scalars['String']
  senderDetail: User
  spaces: SpaceResponseForInvitation
}

export type JoinedUser = {
  __typename?: 'JoinedUser'
  isOnline: Scalars['Boolean']
  isUserBanned: Scalars['Boolean']
  joinedAt?: Maybe<Scalars['String']>
  leftAt?: Maybe<Scalars['String']>
  type: Scalars['String']
  user: User
}

export type Link = {
  __typename?: 'Link'
  createdAt: Scalars['String']
  iconType: GetIconType
  id: Scalars['Int']
  imageUrl?: Maybe<Scalars['String']>
  linkType: LinkType
  title: Scalars['String']
  updatedAt: Scalars['String']
  url: Scalars['String']
}

export enum LinkType {
  FavLink = 'FAV_LINK',
  SocialLinks = 'SOCIAL_LINKS',
}

export type ListTransactionResponse = {
  __typename?: 'ListTransactionResponse'
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
  transactions: Array<Transaction>
}

export type LoungeRoom = {
  __typename?: 'LoungeRoom'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export enum ManageLinkAction {
  Add = 'ADD',
  Delete = 'DELETE',
}

export type ManageLinksPayload = {
  action: ManageLinkAction
  iconType?: InputMaybe<GetIconType>
  id?: InputMaybe<Scalars['String']>
  imageUrl?: InputMaybe<Scalars['String']>
  linkType?: InputMaybe<LinkType>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type ManageSpaceInvitationResponse = {
  __typename?: 'ManageSpaceInvitationResponse'
  id: Scalars['String']
  message: Scalars['String']
}

export enum ManageSpaceRoleAction {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export enum ManageTabsAction {
  Add = 'ADD',
  Delete = 'DELETE',
  Update = 'UPDATE',
}

export type ManageTabsPayload = {
  action: ManageTabsAction
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type Media = {
  __typename?: 'Media'
  mediaPages: Array<MediaPage>
}

export type MediaPage = {
  __typename?: 'MediaPage'
  pageNumber?: Maybe<Scalars['Int']>
  pageUrl?: Maybe<Scalars['String']>
  totalPages?: Maybe<Scalars['Int']>
}

export enum MediaSharedByAction {
  Set = 'SET',
  Unset = 'UNSET',
}

export enum MediaTypes {
  Post = 'POST',
  Space = 'SPACE',
  User = 'USER',
}

export type MediaUpdate = {
  __typename?: 'MediaUpdate'
  isSharing: Scalars['Boolean']
  mediaSharedBy?: Maybe<Scalars['String']>
  pageInfo: MediaPage
}

export type Message = {
  __typename?: 'Message'
  message: Scalars['String']
}

export type MessageResponse = {
  __typename?: 'MessageResponse'
  message: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptRaiseHand: Room
  addDraftMedia: Array<DraftMedia>
  allowGuestUnmute: Room
  assignOrRemoveSpaceRole: Scalars['String']
  blockUserAdmin: UserDetails
  blockUserById: BlockUserResponse
  cancelRequestForPaidHost: Scalars['String']
  changeAttendeeConcentStatus: Room
  changeTabPosition: MessageResponse
  clearSearchData: Scalars['String']
  closeRoom: Room
  createDraft: Draft
  createPost: Post
  createPostComment: PostComment
  createPostCommentReply: PostCommentReply
  createRoom: Room
  createSpace: Space
  createTicket: Ticket
  deleteDraftByID: DeleteResponse
  deleteDraftMedia: Scalars['String']
  deletePost: Post
  deletePostByAdmin: PostAdmin
  deletePostComment: PostComment
  deletePostCommentReply: PostCommentReply
  deleteRoom: Room
  deleteRoomByAdmin: RoomAdmin
  deleteRoomChatMessage: Array<RoomChatMessage>
  deleteSpace: Scalars['String']
  deleteTicketByID?: Maybe<DeleteResponse>
  deleteUser: User
  deleteUsers: Array<User>
  delinkDomain: Scalars['String']
  followSpace: Space
  followUser: FollowedAndUnFollowedResponse
  getOnboardingLink: GetOnboardingLinkResponse
  handlePaidHostRequest?: Maybe<PaidHostResponse>
  incrementClickLinkSourceCount: Message
  initializeDomain: DomainStatus
  joinBotsToRoom: Scalars['String']
  joinRoom: Room
  leaveRoom: Room
  leaveSpace: Scalars['String']
  likeDislikePost: Post
  likeDislikePostComment: PostComment
  likeDislikePostCommentReply: PostCommentReply
  lowerHand: Room
  manageLinks: Array<Link>
  manageSpaceInvitation: ManageSpaceInvitationResponse
  manageSpaceRoleRequest: Scalars['String']
  manageTabs: Array<Tab>
  markRoomInterest: Room
  mediaUpdate: MediaUpdate
  mediaUpload: MediaPage
  muteUnmutePost: Post
  onboardUser: UserUpdateResponse
  payRoomTicketFee: Scalars['String']
  raiseHand: Room
  refreshToken: SigninResponse
  refundTicketFee: Scalars['String']
  reindexSearchData: Scalars['String']
  removeTaggedPost: Post
  requestForPaidHost?: Maybe<PaidHostResponse>
  resendCodeSignup: SignUpResponse
  resendOTPSignin: SignInWithOtpResponse
  resendUserVerificationEmail: User
  resetPassword: Message
  retryDomainLinking: Domain
  roomMusicHandling: Room
  sendRoomChatMessage: Array<RoomChatMessage>
  sendSpaceInvitation: Scalars['String']
  sendVerificationCodePhone: Message
  setDomain: Domain
  setDomainStatus: Scalars['String']
  setMediaSharedBy: MediaUpdate
  setNotificationSetting: NotificationSetting
  setNotificationsWatched: Scalars['String']
  setRoomRecordingStatus: Room
  setTimezone: User
  setUserType: Room
  signin: SigninResponse
  signup: SignUpResponse
  spaceRoleRequest: Scalars['String']
  startAgoraStream: Room
  startLoungeRoom: RoomAdmin
  stopLoungeRoom: RoomAdmin
  stopMediaSharing: MediaUpdate
  transferPrimaryOwnership: Scalars['String']
  unblockUserAdmin: UserDetails
  unfollowSpace: Space
  unfollowUser: FollowedAndUnFollowedResponse
  unsubscribeEmailNotifications: Scalars['String']
  updateDraftByID: Draft
  updateFifoConfigValue: FifoConfigVariable
  updatePostV2: Post
  updateRoom: Room
  updateSearchSetting: Scalars['String']
  updateSpace: Space
  updateTicketByID: Ticket
  updateUser: UserUpdateResponse
  updateUserBannedRoomStatus: Room
  updateUserEmail: User
  updateUserName: Message
  verifyCodePhone: VerificationCode
  verifyPhoneNumber: SigninResponse
  verifyUserEmail: VerifyUserEmailResponse
  withdrawInvitation: Scalars['String']
  withdrawRequest: Scalars['String']
}

export type MutationAcceptRaiseHandArgs = {
  userId: Scalars['String']
}

export type MutationAddDraftMediaArgs = {
  media: Array<Scalars['Upload']>
  type?: InputMaybe<MediaTypes>
}

export type MutationAllowGuestUnmuteArgs = {
  canGuestUnmute: Scalars['Boolean']
}

export type MutationAssignOrRemoveSpaceRoleArgs = {
  action: ManageSpaceRoleAction
  memberId: Scalars['String']
  role: AssignRemoveRole
  tagName: Scalars['String']
}

export type MutationBlockUserAdminArgs = {
  id: Scalars['String']
}

export type MutationBlockUserByIdArgs = {
  blockedUserId: Scalars['String']
  isBlocked: Scalars['Boolean']
}

export type MutationChangeAttendeeConcentStatusArgs = {
  status?: InputMaybe<AttendeeConcentStatus>
}

export type MutationChangeTabPositionArgs = {
  id: Scalars['String']
  newOrder: Scalars['Int']
}

export type MutationClearSearchDataArgs = {
  idx: SearchType
}

export type MutationCreateDraftArgs = {
  content: Scalars['JSON']
  type: DraftType
}

export type MutationCreatePostArgs = {
  childPosts: Array<CreatePostPayload>
  draftId?: InputMaybe<Scalars['ID']>
  post: CreatePostPayload
  spaceId?: InputMaybe<Scalars['String']>
  tabIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  visibility?: InputMaybe<PostVisibility>
}

export type MutationCreatePostCommentArgs = {
  comment: Scalars['String']
  postId: Scalars['ID']
}

export type MutationCreatePostCommentReplyArgs = {
  content: Scalars['String']
  postCommentId: Scalars['ID']
}

export type MutationCreateRoomArgs = {
  description: Scalars['String']
  entryFee?: InputMaybe<Scalars['Int']>
  entryFeeCurrency?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  sessionId?: InputMaybe<Scalars['String']>
  spaceId?: InputMaybe<Scalars['String']>
  startAt?: InputMaybe<Scalars['String']>
  timezone?: InputMaybe<Scalars['String']>
  visibility?: InputMaybe<PostVisibility>
}

export type MutationCreateSpaceArgs = {
  coverImage?: InputMaybe<Scalars['String']>
  coverImageUpload?: InputMaybe<Scalars['Upload']>
  description: Scalars['String']
  name: Scalars['String']
  profileImage?: InputMaybe<Scalars['Upload']>
  spaceGuidelines?: InputMaybe<Scalars['String']>
  spaceType: SpaceType
  tagName: Scalars['String']
  topics?: InputMaybe<Array<Scalars['String']>>
}

export type MutationCreateTicketArgs = {
  description: Scalars['String']
  media?: InputMaybe<Scalars['Upload']>
  name: Scalars['String']
}

export type MutationDeleteDraftByIdArgs = {
  id: Scalars['String']
}

export type MutationDeleteDraftMediaArgs = {
  id: Scalars['ID']
}

export type MutationDeletePostArgs = {
  postId: Scalars['ID']
}

export type MutationDeletePostByAdminArgs = {
  postId: Scalars['String']
}

export type MutationDeletePostCommentArgs = {
  postCommentId: Scalars['ID']
}

export type MutationDeletePostCommentReplyArgs = {
  postCommentReplyId: Scalars['ID']
}

export type MutationDeleteRoomArgs = {
  roomId: Scalars['String']
}

export type MutationDeleteRoomByAdminArgs = {
  roomId: Scalars['String']
}

export type MutationDeleteRoomChatMessageArgs = {
  id: Scalars['ID']
}

export type MutationDeleteSpaceArgs = {
  id: Scalars['ID']
}

export type MutationDeleteTicketByIdArgs = {
  id: Scalars['String']
}

export type MutationDeleteUserArgs = {
  verificationCode: Scalars['String']
}

export type MutationDeleteUsersArgs = {
  password: Scalars['String']
  phoneNumbers?: InputMaybe<Array<Scalars['String']>>
}

export type MutationDelinkDomainArgs = {
  domain: Scalars['String']
}

export type MutationFollowSpaceArgs = {
  spaceId: Scalars['String']
}

export type MutationFollowUserArgs = {
  followUserId: Scalars['ID']
}

export type MutationHandlePaidHostRequestArgs = {
  id: Scalars['String']
  reason?: InputMaybe<Scalars['String']>
  statusResponse: StatusResponseType
}

export type MutationIncrementClickLinkSourceCountArgs = {
  utmReference?: InputMaybe<Scalars['String']>
  utmSource?: InputMaybe<Scalars['String']>
}

export type MutationInitializeDomainArgs = {
  domain: Scalars['String']
}

export type MutationJoinBotsToRoomArgs = {
  count?: InputMaybe<Scalars['Int']>
  roomId: Scalars['String']
}

export type MutationJoinRoomArgs = {
  roomId: Scalars['String']
  sessionId: Scalars['String']
}

export type MutationLeaveRoomArgs = {
  nextHostId?: InputMaybe<Scalars['String']>
}

export type MutationLeaveSpaceArgs = {
  tagName: Scalars['String']
}

export type MutationLikeDislikePostArgs = {
  isLiked: Scalars['Boolean']
  postId: Scalars['ID']
}

export type MutationLikeDislikePostCommentArgs = {
  commentId: Scalars['ID']
  isLiked?: InputMaybe<Scalars['Boolean']>
}

export type MutationLikeDislikePostCommentReplyArgs = {
  isLiked?: InputMaybe<Scalars['Boolean']>
  replyId: Scalars['ID']
}

export type MutationManageLinksArgs = {
  links: Array<ManageLinksPayload>
  spaceId?: InputMaybe<Scalars['String']>
}

export type MutationManageSpaceInvitationArgs = {
  status: ManageSpaceRoleAction
  tagName: Scalars['String']
}

export type MutationManageSpaceRoleRequestArgs = {
  action: ManageSpaceRoleAction
  memberId: Scalars['String']
  role: SpaceRequestRole
  tagName: Scalars['String']
}

export type MutationManageTabsArgs = {
  spaceId?: InputMaybe<Scalars['String']>
  tabs: Array<ManageTabsPayload>
}

export type MutationMarkRoomInterestArgs = {
  isInterestedRoom: Scalars['Boolean']
  roomId: Scalars['String']
}

export type MutationMediaUpdateArgs = {
  pageNumber: Scalars['Int']
}

export type MutationMediaUploadArgs = {
  media: Scalars['Upload']
  type: Scalars['String']
}

export type MutationMuteUnmutePostArgs = {
  isMuted: Scalars['Boolean']
  postId: Scalars['ID']
}

export type MutationOnboardUserArgs = {
  onboardUser: OnboardUserInput
}

export type MutationPayRoomTicketFeeArgs = {
  roomId: Scalars['String']
}

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']
}

export type MutationRefundTicketFeeArgs = {
  reasonForRefund: Scalars['String']
  roomId: Scalars['String']
}

export type MutationReindexSearchDataArgs = {
  idx: SearchType
}

export type MutationRemoveTaggedPostArgs = {
  postId: Scalars['ID']
}

export type MutationResendCodeSignupArgs = {
  phoneNumber: Scalars['String']
}

export type MutationResendOtpSigninArgs = {
  phoneNumber: Scalars['String']
}

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']
  verificationCode: Scalars['String']
}

export type MutationRetryDomainLinkingArgs = {
  domain: Scalars['String']
}

export type MutationRoomMusicHandlingArgs = {
  status?: InputMaybe<Scalars['Boolean']>
}

export type MutationSendRoomChatMessageArgs = {
  text: Scalars['String']
}

export type MutationSendSpaceInvitationArgs = {
  role: SpaceInvitationRole
  spaceId: Scalars['String']
  users: Array<Scalars['String']>
}

export type MutationSendVerificationCodePhoneArgs = {
  phoneNumber: Scalars['String']
}

export type MutationSetDomainArgs = {
  payload: SetDomainInput
}

export type MutationSetDomainStatusArgs = {
  domain: Scalars['String']
}

export type MutationSetMediaSharedByArgs = {
  action: MediaSharedByAction
  mediaSharedById: Scalars['String']
}

export type MutationSetNotificationSettingArgs = {
  interval?: InputMaybe<NotificationInterval>
  isActive?: InputMaybe<Scalars['Boolean']>
  type: NotificationSettingType
}

export type MutationSetNotificationsWatchedArgs = {
  highWaterMark: Scalars['Date']
}

export type MutationSetRoomRecordingStatusArgs = {
  status: RecordingStatus
}

export type MutationSetTimezoneArgs = {
  userTimeZone: Scalars['String']
}

export type MutationSetUserTypeArgs = {
  userId: Scalars['String']
  userType: Scalars['String']
}

export type MutationSigninArgs = {
  password: Scalars['String']
  phoneNumber: Scalars['String']
}

export type MutationSignupArgs = {
  name: Scalars['String']
  password: Scalars['String']
  phoneNumber: Scalars['String']
  referralCode?: InputMaybe<Scalars['String']>
  referralSource?: InputMaybe<Scalars['String']>
  token: Scalars['String']
  userTimeZone: Scalars['String']
}

export type MutationSpaceRoleRequestArgs = {
  role: SpaceRequestRole
  tagName: Scalars['String']
}

export type MutationStartAgoraStreamArgs = {
  canGuestUnmute?: InputMaybe<Scalars['Boolean']>
}

export type MutationTransferPrimaryOwnershipArgs = {
  memberId: Scalars['String']
  tagName: Scalars['String']
}

export type MutationUnblockUserAdminArgs = {
  id: Scalars['String']
}

export type MutationUnfollowSpaceArgs = {
  spaceId: Scalars['String']
}

export type MutationUnfollowUserArgs = {
  unfollowUserId: Scalars['ID']
}

export type MutationUnsubscribeEmailNotificationsArgs = {
  token: Scalars['String']
}

export type MutationUpdateDraftByIdArgs = {
  content: Scalars['JSON']
  id: Scalars['String']
}

export type MutationUpdateFifoConfigValueArgs = {
  id: Scalars['Int']
  value: Scalars['String']
}

export type MutationUpdatePostV2Args = {
  childPosts: Array<UpdatePostPayload>
  post?: InputMaybe<UpdatePostPayload>
  postId: Scalars['ID']
  shouldUpdateTab?: InputMaybe<Scalars['Boolean']>
  shouldUpdateTag?: InputMaybe<Scalars['Boolean']>
  spaceId?: InputMaybe<Scalars['String']>
  tabIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  visibility?: InputMaybe<PostVisibility>
}

export type MutationUpdateRoomArgs = {
  description?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  name?: InputMaybe<Scalars['String']>
  spaceId?: InputMaybe<Scalars['String']>
  startAt?: InputMaybe<Scalars['String']>
  timezone?: InputMaybe<Scalars['String']>
  visibility?: InputMaybe<PostVisibility>
}

export type MutationUpdateSearchSettingArgs = {
  idx: SearchType
  settings: Scalars['String']
}

export type MutationUpdateSpaceArgs = {
  coverImage?: InputMaybe<Scalars['String']>
  coverImageUpload?: InputMaybe<Scalars['Upload']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  name?: InputMaybe<Scalars['String']>
  profileImage?: InputMaybe<Scalars['Upload']>
  spaceGuidelines?: InputMaybe<Scalars['String']>
  topics?: InputMaybe<Array<Scalars['String']>>
}

export type MutationUpdateTicketByIdArgs = {
  id: Scalars['String']
  name: Scalars['String']
}

export type MutationUpdateUserArgs = {
  updateUser: UpdateUserInput
}

export type MutationUpdateUserBannedRoomStatusArgs = {
  status: Scalars['Boolean']
  userId: Scalars['String']
}

export type MutationUpdateUserEmailArgs = {
  email: Scalars['String']
}

export type MutationUpdateUserNameArgs = {
  username: Scalars['String']
}

export type MutationVerifyCodePhoneArgs = {
  code: Scalars['String']
  phoneNumber: Scalars['String']
}

export type MutationVerifyPhoneNumberArgs = {
  code: Scalars['String']
  phoneNumber: Scalars['String']
}

export type MutationVerifyUserEmailArgs = {
  token: Scalars['String']
}

export type MutationWithdrawInvitationArgs = {
  spaceId: Scalars['String']
  username: Scalars['String']
}

export type MutationWithdrawRequestArgs = {
  tagName: Scalars['String']
}

export type Notification =
  | DeletePaidRoomNotification
  | FollowUserNotification
  | PaidHostRequestNotification
  | PaymentNotification
  | PostCommentLikeNotification
  | PostCommentNotification
  | PostCommentReplyLikeNotification
  | PostCommentReplyNotification
  | PostLikeNotification
  | PostQuoteNotification
  | PostRepostNotification
  | RefundNotification
  | RoomStartingNotification
  | SpaceFollowNotification
  | SpaceInviteApprovalNotification
  | SpaceMemberApprovalNotification
  | SpaceMemberNotification
  | SpaceModeratorApprovalNotification
  | SpaceModeratorNotification
  | TagPostNotification
  | UpdatePaidRoomNotification

export enum NotificationInterval {
  Daily = 'daily',
  Weekly = 'weekly',
}

export type NotificationPaginatedResponse = {
  __typename?: 'NotificationPaginatedResponse'
  limit: Scalars['Int']
  notifications: Array<Notification>
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type NotificationSetting = {
  __typename?: 'NotificationSetting'
  createdAt: Scalars['String']
  interval?: Maybe<NotificationInterval>
  isActive: Scalars['Boolean']
  type: NotificationSettingType
  updatedAt: Scalars['String']
  user: User
}

export enum NotificationSettingType {
  FollowUserNotificationSetting = 'FollowUserNotificationSetting',
  RoomStartingNotificationSetting = 'RoomStartingNotificationSetting',
}

export type Onboard = {
  added?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type OnlineMessage = {
  __typename?: 'OnlineMessage'
  message: Scalars['String']
}

export enum OrderByDirType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PaidHostRequestNotification = {
  __typename?: 'PaidHostRequestNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  paidHostResponse: PaidHostResponse
}

export type PaidHostResponse = {
  __typename?: 'PaidHostResponse'
  id?: Maybe<Scalars['String']>
  paidHostDetails?: Maybe<UserDetails>
  reason?: Maybe<Scalars['String']>
  status?: Maybe<StatusResponseType>
  userId?: Maybe<Scalars['String']>
}

export type PaidHostsResponse = {
  __typename?: 'PaidHostsResponse'
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  paidHosts?: Maybe<Array<Maybe<PaidHostResponse>>>
  total?: Maybe<Scalars['Int']>
}

export type PaymentNotification = {
  __typename?: 'PaymentNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  room: Room
}

export type PendingRequestCountResponse = {
  __typename?: 'PendingRequestCountResponse'
  member: Scalars['Int']
  moderator: Scalars['Int']
}

export type Post = {
  __typename?: 'Post'
  badge?: Maybe<BadgeInfo>
  childPostCount: Scalars['Int']
  commentCount: Scalars['Int']
  content?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  createdBy: User
  deletedAt?: Maybe<Scalars['Date']>
  editedAt?: Maybe<Scalars['Date']>
  hasLiked: Scalars['Boolean']
  hasMuted: Scalars['Boolean']
  hasThreads: Scalars['Boolean']
  heading?: Maybe<Scalars['String']>
  id: Scalars['ID']
  latestComment?: Maybe<PostComment>
  likeCount: Scalars['Int']
  media: Array<PostVariableQualityMediaUrl>
  mediaUrl?: Maybe<Array<Maybe<PostMediaUrl>>>
  originalPost?: Maybe<Post>
  parentId?: Maybe<Scalars['ID']>
  postJsonContent?: Maybe<Scalars['String']>
  postType: PostType
  repostCount: Scalars['Int']
  room?: Maybe<Room>
  space?: Maybe<Space>
  streakCountTillBadgeNotExists?: Maybe<Scalars['Int']>
  tab: Array<Tab>
  taggedUsers: Array<User>
  updatedAt: Scalars['Date']
  userId: Scalars['ID']
  userRepostId?: Maybe<Scalars['ID']>
  visibility?: Maybe<Scalars['String']>
}

export type PostAdmin = {
  __typename?: 'PostAdmin'
  content?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  createdBy: UserDetails
  deletedAt?: Maybe<Scalars['String']>
  hasThreads: Scalars['Boolean']
  id: Scalars['ID']
  mediaUrl: Array<PostMediaUrl>
  parentId?: Maybe<Scalars['String']>
  updatedAt: Scalars['String']
}

export type PostComment = {
  __typename?: 'PostComment'
  comment: Scalars['String']
  commentedBy: User
  createdAt: Scalars['Date']
  deletedAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  isLiked?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  post: Post
  postId: Scalars['String']
  replyCount: Scalars['Int']
  updatedAt: Scalars['Date']
}

export type PostCommentLikeNotification = {
  __typename?: 'PostCommentLikeNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  postComment?: Maybe<PostComment>
}

export type PostCommentNotification = {
  __typename?: 'PostCommentNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type PostCommentReply = {
  __typename?: 'PostCommentReply'
  content: Scalars['String']
  createdAt: Scalars['Date']
  deletedAt: Scalars['Date']
  id: Scalars['ID']
  isLiked?: Maybe<Scalars['Boolean']>
  likeCount: Scalars['Int']
  postComment?: Maybe<PostComment>
  repliedBy: User
  updatedAt: Scalars['Date']
}

export type PostCommentReplyLikeNotification = {
  __typename?: 'PostCommentReplyLikeNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  postCommentReply?: Maybe<PostCommentReply>
}

export type PostCommentReplyNotification = {
  __typename?: 'PostCommentReplyNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type PostDetails = {
  __typename?: 'PostDetails'
  childPosts: Array<Post>
  originalPost?: Maybe<Post>
  post: Post
}

export type PostLike = {
  __typename?: 'PostLike'
  createdAt: Scalars['Date']
  likedBy: User
  updatedAt: Scalars['Date']
}

export type PostLikeNotification = {
  __typename?: 'PostLikeNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type PostLikePaginatedResponse = {
  __typename?: 'PostLikePaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
  users: Array<PostLike>
}

export type PostMediaUrl = {
  __typename?: 'PostMediaUrl'
  id: Scalars['ID']
  sequence?: Maybe<Scalars['Int']>
  url: Scalars['String']
}

export type PostPaginatedResponse = {
  __typename?: 'PostPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  posts: Array<Post>
  recentPostCreatedAtTimestamp: Scalars['String']
  timestamp: Scalars['String']
  total: Scalars['Int']
}

export type PostQuoteNotification = {
  __typename?: 'PostQuoteNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type PostRepostNotification = {
  __typename?: 'PostRepostNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type PostResult = {
  __typename?: 'PostResult'
  limit: Scalars['Int']
  maxTotalHits: Scalars['Int']
  offset: Scalars['Int']
  posts: Array<Post>
  total: Scalars['Int']
}

export enum PostType {
  QuotePost = 'QUOTE_POST',
  Repost = 'REPOST',
  RoomPost = 'ROOM_POST',
  SimplePost = 'SIMPLE_POST',
}

export type PostVariableQualityMediaUrl = {
  __typename?: 'PostVariableQualityMediaUrl'
  id: Scalars['ID']
  sequence?: Maybe<Scalars['Int']>
  url: VariableQualityUrl
}

export enum PostVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type PublicRoomPostsPaginationResponse = {
  __typename?: 'PublicRoomPostsPaginationResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  posts: Array<Post>
  total: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  ListAllTransactions?: Maybe<ListTransactionResponse>
  ListRoomTransactions?: Maybe<ListTransactionResponse>
  checkIfUsernameAlreadyExists?: Maybe<UsernameVerify>
  checkTagName: TagNameSearchResponse
  fetchFollowers: SearchResponse
  fetchFollowing: SearchResponse
  fetchSpaceFollowers: FetchFollowerResponse
  getAllDrafts: Array<Draft>
  getAllInvitations: GetAllInvitationsResponse
  getAllMySpaces: SpacesPaginatedResponse
  getAllPaidRooms?: Maybe<AllPaidRoomsResponse>
  getAllTabs: AllTabsResponse
  getAllTickets: Array<Ticket>
  getBlockUserList: Array<User>
  getCommentAndReplyLikes: CommentLikePaginatedResponse
  getCommentReplies: RepliesPaginatedResponse
  getDiscoverSpaces: SpacesPaginatedResponse
  getDomain?: Maybe<Domain>
  getDomainBySlug?: Maybe<Domain>
  getDraftByID: Draft
  getFifoConfig: Array<Maybe<FifoConfigVariable>>
  getLivePodcasts: Array<Maybe<LivePodcastRoom>>
  getLoungeRoom: LoungeRoom
  getMyBadgeInfo?: Maybe<BadgeInfo>
  getMyBadges?: Maybe<GetBadge>
  getNotifications: NotificationPaginatedResponse
  getNotificationsCount: Scalars['Int']
  getPaidHosts?: Maybe<PaidHostsResponse>
  getPostComments: CommentsPaginatedResponse
  getPostDetails: PostDetails
  getPostLike: PostLikePaginatedResponse
  getPostRepostAndQuotePostUsers: RepostAndQuotePostUsersPaginatedResponse
  getPosts: PostPaginatedResponse
  getPostsBySpace: PostPaginatedResponse
  getPostsByTabId: TabPostPaginatedResponse
  getPostsByTaggedIn: TaggedPostPaginatedResponse
  getPostsByUsername: PostPaginatedResponse
  getPostsCount: Scalars['Int']
  getPublicRoomPosts: PublicRoomPostsPaginationResponse
  getRoomChatMessages: RoomChatPaginatedResponse
  getRoomMedia: MediaUpdate
  getRoomPost: PostDetails
  getSearchSetting: Scalars['String']
  getSpace: Space
  getSpaceRole?: Maybe<FetchSpaceRoleResponse>
  getSpaceTagNamesForMembers: Array<Maybe<Space>>
  getSpacesByUsername: Array<Maybe<Space>>
  getStripeBalance?: Maybe<Balance>
  getTabsByTagname: AllTabsResponse
  getTabsByUsername: AllTabsResponse
  getTicketByID: Ticket
  getTimezone: Timezone
  getTopSpaces: TopSpacesResponse
  getTransactionById?: Maybe<Transaction>
  getUrlMetaData: UrlMetadata
  getUserByIdBulk: Array<User>
  getUserByUsername: User
  getUserFollowSpaces: SpaceSearchResponse
  getUserFollowSuggestions: Array<User>
  getUserStripeDetails?: Maybe<UserStripeResponse>
  me: User
  postSearch: PostSearchResponse
  roomSearch: RoomSearchResponse
  searchQuery: SearchedResult
  searchUser: SearchUserResponse
  spaceSearch: SpaceSearchResponse
  userSearch: UserSearchResponse
}

export type QueryListAllTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderByColumn?: InputMaybe<Scalars['String']>
  orderByDir?: InputMaybe<OrderByDirType>
  status?: InputMaybe<TransactionStatus>
  type?: InputMaybe<TransactionType>
}

export type QueryListRoomTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderByColumn?: InputMaybe<Scalars['String']>
  orderByDir?: InputMaybe<OrderByDirType>
  roomId: Scalars['String']
  status?: InputMaybe<TransactionStatus>
  type?: InputMaybe<TransactionType>
}

export type QueryCheckIfUsernameAlreadyExistsArgs = {
  username: Scalars['String']
}

export type QueryCheckTagNameArgs = {
  tagName: Scalars['String']
}

export type QueryFetchFollowersArgs = {
  searchQuery: SearchInput
}

export type QueryFetchFollowingArgs = {
  searchQuery: SearchInput
}

export type QueryFetchSpaceFollowersArgs = {
  fetchSpaceFollowers: FetchSpaceFollowerQuery
}

export type QueryGetAllDraftsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  type: Scalars['String']
}

export type QueryGetAllInvitationsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllMySpacesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllPaidRoomsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetAllTicketsArgs = {
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryGetCommentAndReplyLikesArgs = {
  commentId: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetCommentRepliesArgs = {
  commentId: Scalars['String']
  fetchUserLikeStatus?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetDiscoverSpacesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetDomainArgs = {
  domain: Scalars['String']
}

export type QueryGetDomainBySlugArgs = {
  slug: Scalars['String']
  type: TargetType
}

export type QueryGetDraftByIdArgs = {
  id: Scalars['String']
}

export type QueryGetMyBadgeInfoArgs = {
  badgeName: Scalars['String']
}

export type QueryGetMyBadgesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetNotificationsArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<Scalars['String']>
}

export type QueryGetNotificationsCountArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Array<Scalars['String']>>
}

export type QueryGetPaidHostsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetPostCommentsArgs = {
  fetchUserLikeStatus?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  postId: Scalars['String']
}

export type QueryGetPostDetailsArgs = {
  postId: Scalars['String']
}

export type QueryGetPostLikeArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  postId: Scalars['String']
}

export type QueryGetPostRepostAndQuotePostUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  postId: Scalars['String']
}

export type QueryGetPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  timestamp?: InputMaybe<Scalars['String']>
  type: GetPostType
}

export type QueryGetPostsBySpaceArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  tagName: Scalars['String']
  type: GetSpacePostType
}

export type QueryGetPostsByTabIdArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  tabId: Scalars['String']
}

export type QueryGetPostsByTaggedInArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  username: Scalars['String']
}

export type QueryGetPostsByUsernameArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  postId?: InputMaybe<Scalars['String']>
  type: GetUserPostType
  username: Scalars['String']
}

export type QueryGetPostsCountArgs = {
  timestamp: Scalars['String']
  type: GetPostType
}

export type QueryGetPublicRoomPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  type: GetRoomType
}

export type QueryGetRoomChatMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  timestamp?: InputMaybe<Scalars['String']>
}

export type QueryGetRoomPostArgs = {
  roomId: Scalars['String']
}

export type QueryGetSearchSettingArgs = {
  idx: SearchType
}

export type QueryGetSpaceArgs = {
  tagName: Scalars['String']
}

export type QueryGetSpaceRoleArgs = {
  fetchSpaceRoleQuery: FetchSpaceRoleQuery
}

export type QueryGetSpaceTagNamesForMembersArgs = {
  tagName: Scalars['String']
}

export type QueryGetSpacesByUsernameArgs = {
  username: Scalars['String']
}

export type QueryGetTabsByTagnameArgs = {
  tagName: Scalars['String']
}

export type QueryGetTabsByUsernameArgs = {
  username: Scalars['String']
}

export type QueryGetTicketByIdArgs = {
  id: Scalars['String']
}

export type QueryGetTopSpacesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetTransactionByIdArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryGetUrlMetaDataArgs = {
  url: Scalars['String']
}

export type QueryGetUserByIdBulkArgs = {
  userIds?: InputMaybe<Array<Scalars['String']>>
}

export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']
}

export type QueryGetUserFollowSpacesArgs = {
  followedSpaceQuery: FetchUserFollowedSpaces
}

export type QueryGetUserFollowSuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryPostSearchArgs = {
  postSearchQuery: SearchPostInput
}

export type QueryRoomSearchArgs = {
  roomSearchQuery: SearchRoomInput
}

export type QuerySearchQueryArgs = {
  areaOfInterests?: InputMaybe<Array<InputMaybe<AreaOfInterestsInput>>>
  keywords?: InputMaybe<Scalars['String']>
}

export type QuerySearchUserArgs = {
  key: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QuerySpaceSearchArgs = {
  spaceSearchQuery: SearchSpaceInput
}

export type QueryUserSearchArgs = {
  userSearchQuery: SearchUsersInput
}

export type RaisedHand = {
  __typename?: 'RaisedHand'
  raisedAt: Scalars['String']
  status: Scalars['String']
  user: User
}

export enum RecordingStatus {
  RecordingOff = 'RECORDING_OFF',
  RecordingOn = 'RECORDING_ON',
  RecordingPause = 'RECORDING_PAUSE',
}

export enum ReferenceType {
  Space = 'SPACE',
  User = 'USER',
}

export type RefundNotification = {
  __typename?: 'RefundNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  room: Room
}

export type RepliesPaginatedResponse = {
  __typename?: 'RepliesPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  replies: Array<PostCommentReply>
  total: Scalars['Int']
}

export type RepostAndQuotePostUsers = {
  __typename?: 'RepostAndQuotePostUsers'
  content?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  id?: Maybe<Scalars['ID']>
  originalPost?: Maybe<Post>
  originalPostId?: Maybe<Scalars['String']>
  postType: PostType
  repostedBy: User
  updatedAt: Scalars['Date']
}

export type RepostAndQuotePostUsersPaginatedResponse = {
  __typename?: 'RepostAndQuotePostUsersPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
  users: Array<RepostAndQuotePostUsers>
}

export type Room = {
  __typename?: 'Room'
  agoraToken?: Maybe<Scalars['String']>
  canGuestUnmute?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['String']
  createdBy: User
  deletedAt?: Maybe<Scalars['String']>
  description: Scalars['String']
  entryFee?: Maybe<Scalars['Int']>
  entryFeeCurrency?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isAgoraStreamStarted: Scalars['Boolean']
  isInterested: Scalars['Boolean']
  isMusicOn: Scalars['Boolean']
  isPodcast?: Maybe<Scalars['Boolean']>
  isRoomStarted?: Maybe<Scalars['Boolean']>
  isUserPresentInRoom: Scalars['Boolean']
  joinedUsers: Array<RoomSummaryUser>
  name: Scalars['String']
  paymentStatus?: Maybe<TransactionStatus>
  podcastDuration?: Maybe<Scalars['Int']>
  podcastEpisodeId?: Maybe<Scalars['Int']>
  podcastId?: Maybe<Scalars['String']>
  podcastLink?: Maybe<Scalars['String']>
  post: Post
  priceId?: Maybe<Scalars['String']>
  productId?: Maybe<Scalars['String']>
  recordingStatus?: Maybe<RecordingStatus>
  refundStatus?: Maybe<TransactionStatus>
  roomSessionId?: Maybe<Scalars['String']>
  roomTerminatedReason?: Maybe<Scalars['String']>
  roomType: RoomTypes
  roomWillCloseAt?: Maybe<Scalars['Date']>
  startAt?: Maybe<Scalars['String']>
  timezone?: Maybe<Scalars['String']>
  totalUserCount: Scalars['Int']
}

export type RoomAdmin = {
  __typename?: 'RoomAdmin'
  agoraStreamStartedAt?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  createdBy: UserDetails
  deletedAt?: Maybe<Scalars['String']>
  description: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  startAt?: Maybe<Scalars['String']>
  updatedAt: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type RoomChatMessage = {
  __typename?: 'RoomChatMessage'
  createdAt: Scalars['String']
  id: Scalars['ID']
  isDeleted?: Maybe<Scalars['Boolean']>
  textMessage?: Maybe<Scalars['String']>
  type: RoomChatMessageType
  updatedAt: Scalars['String']
  user: User
  userId: Scalars['ID']
}

export enum RoomChatMessageType {
  LowerHand = 'LOWER_HAND',
  RaiseHand = 'RAISE_HAND',
  Text = 'TEXT',
}

export type RoomChatPaginatedResponse = {
  __typename?: 'RoomChatPaginatedResponse'
  data: Array<RoomChatMessage>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type RoomResult = {
  __typename?: 'RoomResult'
  limit: Scalars['Int']
  maxTotalHits: Scalars['Int']
  offset: Scalars['Int']
  rooms: Array<Room>
  total: Scalars['Int']
}

export type RoomStartingNotification = {
  __typename?: 'RoomStartingNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  room: Room
}

export type RoomSummary = {
  __typename?: 'RoomSummary'
  closedAt?: Maybe<Scalars['Date']>
  deletedAt?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  isRoomStarted?: Maybe<Scalars['Boolean']>
  joinedUsers: Array<RoomSummaryUser>
  totalUserCount: Scalars['Int']
}

export type RoomSummaryUser = {
  __typename?: 'RoomSummaryUser'
  id: Scalars['ID']
  name: Scalars['String']
  profileImage?: Maybe<VariableQualityImage>
  profileImageUrl?: Maybe<Scalars['String']>
  username: Scalars['String']
}

export enum RoomTypes {
  Instant = 'INSTANT',
  Lounge = 'LOUNGE',
  Podcast = 'PODCAST',
  Scheduled = 'SCHEDULED',
}

export type SearchInput = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type SearchPostInput = {
  content?: InputMaybe<Scalars['String']>
  endTimeStamp?: InputMaybe<Scalars['String']>
  hasThreads?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  parentId?: InputMaybe<Scalars['String']>
  showDeletedPosts?: InputMaybe<Scalars['Boolean']>
  startTimeStamp?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type SearchResponse = {
  __typename?: 'SearchResponse'
  data: Array<User>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type SearchRoomInput = {
  id?: InputMaybe<Scalars['String']>
  isActiveRoom?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  scheduleEndTimeStamp?: InputMaybe<Scalars['String']>
  scheduleStartTime?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type SearchSpaceInput = {
  endTimeStamp?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  spaceType?: InputMaybe<SpaceType>
  startTimeStamp?: InputMaybe<Scalars['String']>
  tagName?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type SearchUserResponse = {
  __typename?: 'SearchUserResponse'
  total: Scalars['Int']
  users: Array<User>
}

export type SearchUsersInput = {
  email?: InputMaybe<Scalars['String']>
  endTimeStamp?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  isReferred?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  phoneNumber?: InputMaybe<Scalars['String']>
  referralCode?: InputMaybe<Scalars['String']>
  referralSource?: InputMaybe<Scalars['String']>
  startTimeStamp?: InputMaybe<Scalars['String']>
}

export type SetDomainInput = {
  domain: Scalars['String']
  targetId: Scalars['String']
  targetType: TargetType
}

export type SignInWithOtpResponse = {
  __typename?: 'SignInWithOTPResponse'
  message: Scalars['String']
}

export type SignUpResponse = {
  __typename?: 'SignUpResponse'
  message: Scalars['String']
}

export type Space = {
  __typename?: 'Space'
  coverImage?: Maybe<VariableQualityUrl>
  coverImageUrl?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  createdBy: User
  currentUserMemberStatus: SpaceMemberStatus
  description?: Maybe<Scalars['String']>
  followersCount: Scalars['Int']
  id: Scalars['ID']
  isFollowingSpace: Scalars['Boolean']
  links: Array<Link>
  name: Scalars['String']
  pendingRequestCount: PendingRequestCountResponse
  profileImage?: Maybe<VariableQualityUrl>
  profileImageUrl?: Maybe<Scalars['String']>
  spaceFollower: Array<User>
  spaceGuidelines?: Maybe<Scalars['String']>
  spaceMember: Array<User>
  spacePostCount: Scalars['Int']
  spaceTalkCount: Scalars['Int']
  spaceType: SpaceType
  tagName: Scalars['String']
  topics: Array<Maybe<Scalars['String']>>
  totalMembersCount: Scalars['Int']
  updatedAt: Scalars['String']
  userRequestedForRole: Scalars['Boolean']
}

export type SpaceFollowNotification = {
  __typename?: 'SpaceFollowNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export enum SpaceInvitationRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER',
}

export type SpaceInviteApprovalNotification = {
  __typename?: 'SpaceInviteApprovalNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export type SpaceMemberApprovalNotification = {
  __typename?: 'SpaceMemberApprovalNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export type SpaceMemberNotification = {
  __typename?: 'SpaceMemberNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export enum SpaceMemberStatus {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  NotAMember = 'NOT_A_MEMBER',
  Owner = 'OWNER',
  PrimaryOwner = 'PRIMARY_OWNER',
}

export type SpaceModeratorApprovalNotification = {
  __typename?: 'SpaceModeratorApprovalNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export type SpaceModeratorNotification = {
  __typename?: 'SpaceModeratorNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  space: Space
}

export enum SpaceRequestRole {
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
}

export type SpaceResponseForInvitation = {
  __typename?: 'SpaceResponseForInvitation'
  name: Scalars['String']
  tagName: Scalars['String']
}

export type SpaceResult = {
  __typename?: 'SpaceResult'
  limit: Scalars['Int']
  maxTotalHits: Scalars['Int']
  offset: Scalars['Int']
  spaces: Array<Space>
  total: Scalars['Int']
}

export enum SpaceRoleFilterStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
}

export enum SpaceRoles {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER',
  PrimaryOwner = 'PRIMARY_OWNER',
}

export type SpaceSearchResponse = {
  __typename?: 'SpaceSearchResponse'
  data: Array<Space>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export enum SpaceType {
  Open = 'OPEN',
  Plus = 'PLUS',
  Pro = 'PRO',
}

export type SpacesPaginatedResponse = {
  __typename?: 'SpacesPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  spaces: Array<Space>
  total: Scalars['Int']
}

export enum StatusResponseType {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Revoke = 'REVOKE',
}

export type Subscription = {
  __typename?: 'Subscription'
  newRoomChatMessages: Array<RoomChatMessage>
  postsUpdated: Post
}

export type SubscriptionPostsUpdatedArgs = {
  ids: Array<Scalars['ID']>
}

export type Tab = {
  __typename?: 'Tab'
  createdAt: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  order?: Maybe<Scalars['String']>
  referenceId: Scalars['String']
  referenceType: ReferenceType
  updatedAt: Scalars['String']
}

export type TabPostPaginatedResponse = {
  __typename?: 'TabPostPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  posts: Array<Post>
  total: Scalars['Int']
}

export type TagPostNotification = {
  __typename?: 'TagPostNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  post: Post
}

export type TaggedPostPaginatedResponse = {
  __typename?: 'TaggedPostPaginatedResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  posts: Array<Post>
  total: Scalars['Int']
}

export enum TargetType {
  SpaceProfile = 'SPACE_PROFILE',
  UserProfile = 'USER_PROFILE',
}

export type Ticket = {
  __typename?: 'Ticket'
  createdAt: Scalars['String']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  updatedAt: Scalars['String']
  userId: Scalars['String']
}

export type Timezone = {
  __typename?: 'Timezone'
  userTimeZone: Scalars['String']
}

export type TokenForRefundResponse = {
  __typename?: 'TokenForRefundResponse'
  expiresIn?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}

export type TokenSchema = {
  __typename?: 'TokenSchema'
  expiresAt: Scalars['String']
  expiresIn: Scalars['String']
  expiresInitialisedTime: Scalars['String']
  token: Scalars['String']
}

export type TopSpacesResponse = {
  __typename?: 'TopSpacesResponse'
  limit: Scalars['Int']
  offset: Scalars['Int']
  spaces: Array<Space>
  total: Scalars['Int']
}

export type Transaction = {
  __typename?: 'Transaction'
  amount?: Maybe<Scalars['Float']>
  createdAt: Scalars['String']
  id: Scalars['ID']
  orderId?: Maybe<Scalars['String']>
  paymentId?: Maybe<Scalars['String']>
  reasonForRefund?: Maybe<Scalars['String']>
  receiptUrl?: Maybe<Scalars['String']>
  room?: Maybe<Room>
  status?: Maybe<TransactionStatus>
  type?: Maybe<TransactionType>
  updatedAt: Scalars['String']
  user?: Maybe<User>
}

export enum TransactionStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Successful = 'SUCCESSFUL',
}

export enum TransactionType {
  Payment = 'PAYMENT',
  Refund = 'REFUND',
}

export type UpdatePaidRoomNotification = {
  __typename?: 'UpdatePaidRoomNotification'
  activityCount?: Maybe<Scalars['Int']>
  activityUsers: Array<User>
  createdAt: Scalars['String']
  id: Scalars['String']
  isWatched: Scalars['Boolean']
  room: Room
}

export type UpdatePostMediaPayload = {
  action: AllowedUpdateActions
  id?: InputMaybe<Scalars['ID']>
  mediaId?: InputMaybe<Scalars['String']>
  sequence?: InputMaybe<Scalars['Int']>
}

export type UpdatePostPayload = {
  action: AllowedUpdateActions
  content?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  media?: InputMaybe<Array<InputMaybe<CreatePostMediaPayload>>>
  originalPostId?: InputMaybe<Scalars['String']>
  postJsonContent?: InputMaybe<Scalars['String']>
  postType?: InputMaybe<PostType>
}

export type UpdateUserInput = {
  coverImage?: InputMaybe<Scalars['String']>
  coverImageUpload?: InputMaybe<Scalars['Upload']>
  description?: InputMaybe<Scalars['String']>
  interests?: InputMaybe<Array<Scalars['String']>>
  name?: InputMaybe<Scalars['String']>
  profileImage?: InputMaybe<Scalars['Upload']>
}

export type UrlMetadata = {
  __typename?: 'UrlMetadata'
  description?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  checkFollowerStatus: Scalars['Boolean']
  coverImage?: Maybe<VariableQualityImage>
  coverImageUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  followedSpacesCount: Scalars['Int']
  followersCount: Scalars['Int']
  followingCount: Scalars['Int']
  id: Scalars['ID']
  interests?: Maybe<Array<Scalars['String']>>
  isEmailVerified: Scalars['Boolean']
  isFollowing: Scalars['Boolean']
  isNumberVerified: Scalars['Boolean']
  isOnboarded: Scalars['Boolean']
  isPodcastUser: Scalars['Boolean']
  links: Array<Link>
  name?: Maybe<Scalars['String']>
  notificationSettings: Array<NotificationSetting>
  paidHost?: Maybe<PaidHostResponse>
  phoneNumber?: Maybe<Scalars['String']>
  profileImage?: Maybe<VariableQualityImage>
  profileImageUrl?: Maybe<Scalars['String']>
  spaceRole?: Maybe<Scalars['String']>
  streakCountTillBadgeNotExists?: Maybe<Scalars['Int']>
  tempEmail?: Maybe<Scalars['String']>
  userTimeZone: Scalars['String']
  username?: Maybe<Scalars['String']>
  usernameAttemptLefts?: Maybe<Scalars['Int']>
}

export type UserBadge = {
  __typename?: 'UserBadge'
  badgeName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  userId?: Maybe<Scalars['String']>
}

export type UserDetails = {
  __typename?: 'UserDetails'
  createdAt: Scalars['String']
  deletedAt?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  interests?: Maybe<Array<Scalars['String']>>
  isBlockedByAdmin: Scalars['Boolean']
  isEmailVerified: Scalars['Boolean']
  isNumberVerified: Scalars['Boolean']
  isReferred?: Maybe<Scalars['Boolean']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phoneNumber: Scalars['String']
  referralCode?: Maybe<Scalars['String']>
  referralSource?: Maybe<Scalars['String']>
  userTimeZone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type UserOnline = {
  __typename?: 'UserOnline'
  lastOnlineTimestamp: Scalars['String']
}

export type UserResult = {
  __typename?: 'UserResult'
  limit: Scalars['Int']
  maxTotalHits: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
  users: Array<User>
}

export type UserStripeResponse = {
  __typename?: 'UserStripeResponse'
  accDisabledReason?: Maybe<Scalars['String']>
  bank?: Maybe<GetUserBankDetailsResponse>
  currentlyDue?: Maybe<Array<Maybe<Scalars['String']>>>
  payoutsEnabled?: Maybe<Scalars['Boolean']>
}

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse'
  user: User
}

export type UsernameVerify = {
  __typename?: 'UsernameVerify'
  isUserNameAlreadyExist: Scalars['Boolean']
}

export type VariableQualityImage = {
  __typename?: 'VariableQualityImage'
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
  original?: Maybe<Scalars['String']>
  small?: Maybe<Scalars['String']>
}

export type VariableQualityUrl = {
  __typename?: 'VariableQualityUrl'
  large?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
  original?: Maybe<Scalars['String']>
  small?: Maybe<Scalars['String']>
}

export type VerificationCode = {
  __typename?: 'VerificationCode'
  expiresIn: Scalars['String']
  verificationCode: Scalars['String']
}

export type AreaOfInterestsInput = {
  interests: Interset
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type FifoConfigVariable = {
  __typename?: 'fifoConfigVariable'
  description: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
  value: Scalars['String']
}

export type FollowedAndUnFollowedResponse = {
  __typename?: 'followedAndUnFollowedResponse'
  affectedUser: User
  currentUser: User
}

export enum Interset {
  Post = 'POST',
  Room = 'ROOM',
  Spaces = 'SPACES',
  Top = 'TOP',
  User = 'USER',
}

export type LivePodcastRoom = {
  __typename?: 'livePodcastRoom'
  createdAt: Scalars['String']
  id: Scalars['ID']
  podcastDuration?: Maybe<Scalars['Int']>
  podcastEpisodeId?: Maybe<Scalars['Int']>
  podcastId?: Maybe<Scalars['String']>
}

export type OnboardUserInput = {
  coverImage?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  interests?: InputMaybe<Array<Scalars['String']>>
  profileImage?: InputMaybe<Scalars['Upload']>
}

export type PostSearchResponse = {
  __typename?: 'postSearchResponse'
  data: Array<Maybe<PostAdmin>>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type RoomSearchResponse = {
  __typename?: 'roomSearchResponse'
  data: Array<Maybe<RoomAdmin>>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export enum SearchType {
  Post = 'POST',
  Room = 'ROOM',
  Spaces = 'SPACES',
  User = 'USER',
}

export type SearchedResult = {
  __typename?: 'searchedResult'
  postResponse?: Maybe<PostResult>
  roomResponse?: Maybe<RoomResult>
  spaceResponse?: Maybe<SpaceResult>
  userResponse?: Maybe<UserResult>
}

export type SigninResponse = {
  __typename?: 'signinResponse'
  accessToken?: Maybe<TokenSchema>
  refreshToken?: Maybe<TokenSchema>
  user: User
}

// export type SpaceSearchResponse = {
//   __typename?: 'spaceSearchResponse';
//   data: Array<Maybe<Space>>;
//   limit: Scalars['Int'];
//   offset: Scalars['Int'];
//   total?: Maybe<Scalars['Int']>;
// };

export type TagNameSearchResponse = {
  __typename?: 'tagNameSearchResponse'
  exists: Scalars['Boolean']
  suggestions: Array<Space>
}

export type UserSearchResponse = {
  __typename?: 'userSearchResponse'
  data: Array<Maybe<UserDetails>>
  limit: Scalars['Int']
  offset: Scalars['Int']
  total: Scalars['Int']
}

export type VerifyUserEmailResponse = {
  __typename?: 'verifyUserEmailResponse'
  isEmailVerified: Scalars['Boolean']
  message: Scalars['String']
}

export type GetPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  timestamp?: InputMaybe<Scalars['String']>
  type: GetPostType
}>

export type GetPostsQuery = {
  __typename?: 'Query'
  getPosts: {
    __typename?: 'PostPaginatedResponse'
    total: number
    limit: number
    timestamp: string
    recentPostCreatedAtTimestamp: string
    posts: Array<{
      __typename?: 'Post'
      childPostCount: number
      id: string
      content?: string | null
      postType: PostType
      hasLiked: boolean
      userRepostId?: string | null
      hasThreads: boolean
      parentId?: string | null
      commentCount: number
      likeCount: number
      repostCount: number
      hasMuted: boolean
      createdAt: any
      updatedAt: any
      deletedAt?: any | null
      editedAt?: any | null
      taggedUsers: Array<{ __typename?: 'User'; id: string }>
      createdBy: {
        __typename?: 'User'
        id: string
        name?: string | null
        username?: string | null
        profileImage?: {
          __typename?: 'VariableQualityImage'
          small?: string | null
          medium?: string | null
          large?: string | null
          original?: string | null
        } | null
      }
      space?: {
        __typename?: 'Space'
        id: string
        name: string
        tagName: string
        spaceType: SpaceType
        profileImageUrl?: string | null
        currentUserMemberStatus: SpaceMemberStatus
      } | null
      originalPost?: {
        __typename?: 'Post'
        childPostCount: number
        id: string
        content?: string | null
        postType: PostType
        hasLiked: boolean
        userRepostId?: string | null
        hasThreads: boolean
        parentId?: string | null
        commentCount: number
        likeCount: number
        repostCount: number
        hasMuted: boolean
        createdAt: any
        updatedAt: any
        deletedAt?: any | null
        editedAt?: any | null
        createdBy: {
          __typename?: 'User'
          id: string
          name?: string | null
          username?: string | null
          profileImage?: {
            __typename?: 'VariableQualityImage'
            small?: string | null
            medium?: string | null
            large?: string | null
            original?: string | null
          } | null
        }
        space?: {
          __typename?: 'Space'
          id: string
          name: string
          tagName: string
          spaceType: SpaceType
          profileImageUrl?: string | null
          currentUserMemberStatus: SpaceMemberStatus
        } | null
        media: Array<{
          __typename?: 'PostVariableQualityMediaUrl'
          id: string
          url: {
            __typename?: 'VariableQualityUrl'
            small?: string | null
            medium?: string | null
            large?: string | null
            original?: string | null
          }
        }>
      } | null
      media: Array<{
        __typename?: 'PostVariableQualityMediaUrl'
        id: string
        url: {
          __typename?: 'VariableQualityUrl'
          small?: string | null
          medium?: string | null
          large?: string | null
          original?: string | null
        }
      }>
    }>
  }
}

export type BasicPostDataFragment = {
  __typename?: 'Post'
  id: string
  content?: string | null
  postType: PostType
  hasLiked: boolean
  userRepostId?: string | null
  hasThreads: boolean
  parentId?: string | null
  commentCount: number
  likeCount: number
  repostCount: number
  hasMuted: boolean
  createdAt: any
  updatedAt: any
  deletedAt?: any | null
  editedAt?: any | null
  media: Array<{
    __typename?: 'PostVariableQualityMediaUrl'
    id: string
    url: {
      __typename?: 'VariableQualityUrl'
      small?: string | null
      medium?: string | null
      large?: string | null
      original?: string | null
    }
  }>
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me: {
    __typename?: 'User'
    id: string
    name?: string | null
    username?: string | null
    description?: string | null
    email?: string | null
    isEmailVerified: boolean
    isOnboarded: boolean
    phoneNumber?: string | null
    tempEmail?: string | null
    userTimeZone: string
    usernameAttemptLefts?: number | null
    followersCount: number
    followingCount: number
    profileImage?: {
      __typename?: 'VariableQualityImage'
      small?: string | null
      medium?: string | null
      large?: string | null
      original?: string | null
    } | null
  }
}

export type SignInMutationVariables = Exact<{
  phoneNumber: Scalars['String']
  password: Scalars['String']
}>

export type SignInMutation = {
  __typename?: 'Mutation'
  signin: {
    __typename?: 'signinResponse'
    accessToken?: { __typename?: 'TokenSchema'; token: string; expiresAt: string } | null
    user: { __typename?: 'User'; id: string; isOnboarded: boolean }
  }
}

export type ResendOtpMutationVariables = Exact<{
  phoneNumber: Scalars['String']
}>

export type ResendOtpMutation = {
  __typename?: 'Mutation'
  resendOTPSignin: { __typename?: 'SignInWithOTPResponse'; message: string }
}

export type SignupMutationVariables = Exact<{
  phoneNumber: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  userTimeZone: Scalars['String']
  token: Scalars['String']
}>

export type SignupMutation = { __typename?: 'Mutation'; signup: { __typename?: 'SignUpResponse'; message: string } }

export type ResendCodeSignupMutationVariables = Exact<{
  phoneNumber: Scalars['String']
}>

export type ResendCodeSignupMutation = {
  __typename?: 'Mutation'
  resendCodeSignup: { __typename?: 'SignUpResponse'; message: string }
}

export type VerifyPhoneNumberMutationVariables = Exact<{
  phoneNumber: Scalars['String']
  code: Scalars['String']
}>

export type VerifyPhoneNumberMutation = {
  __typename?: 'Mutation'
  verifyPhoneNumber: {
    __typename?: 'signinResponse'
    accessToken?: { __typename?: 'TokenSchema'; token: string; expiresAt: string } | null
  }
}

export type OnboardUserMutationVariables = Exact<{
  onboardUser: OnboardUserInput
}>

export type OnboardUserMutation = {
  __typename?: 'Mutation'
  onboardUser: { __typename?: 'UserUpdateResponse'; user: { __typename?: 'User'; id: string } }
}

export type SendVerificationCodePhoneMutationVariables = Exact<{
  phoneNumber: Scalars['String']
}>

export type SendVerificationCodePhoneMutation = {
  __typename?: 'Mutation'
  sendVerificationCodePhone: { __typename?: 'Message'; message: string }
}

export const BasicPostDataFragmentDoc = `
    fragment BasicPostData on Post {
  id
  content
  postType
  hasLiked
  userRepostId
  hasThreads
  parentId
  commentCount
  likeCount
  repostCount
  media {
    id
    url {
      small
      medium
      large
      original
    }
  }
  hasMuted
  createdAt
  updatedAt
  deletedAt
  editedAt
}
    `
export const GetPostsDocument = `
    query GetPosts($limit: Int, $timestamp: String, $type: GetPostType!) {
  getPosts(limit: $limit, timestamp: $timestamp, type: $type) {
    total
    limit
    timestamp
    posts {
      ...BasicPostData
      taggedUsers {
        id
      }
      createdBy {
        id
        name
        username
        profileImage {
          small
          medium
          large
          original
        }
      }
      space {
        id
        name
        tagName
        spaceType
        profileImageUrl
        currentUserMemberStatus
      }
      originalPost {
        ...BasicPostData
        createdBy {
          id
          name
          username
          profileImage {
            small
            medium
            large
            original
          }
        }
        space {
          id
          name
          tagName
          spaceType
          profileImageUrl
          currentUserMemberStatus
        }
        childPostCount
      }
      childPostCount
    }
    recentPostCreatedAtTimestamp
  }
}
    ${BasicPostDataFragmentDoc}`
export const useGetPostsQuery = <TData = GetPostsQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetPostsQueryVariables,
  options?: UseQueryOptions<GetPostsQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<GetPostsQuery, TError, TData>(
    ['GetPosts', variables],
    fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers),
    options,
  )

useGetPostsQuery.getKey = (variables: GetPostsQueryVariables) => ['GetPosts', variables]
useGetPostsQuery.fetcher = (
  client: GraphQLClient,
  variables: GetPostsQueryVariables,
  headers?: RequestInit['headers'],
) => fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers)
export const MeDocument = `
    query Me {
  me {
    id
    name
    username
    description
    profileImage {
      small
      medium
      large
      original
    }
    email
    isEmailVerified
    isOnboarded
    phoneNumber
    tempEmail
    userTimeZone
    usernameAttemptLefts
    followersCount
    followingCount
  }
}
    `
export const useMeQuery = <TData = MeQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<MeQuery, TError, TData>(
    variables === undefined ? ['Me'] : ['Me', variables],
    fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
    options,
  )

useMeQuery.getKey = (variables?: MeQueryVariables) => (variables === undefined ? ['Me'] : ['Me', variables])
useMeQuery.fetcher = (client: GraphQLClient, variables?: MeQueryVariables, headers?: RequestInit['headers']) =>
  fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers)
export const SignInDocument = `
    mutation SignIn($phoneNumber: String!, $password: String!) {
  signin(phoneNumber: $phoneNumber, password: $password) {
    accessToken {
      token
      expiresAt
    }
    user {
      id
      isOnboarded
    }
  }
}
    `
export const useSignInMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<SignInMutation, TError, SignInMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
    ['SignIn'],
    (variables?: SignInMutationVariables) =>
      fetcher<SignInMutation, SignInMutationVariables>(client, SignInDocument, variables, headers)(),
    options,
  )
useSignInMutation.fetcher = (
  client: GraphQLClient,
  variables: SignInMutationVariables,
  headers?: RequestInit['headers'],
) => fetcher<SignInMutation, SignInMutationVariables>(client, SignInDocument, variables, headers)
export const ResendOtpDocument = `
    mutation ResendOTP($phoneNumber: String!) {
  resendOTPSignin(phoneNumber: $phoneNumber) {
    message
  }
}
    `
export const useResendOtpMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<ResendOtpMutation, TError, ResendOtpMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<ResendOtpMutation, TError, ResendOtpMutationVariables, TContext>(
    ['ResendOTP'],
    (variables?: ResendOtpMutationVariables) =>
      fetcher<ResendOtpMutation, ResendOtpMutationVariables>(client, ResendOtpDocument, variables, headers)(),
    options,
  )
useResendOtpMutation.fetcher = (
  client: GraphQLClient,
  variables: ResendOtpMutationVariables,
  headers?: RequestInit['headers'],
) => fetcher<ResendOtpMutation, ResendOtpMutationVariables>(client, ResendOtpDocument, variables, headers)
export const SignupDocument = `
    mutation Signup($phoneNumber: String!, $name: String!, $password: String!, $userTimeZone: String!, $token: String!) {
  signup(
    phoneNumber: $phoneNumber
    name: $name
    password: $password
    userTimeZone: $userTimeZone
    token: $token
  ) {
    message
  }
}
    `
export const useSignupMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<SignupMutation, TError, SignupMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
    ['Signup'],
    (variables?: SignupMutationVariables) =>
      fetcher<SignupMutation, SignupMutationVariables>(client, SignupDocument, variables, headers)(),
    options,
  )
useSignupMutation.fetcher = (
  client: GraphQLClient,
  variables: SignupMutationVariables,
  headers?: RequestInit['headers'],
) => fetcher<SignupMutation, SignupMutationVariables>(client, SignupDocument, variables, headers)
export const ResendCodeSignupDocument = `
    mutation ResendCodeSignup($phoneNumber: String!) {
  resendCodeSignup(phoneNumber: $phoneNumber) {
    message
  }
}
    `
export const useResendCodeSignupMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<ResendCodeSignupMutation, TError, ResendCodeSignupMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<ResendCodeSignupMutation, TError, ResendCodeSignupMutationVariables, TContext>(
    ['ResendCodeSignup'],
    (variables?: ResendCodeSignupMutationVariables) =>
      fetcher<ResendCodeSignupMutation, ResendCodeSignupMutationVariables>(
        client,
        ResendCodeSignupDocument,
        variables,
        headers,
      )(),
    options,
  )
useResendCodeSignupMutation.fetcher = (
  client: GraphQLClient,
  variables: ResendCodeSignupMutationVariables,
  headers?: RequestInit['headers'],
) =>
  fetcher<ResendCodeSignupMutation, ResendCodeSignupMutationVariables>(
    client,
    ResendCodeSignupDocument,
    variables,
    headers,
  )
export const VerifyPhoneNumberDocument = `
    mutation VerifyPhoneNumber($phoneNumber: String!, $code: String!) {
  verifyPhoneNumber(phoneNumber: $phoneNumber, code: $code) {
    accessToken {
      token
      expiresAt
    }
  }
}
    `
export const useVerifyPhoneNumberMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<VerifyPhoneNumberMutation, TError, VerifyPhoneNumberMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<VerifyPhoneNumberMutation, TError, VerifyPhoneNumberMutationVariables, TContext>(
    ['VerifyPhoneNumber'],
    (variables?: VerifyPhoneNumberMutationVariables) =>
      fetcher<VerifyPhoneNumberMutation, VerifyPhoneNumberMutationVariables>(
        client,
        VerifyPhoneNumberDocument,
        variables,
        headers,
      )(),
    options,
  )
useVerifyPhoneNumberMutation.fetcher = (
  client: GraphQLClient,
  variables: VerifyPhoneNumberMutationVariables,
  headers?: RequestInit['headers'],
) =>
  fetcher<VerifyPhoneNumberMutation, VerifyPhoneNumberMutationVariables>(
    client,
    VerifyPhoneNumberDocument,
    variables,
    headers,
  )
export const OnboardUserDocument = `
    mutation OnboardUser($onboardUser: onboardUserInput!) {
  onboardUser(onboardUser: $onboardUser) {
    user {
      id
    }
  }
}
    `
export const useOnboardUserMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<OnboardUserMutation, TError, OnboardUserMutationVariables, TContext>,
  headers?: RequestInit['headers'],
) =>
  useMutation<OnboardUserMutation, TError, OnboardUserMutationVariables, TContext>(
    ['OnboardUser'],
    (variables?: OnboardUserMutationVariables) =>
      fetcher<OnboardUserMutation, OnboardUserMutationVariables>(client, OnboardUserDocument, variables, headers)(),
    options,
  )
useOnboardUserMutation.fetcher = (
  client: GraphQLClient,
  variables: OnboardUserMutationVariables,
  headers?: RequestInit['headers'],
) => fetcher<OnboardUserMutation, OnboardUserMutationVariables>(client, OnboardUserDocument, variables, headers)
export const SendVerificationCodePhoneDocument = `
    mutation SendVerificationCodePhone($phoneNumber: String!) {
  sendVerificationCodePhone(phoneNumber: $phoneNumber) {
    message
  }
}
    `
export const useSendVerificationCodePhoneMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SendVerificationCodePhoneMutation,
    TError,
    SendVerificationCodePhoneMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers'],
) =>
  useMutation<SendVerificationCodePhoneMutation, TError, SendVerificationCodePhoneMutationVariables, TContext>(
    ['SendVerificationCodePhone'],
    (variables?: SendVerificationCodePhoneMutationVariables) =>
      fetcher<SendVerificationCodePhoneMutation, SendVerificationCodePhoneMutationVariables>(
        client,
        SendVerificationCodePhoneDocument,
        variables,
        headers,
      )(),
    options,
  )
useSendVerificationCodePhoneMutation.fetcher = (
  client: GraphQLClient,
  variables: SendVerificationCodePhoneMutationVariables,
  headers?: RequestInit['headers'],
) =>
  fetcher<SendVerificationCodePhoneMutation, SendVerificationCodePhoneMutationVariables>(
    client,
    SendVerificationCodePhoneDocument,
    variables,
    headers,
  )
