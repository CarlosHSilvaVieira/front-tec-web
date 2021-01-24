import { all } from "redux-saga/effects";

import * as authorSaga from "./authors/authors.saga";
import * as BookSaga from "./books/books.saga";
import * as EmplyoeerSaga from "./employees/employees.saga";
import * as PushingSaga from "./pushing/pushing.saga";
import * as UsersSaga from "./users/users.saga";

function* Sagas () {
  yield all([
    authorSaga.watchSaga(),
    BookSaga.watchSaga(),
    EmplyoeerSaga.watchSaga(),
    PushingSaga.watchSaga(),
    UsersSaga.watchSaga(),
  ]);
}

export default Sagas;
