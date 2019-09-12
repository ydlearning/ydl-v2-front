#!/bin/bash
PATH=$PATH:./node_modules/.bin

bok="\e[48;5;214;30m"
breset="\e[0m"

printf "$bok -> Run linter:$breset\n"
pnpm run lint;
printf "$bok -> Run build:$breset\n"
pnpm run build;
printf "$bok -> Run vuese:$breset\n"
vuese gen;
