---
title: Thoughts on StoryNexus
layout: article
categories: modeling-games
excerpt: I'm fascinated by how gamedevs choose to model their games. Let's take a look at StoryNexus, from Failbetter Games.
image:
  teaser: storynexus-teaser-image.jpg
  feature: storynexus-feature-image.jpg
  credit: StoryNexus
  creditlink: http://storynexus.com/
---

> I'm fascinated by how different game developers choose to model their games. Not so much the low-level details regarding efficient data structures, cache coherency, data pipelines, etc. --- rather, I love learning how games are modeled in their own self-selected abstract terms. This decomposition is usually most apparent in how the tools used by the developers operate: what fundamental building blocks are available to the designer?

[StoryNexus](https://docs.google.com/document/d/1K1wnNJoBhxr17fe3kHQTnpvWLdyxeKWZBKivDQHsdJg/edit) is a narrative game engine developed by [Failbetter Games](http://www.failbettergames.com/), originally to power their game [Fallen London](http://www.failbettergames.com/fallen-london/), and later opened up for the public to use to create their own story worlds. It appears to now be in "maintenance mode". It was brought to my attention in this [excellent interview with them on the Game Design Roundtable podcast](http://thegamedesignroundtable.com/2014/10/07/episode-100-failbetter-game-and-fallen-london/).

<iframe src="//player.vimeo.com/video/51452782" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

It's in the genre of parser-less / hyperlinked interactive fiction, in the vein of [CYOA](http://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) or [Twine](http://twinery.org/), but it's done in a fairly sophisticated, generalized way to accomodate more complex narratives.

I don't remember the reference doc pointing this out specifically, but the devs mention it in passing on the podcast: StoryNexus is fundamentally a big state machine, with each state being a snippet of story. More generally, the system appears to be the more general (and flexible) version of state machines called [statecharts](http://en.wikipedia.org/wiki/State_diagram#Harel_statechart).

The two big building blocks of a StoryNexus world are *storylets* and *qualities*. Storylets are the states of the state machine while qualities are the persistent variables of the game (modified by the logic of the states/storylets).

## Qualities

Qualities, at their simplest, are named scalars. They're variables holding primitive values. In terms of board games you'd call them a *counter*, as they are always integer values, always positive, and if they're zero they're effectively non-existent. Qualities are associated with the player character. Their values that they hold are called *levels*.

For presentation purposes, qualities are decorated with additional metadata: a label, a description, an image. The values of a quality can also be assigned metadata such as descriptions and images, in which case it presents itself somewhat like an ordered enumeration. An example of this from the documentation is a *gender* quality where level 1 is *Female*, level 2 is *Male*, and level 3 is *None of your business*.

Qualities are partitioned into *categories*. Categories determine how and where the qualities are presented in the game. Some qualities may be categorized such that they display as the most important thing to the user, while other qualities may be tucked away in the UI.

The two major categories are *statuses* and *things*. Statuses are qualities that we'd commonly think of as stats on an RPG character, or tracking information about the current state of the game (current mission, time of day). Things are qualities that exist in the player's inventory.

I really like this generalization, and it is very similar to a generalization I've made in my own game models. Seeing it applied so effectively in StoryNexus is encouraging, and to be honest, there are a few ideas (like categories) that I'll be cribing for myself.

Things (qualities of category *thing*) can be marked as *usable*, which means when the player interacts with them they spawn a storylet as well. They can also be marked as *slots* which allows qualities to have qualities of their own. StoryNexus provides a simple yet powerful set of options for leveraging this to create robust equippable inventory items. These equipped items, when they are equipped, are considered *enhancements* and apply a list of modifications to other qualities.

## Storylets

Storylets were originally called *cards* internally. Thus storylets (cards) belong to *decks*. A StoryNexus world is composed of one or more decks. The game plays out as the player *draws* these storylets (cards) from the various decks. Along these lines there's the notion of a *hand*, which are the storylets (cards) currently available to the player to play.

Playing a storylet involves going through a branching narrative. Each point in the branching narrative is called an *event*. Each event has a title, description, and an image. The event is presented to the player followed by 1 or more branches the player can choose between (similar to a conventional Twine game). Selecting a branch transitions to a new event. Events have *quality effects* associated with them that are applied to the player when they encounter the event. Branches have *quality requirements* associated with them that restrict their selection (and optionally restrict their presentation). These have equivalents in state machine diagrams, and this is effectively how gameplay is created.

A very interesting wrinkle added to the transitions between events is a bit of fuzzy logic. Instead of a branch leading to a single event, a branch can lead to a *default* event, a *success* event, and a *rare success* event. This allows for a bit of randomization within ranges of quality requirement levels.

Finally, storylets can be *scoped* within a *setting* or an *area*. Settings and areas are orthogonal. Settings are mostly used to separate modes of gameplay, while areas relate to the more conventional notion of space and surroundings.

## Thoughts

When I ran across the StoryNexus reference doc I immediately fell in love. It's basically a text-centric version of the tile-based game system I'm using for a few projects. I'll definitely be borrowing some of their ideas.

The tech has been retired at this point. Would be interesting if they eventually decided to open source it.
