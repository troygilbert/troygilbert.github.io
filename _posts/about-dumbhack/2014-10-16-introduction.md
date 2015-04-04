---
title: Dumbhack
layout: article
categories: about-dumbhack
excerpt: My favorite game name, and my first app in an app store.
image:
  teaser: dumbhack-teaser-image.png
  feature: dumbhack-feature-image.png
  credit: Dumbhack
  creditlink: http://www.dumbhack.com/
---

I originally created [Dumbhack](http://dumbhack.com/) in Spring 2011. BlackBerry was running a developer promotion wherein you'd get a free Blackberry Playbook tablet if you submitted (and had approved) an app into their fledgling app store. Well, over the course of a week or so I built Dumbhack in Flash and packaged it for the Blackberry app store. It was approved, and I got a free Playbook!

I think it sold 3, maybe 4 copies on their app store. I've intended for a long time to create a proper version of the game, put it in the iOS App Store, and try to earn enough money to pay for my iPad. (I eventually sold the Playbook to someone on Craigslist for about $300, which technically makes Dumbhack still my most profitable game design.)

The basic idea behind Dumbhack is that you a tile grid. Your goal is to move your character from the entrance to the exit without uncovering a monster. The core game loop is essentially Minesweeper: you tap a tile to reveal it. Revealed tiles will show piles of bones to indicate an adjacent monster. Bigger piles, more adjacent monsters.

The game doesn't involve much skill, and is really driven by the board randomization. The highest level I'm aware of any one getting to is Level 17. The maximum level is somewhere around 50 --- after that it's not possible to have an unobstructed path from entrance to exit (an additional monster is added each level).

My plan is to reboot Dumbhack:

* Update the tileset. It's currently the freely available Angband tileset. Would probably switch over to one of [Oryx's sprite sets](http://oryxdesignlab.com/sprites/).

* Experiment with direct player movement: swipe up/down/left/right to move the character to adjacent tiles, then reveal tiles adjacent to the player. Feels a bit more game-y.

* Add bonuses, such as potions or treasure, to incentivize the player's exploration --- to tempt the player to push their luck into unexplored parts of the screen, even if they have a path to the exit.

* Build it in Phaser.

* Free to play on the web and in the App Store, supported by ads in both places.

The game is very simple, more of a testbed for the various bits necessary to implement my larger game ideas (tilemap rendering, tap-based, turn-based).

Until then, [you can play it](http://dumbhack.com/) on the web right now!
