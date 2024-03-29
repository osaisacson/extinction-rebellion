# Extinction Rebellion - Demands

Uses React.js/Node.js/loopback for api/mongoDB and deploys with Heroku.
Based on this example: https://www.youtube.com/watch?v=Mx-cywTNy8s

Find the latest live version at:

### https://extinction-rebellion.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

Once your changes are merged (see work work workin and build build buildin section below) you and everyone else will see them live at http://extinction-rebellion.herokuapp.com

### Tools

If this is your first rodeo, here's the from scratch setup you'll need:

1. Code editor: Download visual studio from here https://code.visualstudio.com/ - this will let you add html and styles.
2. Terminal: Download iTerm from https://iterm2.com/ - this will let you install the project and add any extras (if needed).
3. A GitHub account: https://github.com/ - this will let you clone a copy of the project to your own machine, and also let you push changes to the central repository, which will then be merged into the live version at http://extinction-rebellion.herokuapp.com

### Prerequisites

You'll need to install Git and Node.js on your machine to get crackin.

Open your terminal.

First check if you have all the prerequisites and that they are good and well, write:

```
git --version
node --version
npm --version
```

...if the above gets any errors then fix them through the relevant solution below:

#### Git - for version control

```
git --version
```

...if you don’t have git installed already, this will prompt you to install it.

#### Node.js

```
brew install node
```

### MongoDB

Download mongodb compass community.
`brew install mongodb-community@4.2`
`brew tap mongodb/brew`
`brew services start mongodb-community` (this starts the mongo server)
`npm install -g mongo --save`

### Original setup - get the latest code for the website

This you only need to do once, when you're first starting to work on the project. After that, you'll have a folder with the code on your computer and will keep it up to date through the 'pull' commands given in the 'Work work workin' section. Don't worry about it now.

1. Go to https://github.com/osaisacson/extinction-rebellion

2. Clone the project. On your own machine in the terminal window write:

```
ls
```

...to see where you are in the folder structure, and then

```

cd (the name of the folder which you want to place yourself in)

```

...usually it'll be something like:

```

cd Documents
cd CODE (this should be the name of the folder where you want to keep the code of the project on your own machine. It doesn't really matter where, just a place where you can find it easily.)

```

once you stand in the folder where you want to place the project, clone the existing extinction-rebellion folder like this:

```

git clone https://github.com/osaisacson/extinction-rebellion.git

```

...this will create a 'extinction-rebellion' folder with latest code from GitHub. Yay. Done.

3. Initialize git.

```

cd extinction-rebellion
git init

```

Your app’s code is now tracked in a local git repository. It has not yet been pushed to any remote servers, so changes you make in the code now will not yet show anywhere apart from on your own machine. You'll push the code to the remote shared repository in the 'Work work workin' section.

4. Install npm's.

Npm's are little external code packages that each deal with something useful for a website. It could be animations or special syntax or...anything really. By doing the commands below you make sure you install these on your machine as external dependencies so your code can run.

```

cd extinction-rebellion (if you're not already in this folder. You can check by writing `ls`, and move up in the structure by writing `cd ..`)
npm install
cd client_src
npm install

```

Done with the installation!
Now lets DO this.

### Work, work, workin.

You'll be making changes on your local machine, checking them in your browser. Once you're happy you'll make a 'pull request' (sending your local code) to GitHub, where it will get merged into the main project and be made visible to all.
GitHub works in a way that lets you push your changes in a separate branch to a main branch, much like track changes in a Word document.

This is how you create a separate branch, add changes to it and then request to have your changes intergrated into the master branch:

1.  Check that you've got the latest version of the remote master branch (always do this. muy importante. If you don't first pull down the latest version of master then you'll be making a new branch off of old code, and get pesky 'merge conflicts'), and then create a new branch of master:

```

git checkout master (moves you to the git master branch of the project)
git pull (pulls down the remote latest code of the project)
git checkout -b name-of-your-new-branch (creates a new branch identical to the latest code)

```

2. Open your code editor. With your mouse drag the folder 'extinction-rebellion' to the visual studio code editor icon.

3. See your code: In your terminal, open a separate window (cmd + d), then:

```

cd extinction-rebellion (ls and cd .. until you're in the extinction-rebellion folder)
npm run dev (this starts both the client and server, and opens up a http://localhost:3000 window in your browser to see the client)
to see the loopback API manually open http://localhost:3001/explorer

```

4. Make changes to the code in visual studio code. NOTE: only make changes in client_src folder, not in the client folder. The client folder is where the build lives when we are ready for that. All the work gets done in client_src.
   Main interesting folders are:
   /client_src/src/App.js - this is the wrapper for the whole page
   /client_src/src/components/Blog.js - this is where you enter entries for the blog, also check out the other components in this folder.
   /client_src/src/sass/main.scss - this is where the styles live

5. Once you're done with your changes to the code, push them to GitHub like this:

```
(in the first terminal window, not the one you wrote 'npm run dev' in)
(from client_src) npm run build (this will compile your code and copy it to the client folder)
git add .
git commit -m "commit message"
git push (you'll be prompted to set the upstream branch, use the given suggestion)
(repeat above until happy and glowing), then:
go to https://github.com/osaisacson/extinction-rebellion and make a PR (just press the pretty obvious button called 'Compare & pull request') doublecheck that it is from your branch to the master branch

```

Done! Let someone know that you've done changes that they can merge, or do the merge yourself (see steps in the Build build buldin section below).

### Build, build, buildin.

This is for the person who will be approving that the changes you made above should indeed be merged into the main project. Best practice is that someone other than you merge it, but hey, live your dream.

1. Go to https://github.com/osaisacson/extinction-rebellion

2. Approve an existing PR (you'll see them clearly when you go to the above page, if there are any) and merge it to the master branch (press the 'merge' button...) - this will automatically build the app on Heroku (setup for this is in step 4-5 under the heroku deployment section above)

3. Give it a minute, then check out the heroku address of your app to see that it built successfully with the changes from the PR.

```

https://extinction-rebellion.herokuapp.com/

```

## Useful commands

Check your git branches, and see which one you're currently in.

```

git branch

```

Check your git settings so all looks well.

```

git config --list

```

Use the git remote command to confirm that a remote named heroku has been set for your app:

```

git remote -v

```

### Heroku deployment - When using this project as a template

ONLY if you're using this project as a template for a brand new project, otherwise this is already done (only once per project) so don't do it.

##### Install Heroku

First check if you've got Heroku installed already or not

```

heroku --version

```

Not? then:

```

brew tap heroku/brew && brew install heroku
heroku login

```

##### Create Heroku instance and setup auto deployment

1. Create Heroku instance
   From root:

```

cd .. (to move to root)
heroku create -b https://github.com/osaisacson/extinction-rebellion.git

```

2. Rename Heroku from the default to your project name

```

heroku apps:rename name-of-project

```

3. Clear buildpacks so Heroku autodetects when you push changes

```

heroku buildpacks:clear

```

...otherwise the first time you push to heroku you will get an error of 'App not compatible with buildpack'. Clearing it like this fixes that.

4. Go to https://www.heroku.com and find your project, then - Deploy/Deployment Method/Github and connect to the name of your matching github repository.

5. Go to Automatic Deploys just underneath where you just were. Keep the default master branch as the one to deploy, and then click 'Enable Automatic Deploys'.

Now every push to master will automatically deploy a new version of the app. Yay.

Note that the free version of heroku uses dynos that rest inbetween visits, so the app may take up to a minute to load when it's been sleeping. To fix this pay Heroku 7 USD/month for an upgraded, non sleeping dyno.

## Author

- **Osa Gambas Isacson**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
