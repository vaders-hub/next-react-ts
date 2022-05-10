import { Epic, ofType, combineEpics } from 'redux-observable'
import { Action } from 'redux'
import { EMPTY, from, of } from 'rxjs'
import { catchError, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { fromFetch } from 'rxjs/fetch'

import { RootState, AllActions } from './types'

interface StartRequestTextAction extends Action<Constants.START_REQUEST_TEXT> {}
interface FinishRequestTextAction
  extends Action<typeof Constants.FINISH_REQUEST_TEXT> {
  text: string
}
interface ErrorRequestTextAction
  extends Action<typeof Constants.ERROR_REQUEST_TEXT> {
  errorMsg: string
}

export enum Constants {
  START_REQUEST_TEXT = 'START_REQUEST_TEXT',
  FINISH_REQUEST_TEXT = 'FINISH_REQUEST_TEXT',
  ERROR_REQUEST_TEXT = 'ERROR_REQUEST_TEXT',
}

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

const startRequestTextEpic: Epic<AllActions, AllActions, RootState> = (
  action$,
  _store,
) =>
  action$.pipe(
    ofType(Constants.START_REQUEST_TEXT),
    switchMap((action) =>
      ajax({
        url: 'https://api.github.com/users?per_page=5',
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
    ofType(Constants.START_REQUEST_TEXT),
    mergeMap((action) =>
      ajax.getJSON(`/api/users/`).pipe(
        map((response: any) => finishRequestText(response)),
        takeUntil(action$.pipe(ofType(Constants.FINISH_REQUEST_TEXT))),
      ),
    ),
  )

const rootEpic: Epic<AllActions, AllActions, RootState> =
  combineEpics(startRequestTextEpic)

export default rootEpic
