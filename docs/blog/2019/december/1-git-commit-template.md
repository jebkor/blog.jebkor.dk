---
title: Setting up GIT commit templates
date: 2019-12-17
year: 2019
---

# GIT Commit Templates

Buuh! Why do we need that, Jesper?! It just seem like an unnecessary amount of work for so little... 😩

Welcome, esteemed visitor! I'm so glad to have your attention. I hope the above line didn't hit too close to home. If it did, I'm sincerly apologizing right now. It's a line I've heard a little too often, when presenting the idea of having a commit template.

But let me tell you, why it's a good idea to use a template when using GIT

## Consistency
Having a consistent workflow when working in a team might not appear as a plus in the short-term. Having to spend an extra minute or two writing a couple of lines, just seem like more work than it's worth. But going back to some commits, God knows how long back and only seeing *"Fixed issue"* with no explanation requires you to spend even MORE time, trying to figure out what the commit did in the first place.

"Enforcing" the team-member to write something like: "Update config file to better handle minification" gives a lot clearer image on, what the change actually did, and when looking in your git logs, it'll be a lot quicker to figure out, where to roll back to, in case of a SNAFU. 😭

Of course, you don't need to use a template for writing good commit messages, but as I've been using mine for a while now, it's been much easier to see the work I've done, rather than seeing one "Fixed" message after another. 🤔

## Template
So, here is the template I've been using for the past half-year or so:
```
# If applied, this commit will... (Max 50 chars..)


# Why is this change needed? (Optional. Max 72 chars per line..........)
Prior to this change, 

# How does it address the issue? (Optional. Max 72 chars per line......)
This change

# Provide links to any relevant tickets, articles or other resources


```

Because of some line wrapping rules that Github is using, I've made sure to make a note on how long sentences can be, indicated by the parenthasees - when they stop, that's when the character limit is hit. Neat, right? 🙃

## Title
For a better experience when browsing the git commits on Github, the "title" of the commit message, must be **50 characters or less**. This is because Github cuts it off and appends "..." to indicate that there is more text. So, to have a better immidiate overview over commits, having the 50 character soft limit, helps. Of course, you can have a longer title if you so desire, but trying to explain what you did in as few words as possible while not losing too many details, is a healthy excercise for any developer 💪

![](https://i.imgur.com/VqjV7bD.png) <br>
Example of a commit title using this ideology

## Message, part I
The next section `Why is this change needed?` is an extra message you can write, besides you title. Here, you can sum up as much as you like (within reason), why this commit was necessary. When working with big commits that might affect some business logic or otherwise, having an explainer, can be rather helpful to the next developer, having to look into working with your feature. It's worth noting that this section is optional but can bring great value, if added.

Again, for a nicer experience with Github, try and keep each line about 72 characters. Linebreaks are permitted in this section

## Message, part II
Another section for explaning how your commit will fix a bug, update some config or add a new feature. Also optional and also think about the 72 character limit

## Tickets
Ahh, the good, old ticket system. Although this section is added to the template, it's not something I've been using that much myself.  😌 It's somewhat optional and same formatting rules apply to this section, like the two sections before it.

<br>

## Conclusion
If you were a non-git-commit-template believer before this post, hopefully I've converted you to try and use this. It could be a challenge! For the next 30 days or whatnot, use this template and see if it brings any value to your repository. You team and co-workers might even show interest and give it a shot as well 😅

And in an attempt to have you crawling back to my blog, I'll create another post explaning, how to install this template. Gotta get that retention 😈
