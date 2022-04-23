export const randomItem = (arr) => arr[(Math.random() * arr.length) | 0];

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);