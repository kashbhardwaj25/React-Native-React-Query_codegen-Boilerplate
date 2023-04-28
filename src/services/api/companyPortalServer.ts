//@ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Attendance = {
  __typename?: 'Attendance';
  createdAt: Scalars['String'];
  dateContent: Array<Scalars['String']>;
  id: Scalars['Int'];
  presentDayAttendance: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  userId: Scalars['Int'];
  workspaceId: Scalars['Int'];
};

export type AttendanceReminderNotification = {
  __typename?: 'AttendanceReminderNotification';
  activityCount?: Maybe<Scalars['Int']>;
  activityUsers: Array<User>;
  attendance: Attendance;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isWatched: Scalars['Boolean'];
};

export type Birthday = {
  __typename?: 'Birthday';
  dob: Scalars['String'];
  name: Scalars['String'];
};

export type BirthdayData = {
  __typename?: 'BirthdayData';
  birthdays?: Maybe<Array<Birthday>>;
  total: Scalars['Int'];
};

export type BirthdayReminderNotification = {
  __typename?: 'BirthdayReminderNotification';
  activityCount?: Maybe<Scalars['Int']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isWatched: Scalars['Boolean'];
  user: User;
};

export type Date = {
  __typename?: 'Date';
  iso: Scalars['String'];
};

export type GetAllUsersResponse = {
  __typename?: 'GetAllUsersResponse';
  total?: Maybe<Scalars['Int']>;
  user: Array<User>;
};

export type GetAllWorkspaceResponse = {
  __typename?: 'GetAllWorkspaceResponse';
  total?: Maybe<Scalars['Int']>;
  workspace: Array<Workspace>;
};

export type GetTimeSheetData = {
  __typename?: 'GetTimeSheetData';
  result: Array<TimesheetData>;
  total: Scalars['Int'];
};

export type Holiday = {
  __typename?: 'Holiday';
  date: Date;
  description: Scalars['String'];
  name: Scalars['String'];
  type: Array<Scalars['String']>;
};

export type HolidayData = {
  __typename?: 'HolidayData';
  holidays?: Maybe<Array<Holiday>>;
  total: Scalars['Int'];
};

export type Leave = {
  __typename?: 'Leave';
  id: Scalars['Int'];
  leaveType: LeaveType;
  numberOfLeaves: Scalars['Int'];
  request: Scalars['String'];
  startDate: Scalars['String'];
  userId: Scalars['Int'];
  workspaceId: Scalars['Int'];
};

export type LeaveData = {
  __typename?: 'LeaveData';
  leaves: Array<Leave>;
  total?: Maybe<Scalars['Int']>;
};

export enum LeaveStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type LeaveStatusNotification = {
  __typename?: 'LeaveStatusNotification';
  activityCount?: Maybe<Scalars['Int']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isWatched: Scalars['Boolean'];
  leave: Leave;
};

export enum LeaveType {
  Paid = 'PAID',
  Sick = 'SICK',
  Unpaid = 'UNPAID'
}

export type Message = {
  __typename?: 'Message';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addEmployee: Message;
  addMemberToTeam: MyTeamData;
  approveLeave: Message;
  createWorkspace: Workspace;
  editTimesheet: TimesheetData;
  forgotPassword: ResetPasswordResponse;
  markAttendance: Message;
  removeMemberFromTeam: MyTeamData;
  resetPassword: ResetPasswordResponse;
  sendVerificationCodeEmail: Message;
  setNotificationsWatched: Scalars['String'];
  signin: SigninRespone;
  signup: Message;
  takeLeave: Message;
  updateTimesheet: Message;
  updateUser: Message;
  updateUserWorkspace: Message;
  updateWorkspace: Message;
  verifyOtp: User;
};


export type MutationAddEmployeeArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  role: RoleTypes;
  workspaceId: Scalars['String'];
};


