import { AppData } from './apps/types';
import { babyLearn } from './apps/baby-learn';
import { alphabetOfTime } from './apps/alphabet-of-time';
import { deckKeeper } from './apps/deck-keeper';

export type { AppData };

export const apps: AppData[] = [babyLearn, alphabetOfTime, deckKeeper];
