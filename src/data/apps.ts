import { alphabetOfTime } from './apps/alphabet-of-time';
import { babyLearn } from './apps/baby-learn';
import { deckKeeper } from './apps/deck-keeper';
import { gameKit } from './apps/gamekit';
import { AppData } from './apps/types';

export type { AppData };

export const apps: AppData[] = [babyLearn, alphabetOfTime, gameKit, deckKeeper];
