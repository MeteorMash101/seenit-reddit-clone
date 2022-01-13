# Seenit (Reddit Clone - Attempt!)
**Tech Stack: HTML/CSS/Javascript, React, Express, Mongodb, Node.**

Hello! This will be one of my 'many' attempts at a full-stack MERN (MongoDB, ExpressJS, ReactJS, NodeJS) web application! After around ~ 1 week of spending full-time hours, I am quite happy with how this has come about so far. There are still so many features to be added but below are some snapshots & descriptions of what has been completeed thus far.

![alt text](https://github.com/MeteorMash101/seenit-reddit-clone/blob/master/snapshots/pics_1.png?raw=true)

![alt text](https://github.com/MeteorMash101/seenit-reddit-clone/blob/master/snapshots/pics_2.png?raw=true)

![alt text](https://github.com/MeteorMash101/seenit-reddit-clone/blob/master/snapshots/pics_3.png?raw=true)

![alt text](https://github.com/MeteorMash101/seenit-reddit-clone/blob/master/snapshots/pics_4.png?raw=true)

![alt text](https://github.com/MeteorMash101/seenit-reddit-clone/blob/master/snapshots/pics_5.png?raw=true)

## Motivation:
I am actually an avid user of Reddit, and probably spend more time on there than I do on most social media. I actually enjoy reading about various topics of interest and I love the features of the app with upvotes and downvotes. I believe its a fun way to spend my freetime!

### Frontend:
- I did this from absolute bare-bones scratch, although in some cases I thought to myself "I should've used bootstrap" I thought it was very well worth putting in the time & effort working on the HTML/CSS of this project.
- Visualize first, then build. Thanks to tools such as Figma, prototyping was made very easy. Afterwards, I would just 'type code' that made the webpage look like what I had drafted in the prototype.
- Use of a lot of Font Awesome React Icons library, and I definitely plan on continueing to use this for future projects, they just have so many great selections.
- In terms of ReactJS, there were a lot of components that needed to be separated out, thankfully I am very used to this "Component Structure" design by now, and I am it's absolutely one of my favorite parts of using React - it just makes building web. page components so much easier (and cleaner) than vanilla Javascript.

### Backend:
- This was definitely a tougher part, I first wanted to figure out how to use PassportJS library to authorize and authenticate Users. It is absolutely an essential part of getting the App started as it also relates to the data that needs to be stored in the database.
- The key data that needed to be stored was Subreddits, (which consist of) Posts, (which 'can' consist of) Comments, which are made by Users, etc. As you can see there will be a need to reference a lot of these datas to eachother. 
- Schema designing was a fun & great experience as mongodb uses JSON-like documents which makes it very familiar to see as a Javascript Developer. One of my favorite things was thinking about a 'nested comments structure'; how one comment can have children of comment replies, and so on.
## Feel free to download and play around!
(A demo will be launched soon), for now if you can install node and its dependencies, you can run `npm start` to check it out :) Any feedback is always appreciated.

