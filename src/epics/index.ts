import { Epic, ofType, combineEpics } from 'redux-observable'
import { Action } from 'redux'
import { EMPTY, from, of } from 'rxjs'
import { catchError, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { fromFetch } from 'rxjs/fetch'
import { Constants } from 'src/interface/epic'

import type {
  StartRequestTextAction,
  FinishRequestTextAction,
  ErrorRequestTextAction,
  FetchUserAction,
  AddUserAction,
  AllActions,
  RootState,
  SimpleTextState,
} from 'src/interface/epic'

export const startRequestText = (): StartRequestTextAction => ({
  type: Constants.START_REQUEST_TEXT,
})

export const finishRequestText = (text: string): FinishRequestTextAction => ({
  type: Constants.FINISH_REQUEST_TEXT,
  text,
})

export const errorRequestText = (errorMsg: string): ErrorRequestTextAction => ({
  type: Constants.ERROR_REQUEST_TEXT,
  errorMsg,
})

export const fetchUsers = (userId: string): FetchUserAction => ({
  type: Constants.FETCH_USERS,
  userId,
})

export const addUsers = (user: any): AddUserAction => ({
  type: Constants.ADD_USERS,
  user,
})

const startRequestTextEpic: Epic<AllActions, AllActions, RootState> = (
  action$,
  _store,
) =>
  action$.pipe(
    ofType(Constants.START_REQUEST_TEXT),
    switchMap((action) =>
      ajax({
        url: `https://api.github.com/users?per_page=5`,
        method: 'GET',
        // body: { email: action, password: action },
      }).pipe(
        map((response: any) => finishRequestText(response.response)),
        catchError((error: Error) => of(errorRequestText(error.message))),
      ),
    ),
  )

const fetchUserEpic: Epic<AllActions, AllActions, RootState> = (action$) =>
  action$.pipe(
    ofType(Constants.FETCH_USERS),
    mergeMap((action: SimpleTextState) =>
      ajax({
        url: `/api/members/finduser?memid=${action.userId}`,
        method: 'GET',
        // body: { email: action, password: action },
      }).pipe(
        map((response) => addUsers(response)),
        // takeUntil(action$.pipe(ofType(Constants.FINISH_REQUEST_TEXT))),
      ),
    ),
  )

const rootEpic: Epic<AllActions, AllActions, RootState> = combineEpics(
  startRequestTextEpic,
  fetchUserEpic,
)

export default rootEpic
