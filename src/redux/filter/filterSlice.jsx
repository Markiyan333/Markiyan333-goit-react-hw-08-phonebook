import { createSlice } from '@reduxjs/toolkit';

const initialFiltertState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFiltertState,
  reducers: {
    SelectFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { SelectFilter } = filterSlice.actions;
