import { Epic, ofType, combineEpics } from 'redux-observable'
import { EMPTY, from, of } from 'rxjs'
import { catchError, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { fromFetch } from 'rxjs/fetch'

import { Constants as C } from './constants'
import { RootState, AllActions } from './types'
import * as actions from './actions'

const startRequestTextEpic: Epic<AllActions, AllActions, RootState> = (
  action$,
  _store,
) =>
  action$.pipe(
    ofType(C.START_REQUEST_TEXT),
    switchMap((action) =>
      ajax({
        url: 'https://api.github.com/users?per_page=5',
        method: 'GET',
        // body: { email: action, password: action },
      }).pipe(
        map((response: any) => actions.finishRequestText(response.response)),
        catchError((error: Error) =>
          of(actions.errorRequestText(error.message)),
        ),
      ),
    ),
  )

const fetchUserEpic = (action$: any) =>
  action$.pipe(
    ofType(C.START_REQUEST_TEXT),
    mergeMap((action) =>
      ajax.getJSON(`/api/users/`).pipe(
        map((response: any) => actions.finishRequestText(response)),
        takeUntil(action$.pipe(ofType(C.FINISH_REQUEST_TEXT))),
      ),
    ),
  )

const rootEpic: Epic<AllActions, AllActions, RootState> =
  combineEpics(startRequestTextEpic)

export default rootEpic
