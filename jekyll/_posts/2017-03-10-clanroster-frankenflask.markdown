---
layout: post
title: clan-roster - FrankenFlask
date: 2017-03-10
categories: development
---
So over the course of the past few months I've been working on a project now called clan-roster. It's pretty simplistic, more for my knowledge reinforcement than for actually utility. Hence the time being invested into it.

So, let's start at the beginning of the year. We started the project using Django. But, that's before I knew what [Flask](https://flask.pocoo.org). When I discovered Flask, I saw how beautifully simplistic it was. I was awestruck. So, I decided since my project didn't seem that complicated it'd be silly to have it as a Django project and I switched over to Flask.

This was a mistake. I realized that my project, while seemingly simple in essence, actually utilizes the majority of Django's built-in features. I use the databasing, the ORM, the forms, the routes, etc. All of these are fairly easily achievable with Flask, but the problem is that with all the dependencies and plugins that I was using, my project became a FrankenFlask project (it was basically turning into Django).

This has brought me to the conclusion that, instead of messing around with plugins and spending precious time setting those up, I am switching back to Django. I am going to start the project fresh. But, given that I actually know what I'm doing now and what I want the project to be (**Note**: Important for future projects), it should be quick to catch-up with where the Flask project was at.

I branched the new django project into a [django branch](https://github.com/zacharysohovich/clan-roster/tree/django). Once it catches up to where the flask version was at I will merge branches.

I'm also going to start playing around with SQL more. Starting off I'm going to install the SQL server on a separate deployment to practice connecting to non-local servers as well as practice server security.
