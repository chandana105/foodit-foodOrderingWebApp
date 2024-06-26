# FOOD ORDERING APPLICATION / SWIGGY CLONE

# Parcel

[https://parceljs.org/]

- Dev build
- local server
- HMR - hot module replacement (in all the files)
- it does HMR by file watching algo - written in c++ (as soon as u save it ll build the build again)
- how build time is reduced, coz parcer is doing Caching things for u , it goces faster builds (.parcdel-cache)
- Image Optimizaton
- when does production build - it ll do Minification of file also
- Bundling
- Compressing
- Consisten hashing
- Code spliting for you
- Differentail bundling ( is ur app can be open older internet explore, can be open in older version fo fireforx, so its bundling doing differentail bundling for your app) - support old browsers (diff bundlers for diff browsers)
- Diagnositc
- Error handling ( givign good errors)
- Parcel also givesa way to host in HTTPS
- Tree Shaking ( suppose if 100 fxns in file, but using only 3 fxns , parcel will remove unsused code)
- Diff dev and production builds

# React hooks

(Normal JS utility functions) - fb eng's wrote this - they have written isndie the react - whicch we have installed - npm i react - we got al the utility fxns into our code
imp hooks

- useState() - is used to generate Superpowerful State/react variables in react
- useEffect()

# 2 types of routing

- Client Side Routing
- Server Sdie Routing

## Server Side Routing :-

- if you have index.html, about.html , and contact.html , and u have <about> and clcik on </about> , it reloads the whole page , it sends the network call to about.html, fetches that html and renders into our webpage, thats how our website used to work. (if we have .html page , makes the network call , get the data from network about.html and renders it on UI and refreshes the whole page )

## Client Side Routing :-

- Now here currently in our app its client side routing , we are not making any network calls while movign to another page coz all the comp's are already loaded into our app, when i load the app for the first time , it has already code for aboutus page etc, when i go to about us page , it just loads that component, the only network call made when i made durign api, i am not fetching a page, thats the definition for SPA also, its just one page ,just the comp's getting interchanged via client side routing

# TailwindCSS (https://tailwindcss.com/)

## Pros :-

- Dont have to move between files for writing css
- it comes with just initial learning curve, and then after that it makes easy
- its very lightweight (suppose in my code , i am using these 5-6 classes m-4, p-4 flex itmes-center , so when parcel ll make the bundle of css, it ll only include the css, ie required on our webpage, suppose if u have use m-4 two times in your app, it ll include one time)
- u can build whatewver u want to (anythign complex) (https://tailwindcss.com/)
- can write media queries as well, responsivenss
- dark mode also
- READ THE DOCS
- main pros is i can write the css on the go/fly

## Cons :-

- it comes with just initial learning curve
- suppose to write classes for card a lot of classes , shadow, hover etc, then have to write lot of classes ,which makes it ugly (similarly to bootstrpa, it also gives prebuild comp's (https://tailwindui.com/?ref=top)) code becomes less readable, apart from that tailwind is superb

# Redux Toolkit

- install @reduxjs/toolkit and react-redux
- build our store
- Connect our store to the application
- create the slice (cartSlice)
- Dispatch an action and call reducer function , dispatch(action) when clicked on add btn
- Selector





### Screenshots of app

![Alt text](./assets/images/ss1.png)
![Alt text](./assets/images/ss2.png)
![Alt text](./assets/images/ss3.png)
![Alt text](./assets/images/ss4.png)
![Alt text](./assets/images/ss5.png)
![Alt text](./assets/images/ss6.png)
![Alt text](./assets/images/ss7.png)
![Alt text](./assets/images/ss8.png)

## todo

- TODO: update final screenshots
- TODO: add to netlify
- TODO: update readme

### home page changes

- header design changes (DONE)
- search bar , top filter design and functionality change (DONE)
- cards componenet centered (DONE)
- cards similar to swiggy (DONE)
- header always fixed to top (DONE)
- shimmer design changes (DONE)
- footer design changes (DONE)
  - TODO: handling both filters together functionality , if one filter is on , other should automaitcally gets off or not , to see fro m website

### restaurant details page changes

- details header design (DONE)
- categroy design similar to mob app (DONE)
- all categroeis to be by default open (DONE)
- react-infinite-scroll-component (DONE)

### cart page functionality (similar to mobile app )

- cart page design modify (DONE)
- redux state modify for cart (DONE)
- on press of add button changed to quantity (DONE)
- quantity buttons in Cart page (DONE)
- replace cart items modal (DONE)
- cart dele modal (DONE)
- REFACTORING BY MAKING USEHOOKS (DONE)
- removign unwanted code and code files (DONE)

### mobile view design (DONE)

