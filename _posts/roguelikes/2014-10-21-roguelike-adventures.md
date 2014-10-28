---
title: Roguelike Adentures
layout: article
categories: roguelikes
excerpt: How can we have more adventures in roguelikes and less combat?
image:
  teaser: roguelike-adventures-teaser-image.png
  feature: roguelike-adventures-feature-image.png
---

I love roguelikes. I love exploring the procedurally generated worlds. I love that they are turn-based. I love the fact that the genre embraces the lowest of lo-fi aesthetics. I love the ephemeral quality of the world due to permadeath.

What I don't love is fantasy-themed tactical combat.

Or rather, I think it's the *least* interesting aspect of roguelikes. Which is probably heresy, as fantasy-themed tactical combat is the original core mechanic, and everything else that I mentioned is effectively in aid of it.

So, maybe I don't love roguelikes as per their definition. But I think we all know what a designer means when they drop the term roguelike: procedural level generation, permadeath, *probably* turn-based, *probably* tile-based.

Like every indie game designer, I've got a few roguelikes on the drawing board. In fact, most everything I'm currently exploring sits on a spectrum of roguelikes, including completely degenerate versions like [Dumbhack](http://dumbhack.com/). In most of my designs, though, the tactical combat is diminished or absent.

One game in particular, which I'll just call my *space roguelike* for now, lacks hit points and other stats. It's not that it's a one-hit-kill kind of roguelike (like Ending), rather combat is not a central mechanic. Further, positioning is not a central mechanic. Or at least, I don't want it to be.

*Note: the games is still evolving, so I may find that the gameplay just isn't interesting enough without a larger combat role, but I'm hoping that doesn't turn out to be the case.*

If the game doesn't focus on combat, what does it focus on? It focuses on adventuring. In fact, in the end the game may be better described as a tile-based/turn-based adventure game instead of an adventure-focused roguelike, but as a design process I'm starting with the time-tested systems of roguelikes and iterating to emphasize a sense of adventure.

To put it another way, I'm attempting to build an adventure game with a roguelike game engine.

As I mentioend, this roguelike is set in space, by which I mean it's sci-fi in theme. Lots of obvious tactical combat stuff, right? Lasers, aliens, spaceships... how can you not have combat? Well, the nature of the sci-fi weapons kind of solves the problem for me without me having to jump through any narrative hoops. Think Star Trek phaser: it disintegrates. It's a one-shot kill, or a one-shot stun. Either way, using a phaser isn't so much combat in a roguelike mechanic sense of the word, it's more like using an item. There's no need for hit points or defense stats or anything like that, it merely functions like an item that changes the state of its target.

So, that kinda removes the combat mechanic, and it *also* removes the tactical aspect. Advancement in weapon technology over time has largely been focused on delivering more impact at larger distances. Melee is not the focus of modern or future/sci-fi combat. Ranged attacks are. As a result, it doesn't really matter if I'm standing on this tile or the one next to it, and it doesn't really matter if you're adjacent to me or across the room; if you shoot a phaser at me it has the same result.

I'm not sure if I'm explaining it well, but this realization was huge for me. It allowed me to remove tactical combat from my roguelike in a natural way (in terms of gameplay and narrative theme). Adventure game mechanics are all about finding items and using them, not about positioning and combat stats. So, make combat that's all ranged attacks and one-hit kills, and you've made it adventure game compatible.
