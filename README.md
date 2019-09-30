# Extinction Rebellion - Demands

Uses React.js and Node.js, sets up a simple API and deploys with Heroku.
Based on this example: https://www.youtube.com/watch?v=eHWK4Pu6dmE

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. These instructions also lets you quickly deploy the project through Heroku.

### Prerequisites

You'll need Git, Heroku and Node.js to get crackin.

Git - for version control

```
git --version
```

...if you don’t have git installed already, this will prompt you to install it.

Node.js

```
install heroku from ‘masOS installer’ here: (https://nodejs.org/en/download/)
```

Heroku - for easy deployment

```
install heroku from ‘download the installer’ here: (https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
npm i -g heroku
heroku login
```

Check all our prerequisites are good and well:

```
git --version
node --version
npm --version
heroku --version
```

### Installing

1. Clone the git repository you just created by using this template to your local machine.
   From the parent folder where you want the project to live:

```
git clone https://github.com/osaisacson/name-of-project.git
```

...this will create an 'name-of-project' folder with latest code.

2. Initialize git

```
cd name-of-project
git init
```

Be sure to initialize the Git repository in your app’s root directory. If your app is in a subdirectory of your repository, it won’t run when it is pushed to Heroku.
Your app’s code is now tracked in a local git repository. It has not yet been pushed to any remote servers.

3. Install npm's.

```
npm install (from root)
npm install (from client)
```

4. Create Heroku instance
   From root:

```
cd .. (to move to root)
heroku create -b https://github.com/osaisacson/name-of-project.git
```

5. Rename Heroku from the default to your project name

```
heroku apps:rename name-of-project
```

6. Clear buildpacks so Heroku autodetects when you push changes

```
heroku buildpacks:clear
```

...otherwise the first time you push to heroku you will get an error of 'App not compatible with buildpack'. Clearing it like this fixes that.

7. Save and push changes
   Make changes, then:

```
git add .
git commit -m "commit message"
git push (this pushes to the repo on git: https://github.com/osaisacson/name-of-project)
git push heroku master (this deploys to https://name-of-project.herokuapp.com/)
```

8. Start local
   Open a separate window in your terminal, then from root:

```
npm run dev
```

...see the changes continously update on localhost:3000

9. Open your app with Heroku

```
heroku open
```

...the browser address (https://name-of-project.herokuapp.com/) is the live and shareable version of the app.

## Continous work post setup

...step 7-9 above.

## Useful commands

Check your git settings so all looks well.

```
git config --list
```

You can use the git remote command to confirm that a remote named heroku has been set for your app:

```
git remote -v
```

## Author

- **Osa Gambas Isacson**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
