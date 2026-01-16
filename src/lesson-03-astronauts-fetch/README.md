# Review Example 2 (with Vite)

In this example we're going to see past and present astronauts.

# Steps
1. Initialize npm so that you can start your project
    ```sh
    > npm init -y
    ```
2. Install vite and bootstrap
    ```sh
    > npm i -D vite
    > npm i bootstrap
    ```

3. Update the scripts in the package.json so we can run the dev server
    ```json
    "scripts": {
      "dev": "vite"
    },
    ```
4. View and Explore the API https://ll.thespacedevs.com/2.3.0/swagger
    - We're going to take a look at the "astronaut" endpoint which gives us a list of astronauts.
    - We're going ot use the endpoint https://lldev.thespacedevs.com/2.3.0/astronauts/ without any of the filtering that is included (although if you want to you can!)

5. In the `api/astronaut.js` file create a function named "getAstronautList" and export it.
6. The  "getAstronautList" function must return the fetch that will make a get request to https://lldev.thespacedevs.com/2.3.0/astronauts/
7. Import the "getAstronautList" in the main.js and execute it so that you can see the output in the console.
    - We'll be using this information to render the astronauts, so it's good to take a look and understand it.
8. In the `dom/astronaut.js` create "renderAstronautListItem" function with two parameters: "astronautData" (the object from the API for each astronaut) and "listElement" (the dom element we'll append to).
    - export this function
    - use a template string to render the data
    - append to the innerHTML
9. Import the "renderAstronautListItem" in the main.js file.
10. Select the element with the class "astronaut-list" and with the results from "getAstronautList", call the "renderAstronautListItem" with the item that is being iterated over and the "astronaut-list" element.


