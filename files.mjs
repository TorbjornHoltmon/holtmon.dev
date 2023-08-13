// @ts-check
import { readdir } from "fs/promises";

const assets = await readdir("./public");

console.log(assets.map((i) => "./" + i));

export const hello = {};