export type MutationAddMemberToTeamArgs = {
  assignedProject: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationApproveLeaveArgs = {
  email: Scalars['String'];
  leaveType: LeaveType;
  status: LeaveStatus;
  workspaceId: Scalars['Int'];
};


export type MutationCreateWorkspaceArgs = {
  uniqueName: Scalars['String'];
  workspaceName: Scalars['String'];
};


export type MutationEditTimesheetArgs = {
  date: Scalars['String'];
  project?: InputMaybe<Scalars['String']>;
  timeSpent?: InputMaybe<Scalars['Int']>;
  workDone?: InputMaybe<Scalars['String']>;
  workLocation?: InputMaybe<Scalars['String']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  otp: Scalars['Int'];
};


export type MutationMarkAttendanceArgs = {
  workspaceId: Scalars['Int'];
};


export type MutationRemoveMemberFromTeamArgs = {
  assignedProject: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationSendVerificationCodeEmailArgs = {
  email: Scalars['String'];
};


export type MutationSetNotificationsWatchedArgs = {
  highWaterMark: Scalars['String'];
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  uniqueName: Scalars['String'];
  workspaceName: Scalars['String'];
};


export type MutationTakeLeaveArgs = {
  leaveType: LeaveType;
  numberOfLeaves: Scalars['Int'];
  reason: Scalars['String'];
  startDate: Scalars['String'];
  workspaceId: Scalars['Int'];
};


export type MutationUpdateTimesheetArgs = {
  date: Scalars['String'];
  project: Scalars['String'];
  timeSpent: Scalars['Int'];
  workDone: Scalars['String'];
  workLocation: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  aadharNumber?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  gender?: InputMaybe<Scalars['String']>;
  mobileNumber?: InputMaybe<Scalars['String']>;
  personalEmail?: InputMaybe<Scalars['String']>;
  pinCode?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserWorkspaceArgs = {
  designation?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  joiningDate?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Float']>;
  userId: Scalars['Int'];
};


export type MutationUpdateWorkspaceArgs = {
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  workspaceId: Scalars['Int'];
};


export type MutationVerifyOtpArgs = {
  email: Scalars['String'];
  otp: Scalars['Int'];
};

export type MyTeamData = {
  __typename?: 'MyTeamData';
  assignedProject: Scalars['String'];
  id: Scalars['Int'];
  reportingManager: User;
  reportingManagerId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type Notification = AttendanceReminderNotification | BirthdayReminderNotification | LeaveStatusNotification | TimesheetReminderNotification;

export type NotificationPaginatedResponse = {
  __typename?: 'NotificationPaginatedResponse';
  limit: Scalars['Int'];
  notifications: Array<Notification>;
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: GetAllUsersResponse;
  getAllWorkspaces: GetAllWorkspaceResponse;
  getAttendanceData?: Maybe<Attendance>;
  getLeaveData: LeaveData;
  getMyTeamData: Array<MyTeamData>;
  getNotifications: NotificationPaginatedResponse;
  getNotificationsCount: Scalars['Int'];
  getProjectsListOfUser: Array<Scalars['String']>;
  getRemainingLeavesData: RemainingLeavesData;
  getTimesheetDataBySheet: GetTimeSheetData;
  getTimesheetInfoUser: TimesheetInfo;
  getUpcomingBirthdays: BirthdayData;
  getUpcomingHolidays: HolidayData;
};


export type QueryGetAllUsersArgs = {
  workspaceId: Scalars['Int'];
};


export type QueryGetMyTeamDataArgs = {
  assignedProject: Scalars['String'];
};


export type QueryGetNotificationsArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGetNotificationsCountArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetTimesheetDataBySheetArgs = {
  sheetName: Scalars['String'];
};


export type QueryGetTimesheetInfoUserArgs = {
  userId: Scalars['Int'];
};


export type QueryGetUpcomingBirthdaysArgs = {
  workspaceId: Scalars['Int'];
};

export type RemainingLeavesData = {
  __typename?: 'RemainingLeavesData';
  paid?: Maybe<RemainingLeavesStatus>;
  sick?: Maybe<RemainingLeavesStatus>;
  unpaid?: Maybe<RemainingLeavesStatus>;
};

export type RemainingLeavesStatus = {
  __typename?: 'RemainingLeavesStatus';
  leavesTaken: Scalars['Int'];
  remainingLeaves?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SigninRespone = {
  __typename?: 'SigninRespone';
  expiresIn?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type TimesheetData = {
  __typename?: 'TimesheetData';
  date: Scalars['String'];
  project: Scalars['String'];
  timeSpent: Scalars['String'];
  userId: Scalars['String'];
  workDone: Scalars['String'];
  workLocation: Scalars['String'];
};

export type TimesheetInfo = {
  __typename?: 'TimesheetInfo';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  lastUpdated: Scalars['String'];
  spreadsheetId: Scalars['String'];
  spreadsheetLink: Scalars['String'];
  spreadsheetName: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['Int'];
};

export type TimesheetReminderNotification = {
  __typename?: 'TimesheetReminderNotification';
  activityCount?: Maybe<Scalars['Int']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  isWatched: Scalars['Boolean'];
  timesheet: TimeSheetInfo;
};

export type User = {
  __typename?: 'User';
  aadharNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActivated?: Maybe<Scalars['Boolean']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  panCard?: Maybe<Scalars['String']>;
  personalEmail?: Maybe<Scalars['String']>;
  pinCode?: Maybe<Scalars['String']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  uniqueName: Scalars['String'];
  workspaceName: Scalars['String'];
};

export enum RoleTypes {
  Admin = 'ADMIN',
  Contract = 'CONTRACT',
  Employee = 'EMPLOYEE',
  Intern = 'INTERN'
}

export type TimeSheetInfo = {
  __typename?: 'timeSheetInfo';
  spreadsheetName: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  workspaceName: Scalars['String'];
  uniqueName: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'Message', message: string } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SigninRespone', success?: boolean | null, token?: string | null, expiresIn?: string | null } };


export const SignUpDocument = `
    mutation SignUp($name: String!, $email: String!, $password: String!, $workspaceName: String!, $uniqueName: String!) {
  signup(
    name: $name
    email: $email
    password: $password
    workspaceName: $workspaceName
    uniqueName: $uniqueName
  ) {
    message
  }
}
    `;
export const useSignUpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignUpMutation, TError, SignUpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignUpMutation, TError, SignUpMutationVariables, TContext>(
      ['SignUp'],
      (variables?: SignUpMutationVariables) => fetcher<SignUpMutation, SignUpMutationVariables>(client, SignUpDocument, variables, headers)(),
      options
    );
useSignUpMutation.fetcher = (client: GraphQLClient, variables: SignUpMutationVariables, headers?: RequestInit['headers']) => fetcher<SignUpMutation, SignUpMutationVariables>(client, SignUpDocument, variables, headers);
export const SignInDocument = `
    mutation SignIn($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    success
    token
    expiresIn
  }
}
    `;
export const useSignInMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignInMutation, TError, SignInMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
      ['SignIn'],
      (variables?: SignInMutationVariables) => fetcher<SignInMutation, SignInMutationVariables>(client, SignInDocument, variables, headers)(),
      options
    );
useSignInMutation.fetcher = (client: GraphQLClient, variables: SignInMutationVariables, headers?: RequestInit['headers']) => fetcher<SignInMutation, SignInMutationVariables>(client, SignInDocument, variables, headers);