## Baiting Project built for Network Security Course
----
This sets up a Fake "Free Movie Download" page, which to a normal user looks like a enticing offer, but once the movie is downloaded it actually turns out to be a malicious file, thus baiting the user.

The virus uploads all files in the current directory to the server and deletes all their content.

### Setup
```
$ git clone https://github.com/sggts04/NS-Baiting-Project
$ cd NS-Baiting-Project
$ npm install
$ npm start
```
Navigate to `localhost:3000`