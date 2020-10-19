export interface DrawerState {
  isOpen: boolean;
}

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

interface openDrawer {
  type: typeof OPEN_DRAWER;
}
interface closeDrawer {
  type: typeof CLOSE_DRAWER;
}

export type DrawerActionTypes = openDrawer | closeDrawer;
