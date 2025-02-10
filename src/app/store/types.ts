import { makeStore } from './makeStore';
import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
