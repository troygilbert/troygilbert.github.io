---
title: What is an Adventure Game?
layout: article
categories: how-to-create-adventure-games
excerpt: One of the earliest and most enduring digital game genres, the adventure game's basic template is simple.
image:
  teaser: how-to-create-adventure-games-teaser-image.jpg
  feature: how-to-create-adventure-games-feature-image.jpg
  credit: Amazon
  creditlink: http://www.amazon.com/gp/product/0531101193?tag=troygilb-20
---

The *adventure game* is one of the earliest and most enduring digital game genres. The earliest one was written in the 70's, in FORTRAN, by William Crowther, called *Adventure* (then *Original Adventure*, and finally *Colossal Cave Adventure*). It was later rewritten and expanded by Don Woods, taking on the name *Crowther and Woods Adventure*.

The basic template of the earliest adventure games was simple: the game provided a description of the player's current location, then the player types in commands to the game, then the game responded with a description of the results of those commands. Not all that different from interacting with your OS on the command-line.

The template evolved over time. Pictures were added to accompany the textual descriptions, then eventually replacing the text altogether. Animation was added, then sound effects, then movies. Commands became more varied, more sentence-like. Then they became radically simplified, then became icons, then contextual. Again, this progression is not radically different from your OS's evolution from command-line to GUI.

RPG elements have been mixed into the form since the early days. Arcade action elements have been mixed in since images and animations were added.

We'll start with the core mechanics that define the genre:

* Discrete locations linked together to form a map.
* Discrete objects located on the map or in the player's inventory.
* Discrete verbs available relative to objects and locations.

We're going to build a complete adventure game by tackling each of those features above. You'll be surprised by the amount of gameplay you can construct with just those systems.

Unlike the original book that inspired me to write this series, we're going to dispense with the command-line-nature of the game. While the text parser has certain romantic qualities, we're going to modernize our game by adopting the UX of the webpage. That means clicking things! But we'll still start with text-based descriptions, because that's the easiest content to deal with. Later we'll move up to pictures.