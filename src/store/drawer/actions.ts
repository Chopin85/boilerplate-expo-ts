import { OPEN_DRAWER, CLOSE_DRAWER, DrawerActionTypes } from './types';

export const openDrawer = (): DrawerActionTypes => {
  return {
    type: OPEN_DRAWER
  };
};

export const closeDrawer = (): DrawerActionTypes => {
  return {
    type: CLOSE_DRAWER
  };
};
