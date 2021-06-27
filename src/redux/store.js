import { configureStore } from '@reduxjs/toolkit'

import employeesReducer from './employees/reducer';
import employeeDetailReducer from './employeeDetail/reducer';
import layoutStateReducer from './layoutState/reducer';

export default configureStore({
  reducer: {
    employeeDetail: employeeDetailReducer,
    employees: employeesReducer,
    layoutState: layoutStateReducer
  }
});