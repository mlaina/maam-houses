#!/usr/bin/env bash
name=juego;
pluralname=juegos;
mayusname=Juego;
mayuspluralname=Juegos;


hygen react-man api --name $name --pluralname $pluralname --mayusname $mayusname --mayuspluralname $mayuspluralname
hygen react-man pages --name $name --pluralname $pluralname --mayusname $mayusname --mayuspluralname $mayuspluralname
hygen react-man routes --name $name --pluralname $pluralname --mayusname $mayusname --mayuspluralname $mayuspluralname