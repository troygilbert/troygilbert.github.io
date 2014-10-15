---
title: Thoughts on StoryNexus
layout: post
categories: modeling-games
----

<a href="https://docs.google.com/document/d/1K1wnNJoBhxr17fe3kHQTnpvWLdyxeKWZBKivDQHsdJg/edit" title="StoryNexus Reference Doc" target="_blank">StoryNexus</a> is a narrative game engine developed by <a href="http://www.failbettergames.com/" title="Failbetter Games" target="_blank">Failbetter Games</a>, originally to power their game <a href="http://www.failbettergames.com/fallen-london/" title="Fallen London" target="_blank">Fallen London</a>, and later opened up for the public to use to create their own story worlds. It appears to now be in "maintenance mode". It was brought to my attention in this <a href="http://thegamedesignroundtable.com/2014/10/07/episode-100-failbetter-game-and-fallen-london/" title="Game Design Round Table, Episode #100: Failbetter Game and Fallen London" target="_blank">excellent interview with from the Game Design Roundtable podcast</a>.

It's basically a choose-your-own-adventure game, like Twine, but more structured.

They have the notion of storylets, which are all the self-contained narrative elements you can read and interact with.

They also have the notion of qualities, which are all the attributes/state that can be associated with a character and then used for allowing/disallowing storylets.

Qualities have a level associated with them. Levels are positive integers (basically like the concept of "counters" from storyboard games). A level of 0 indicates that a character does not have a quality. Levels can have descriptions associated with them, such that Gender quality Level 1 can be described as "Female" and Level 2 can be "male" and level 3 can be "unknown", etc.

Qualities are assigned to categories. Categories determine how/where the qualities are displayed in the game. Major types of qualities are statuses and things. Statuses are intangibles, things are inventory items.

Qualities have "change descriptions" that are used whenever the quantity/level of a quality changes.

Qualities have icons, and the icons can changed based on the level.

Qualities categorized as "things" can be usable, which means that when the inventory item is used it executes a storylet.

Qualities can be persistent in that they survive even after a character dies in the game world (it's carried over to the player's next character, like a family trait or heirloom).

Qualities can be marked as "slots", in which case they can have other qualities (that are marked "equippable") assigned to them. Such as a "head" slot with a "hat" equippable assigned to it. When a quality is equipped it produces "enhancements", which are which are bonuses and penalties applied to qualities. Basic limitation: only thing qualities can be equipable (or slots), and they can only "enhance" status qualities.

Storylets are actually called cards internally. And cards belong to decks. A world has one or more decks. Some decks can be an Always deck in which the cards are always available if the requirements are met. Other decks can be Sometimes decks, in which case cards are randomly dealt from the deck. The player has a hand size (3) and a dealing limit (3). When they draw from a deck they fill their hand. Cards can be sticky (they stay in hand until they're played) or discardable.

The storylets/cards consist a root event (title+description+image) with 1 or more branches. The player selects a branch and they pass through that branch (which has a description) and land at another event. These events have quality effects that modify qualities when the event occurs.

The root event on a storylet can have requirements for qualities, minimum and maximum values, logical and/or of requirements.

Branches can have quality requirements as well.

If a branch is selected, there's the default event, the success event, and the rare success event. If a success event is present, it has a randomized range set for a certain quality. The rare success event is similar but more narrowly defined. In the case of success events failing, the default event is used.

Cards can be restricted by setting or area, as can slots and equippable items. Settings are conceptual. All storylets have to be in a setting. And they can be in only one setting. Settings are like "modes of play".