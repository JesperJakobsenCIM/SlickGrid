import type { SlickGrid } from '../slick.grid';

export type UsabilityOverrideFn = (row: number, dataContext: any, grid: SlickGrid) => boolean;