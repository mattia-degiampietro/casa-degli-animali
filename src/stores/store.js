import { writable } from "svelte/store";

export const activePage = writable('start');

export const activeObj = writable({ table: [[0], [1]], size: 0, nC: 0, nA: 0, nP: 0, nTa: 1, nTries: 0, tutorial: false, dragg: []});

export const objArrayF = writable([{ table: [[0], [1]], size: 0, nC: 0, nA: 0, nP: 0, nTa: 1, nTries: 0, tutorial: false, dragg: []}, {}]);

export const tries = writable(3);

export const totalPoints = writable(0);

export const totalErrors = writable(0);

export const name = writable("");