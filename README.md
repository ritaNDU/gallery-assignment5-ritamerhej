# Nostalgia

## Description

Nostalgia is an app that helps you organise your photos based on location.
You can either pick images from your library or take pictures directly from the app.
In the Gallery, you can see all your sorted images. As you load more photos, pull to refresh and have your photos always correctly sorted.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/gallery-assignment5-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn start` or `npm run start`

## How I got organized

I started by drawing the structure of my app on pen and paper, and by setting the dev. environment, then I started implementing features one at a time. Finally, I added the styles, animations and gestures. At the end, I wrote some tests.

## Challenges Found

1. **Some Problems with libraries**
   I followed instructions that I shouldn't have followed for a library and got plenty of errors. At the end, with the help of a team mate on the whatsapp group I was able to solve the issue.
2. **Testing**
   I don't know how to mock libraries and have no time to learn. So I skipped all the components where libraries are used. For the other tests, I also faced some problems, but after some googling and some help from chatgpt, I got something up and running.

## Folder Structure

The code is all located in the src/ folder.

### The src/ folder:

It is divided into:

### The assets/ folder:

It's where all icons and illustrations in general are stored.

### The components/ folder:

It is divided into:

1. **atoms/** which is where the smallest pieces of components like buttons are implemented.
2. **molecules/** which is where the atoms are used to create the structures that need to be used in the interface, like card components for example that specify how a single card should be rendered.
3. **organisms/** is where molecules are used to create features for the app. For example, there's the Image List component.

### The hooks/ folder:

This is where all custom hooks are stored.

### The screens/ folder:

This is where all screens are stored.

### The store/ folder:

This is where the reducer and the context provider is implemented.

### The styles/ folder:

This is where the theme is stored.

### The data/ folder:

It contains data, and interfaces to structure data objects.

### The navigation/ folder:

This is where navigation is implemented. react-navigation is being used for navigation.

### The utils/ folder:

This is where some utility functions are implemented.

### The service/ folder:

All api functions are implemented here.
